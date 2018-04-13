console.log('facebookScripts...!');

var request = require('request').defaults({ encoding: null });
const fs = require('fs');
const { log, debug } = require('../log');
var helpers = require('../helpers')

//require selenium-webdriver
var webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
//require fb
var FB = require('fb');
// var options = FB.options();
// var timeout = FB.options('timeout');
var fb = new FB.Facebook();
//

const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
require('chromedriver');

//options
var options = new chrome.Options();
options.addArguments('headless'); // note: without dashes
options.addArguments('disable-gpu');
options.addArguments('no-sandbox');
options.addArguments('disable-setuid-sandbox');
options.addArguments('allow-insecure-localhost');


var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);


//parameter
var page_id = '1403736396384206';
var facebookUrl = "https://www.facebook.com/";
var googleUrl = 'https://www.google.com';
var explorerUrl = "https://developers.facebook.com/tools/explorer/";

var email = 'babychina.yrx@gmail.com';
var password = 'O@nhon1cailon';
//
var byEmail = By.id("email");
var byPassword = By.id("pass");
var byCbToken = By.xpath("//div[contains(@class, '_1c2l uiPopover _6a _6b')]");

var access_token;
function getAccessToken() {
    log('getAccessToken')
    return new Promise(function (resolve, reject) {
        var driver = new webdriver.Builder().forBrowser('chrome')
            .withCapabilities(webdriver.Capabilities.chrome())
            .setChromeOptions(options)// note this
            .setFirefoxOptions(new firefox.Options().headless())
            .build();
        driver.get(facebookUrl).then(function () {
            var elementEmail = driver.findElement(byEmail);
            elementEmail.clear();
            elementEmail.sendKeys(email).then(function () {
                var elementPassword = driver.findElement(byPassword);
                elementPassword.clear();
                elementPassword.sendKeys(password).then(function () {
                    elementPassword.sendKeys(Key.ENTER).then(function () {
                        driver.get(explorerUrl).then(function () {
                            driver.findElement(byCbToken).click().then(function () {
                                driver.findElement(By.xpath("//span[text() = 'Sống có gì vui?']")).click().then(function () {
                                    var byAccessToken = By.xpath("//input[contains(@class, '_58al') and contains(@placeholder, 'Paste in an existing Access Token or click \"Get User Access Token\"')]");
                                    driver.findElement(byAccessToken).getAttribute("value").then(function (accessToken) {
                                        if (accessToken) {
                                            access_token = accessToken;
                                            driver.quit();
                                            resolve(accessToken);
                                        } else {
                                            reject('Ăn lồn con đĩ!');
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

function facebookUploads(access_token, downloads) {
    return new Promise(function (resolve, reject) {
        log('facebookUploads')
        downloads.forEach(function (download) {
            request.get(download.srcUrl, function (err, res, photoBuffer) {
                download.photoBuffer = photoBuffer;
                console.log('download', download);
                facebookUpload(access_token, download)
            });

        });
    })
}
function facebookUpload(access_token, download) {
    return new Promise(function (resolve, reject) {
        log('facebookUpload')
        var sourceUrl = download.srcUrl;
        var albumId = download.albumId;
        if (sourceUrl) {
            var filename = sourceUrl.split('/').slice(-1).pop(); log(['filename', filename]);
            FB.setAccessToken(access_token);            
            var uploadUrl = 'me/photos';
            if (albumId) {
                uploadUrl = '/' + albumId + '/photos';
            }          
            FB.api(uploadUrl, 'post', {
                source: {
                    value: download.photoBuffer,
                    options: {
                        filename: filename,
                        contentType: 'image/jpg'
                    }
                },
                caption: download.caption
            }, function (res) {
                if (!res || res.error) {
                    log(!res ? 'error occurred' : res.error, 'r');
                    return;
                }
                var postId = res.post_id;
                log(['Post Id: ', postId], 'y');
                if (postId)
                    resolve(postId);
                else
                    reject('Ăn lồn con đĩ');
            });
        }
    })
}
function facebookStart(downloads) {
    return new Promise(function (resolve, reject) {
        log('facebookStart')
        log(['downloads', downloads]);
        log(['checkAccessToken', access_token], 'y');
        checkAccessToken(access_token).then((isValid) => {
            console.log('Check isvalid access_token');
            log(['isValid', isValid], 'r')
            if (isValid) {
                log(['access_token is valid'])
                facebookUploads(access_token, downloads).then((postId => {
                    if (postId)
                        resolve(postId);
                    else
                        reject('Ăn lồn con đĩ');
                }));
            }
            else {
                log('if else');
                getAccessToken().then(function (accessToken) {
                    access_token = accessToken;
                    log(access_token);
                    facebookUploads(access_token, downloads).then((postId => {
                        if (postId)
                            resolve(postId);
                        else
                            reject('Ăn lồn con đĩ');
                    }));
                });
            }
        });

    })


}
module.exports.facebookStart = facebookStart;

function checkAccessToken(access_token) {
    log('checkAccessToken')
    return new Promise(function (resolve, reject) {
        var validUrl = 'https://graph.facebook.com/me?access_token=' + access_token;
        request({
            url: validUrl,
            json: true
        }, function (error, response, body) {
            log(['response', response]);
            log(['response.statusCode', response.statusCode]);
            if (!error && response.statusCode === 200) {
                log(true);
                log(['body', body]);
                resolve(true);
            }
            if (response.statusCode === 400) {
                log(false);
                log(['body', JSON.stringify(body)]);
                resolve(false);
            }
        });
    })
}

function facebookTest() {
    log('facebookMain')
    getAccessToken().then(function (access_token) {
        console.log(access_token);
        FB.setAccessToken(access_token);
        FB.api('/me/albums', function (res) {
            console.log(JSON.stringify(res));
            if (!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                return;
            }
            console.log(res.name);
        });
    });
}
//facebookTest();


console.log('facebookScripts...!');

var request = require('request').defaults({ encoding: null });
const fs = require('fs');
const { log } = require('../javascripts//log');

//require selenium-webdriver
var webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
//require fb
var FB = require('fb');
var options = FB.options();
var timeout = FB.options('timeout');
var fb = new FB.Facebook(options);
//

const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
require('chromedriver');

//options
options = new chrome.Options();
options.addArguments('headless'); // note: without dashes
options.addArguments('disable-gpu')
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
                                            access_token=accessToken;
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

function facebookPost(access_token, sourcePath, sourceUrl, caption) {
    log('facebookPost')
    FB.setAccessToken(access_token);  
    //return new Promise(function (resolve, reject) {        
        if (sourceUrl) { 
            log('sourceUrl')
                  
            request.get(sourceUrl, function (err, res, photoBuffer) {
                //var filename = sourceUrl.split('/').slice(-1).pop();log(['filename', filename]);
               
                FB.api('me/photos', 'post', {
                    source: {
                        value: photoBuffer,
                        options: {
                            filename: sourceUrl.split('/').slice(-1).pop(),
                            contentType: 'image/jpg'
                        }
                    },
                    caption: caption
                }, function (res) {
                    if (!res || res.error) {
                        log(!res ? 'error occurred' : res.error, 'r');
                        return;
                    }
                    log(['Post Id: ', res.post_id], 'y');
                    //resolve(res.post_id);
                });
            });
        }
        //////////////////////////////////////////////////////////////////////    
        if (sourcePath) {
            log('sourcePath')
            FB.api('me/photos', 'post', { source: fs.createReadStream(sourcePath), caption: caption }, function (res) {
                if (!res || res.error) {
                    log(!res ? 'error occurred' : res.error);
                    return;
                }
                log(['Post Id: ', res.post_id],'y');
            });
        }
    //});
}

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
                if (body.error.message.indexOf('Error validating access token') > -1) {
                    log('Error validating access token', 'r');
                    resolve(false);
                } else {
                    log(['body', JSON.stringify(body)]);
                }
            }
        });
    })
}

function facebookMain(arrayUrl) {
    log('facebookMain')
    arrayUrl.forEach(function (sourceUrl) {
        //var sourceUrl = 'https://instagram.fsgn2-1.fna.fbcdn.net/vp/ecc06bea0c32017a778c5ee3c2317461/5B51CC62/t51.2885-15/e35/29401233_879225955590463_1570266066624446464_n.jpg';
        log(['sourceUrl', sourceUrl]);
        //access_token = '';
        //access_token = 'EAACEdEose0cBAOwtUIMAyqmA5yXdOjt4E9Dn8kJFb2ypNN6feiPTXKMNXjqdxslutqzlegvDifapsNGONDPT0gTIXZAiFpkbZB6iJbC56pDhMZBJv4DxxZCxqyNSmZCrue8Q66DuWjQI1FPeTw2oARhQAgaLwDOgZBgPDTuzioCVHsqZC6wROklspDq0UUAMW5aRCsqToWe5gZDZD';
        var sourcePath = '';
        var caption = '...';
        log(access_token)
        if (access_token) {
            log('if');
            checkAccessToken(access_token).then((isValid) => {
                console.log('Will print after about 1 second');
                if (isValid) {
                    log(['access_token is valid'])
                    facebookPost(access_token, sourcePath, sourceUrl, caption);
                }
                else {
                    log('if else');
                    getAccessToken().then(function (accessToken) {
                        access_token = accessToken;
                        log(access_token);
                        facebookPost(access_token, sourcePath, sourceUrl, caption);
                    });
                }
            }
            );

            // checkAccessToken(access_token).then(function (isValid) {

            // })
        } else {
            log('else');
            getAccessToken().then(function (access_token) {
                log(access_token);
                facebookPost(access_token, sourcePath, sourceUrl, caption);
            });
        }
    });
}

//facebookMain(arrayUrl);
module.exports.facebookMain = facebookMain;
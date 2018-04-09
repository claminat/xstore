console.log('facebookScripts...!');

var request = require('request').defaults({ encoding: null });
const fs = require('fs');
const { log } = require('../javascripts/log');

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

function facebookPost(access_token, sourcePath, sourceUrl, caption) {
    return new Promise(function (resolve, reject) {
        log('facebookPost')
        FB.setAccessToken(access_token);
        if (sourceUrl) {
            request.get(sourceUrl, function (err, res, photoBuffer) {
                var filename = sourceUrl.split('/').slice(-1).pop(); log(['filename', filename]);
                FB.api('me/photos', 'post', {
                    source: {
                        value: photoBuffer,
                        options: {
                            filename: filename,
                            contentType: 'image/jpg'
                        }
                    },
                    caption: caption
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
        if (sourceUrl) {
            var filename = sourceUrl.split('/').slice(-1).pop(); log(['filename', filename]);
            FB.setAccessToken(access_token);
            FB.api('me/photos', 'post', {
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

function facebookBatch() {
    getAccessToken().then(function (accessToken) {
        access_token = accessToken;
        FB.setAccessToken(access_token);
        var extractEtag;
        FB.api('', 'post', {
            batch: [
                { method: 'get', relative_url: '4' },
                { method: 'get', relative_url: 'me/friends?limit=50' },
                { method: 'get', relative_url: '4', headers: { 'If-None-Match': '"7de572574f2a822b65ecd9eb8acef8f476e983e1"' } }, /* etags */
                { method: 'get', relative_url: 'me/friends?limit=1', name: 'one-friend' /* , omit_response_on_success: false */ },
                { method: 'get', relative_url: '{result=one-friend:$.data.0.id}/feed?limit=5' }
            ]
        }, function (res) {
            var res0, res1, res2, res3, res4,
                etag1;

            if (!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                return;
            }

            res0 = JSON.parse(res[0].body);
            res1 = JSON.parse(res[1].body);
            res2 = res[2].code === 304 ? undefined : JSON.parse(res[2].body);   // special case for not-modified responses 
            // set res2 as undefined if response wasn't modified. 
            res3 = res[3] === null ? null : JSON.parse(res[3].body);
            res4 = res3 === null ? JSON.parse(res[4].body) : undefined; // set result as undefined if previous dependency failed 

            if (res0.error) {
                console.log(res0.error);
            } else {
                console.log('Hi ' + res0.name);
                etag1 = extractETag(res[0]); // use this etag when making the second request. 
                console.log(etag1);
            }

            if (res1.error) {
                console.log(res1.error);
            } else {
                console.log(res1);
            }

            // check if there are any new updates 
            if (typeof res2 !== "undefined") {
                // make sure there was no error 
                if (res2.error) {
                    console.log(error);
                } else {
                    console.log('new update available');
                    console.log(res2);
                }
            }
            else {
                console.log('no updates');
            }

            // check if dependency executed successfully 
            if (res[3] === null) {
                // then check if the result it self doesn't have any errors. 
                if (res4.error) {
                    console.log(res4.error);
                } else {
                    console.log(res4);
                }
            } else {
                console.log(res3.error);
            }
        });

        extractETag = function (res) {
            var etag, header, headerIndex;
            for (headerIndex in res.headers) {
                header = res.headers[headerIndex];
                if (header.name === 'ETag') {
                    etag = header.value;
                }
            }
            return etag;
        };
    });
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


function facebookMain(facebookObject) {
    return new Promise(function (resolve, reject) {
        log('facebookMain')
        //var sourceUrl = 'https://instagram.fsgn2-1.fna.fbcdn.net/vp/ecc06bea0c32017a778c5ee3c2317461/5B51CC62/t51.2885-15/e35/29401233_879225955590463_1570266066624446464_n.jpg';
        log(['facebookObject', facebookObject]);
        log(['sourceUrl', facebookObject.srcUrl]);
        log(['caption', facebookObject.caption]);
        //access_token = '';
        //access_token = 'EAACEdEose0cBAOwtUIMAyqmA5yXdOjt4E9Dn8kJFb2ypNN6feiPTXKMNXjqdxslutqzlegvDifapsNGONDPT0gTIXZAiFpkbZB6iJbC56pDhMZBJv4DxxZCxqyNSmZCrue8Q66DuWjQI1FPeTw2oARhQAgaLwDOgZBgPDTuzioCVHsqZC6wROklspDq0UUAMW5aRCsqToWe5gZDZD';
        var sourcePath = '';
        var sourceUrl = facebookObject.srcUrl; log(['sourceUrl', sourceUrl]);
        var caption = facebookObject.caption; log(['caption', caption]);

        log('access_token', access_token)
        if (access_token) {
            log('if');
            checkAccessToken(access_token).then((isValid) => {
                console.log('Check isvalid access_token');
                if (isValid) {
                    log(['access_token is valid'])
                    facebookPost(access_token, sourcePath, sourceUrl, caption).then((postId => {
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
                        facebookPost(access_token, sourcePath, sourceUrl, caption).then((postId => {
                            if (postId)
                                resolve(postId);
                            else
                                reject('Ăn lồn con đĩ');
                        }));
                    });
                }
            });
        } else {
            log('else');
            getAccessToken().then(function (access_token) {
                facebookPost(access_token, sourcePath, sourceUrl, caption).then((postId => {
                    if (postId)
                        resolve(postId);
                    else
                        reject('Ăn lồn con đĩ');
                }));
            });
        }
    })


}

module.exports.facebookMain = facebookMain;
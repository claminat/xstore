'use strict'
//https://testingbot.com/support/getting-started/nodejs.html
//https://stackoverflow.com/questions/44197253/headless-automation-with-nodejs-selenium-webdriver?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
//http://toolsqa.com/selenium-webdriver/findelement-and-findelements-command/
//https://github.com/node-facebook/facebook-node-sdk#upload

//https://medium.com/dev-bits/writing-neat-asynchronous-node-js-code-with-promises-32ed3a4fd098
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
console.log('Selenium Script...!');
//require selenium-webdriver
var webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
//require fb
var FB = require('fb');
var options = FB.options();
var timeout = FB.options('timeout');
var fb = new FB.Facebook(options);

var request = require("request");
var Promise = require('promise');

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
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    //.setChromeOptions(options)// note this
    .setFirefoxOptions(new firefox.Options().headless())
    .build()
    ;

function test() {
    driver.get('https://www.google.com').then(function () {

        driver.getPageSource().then(function (pageSource) {
            console.log("PageSource is: ", pageSource);
        })

        driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack\n')
        driver.getTitle().then(function (title) {
            console.log("title is: " + title);
        });
        driver.quit();
    });
}
//test();


var facebookUrl = "https://www.facebook.com/";
var googleUrl = 'https://www.google.com';
var explorerUrl = "https://developers.facebook.com/tools/explorer/";

var email = 'babychina.yrx@gmail.com';
var password = 'O@nhon1cailon';
//
var byEmail = By.id("email");
var byPassword = By.id("pass");
var byCbToken = By.xpath("//div[contains(@class, '_1c2l uiPopover _6a _6b')]");


//getAccessToken();

function getAccessToken(){



//var getAccessToken =
return new Promise(function (resolve, reject) {
    logger.log('getAccessToken');
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
                                        //driver.quit();
                                        resolve(accessToken);
                                    } else {
                                        reject('Cái lồn con đĩ!');
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



function facebookPost(access_token) {
    var s3Url = 'https://instagram.fsgn2-1.fna.fbcdn.net/vp/ecc06bea0c32017a778c5ee3c2317461/5B51CC62/t51.2885-15/e35/29401233_879225955590463_1570266066624446464_n.jpg';
    var caption = 'PLAYBOY THAILAND';
    var page_id = '1403736396384206';
    var request = require('request').defaults({ encoding: null });
    request.get(s3Url, function (err, res, photoBuffer) {
        //log('photoBuffer: ' + photoBuffer);
        FB.setAccessToken(access_token);
        FB.api('me/photos', 'post', {
            source: {
                value: photoBuffer,
                options: {
                    filename: '29401233_879225955590463_1570266066624446464_n.jpg',
                    contentType: 'image/jpg'
                }
            },
            caption: caption
        }, function (res) {
            if (!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                return;
            }
            log('Post Id: ' + res.post_id);
        });
    });
}


function FacebookScript() {
    var access_token = 'EAACEdEose0cBALvA1ENX1Ter8MZBjZCTatnCOZAGyFZBK3zi3uOtUjwOfrzOuopDnmCZBdpj9hZBIJ1rXP7062IhdIlefdvhlZB9jtulKw35T8ZBKhbXpymFzNOBl8b9DKDpo4AuIqDURnHXihGCsZA7CE1qaZBfZAfxyjP4XTdanM3UQFsREWW0rDTbRN6FeyIkMNeZC3ZAPk9PHOQZDZD';
    if (access_token) {
        log(['access_token'])
        //facebookPost(access_token);
    } else {
        log(['access_token else'])
        getAccessToken.then(function (access_token) {
            log([access_token]);
            facebookPost(access_token);
        });
    }
}

FacebookScript();


function WaitUntilElementIsPresent(driver, by) {
    // var by = By.xpath("//span[text() = 'Sống có gì vui?']");
    driver.findElement(by).isDisplayed()
        .then(function (displayed) {
            console.log("displayed is: ", displayed);
            return displayed;
        });
}

//const { driver } = require('./driverSelenium');
// const caps = require('selenium-webdriver/lib/capabilities');
// const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');


function test() {
    let chrome = require('selenium-webdriver/chrome');

    let service = new chrome.ServiceBuilder()
        .loggingTo('/my/log/file.txt')
        .enableVerboseLogging()
        .build();

    let options = new chrome.Options();
    // configure browser options ...

    let driver = chrome.Driver.createSession(options, service);
    driver.get('https://www.google.com').then(function () {

        // driver.getPageSource().then(function (pageSource) {
        //     console.log("PageSource is: ", pageSource);
        // })

        // driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack\n')
        // driver.getTitle().then(function (title) {
        //     console.log("title is: " + title);
        // });
        // driver.quit();
    });
}
test();

const caps = require('selenium-webdriver/lib/capabilities');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

module.exports = function (cfg) {
    let serviceBuilder = new chrome.ServiceBuilder(chromedriver.path);
    let options = chrome.Options.fromCapabilities(caps.Capabilities.chrome());
    let service;
    let myENV = new Map();

    // 're-export' the `DISPLAY` variable
    myENV.set('DISPLAY', ':1');
    serviceBuilder.setEnvironment(myENV);

    service = serviceBuilder.build();

    options.addArguments('disable-setuid-sandbox');
    options.addArguments('no-sandbox');
    options.addArguments('allow-insecure-localhost');
    options.excludeSwitches('test-type');
    var driver = chrome.Driver.createSession(options, service);
    return driver;
};
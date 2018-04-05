'use strict'
function log(messages, color) {
        var number = 32;
    if (color) {
        if (color == 'c')
            number = 36;
        if (color == 'r')
            number = 31;
        if (color == 'y')
            number = 33;
        if (color == 'b')
            number = 34;
    }
    console.log('\x1b[' + number + 'm', "\x1b[4m", '[', new Date().toLocaleString("en-US"), '] ', Array.isArray(messages) ? messages.join(' ') : messages, '\x1b[0m');

}
module.exports.log = log;


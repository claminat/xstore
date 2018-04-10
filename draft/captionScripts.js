//https://github.com/dylang/captionbot
var imageUrl = "http://oi47.tinypic.com/2vltytk.jpg";
var request = require('request');
var fs = require('fs')
  , gm = require('gm');
function test() {
  
   gm(request(imageUrl))
    .write('/', function (err) {
      if (!err)
        console.log('done');
      else
        console.log(err)
    });
}
test()  
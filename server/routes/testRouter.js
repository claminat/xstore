var express = require('express');
var router = express.Router();
var request = require("request")
var User = require('../../models/User');
var Photo = require('../../models/Photo');

router.get('/data', function (req, res) {
    var url = "https://jsonplaceholder.typicode.com/users";
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            // body.forEach(element => {
            //     var obj = new User(element);
            //     obj.save().then(item => {
            //         console.log("Item added successfully");
            //     }).catch(err => {
            //         console.log("Unable to save to database", err);
            //     });
            //     console.log('element', element);
            //     console.log('-----------------------------------------');
            // });
            console.log(body);
            res.json(body);
        }
    });
});

router.get('/import', function (req, res) {
    var url = "https://jsonplaceholder.typicode.com/photos";
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            // body.forEach(element => {
            //     var obj = new Photo(element);
            //     obj.save().then(item => {
            //         console.log("Successfully");
            //     }).catch(err => {
            //         console.log("Unable to save to database", err);
            //     });               
            // });
            console.log(body);
            res.json(body);
        }
    });
});


module.exports = router;
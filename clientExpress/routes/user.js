var express = require('express');
var router = express.Router();
var request = require("request")

router.get('/', function (req, res, next) {
    res.render('user', { title: 'User Express' });
});

router.get('/o', function (req, res) {
    var url = "https://jsonplaceholder.typicode.com/users";
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body) // Print the json response
            res.json(body);
        }
    });   
});

/* GET user listing. */
router.get('/userlist', function (req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({}, {}, function (e, docs) {
        res.json(docs);
    });
});

/*
  POST to adduser.
 */
router.post('/adduser', function (req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function (err, result) {
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
  DELETE to deleteuser.
 */
router.delete('/deleteuser/:id', function (req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var userToDelete = req.params.id;
    collection.remove({ '_id': userToDelete }, function (err) {
        res.send((err === null) ? { msg: '' } : { msg: 'error: ' + err });
    });
});


module.exports = router;

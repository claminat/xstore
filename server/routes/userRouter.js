var express = require('express');
var router = express.Router();
var request = require("request")
var Model = require('../../models/User');


// Defined store route
router.route('/create/post').post(function (req, res) {
    var item = new Model(req.body);
    item.save().then(item => {
        res.status(200).json({
            Item: 'Item added successfully'
        });
    }).catch(err => {
        res.status(400).send("unable to save to database");
    });
});


// Defined get data(index or listing) route
router.route('/').get(function (req, res) {
    Model.find(function (err, items) {
        if (err) {
            console.log(err);
        } else {
            res.json(items);
        }
    });
});

// Defined edit route
router.route('/update/:id').get(function (req, res) {
    var id = req.params.id;
    console.log('req',req)
    console.log('req.params',req.params)
    console.log('id',id)
    Model.findById(id, function (err, item) {
        res.json(item);
    });
});


//  Defined update route
router.route('/update/:id').post(function (req, res) {
    Model.findById(req.params.id, function (err, item) {
        if (!item)
            return next(new Error('Could not load Document'));
        else {
            // do your updates here
            item.item = req.body.item;

            item.save().then(item => {
                    res.json('Update complete');
                })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
router.route('/delete/:id').get(function (req, res) {
    Model.findByIdAndRemove({
            _id: req.params.id
        },
        function (err, item) {
            if (err) res.json(err);
            else res.json('Successfully removed');
        });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var request = require("request")
var Model = require('../../models/Photo');//


router.route('/create').post(function (req, res) {
    console.log('req.body',req.body)
    var model = new Model(req.body.item);
    model.save().then(item => {
        res.status(200).json({
            Model: 'Item added successfully'
        });
    }).catch(err => {
        res.status(400).send("unable to save to database");
    });
});


router.route('/').get(function (req, res) {
    Model.find(function (err, items) {
        if (err) {
            console.log(err);
        } else {
            res.json(items);
        }
    });
});

router.route('/get/:id').get(function (req, res) {
    var id = req.params.id;
    console.log('id',id)
    Model.findById(id, function (err, item) {
        console.log('item',item)

        res.json(item);
    });
});

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
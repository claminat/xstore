var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('fake', { title: 'Fake Express' });
  });

module.exports = router;

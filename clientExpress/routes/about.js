var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('about', { title: 'About Express' });
  });


router.get('/Qing', function(req, res, next) {
    res.render('about', { title: 'About Xiao Qing' });
  });

module.exports = router;

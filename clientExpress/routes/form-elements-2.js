var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('form-elements-2', { title: 'form-elements-2' });
});
module.exports = router;

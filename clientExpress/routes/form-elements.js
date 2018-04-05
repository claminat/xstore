var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //view ejs
  res.render('form-elements', { title: 'form-elements' });
});
module.exports = router;

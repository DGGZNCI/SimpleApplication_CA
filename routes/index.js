var express = require('express');
var router = express.Router();
var utils = require('../modules/utils')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Simple Application", helloMsg:undefined });
});

/* GET home page. */
router.get('/hello', function(req, res, next) {
  var {username} = req.query
  var helloMsg = utils.helloUser(username)
  res.render('index', { title: 'Simple Application' , helloMsg:helloMsg });

});


module.exports = router;

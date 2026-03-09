var express = require('express');
var router = express.Router();
var utils = require('../modules/utils')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Simple Application", userdata:undefined });
});

/* GET data from user page. */
router.get('/hello', function(req, res) {
  var {username, age, email} = req.query
  var data = utils.getUserData(username, age, email);
  console.log(data);
  res.render('index', { title: 'Simple Application' , userdata:data });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About page' });
});

/* GET contact page. */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact page' });
});

module.exports = router;

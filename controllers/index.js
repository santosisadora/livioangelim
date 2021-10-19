var express = require('express');
var router = express.Router();

/* GET home page. */
//This method calls the index view ---> index.hbs under folder "views"
//We can create variables and assign values, that we can later on call in the views. For ex: title
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Livio' });
});

//about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', content:'About me' });
});

//work page
router.get('/work', function(req, res, next) {
  res.render('work', { title: 'Work', content:'Check out my work' });
});

//contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact',content:'Contact me' });
});
module.exports = router;

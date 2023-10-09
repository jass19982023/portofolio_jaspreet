var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('Home', { title: 'Home' });
});

/* GET About Us page. */
router.get('/aboutme', function(req, res, next) {
    res.render('aboutme', { title: 'About' });
});



/* GET Services page. */
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services' });
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'projects' });
});
module.exports = router;
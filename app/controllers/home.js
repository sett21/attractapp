var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('index', {
  	title: 'hello'
  })
});

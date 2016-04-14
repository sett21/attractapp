var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

router.use(function(req, res, next) {
    next();
});

module.exports = function (app, prefix) {
	router.get('/', function (req, res, next) {
		res.render('index', {title : "Admin panel there"});
	});
	app.use(prefix, router);
};

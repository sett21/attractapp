var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function (app, prefix) {
	router.route('/')
		.get(function (req, res, next) {
			res.send({message : "Welcome to our API"});
		});

	app.use("/v1/api/", router);
};

var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function (app, prefix) {
    router.route('/user')
		.get(function (req, res, next) {
			User.find({}, function (err, users){
				if (err) res.send(err);
		        res.json(users);
			})
		})
		.post(function (req, res) {
	        var user = new User(req.body);
	        user.save(function(err) {
	            if (err) res.send(err);
	            res.json({ message: 'User created!' });
	        });
	    });

	router.route('/user/:id')
		.get(function (req, res){
			var id = req.params.id;
			User.findById(id, function (err, user){
				if (err) res.send(err);
				res.json(user);
			});
		})
		.put(function (req, res){
			var id = req.params.id;
			User.update({ _id: id }, req.body, function (err, raw) {
				if (err) res.send(err);
				res.send({message : raw});
			});
		})
		.delete(function (req, res) {
			var id = req.params.id;
	        User.remove({_id: id}, function (err) {
	            if (err) res.send(err);
	            res.send({ message: id + ' successfully deleted' });
	        });
		});
    
    app.use("/v1/api/", router);
};




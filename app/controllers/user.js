var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function (app) {
  app.use('/v1/api', router);
};

router.route('/user')
	.get(function (req, res, next) {
		User.find({}, function (err, users){
			if (err) res.send(err);
	        res.json(users);
		})
	})
	.post(function (req, res) {
        var user = new User();
        user.name = req.body.name;
        user.gender = req.body.gender;
        user.about = req.body.about;
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
		User.findById(id, function(err, user) {
			if (err) res.send(err);
			
			if (req.body.name) user.name = req.body.name;
			if (req.body.gender) user.gender = req.body.gender;
			if (req.body.about) user.about = req.body.about;
			user._updated = new Date();
			user.save(function(err) {
				if (err) res.send(err);
				res.json({ message: 'User updated!'});
			});
		});
	})
	.delete(function (req, res) {
        User.remove({
            _id: req.params.id
        }, function (err, user) {
            if (err) res.send(err);
            res.json({ message: 'Successfully deleted' });
        });
	});


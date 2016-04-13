// User model

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		enum: ["m", "f"]
	},
	avatar: {
		type: String,
		default: "http://placehold.it/100x100"
	},
	about: {
		type: String
	},
	_created:{
		type: Date,
		default: Date.now
	},
	_updated:{
		type: Date,
		default: Date.now
	}
});

UserSchema.virtual('date')
	.get(function(){
		return this._id.getTimestamp();
	});

mongoose.model('User', UserSchema);

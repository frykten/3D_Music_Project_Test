'use strict';
const mongoose = require('mongoose'),
      bcrypt = require('bcryptjs'),
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

var UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
		trim: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
		trim: true
    },

    profile_picture_url: {
        type: String,
        default: ""
    },

    creation_date: {
        type: Date,
        default: Date.now()
    },

});

//authenticate input against database
UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
	var user = this;
	bcrypt.hash(user.password, 10, function (err, hash) {

		if (err)
			return next(err);

		user.password = hash;
		next();
	})
});

module.exports = mongoose.model('User', UserSchema);
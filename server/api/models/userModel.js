'use strict';
const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      Schema = mongoose.Schema;
      ObjectId = Schema.Types.ObjectId;

//TODO add validators cf mongoose Validators
var UserSchema = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },

    pseudo: {
        type: String,
        required: true,
        unique: true
    },

    hash_password: {
        type: String,
        require: true
    },

    email: {
        type: String,
        required: true,
        unique: true
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

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
}

module.exports = mongoose.model('User', UserSchema);

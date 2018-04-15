'use strict';
const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      Schema = mongoose.Schema;
      ObjectId = Schema.Types.ObjectId;
var User = mongoose.model('User');

//TODO add validators cf mongoose Validators
var ChatMsgSchema = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },

    text: {
        type: String,
        default: ""
    },

    user: {
        { type: ObjectId, ref: 'User' }
    },

    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('ChatMsg', ChatMsgSchema);

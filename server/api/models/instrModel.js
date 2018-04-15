'use strict';
const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      Schema = mongoose.Schema;
      ObjectId = Schema.Types.ObjectId;
var Brand = mongoose.model('Brand');

//TODO add validators cf mongoose Validators
var InstrSchema = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },

    name: {
        type: String,
        required: true,
        unique: true
    },

    type: {
        type: String,
	enum: ['electric-guitar', 'acoustic-guitar', 'bass', 'drumkit', 'keyboard'],
        require: true
    },

    brand: {
        { type: ObjectId, ref: 'Brand'}
    },

    vendors: {
        type: String
    },

    info: [Array],

    avg_price: {
        type: String
    },
});

module.exports = mongoose.model('Instr', InstrSchema);

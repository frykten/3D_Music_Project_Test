'use strict';
const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;
var Brand = require('../models/brandModel');

var InstrSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    type: {
        type: String,
		enum: ['Electric_Guitar', 'Acoustic_Guitar', 'Bass', 'Drumkit', 'Keyboard'],
        required: true
    },

    brand: {
        type: ObjectId,
		ref: 'Brand'
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
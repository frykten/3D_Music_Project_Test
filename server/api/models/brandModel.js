'use strict';
const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

// TODO: create a vendor model on another file

// Brands
var BrandSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    website: {
        type: String,
    },

    email: {
        type: String,
    },

    phone: {
        type: String,
    },

    adress: {
        type: String,
    },
});

module.exports = mongoose.model('Brand', BrandSchema);
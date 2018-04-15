'use strict';
const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      Schema = mongoose.Schema;
      ObjectId = Schema.TypesObjectId;

//TODO add validators cf mongoose Validators
var BrandSchema = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },

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
// Vendor are yet to implement
//module.exports = mongoose.model('Vendor', VendorSchema);

'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    accountNumber: {
        type: String,
        required: true
    },

    DPI: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    workName: {
        type: String,
        required: true
    },

    monthlyIncome: {
        type: Number,
        required: true
    },

    amount: {
        type: Number,
        required: true
    }
});

const users = new mongoose.model('user', UserSchema);
module.exports = users;
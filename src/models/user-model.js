'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: false,
        default: false
    },
    confirmed: {
        type: Boolean,
        required: false,
        default: false
    },
    createdAt: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin', 'employee', 'counter'],
        default: 'user'
    }],
});

module.exports = mongoose.model('User', schema);
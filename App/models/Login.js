const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    pasword: {
        type: String,
        required: true
    },
    
}, {
        versionKey: false
    });

const model = mongoose.model('login', schema);

module.exports = { schema, model };
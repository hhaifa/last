const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        
    },
    
    pass: {
        type: String,
        required: true
    },
}, {
        versionKey: false
    });

const model = mongoose.model('log', schema);

module.exports = { schema, model };
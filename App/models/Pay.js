const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    
}, {
        versionKey: false
    });

const model = mongoose.model('pay', schema);

module.exports = { schema, model };
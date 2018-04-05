const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Typesp: {
        type: String,
        required: true
    },
    
}, {
        versionKey: false
    });

const model = mongoose.model('spes', schema);

module.exports = { schema, model };
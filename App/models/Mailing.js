const mongoose = require('mongoose');

const schema = new mongoose.Schema({
   name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sujet: {
        type: String,
        required: false
    }
}, {
        versionKey: false
    });

const model = mongoose.model('mailing', schema);

module.exports = { schema, model };
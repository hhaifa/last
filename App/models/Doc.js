const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    
    codepct: {
        type: String,
        required: true
    },
    nomed: {
        type: String,
        required: true
    },
    DCI: {
        type: String,
        required: false
    },
   prix: {
        type: String,
        required: false
    },
    Form: {
        type: String,
        required: false
    },
    Form: {
        type: String,
        required: false
    },
    facon: {
        type: String,
        required: false
    },
   
}, {
    versionKey: false
});
   

const model = mongoose.model('doc', schema);

module.exports = {schema, model};
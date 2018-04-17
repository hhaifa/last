const mongoose = require('mongoose');
const Actor = require('./Preinscritdoc').schema;
const schema = new mongoose.Schema({
    nomfam: {
        type: String,
        required: true
    },
    tunisie:{
        type: String,
        required: false
    },
    adresse: {
        type: String,
        required: false
    },
    gov: {
        type: String,
        required: false
    },
    ville: {
        type: String,
        required: false
    },
    spesialiste: {
        type: String,
        required: false
    },
    tele: {
        type: Number,
        required: true
    },
    E_mail: {
        type: String,
        required: false
    },
    commente: {
        type: String,
        required: false
    },
},

 {
versionKey: false
});
const model = mongoose.model('preinscritdoc', schema);

module.exports = {schema, model};
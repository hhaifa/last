const mongoose = require('mongoose');
const Pay = require('./Pay').schema;
const Spe = require('./Spe').schema;
const schema = new mongoose.Schema({
    Nom_prenom: {
        type: String,
        required: true
    },
   adresse: {
        type: String,
        required: false
    },
    
  
    tele: {
        type: String,
        required: false
    },
    
    E_mail: {
        type: String,
        required: false
    },
    Place : {
        type: String,
        required: false
    },
   
    spes:  {
        type: String,
        required: false
    },
  

}, {
    versionKey: false
});
   

const model = mongoose.model('doc', schema);

module.exports = {schema, model};
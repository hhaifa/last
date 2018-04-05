const mongoose = require('mongoose');
const Actor = require('./Doc').schema;
const schema = new mongoose.Schema({
    nomfam: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: false
    },
   
    // ville: {
    //     type: String,
    //     required: true
    // },
    adresse: {
        type: String,
        required: false
    },
    mobile: {
        type: Date,
        required: false
    },
    tele_fix: {
        type: String,
        required: true
    },
    fax: {
        type: String,
        required: false
    },
    E_mail: {
        type: Date,
        required: false
    },
    //cv : {
    //     type: String,
    //     required: true
    // },
    commente: {
        type: String,
        required: false
    },
 // gouvernorat

pays: [{
    
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pay'
    }
}],
spes: [{
   type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'spe'
    }
}]
},

 {
versionKey: false
});
const model = mongoose.model('doc', schema);

module.exports = {schema, model};
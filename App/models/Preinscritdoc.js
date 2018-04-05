const mongoose = require('mongoose');
const Actor = require('./Preinscritdoc').schema;
const schema = new mongoose.Schema({
    nomfam: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: false
    },
    tunisie:{
        type: String,
        required: false
    },
    gov: {
        type: String,
        required: false
    },
    ville:{
        type: String,
        required: false
    },
    adresse: {
        type: String,
        required: false
    },
    spesialiste: {
        type: String,
        required: false
    },
    mobile: {
        type: Number,
        required: false
    },
    tele_fix: {
        type: Number,
        required: true
    },
    fax: {
        type: String,
        required: false
    },
    //condition @!!!!!!!! remember
    E_mail: {
        type: String,
        required: false
    },
    // //cv : {
    // //     type: String,
    // //     required: true
    // // },
    commente: {
        type: String,
        required: false
    },
 // gouvernorat


// spes: [{
//    type: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'spe'
//     }
// }]
},

 {
versionKey: false
});
const model = mongoose.model('preinscritdoc', schema);

module.exports = {schema, model};
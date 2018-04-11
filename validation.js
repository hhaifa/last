const Joi = require('joi');


const Pay = Joi.object().keys({
    _id: Joi.string(),
    Name: Joi.string().required(),
 
});


const Doc = Joi.object().keys({
   _id: Joi.string(),
   Nom_prenom: Joi.string().required().min(4),
   adresse:Joi.string().required().min(5),
   tele:Joi.number(),
   E_mail:Joi.string(),
   Place:Joi.string(),
   spes:Joi.string(),

});

const Mailing = Joi.object().keys({
    _id: Joi.string(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    sujet: Joi.string()
});

const Preinscritdoc = Joi.object().keys({
    _id: Joi.string(),
     nomfam: Joi.string().required().min(4),
    tunisie:Joi.string(),
    adresse:Joi.string().required().min(5),
    gov: Joi.string(),
    spesialiste:Joi.string(),
    tele:Joi.number().required().min(8),
    E_mail:Joi.string().required().min(8),
    commente:Joi,
});

module.exports = {Mailing,Preinscritdoc,Doc,Pay};

const Joi = require('joi');


const Pay = Joi.object().keys({
    _id: Joi.string(),
    Place: Joi.string().required(),
 
});
const Spe = Joi.object().keys({
    _id: Joi.string(),
    Typesp: Joi.string().required(),
 
});
const Log = Joi.object().keys({
    _id: Joi.string(),
    username: Joi.string().required(),
    pass: Joi.string().required(),
});
const Doc = Joi.object().keys({
   _id: Joi.string(),
   Nom_prenom: Joi.string(),
   adresse:Joi.string(),
   tele:Joi.string().allow(''),
   E_mail:Joi.string().allow(''),
   Place:Joi.string(),
   spes:Joi.string(),

});

const Mailing = Joi.object().keys({
    _id: Joi.string(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    sujet:Joi.string().required(),
});

const Preinscritdoc = Joi.object().keys({
    _id: Joi.string(),
    nomfam: Joi.string().required().min(4),
    tunisie:Joi.string(),
    adresse:Joi.string().required(),
    gov: Joi.string(),
    spesialiste:Joi.string(),
    tele:Joi.string().required(),
    E_mail:Joi.string().allow(''),
    commente:Joi.string().allow('')
});

module.exports = {Mailing,Preinscritdoc,Doc,Pay,Log,Spe};

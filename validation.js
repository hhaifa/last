const Joi = require('joi');

const Movie = Joi.object().keys({
    _id: Joi.string(),
    title: Joi.string().required().min(4),
    description: Joi.string().min(10).allow(''),
    releaseDate: Joi.date(),
    actors: Joi.array().items(Joi.any())
});

const Actor = Joi.object().keys({
    _id: Joi.string(),
    firstName: Joi.string().required().min(3),
    lastName: Joi.string().required().min(3),
    bio: Joi.string()
});

const Doc = Joi.object().keys({
   _id: Joi.string(),
   nomfam: Joi.string().required().min(4),
   prenom: Joi.string().required().min(4),
   tunisie:Joi.string(),
   pays: Joi.array().items(Joi.any()),
   ville:Joi.string(),
   adresse:Joi.string().required().min(5),
   spes: Joi.array().items(Joi.any()),
   mobile:Joi.number().required().min(8),
   tele_fix:Joi.number().required().min(8),
   fax:Joi.number().required().min(8),
   E_mail:Joi.string().required().min(8),
   commente:Joi,
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
    prenom: Joi.string().required().min(4),
    tunisie:Joi.string(),
    gov: Joi.string(),
    ville:Joi.string(),
    adresse:Joi.string().required().min(5),
    spesialiste:Joi.string(),
    mobile:Joi.number().required().min(8),
    tele_fix:Joi.number().required().min(8),
    fax:Joi.number().required().min(8),
    E_mail:Joi.string().required().min(8),
    commente:Joi,
    // releaseDate: Joi.date(),
    
    // spes: Joi.array().items(Joi.any())
});

module.exports = {Mailing,Movie, Actor,Preinscritdoc};
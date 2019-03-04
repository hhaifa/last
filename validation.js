const Joi = require('joi');


const Spe = Joi.object().keys({
    _id: Joi.string(),
    Typesp: Joi.string().required(),
 
});

const Doc = Joi.object().keys({
   _id: Joi.string(),
   codepct: Joi.string(),
   nomed:Joi.string(),
   DCI:Joi.string().allow(''),
   prix:Joi.string().allow(''),
   Form:Joi.string(),
   facon:Joi.string(),
   cath:Joi.string(),

});



module.exports = {Doc,Spe};

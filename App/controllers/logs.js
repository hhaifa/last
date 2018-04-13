const Router = require('express').Router();
const Log = require('../models/Log').model;
const Joi = require('joi');
const LogValidation = require('../../validation').Log;

Router.get('/logs', (req, res) => {
    Log.find({})
        .exec((err, logs) => {
            if (err) {
                res.boom.badImplementation('Cannot get Login');
            } else {
                res.json(logs);
            }
        });
});
// Router.post('/logs', (req, res) => {
//     var username = req.body.username;
//     var pass = req.body.pass;
//     Log.findOne({ username:username , pass:pass }),(err, logs) =>{
//         if(err){
//             consol.log(err);
//             return res.status(500).send();
//         }if(!logs){
//             return res.status(404).send();
//         }
//         return res.status(201).send();
//     }
// });
Router.get("/logs/:username/:pass", (req, res) => {
   
    Log.findOne({
         'username': req.params.username,
         'pass': req.params.pass,
        })
      .populate("logs")
      .exec((err, log) => {
        if (err) {
          console.error(err);
          res.boom.badImplementation("non");
        } else {
          if (log) {
            res.json("ok");
               } else {
                res.json("non");

          }
        }
      });
  });

module.exports = Router;
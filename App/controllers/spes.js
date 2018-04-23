const Router = require('express').Router();
const Spe = require('../models/Spe').model;
const Joi = require('joi');
const SpeValidation = require('../../validation').Spe;

Router.get('/spes', (req, res) => {
    Spe.find({})
        .exec((err, spes) => {
            if (err) {
                res.boom.badImplementation('Cannot get helth profetionelle');
            } else {
                res.json(spes);
            }
        });
});

Router.get('/spes/:id', (req, res) => {
    Spe.findOne({ _id: req.params.id })
        .exec((err, spe) => {
            if (spe) {
                if (err) {
                    res.boom.badImplementation('Error occured while retreiving helth profetionelle');
                } else {
                    res.json(spe);
                }
            } else {
                res.boom.notFound('Unable to find helth profetionelle');
            }
        });
});

Router.delete("/spes/:id", (req, res) => {
    Spe.findOne({ _id: req.params.id }).exec((err, spe) => {
      if (spe) {
        if (err) {
          res.boom.badImplementation("Error occured while retreiving doc");
        } else {
        Spe.remove({ _id: req.params.id }, err => {
            if (err) {
              res.boom.badImplementation("Error occured while deleting it!");
            } else {
              res.json("delete successfully");
            }
          });
        }
      } else {
        res.boom.notFound("Unable to find it!");
      }
    });
  });
  
Router.post("/spes", (req, res) => {
    Joi.validate(req.body, SpeValidation, (err, value) => {
        if(err){
          res.boom.badData("Invalid data", err);
        } else {
          let newSpe = new Spe(req.body);
          newSpe.save(err => {
          if (err) {
            console.error(err);
            res.boom.badImplementation("Cannot save Spécialitée");
          } else {
            res.status(201).json("Spés saved successfully");
          }
      });
        }
      });
    });
    
Router.put("/spes/:id", (req, res) => {
  Spe.findOne({ _id: req.params.id }).exec((err, spe) => {
    if (spe) {
      Joi.validate(req.body, SpeValidation, (err, value) => {
        if(err){
          res.boom.badData("Invalid data", err);
        } else {
          const update = value;
          Spe.findByIdAndUpdate(
            req.params.id,
            { $set: update },
            { new: true },
            (err, updatedSpe) => {
              if (err) {
                res.boom.badImplementation("Error occured while updating doctor");
              } else {
                res.json(updatedSpe);
              }
            }
          );
        }
      });
    } else {
      res.boom.notFound("Unable to find doctor");
    }
  });
});

module.exports = Router;
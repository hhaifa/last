const Router = require("express").Router();
const Mailing= require("../models/Mailing").model;
const Joi = require('joi');
const MailingValidation = require('../../validation').Mailing;

Router.get("/mailings", (req, res) => {
  Mailing.find({})
  .populate("mailing")
  .exec((err, result) => {
    if (err) {
      console.error(err);
      res.boom.badImplementation("Unable to find E_maile");
    } else {
      console.log(JSON.stringify(result));
      res.json(result);
    }
  });
});

Router.post("/mailings", (req, res) => {
  Joi.validate(req.body, MailingValidation, (err, value) => {
    if(err){
      res.boom.badData("Invalid data", err);
    } else {
      let newMailings = new Mailing(req.body);
      newMailings.save(err => {
      if (err) {
        console.error(err);
        res.boom.badImplementation("Cannot save  E_maile");
      } else {
        res.status(201).json(" E_maile saved successfully");
      }
  });
    }
  });
});
Router.delete("/mailings/:id", (req, res) => {
  Mailing.findOne({ _id: req.params.id }).exec((err, mailing) => {
    if (mailing) {
      if (err) {
        res.boom.badImplementation("Error occured while retreiving E_mail");
      } else {
       Mailing.remove({ _id: req.params.id }, err => {
          if (err) {
            res.boom.badImplementation("Error occured while deleting E_mail");
          } else {
            res.json("E_MAIL deleted successfully");
          }
        });
      }
    } else {
      res.boom.notFound("Unable to find  E_maile");
    }
  });
});




module.exports = Router;

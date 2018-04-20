const Router = require("express").Router();
const Preinscritdoc = require("../models/Preinscritdoc").model;
const Joi = require('joi');
const PreinscritdocValidation = require('../../validation').Preinscritdoc;

Router.get("/preinscritdocs", (req, res) => {
  Preinscritdoc.find({})
  .populate("Preinscritdoc")
  .exec((err, result) => {
    if (err) {
      console.error(err);
      res.boom.badImplementation("Unable to find doc");
    } else {
      console.log(JSON.stringify(result));
      res.json(result);
    }
  });
});

Router.post("/preinscritdocs", (req, res) => {
  Joi.validate(req.body, PreinscritdocValidation, (err, value) => {
      if(err){
        res.boom.badData("Invalid data", err);
      } else {
        let newpredoc = new Preinscritdoc(req.body);
        newpredoc.save(err => {
        if (err) {
          console.error(err);
          res.boom.badImplementation("Cannot save new doc");
        } else {
          res.status(201).json("new doc saved successfully");
        }
    });
      }
    });
  });


  Router.delete("/preinscritdocs/:id", (req, res) => {
    Preinscritdoc.findOne({ _id: req.params.id }).exec((err, preinscritdoc) => {
      if (preinscritdoc) {
        if (err) {
          res.boom.badImplementation("Error occured while retreiving doc");
        } else {
          Preinscritdoc.remove({ _id: req.params.id }, err => {
            if (err) {
              res.boom.badImplementation("Error occured while deleting doc");
            } else {
              res.json("Doc deleted successfully");
            }
          });
        }
      } else {
        res.boom.notFound("Unable to find Doc");
      }
    });
  });
module.exports = Router;

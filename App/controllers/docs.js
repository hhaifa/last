const Router = require("express").Router();
const Doc = require("../models/Doc").model;
const Joi = require('joi');
const DocValidation = require('../../validation').Doc;

Router.get("/docs", (req, res) => {
  Doc.find({})
  .populate("docs")
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

Router.get("/docs/:Typesp/:Place", (req, res) => {
    Doc.find({ 
      'pays.Place': req.params.Place,
      'spes.Typesp':req.params.Typesp
       })
      .populate("docs")
      .exec((err, doc) => {
        if (err) {
          console.error(err);
          res.boom.badImplementation("Unable to find doc");
        } else {
          if (doc) {
            res.json(doc);
          } else {
            res.boom.notFound("Unable to find doc");

          }
        }
      });
  });

Router.put("/docs/:id", (req, res) => {
  Doc.findOne({ _id: req.params.id }).exec((err, doc) => {
    if (doc) {
      Joi.validate(req.body, MovieValidation, (err, value) => {
        if(err){
          res.boom.badData("Invalid data", err);
        } else {
          const update = value;
          Doc.findByIdAndUpdate(
            req.params.id,
            { $set: update },
            { new: true },
            (err, updatedDoc) => {
              if (err) {
                res.boom.badImplementation("Error occured while updating movie");
              } else {
                res.json(updatedDoc);
              }
            }
          );
        }
      });
    } else {
      res.boom.notFound("Unable to find movie");
    }
  });
});
Router.post("/docs", (req, res) => {
    Joi.validate(req.body, DocValidation, (err, value) => {
        if(err){
          res.boom.badData("Invalid data", err);
        } else {
          let neDoc = new Doc(req.body);
          newDoc.save(err => {
          if (err) {
            console.error(err);
            res.boom.badImplementation("Cannot save Doc");
          } else {
            res.status(201).json("Doc saved successfully");
          }
      });
        }
      });
    });



Router.delete("/docs/:id", (req, res) => {
  Doc.findOne({ _id: req.params.id }).exec((err, doc) => {
    if (doc) {
      if (err) {
        res.boom.badImplementation("Error occured while retreiving movie");
      } else {
        Doc.remove({ _id: req.params.id }, err => {
          if (err) {
            res.boom.badImplementation("Error occured while deleting movie");
          } else {
            res.json("Movie deleted successfully");
          }
        });
      }
    } else {
      res.boom.notFound("Unable to find movie");
    }
  });
});

module.exports = Router;

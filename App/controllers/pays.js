const Router = require('express').Router();
const Pay = require('../models/Pay').model;
const Joi = require('joi');
const PayValidation = require('../../validation').Pay;

Router.get('/pays', (req, res) => {
    Pay.find({})
        .exec((err, pays) => {
            if (err) {
                res.boom.badImplementation('Cannot get pays');
            } else {
                res.json(pays);
            }
        });
});
Router.get('/pays/:id', (req, res) => {
  Pay.findOne({_id: req.params.id})
      .exec((err, pay) => {
          if (pay) {
              if (err) {
                  res.boom.badImplementation('Error occured while retreiving it!');
              } else {
                  res.json(pay);
              }
          } else {
              res.boom.notFound('Unable to find it!');
          }
      });
});
Router.delete("/pays/:id", (req, res) => {
    Pay.findOne({ _id: req.params.id }).exec((err, pay) => {
      if (pay) {
        if (err) {
          res.boom.badImplementation("Error occured while retreiving doc");
        } else {
            Pay.remove({ _id: req.params.id }, err => {
            if (err) {
              res.boom.badImplementation("Error occured while deleting it! ");
            } else {
              res.json(" delete successfully");
            }
          });
        }
      } else {
        res.boom.notFound("Unable to find  it!");
      }
    });
  });
  
Router.post("/pays", (req, res) => {
    Joi.validate(req.body, PayValidation, (err, value) => {
        if(err){
          res.boom.badData("Invalid data", err);
        } else {
          let newPay = new Pay(req.body);
          newPay.save(err => {
          if (err) {
            console.error(err);
            res.boom.badImplementation("Cannot save Doc");
          } else {
            res.status(201).json("Gov/ville saved successfully");
          }
      });
        }
      });
    });


    Router.put("/pays/:id", (req, res) => {
      Pay.findOne({ _id: req.params.id }).exec((err, pay) => {
        if (pay) {
          Joi.validate(req.body, PayValidation, (err, value) => {
            if(err){
              res.boom.badData("Invalid data", err);
            } else {
              const update = value;
              Pay.findByIdAndUpdate(
                req.params.id,
                { $set: update },
                { new: true },
                (err, updatedPay) => {
                  if (err) {
                    res.boom.badImplementation("Error occured while updating doctor");
                  } else {
                    res.json(updatedPay);
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

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



module.exports = Router;

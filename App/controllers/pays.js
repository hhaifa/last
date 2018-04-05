const Router = require('express').Router();
const Pay = require('../models/Pay').model;

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
    Pay.findOne({ _id: req.params.id })
        .exec((err, pay) => {
            if (pay) {
                if (err) {
                    res.boom.badImplementation('Error occured while retreiving country');
                } else {
                    res.json(pay);
                }
            } else {
                res.boom.notFound('Unable to find country');
            }
        });
});


module.exports = Router;
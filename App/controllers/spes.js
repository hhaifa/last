const Router = require('express').Router();
const Spe = require('../models/Spe').model;

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


module.exports = Router;
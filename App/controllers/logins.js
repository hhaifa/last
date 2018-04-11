const Router = require('express').Router();
const Login = require('../models/Login').model;
const Joi = require('joi');



Router.post('/logins', (req, res) => {
   Login.findOne({
    username: req.body.username
   })
   if (!login) {
    res.send({ success: false, message: 'Authentication failed. User not found.' });
  } else {
    // Check if password matches
    login.comparePassword(req.body.pasword, function(err, isMatch) {
      if (isMatch && !err) {
        // Create token if the password matched and no error was thrown
        var token = jwt.sign(login, config.secret, {
          expiresIn: 10080 // in seconds
        });
        res.json({ success: true, token: 'JWT ' + token });
      } else {
        res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
      }
    });
  }
});




module.exports = Router;

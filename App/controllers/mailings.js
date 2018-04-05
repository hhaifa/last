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
      res.boom.badImplementation("Unable to find movies");
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
        res.boom.badImplementation("Cannot save movie");
      } else {
        res.status(201).json("Movie saved successfully");
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
      res.boom.notFound("Unable to find movie");
    }
  });
});
// Router.put("/movies/:id", (req, res) => {
//   Movie.findOne({ _id: req.params.id }).exec((err, movie) => {
//     if (movie) {
//       Joi.validate(req.body, MovieValidation, (err, value) => {
//         if(err){
//           res.boom.badData("Invalid data", err);
//         } else {
//           const update = value;
//           Movie.findByIdAndUpdate(
//             req.params.id,
//             { $set: update },
//             { new: true },
//             (err, updatedMovie) => {
//               if (err) {
//                 res.boom.badImplementation("Error occured while updating movie");
//               } else {
//                 res.json(updatedMovie);
//               }
//             }
//           );
//         }
//       });
//     } else {
//       res.boom.notFound("Unable to find movie");
//     }
//   });
// });

// Router.get("/movies/:id", (req, res) => {
//   Movie.findOne({ _id: req.params.id })
//     .populate("actors")
//     .exec((err, movie) => {
//       if (err) {
//         console.error(err);
//         res.boom.badImplementation("Unable to find movie");
//       } else {
//         if (movie) {
//           res.json(movie);
//         } else {
//           res.boom.notFound("Unable to find movie");
//         }
//       }
//     });
// });



module.exports = Router;

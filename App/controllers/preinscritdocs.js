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

// Router.get("/docs/:Typesp/:Place", (req, res) => {
//     Doc.findOne({ 
//       'pays.Place': req.params.Place,
//       'spes.Typesp':req.params.Typesp
//        })
//       .populate("docs")
//       .exec((err, doc) => {
//         if (err) {
//           console.error(err);
//           res.boom.badImplementation("Unable to find doc");
//         } else {
//           if (doc) {
//             res.json(doc);
//           } else {
//             res.boom.notFound("Unable to find doc");

//           }
//         }
//       });
//   });

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
// Router.post("/movies", (req, res) => {
//     Joi.validate(req.body, MovieValidation, (err, value) => {
//         if(err){
//           res.boom.badData("Invalid data", err);
//         } else {
//           let newMovie = new Movie(req.body);
//           newMovie.save(err => {
//           if (err) {
//             console.error(err);
//             res.boom.badImplementation("Cannot save movie");
//           } else {
//             res.status(201).json("Movie saved successfully");
//           }
//       });
//         }
//       });
//     });



// Router.delete("/movies/:id", (req, res) => {
//   Movie.findOne({ _id: req.params.id }).exec((err, movie) => {
//     if (movie) {
//       if (err) {
//         res.boom.badImplementation("Error occured while retreiving movie");
//       } else {
//         Movie.remove({ _id: req.params.id }, err => {
//           if (err) {
//             res.boom.badImplementation("Error occured while deleting movie");
//           } else {
//             res.json("Movie deleted successfully");
//           }
//         });
//       }
//     } else {
//       res.boom.notFound("Unable to find movie");
//     }
//   });
// });

module.exports = Router;

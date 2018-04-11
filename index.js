require('dotenv').config();

const express = require('express');

const cors =require('cors');
const  bodyParser =require('body-parser');
const morgan= require('morgan');
const boom= require('express-boom');



//controllers
const spes = require('./App/controllers/spes');
const pays = require('./App/controllers/pays');
const docs = require('./App/controllers/docs');
const mailings = require('./App/controllers/mailings');
const preinscritdocs = require('./App/controllers/preinscritdocs');
<<<<<<< HEAD
const logins = require('./App/controllers/logins');
=======
>>>>>>> 4c3747f71740a4fe0a0b3dfcd12b8aa851aac23d
/**
 * Providers
 */
const mongo = require('./providers/mongo');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(boom());
app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Origin-Credentials",true);
   next();
});

app.use('/api/v1/', pays);
app.use('/api/v1/', spes);
app.use('/api/v1/', docs);
app.use('/api/v1/', mailings);
app.use('/api/v1/', preinscritdocs);
app.use('/api/v1/', logins);

<<<<<<< HEAD
=======

>>>>>>> 4c3747f71740a4fe0a0b3dfcd12b8aa851aac23d
mongo.check();
//new ligne
app.use('/', express.static('public'));
app.listen(process.env.APP_PORT,(err)=>{
  if(err){
    console.error(err);
  }else{
     console.log("AlloDocteur IS UP 2018!");
  }
});

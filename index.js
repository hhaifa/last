require('dotenv').config();

const express = require('express');

const cors =require('cors');
const app = express();
const mongo = require('./providers/mongo');
const  bodyParser =require('body-parser');
const morgan= require('morgan');
const boom= require('express-boom');

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Origin-Credentials",true);
   next();
});

//controllers
const spes =require('./app/controllers/spes')
const pays =require('./app/controllers/pays')
const docs =require('./app/controllers/docs')
const mailings =require('./app/controllers/mailings')
const preinscritdocs =require('./app/controllers/preinscritdocs')

 app.use(bodyParser.json());
app.use(boom());
app.use(morgan('dev'));

app.use('/api/v1/', pays);
app.use('/api/v1/', spes);
app.use('/api/v1/', docs);
app.use('/api/v1/', mailings);
app.use('/api/v1/', preinscritdocs);

app.use(cors());
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

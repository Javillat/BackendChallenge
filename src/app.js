const express = require('express');
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'backendChallenge';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
//server.use(cookieParser());
server.use(morgan('dev'));

//Cambiar las url's necesarias dentro del arreglo para poder realizar las peticiones y no ser filtradas o retenidas por cors.
server.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3000', 'http://localhost'];//Tantas url's como sean necesarias para diferentes peticiones de origin.
  const origin = req.headers.origin;
  //Condiciono si en el allowedOrigins se incluye cualquiera de las urls del arreglo
  if(allowedOrigins.includes(origin)){
    res.setHeader('Access-Control-Allow-Origin', origin);//Establezco el header de control, "Access-Control-Allow-Origin", con los valores de origin
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

server.use('/', routes);

// Error en el proceso de petición.
server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;

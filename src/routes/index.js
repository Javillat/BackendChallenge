const { Router } = require('express');
//Importar las rutas
const routesuser = require('./routesuser.js');

//Setear la ruta principal
const routemain = Router();

//Configurar la ruta media
routemain.use('/user', routesuser);

//Exportar la ruta principal
module.exports = routemain;

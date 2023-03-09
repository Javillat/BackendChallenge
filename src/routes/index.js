const { Router } = require('express');
//Importar las rutas
const routesuser = require('./routesuser.js');
const routerproduct = require('./routerproduct.js');

//Setear la ruta principal
const routemain = Router();

//Configurar la ruta media
routemain.use('/user', routesuser);
routemain.use('/product', routerproduct);

//Exportar la ruta principal
module.exports = routemain;

const { Router } = require('express');
//Requerir la funcion para el post
const product = require('../controllers/productfn.js');
//Construir el router
const routerproduct = Router();

//Crear la ruta para crear el usuario
routerproduct.post("",product.postProduct);

//Exportar la ruta del usuario.
module.exports = routerproduct;
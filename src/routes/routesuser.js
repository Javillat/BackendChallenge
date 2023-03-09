const { Router } = require('express');
//Requerir la funcion para el post
const user = require('../controllers/userfn.js');
//Construir el router
const routesuser = Router();

//Crear la ruta para crear el usuario
routesuser.post("",user.postUser);

//Exportar la ruta del usuario.
module.exports = routesuser;
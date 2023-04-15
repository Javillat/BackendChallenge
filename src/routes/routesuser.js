const { Router } = require('express');
//Requerir la funcion para el post
const user = require('../controllers/userfn.js');
//Construir el router
const routesuser = Router();

//Crear la ruta para registrar el usuario
routesuser.post("/register",user.postUser);

//Exportar la ruta del usuario.
module.exports = routesuser;
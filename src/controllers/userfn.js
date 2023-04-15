require("dotenv").config();
const { User } = require('../db');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



/**
 * POST... Registrar los usuarios dentro de la bd.
 */

postUser = async(req, res) => {
    try {
        const { email, name, password } = req.body;
        //Realizar una rutina de comprovacion de campos vacios en el body...Lista
        if (!(email, name, password)) {
            res.status(400).send("Todos los campos son requeridos");
        };
        
        //Realizar una busqueda interna del email que nos llega por body, si se encuenta, retorna un status 304 y un mensaje de no creado.
        const findone = await User.findOne({
            where:{email:{[Op.eq]:email}}
        });
        //De no encontrar el email en la base de datos procede a crear el usuario con la informacion de body.
        if(!findone){
            //Hacer un hash de la password encriptandola.
            const hashedPassword = await bcrypt.hash(password, 10)
            //Registrar el usuario con los datos basicos.
            const newUser = await User.create({
                email:email.toLowerCase(),
                name,
                password:hashedPassword,
            });

        //Crear token.
        const token = jwt.sign(
            { user_id: newUser._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn:"1h",
            }
        );
        //Guardar el token.
        newUser.token = token;
            return res.status(201).json(newUser);
        }else{
            return res.status(409).send('El usuario ya existe en nuestra bd. Por favor loguearse')
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error interno del servidor al crear el usuario'}); 
        process.exit(1);
    }
};

module.exports = {
    postUser,
}
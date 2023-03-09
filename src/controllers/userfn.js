const { User } = require('../db');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');

/**
 * POST... Registrar los usuarios dentro de la bd.
 */

postUser = async(req, res) => {
    try {
        const { email, name, password } = req.body;
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
                email,
                name,
                password:hashedPassword,
            });
            return res.status(201).json(newUser);
        }else{
            return res.status(304).send('Error,el usuario ya existe en nuestra bd, no creado')
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al crear el usuario'}); 
    }
};

module.exports = {
    postUser,
}
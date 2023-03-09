const { User } = require('../db');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');

/**
 * POST... Registrar los usuarios dentro de la bd.
 */

postUser = async(req, res) => {
    try {
        const { email, name, password } = req.body;

        const findone = await User.findOne({
            where:{email:{[Op.eq]:email}}
        });
        console.log(findone);
        if(!findone){
            const hashedPassword = await bcrypt.hash(password, 10)
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
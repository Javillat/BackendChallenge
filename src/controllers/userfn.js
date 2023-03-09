const { User } = require('../db');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');

/**
 * POST... Registrar los usuarios dentro de la bd.
 */

postUser = async(req, res) => {
    const { id, email, name, password } = req.body;
    try {
        const findone = User.findOne({
            where:{email:{[Op.eq]:email}}
        });
        const hashedPassword = await bcrypt.hash(password, 10)
        if(!findone){
            const idCount = (await User.count()) + 1;
            const idString = 'US-' + idCount;
            const newUser = await User.create({
                id:idString,
                name,
                email,
                password:hashedPassword,
            });
            res.status(201).json(newUser);
        }else{
            res.status(304).send('Error,el usuario ya existe en nuestra bd, no creado')
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al crear el usuario'}); 
    }
};

module.exports = {
    postUser,
}
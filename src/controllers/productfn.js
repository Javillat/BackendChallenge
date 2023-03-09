const { Product, Categorie } = require('../db');
const { Op } = require('sequelize');
const { check } = require('express-validator');

postProduct = async(req, res) => {
    try {
        console.log("Entre a postProduct")
        //const categoria = await Categorie.findAll();
        const { idProduct, isbn, name, price, autor, categoriaName, editorialId } = req.body
        console.log("En las constantes", categoriaName)
        const findProduct = await Product.findByPk();
        console.log(findProduct);
        if(!findProduct){
            if(categoriaName === 'Libros'){
                const newBook = await Product.create({
                    isbn,
                    name, 
                    price, 
                    autor,
                    price
                });
                console.table(newBook.__proto__);
                await newBook.setEditorial(editorialId)
                //await newBook.addPrice
                res.status(201).send('Libro creado correctamente');
            }else{
                const newProduct = await Product.create({
                    idProduct, name, price
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    postProduct,
}
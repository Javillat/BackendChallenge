const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('product', {
        idProduct:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true,
        },
        isbn:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        price:{
            type:DataTypes.DECIMAL(5,2),
            allowNull:false,
        },
        autor:{
            type:DataTypes.STRING,
            allowNull:false,
        },

    });//Fin define
};//Fin exports
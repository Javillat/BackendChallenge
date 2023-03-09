const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('categorie', {
        id:{
            type:DataTypes.STRING,
            primaryKey: true,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING(50),
            allowNull:false,
        },
        description:{
            type: DataTypes.STRING(100),
            allowNull:true,
        },
    });
};
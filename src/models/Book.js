const  { DataTypes, Sequelize } = require('sequelize');
module.exports = (Sequelize) => {
    Sequelize.define('book',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:false,
        },
    });
};
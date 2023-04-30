const { DataTypes, Sequelize } = require('sequelize');
module.exports = (Sequelize) => {
    Sequelize.define('cart',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_price:{
            type:DataTypes.FLOAT,
            allowNull: false,
        },
    });
};
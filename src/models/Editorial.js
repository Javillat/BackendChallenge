const { DataTypes } = require('sequelize');
//Exportar funcion que define el modelo
//Se le inyecta la conecxion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('editorial',{
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
    });//fin define
};//fin exports
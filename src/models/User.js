const { DataTypes } = require('sequelize');
//Exportar funcion que define el modelo
//Se le inyecta la conecxion a sequelize.
module.exports = (sequelize) => {
    //Defino el modelo
    sequelize.define('user',{
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email:{
            type:DataTypes.STRING(100),
            allowNull:false,
            unique:true,
            validate:{
                isEmail:true,
            },
        },
        name:{
            type:DataTypes.STRING(100),
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        token:{
            type:DataTypes.STRING,
        },
        address:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        image:{
            type:DataTypes.BLOB,
            allowNull:true,
        },
    });//fin define
};//Fin exports
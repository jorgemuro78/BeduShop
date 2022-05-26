const { Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    DATABASE,// Nombre de la DB
    USER, // Usuario
    PASSWORD, //Contraseña
    {
        host: '34.221.160.76', //host
        dialect: 'mysql' //gestor de DB
    });

module.exports = sequelize;
const { Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE,// Nombre de la DB
    process.env.USER, // Usuario
    process.env.PASSWORD, //Contraseña
    {
        host: '34.221.160.76', //host
        dialect: 'mysql' //gestor de DB
    });

module.exports = sequelize;
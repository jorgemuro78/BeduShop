const { Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'BeduShop',// Nombre de la DB
    'root', // Usuario
    '*9ak/oVTwtY_eI:.', //Contraseña
    {
        host: '34.221.160.76', //host
        dialect: 'mysql' //gestor de DB
    });

module.exports = sequelize;
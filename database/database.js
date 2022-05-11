const Sequelize = require('sequelize');
const connection = new Sequelize('guiaperguntas','root','Siren@1989',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;
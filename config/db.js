const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodeapi_db', 'postgres', 'root', {
host: 'locallhost',
dialect: 'postgres',
});

module.exports = sequelize;
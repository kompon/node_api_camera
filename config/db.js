const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('apinodedb_wqv5', 'nodeapi', 'bxeyYWSFsHgTTwAyE6oZujl2yG27AuTO', {
host: 'dpg-cs4f280gph6c73c027ag-a',
dialect: 'postgres',
});

module.exports = sequelize;
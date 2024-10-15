const { Sequelize, DataTypes } = require('sequelize');
// เชื่อมต่อกับฐานข้อมูล
const sequelize = require('../config/db');

// สร้าง Model สําหรับ Product

const Product = sequelize.define('Product', {
    pro_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
image: {
type: DataTypes.BLOB('long'), // เก็บรูปภาพในฟิลด์นี้
allowNull: false,
},
});

module.exports = Product;
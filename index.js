const express = require('express');
const sequelize = require('./config/db'); // นำเข้า Sequelize สำหรับเชื่อมต่อฐานข้อมูล
const routes = require('./routes/productRoutes'); // นำเข้ารูทสำหรับผลิตภัณฑ์
const app = express();

app.use(express.json()); // รองรับ JSON ในคำขอ

// ระบุตำแหน่ง URL สำหรับเรียกดูรูปภาพ
app.use(express.static('public')); // ให้บริการไฟล์จากโฟลเดอร์ public
app.use('/images', express.static('public/images')); // ให้บริการไฟล์รูปภาพจากโฟลเดอร์ public/images

// ระบุตำแหน่ง URL สำหรับเรียกใช้งาน API
app.use('/api', routes); // ใช้เส้นทางที่กำหนดใน productRoutes

const PORT = process.env.PORT || 3000; // ตั้งค่าพอร์ต

// ซิงค์กับฐานข้อมูลและเริ่มเซิร์ฟเวอร์
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(error => console.error(error));

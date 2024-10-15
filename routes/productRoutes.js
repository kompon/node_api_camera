const express = require('express');
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');
const router = express.Router();
//สร้างการอัพโหลดไฟล์
const storage = multer.memoryStorage();
const upload = multer({ storage });

// กําหนดเส้นทางสําหรับอัปโหลดภาพ
router.post('/upload', upload.single('image'), productController.uploadImage);
router.get('/products', productController.getdata);
module.exports = router;
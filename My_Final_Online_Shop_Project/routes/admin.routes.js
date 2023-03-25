const express = require('express');
const adminController = require('../controllers/admin.controller');
const imageUploadMiddlware = require('../middlewares/image-uplod');

const router = express.Router();

router.get('/products', adminController.getAllProducts)

router.get('/products/new', adminController.getNewProduct);

router.post('/products',imageUploadMiddlware, adminController.crateNewProducts);


router.get('/products/:id', adminController.getUpdateProducts);

router.post('/products/:id',imageUploadMiddlware, adminController.updateProducts);


router.delete('/products/:id', adminController.deleteProduct);

router.get('/orders', adminController.getOrders);

router.patch('/orders/:id', adminController.updateOrder);

module.exports = router;
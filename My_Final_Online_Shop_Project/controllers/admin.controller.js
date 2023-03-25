const Product = require('../models/product.model');
const Order = require('../models/order.modle');


async function getAllProducts(req, res, next){
  try {
    const products = await Product.findAll(); 
    res.render('admin/products/all-products', {products : products})
  } catch (error) {
    next(error);
    return;
  }

  
}


function getNewProduct(req, res){
 res.render('admin/products/new-products')
}



async function crateNewProducts(req, res, next){
  const product = new Product({
    ...req.body,
   image: req.file.filename
  });

 try {
  await product.save();
 } catch (error) {
  next(error);
  return;
 }

 
 res.redirect('/admin/products')
}


async function getUpdateProducts(req, res, next){
  try {
    const product = await Product.findById(req.params.id);
    res.render('admin/products/update-product', {product: product});
  } catch (error) {
    next(error);
    
  }
 



}


async function updateProducts(req, res, next){
 const product = new Product({
  ...req.body,
  _id: req.params.id
 })


 if(req.file){
   product.replaceImage(req.file.filename);
 }

 try {
  await product.save();
 } catch (error) {
   next(error);
   return;
 }
 

  res.redirect('/admin/products');

}


async function deleteProduct(req, res, next){
let product;
  try {
      product = await Product.findById(req.params.id);
      await product.remove();
  } catch (error) {
    return next(error);
   
  }
 
  

  res.json({message: 'Deleted product!'});


 }


 async function getOrders(req, res, next) {
  try {
    const orders = await Order.findAll();
    res.render('admin/orders/admin-orders', {
      orders: orders
    });
  } catch (error) {
    next(error);
  }
}

async function updateOrder(req, res, next) {
  const orderId = req.params.id;
  const newStatus = req.body.newStatus;

  try {
    const order = await Order.findById(orderId);

    order.status = newStatus;

    await order.save();

    res.json({ message: 'Order updated', newStatus: newStatus });
  } catch (error) {
    next(error);
  }
}







module.exports = {
  getAllProducts: getAllProducts,
  getNewProduct: getNewProduct,
  crateNewProducts: crateNewProducts,
  getUpdateProducts: getUpdateProducts,
  updateProducts: updateProducts,
  deleteProduct: deleteProduct,
  getOrders: getOrders,
  updateOrder: updateOrder
}

const Product = require('../models/product.model');

async function getAllProduct(req, res, next){
  let products;
  try {
    products = await Product.findAll();  
   await res.render('customer/products/all-products', {products : products});   
  } catch (error) {
     next(error);     
  }
       
}



async function getProductDetails(req, res, next){
  let product;
  try {
     product = await Product.findById(req.params.id);
    res.render('customer/products/product-details', {product: product});
  } catch (error) {
    next(error);
    return; 
  }
 
}











module.exports = {
  getAllProduct: getAllProduct,
  getProductDetails: getProductDetails
}
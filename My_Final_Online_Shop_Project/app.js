const express = require('express');
const path = require('path');
const csrf = require('csurf');
const expressSession = require('express-session')

const createSessionConfig = require('./config/session');
const db = require('./data/database');

const addCSRFTokenMiddleware = require('./middlewares/csrf-token');
const errorHandingMiddlware = require('./middlewares/error-handling');
const checkAuthStatusMiddlware = require('./middlewares/check-auth');
const protecRoutesMiddlware = require('./middlewares/rotes-protect');
const cartMiddlware = require('./middlewares/cart');
const updateCartPricesMiddleware = require('./middlewares/update-cart-prices');
const notFoundMiddlware = require('./middlewares/not-found');


const authRoues = require('./routes/auth.routes');
const baseRoutes = require('./routes/base.routes');
const productsRoutes = require('./routes/products.routes');
const getAdminRoutes = require('./routes/admin.routes');
const cartRoutes = require('./routes/cart.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use('/products/assets',express.static('product-images'));
app.use(express.urlencoded({extended: false}));
 app.use(express.json());


const creatSEssionConfig = createSessionConfig();
app.use(expressSession(creatSEssionConfig));

app.use(csrf());

app.use(cartMiddlware);
app.use(updateCartPricesMiddleware);
app.use(addCSRFTokenMiddleware);
app.use(checkAuthStatusMiddlware);


app.use(authRoues);
app.use(baseRoutes);
app.use(productsRoutes);
app.use('/cart',cartRoutes);

app.use('/orders',protecRoutesMiddlware, ordersRoutes);
app.use('/admin',protecRoutesMiddlware, getAdminRoutes);

app.use(notFoundMiddlware);

app.use(errorHandingMiddlware);

db.connectToDatabase().then(function(){
  app.listen(3000);
}).catch(function(error){
   console.log('Failed to connect to the database');
})


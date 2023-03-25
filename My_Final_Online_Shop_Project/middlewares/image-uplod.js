const multer = require('multer');
const uuid = require('uuid').v4;

const upload = multer({
   storage: multer.diskStorage({
     destination: 'product-images/images',
     filename: function(req, file, cb){
       cb(null, uuid() + '-' + file.originalname);
     }

   })
});


const configureMulterMiddlware = upload.single('image');



module.exports = configureMulterMiddlware;
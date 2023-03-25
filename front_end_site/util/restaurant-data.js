const path = require('path');
const fs = require('fs');

const filepath = path.join(__dirname, '..', 'data', 'restaurants.json');



function getStoresRestaurant(){
          const fileData = fs.readFileSync(filepath);
          const storeFileData = JSON.parse(fileData);
         return storeFileData;
}

function storeRestaurants(storableRestaurants){
          fs.writeFileSync(filepath, JSON.stringify(storableRestaurants));
}

module.exports = {
          getStoresRestaurant: getStoresRestaurant,
          storeRestaurants:storeRestaurants
}
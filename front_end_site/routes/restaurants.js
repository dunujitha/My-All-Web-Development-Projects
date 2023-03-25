const express = require("express");
const uuid = require('uuid');
const router = express.Router();

const resData = require('../util/restaurant-data');

router.get("/restaurants", function (req, res) {
  
         let order = req.query.order;
         let nextOrder = 'desc'
        if(order !== 'asc' && order !== 'desc'){
          order = 'asc';
        }

        if(order === 'desc'){
          nextOrder = 'asc'
        }



          const storeFileData = resData.getStoresRestaurant();

   storeFileData.sort(function(resA, resB){
     if(order == 'asc' && resA.name > resB.name){
          return 1;
     }else if(order === 'desc' && resB.name > resA.name){
          return 1;
     } 
     return -1;
   });


  res.render("restaurants", {
    numberOfRestaurants: storeFileData.length,
    restaurants: storeFileData,
    nextOrder : nextOrder
  });
});

router.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;
  const storeFileData = resData.getStoresRestaurant();

  for (const restaurant of storeFileData) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }

  res.status(404).render("404");
});

router.get("/confirm", function (req, res) {
  res.render("confirm");
});

router.get("/recommend", function (req, res) {
  res.render("recommend");
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const storeFileData = resData.getStoresRestaurant();
  storeFileData.push(restaurant);

  resData.storeRestaurants(storeFileData);

  res.redirect("/confirm");
});



module.exports = router;
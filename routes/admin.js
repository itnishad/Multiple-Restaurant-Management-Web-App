const express = require('express');
const router = express.Router();

const { addRestaurant, addCategory, addFood } = require('../controller/adminController') 

router.post('/add/resturant', addRestaurant);
router.post('/add/category/:id', addCategory);
router.post('/add/food/:id', addFood);

module.exports = router;
const express = require('express');
const router = express.Router();

const {homeController, restaurantController, resController, addFood} = require('../controller/homeController') 

router.get('', homeController);
router.get('/res', restaurantController);
router.get('/restaurant/:id', resController);
router.post('/addFood', addFood);

module.exports = router;
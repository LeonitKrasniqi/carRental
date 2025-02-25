const express = require('express');
const{rentalCars, addCar} = require('../controllers/carController')

const router = express.Router();

router.post('/add-car', addCar)
router.get('/rental-cars', rentalCars);

module.exports =router;
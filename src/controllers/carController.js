const { getDB } = require('../config/db');

async function addCar(req, res) {
    try {
        const carData = req.body;
        const collection = getDB().collection('cars');
        const result = await collection.insertOne(carData);

        res.status(201).send({ message: 'Car added successfully', carId: result.insertedId });
    } catch (error) {
        res.status(500).send({ message: 'Error adding car', error: error.message });
    }
}

async function rentalCars(req, res) {
    try {
        const { year, color, steering_type, number_of_seats } = req.query;

        let filter = {};

        if (year) filter.year = parseInt(year);
        if (color) filter.color = color;
        if (steering_type) filter.steering_type = steering_type;
        if (number_of_seats) filter.number_of_seats = parseInt(number_of_seats);

        const cars = await getCars(filter);
        
        const sortedCars = cars.sort((a, b) => a.price_per_day - b.price_per_day);

        res.status(200).send(sortedCars);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching cars', error: error.message });
    }
}

async function getCars(filter) {
    const collection = getDB().collection('cars');
    const cars = await collection.find(filter).toArray();
    return cars;
}

module.exports = {rentalCars, getCars,addCar}
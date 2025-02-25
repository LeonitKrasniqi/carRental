const { getDB } = require('../config/db');

async function addCar(req, res) {
    try {
        const carData = req.body;
        const collection = getDB().collection('cars');
        const result = await collection.insertOne(carData);

        carData._id = result.insertedId;

        res.status(201).send({ message: 'Car added successfully', car: carData });
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

        const collection = getDB().collection('cars');
        const cars = await collection.find(filter).sort({ price_per_day: 1 }).toArray(); 

        res.status(200).send(cars);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching cars', error: error.message });
    }
}

module.exports = {rentalCars,addCar}
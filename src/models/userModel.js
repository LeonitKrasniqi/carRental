const { getDB } = require('../config/db');

async function addUser(userData) {
    const collection = getDB().collection('users');
    const result = await collection.insertOne(userData);
    return result.insertedId;
}

async function getUserByEmail(email) {
    const collection = getDB().collection('users');
    const user = await collection.findOne({ email });
    return user;  
}

module.exports = { addUser,getUserByEmail };

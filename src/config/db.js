const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017"; 

let db;

async function connectDB() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        db = client.db("carRental23"); 
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
    }
}

function getDB() {
    if (!db) {
        throw new Error("Database not connected");
    }
    return db;
}

module.exports = { connectDB, getDB };

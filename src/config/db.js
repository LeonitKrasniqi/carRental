require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

let db;

async function connectDB() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        db = client.db(dbName); 
        console.log(`Connected to database: ${dbName}`);
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

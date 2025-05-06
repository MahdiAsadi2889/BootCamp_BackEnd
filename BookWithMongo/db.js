const { MongoClient , ObjectId} = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
DB_Name = "library";
const client = new MongoClient(DB_URL);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    const db = client.db(DB_Name);
    return db;
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

module.exports = connectDB;

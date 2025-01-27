import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

try {
  // For production mode, do not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
} catch (error) {
  console.error("MongoDB connection error:", error);
  throw new Error("Failed to connect to MongoDB.");
}

export default clientPromise;

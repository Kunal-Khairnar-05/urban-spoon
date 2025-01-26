import menuItems from "../data/menuItems.js"
import sampleOrders from "../data/sampleOrders.js"
import { MongoClient } from "mongodb"

const uri = "mongodb+srv://arya171b:EwncjzntBvDpPBnb@cluster0.v4m83.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

if (!uri) {
  console.error("Please set the MONGODB_URI environment variable")
  process.exit(1)
}

async function insertData() {
  const client = new MongoClient(uri)

  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db("restaurant")

    // Drop existing collections to avoid duplicates
    await db.collection("menu").drop()
    await db.collection("orders").drop()

    // Insert menu items
    const menuResult = await db.collection("menu").insertMany(menuItems)
    console.log(`${menuResult.insertedCount} menu items inserted`)

    // Insert sample orders
    const ordersResult = await db.collection("orders").insertMany(sampleOrders)
    console.log(`${ordersResult.insertedCount} sample orders inserted`)
  } catch (error) {
    console.error("Error inserting data:", error)
  } finally {
    await client.close()
    console.log("Disconnected from MongoDB")
  }
}

insertData()


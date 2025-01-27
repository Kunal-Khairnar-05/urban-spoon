import clientPromise from "./mongodb";
import { MongoClient } from "mongodb";

export async function getMenuItems() {
  try {
    const client: MongoClient = await clientPromise;
    const db = client.db("restaurant");
    const menuItems = await db.collection("menu").find({}).toArray();
    return JSON.parse(
      JSON.stringify(
        menuItems.map((item) => ({
          ...item,
          _id: item._id.toString(),
        }))
      )
    );
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw new Error("Failed to fetch menu items.");
  }
}

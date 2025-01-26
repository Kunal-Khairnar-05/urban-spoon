import clientPromise from "./mongodb"
import { ObjectId } from "mongodb"

export async function getOrderHistory(userId: string) {
  const client = await clientPromise
  const db = client.db("restaurant")
  const orders = await db.collection("orders").find({ userId }).sort({ date: -1 }).toArray()
  return JSON.parse(
    JSON.stringify(
      orders.map((order) => ({
        ...order,
        _id: order._id.toString(),
        date: order.date.toISOString(),
      })),
    ),
  )
}


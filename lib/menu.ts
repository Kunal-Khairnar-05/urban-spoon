import clientPromise from "./mongodb"

export async function getMenuItems() {
  const client = await clientPromise
  const db = client.db("restaurant")
  const menuItems = await db.collection("menu").find({}).toArray()
  return JSON.parse(
    JSON.stringify(
      menuItems.map((item) => ({
        ...item,
        _id: item._id.toString(),
      })),
    ),
  )
}


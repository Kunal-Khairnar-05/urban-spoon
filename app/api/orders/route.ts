import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request: Request) {
  const order = await request.json()

  const client = await clientPromise
  const db = client.db("restaurant")

  const result = await db.collection("orders").insertOne(order)

  return NextResponse.json({ orderId: result.insertedId })
}


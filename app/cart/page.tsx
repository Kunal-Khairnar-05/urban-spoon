"use client"

import Image from "next/image"
import { useCart } from "@/lib/cartContext"
import Link from "next/link"

export default function CartPage() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item._id} className="flex items-center space-x-4 border-b pb-4">
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item._id)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="text-xl font-bold">Total: ₹{total.toFixed(2)}</p>
            <Link
              href="/checkout"
              className="mt-4 inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}


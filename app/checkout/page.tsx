"use client"

import { useState } from "react"
import { useCart } from "@/lib/cartContext"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()
  const { user } = useUser()

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  const handleCheckout = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Save order to database
    const order = {
      userId: user.id,
      items: cart,
      total: total,
      date: new Date(),
    }

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })

    if (response.ok) {
      clearCart()
      router.push("/order-confirmation")
    } else {
      alert("There was an error processing your order. Please try again.")
    }

    setIsProcessing(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold text-center text-gray-900">Checkout</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Complete your order and enjoy your meal!
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item._id} className="flex justify-between items-center">
                <span className="text-gray-700">{item.name}</span>
                <span className="text-gray-900 font-medium">₹{item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-xl font-bold text-gray-900">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-300"
          >
            {isProcessing ? "Processing..." : "Complete Order"}
          </button>
        </div>
      </div>
    </div>
  )
}

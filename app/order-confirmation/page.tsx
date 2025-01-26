import Link from "next/link"

export default function OrderConfirmationPage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Order Confirmed</h1>
      <p className="mb-6">Thank you for your order! Your delicious meal will be prepared shortly.</p>
      <Link
        href="/menu"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors"
      >
        Back to Menu
      </Link>
    </div>
  )
}


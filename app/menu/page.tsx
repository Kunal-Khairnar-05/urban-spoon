import Image from "next/image"
import { getMenuItems } from "@/lib/menu"
import AddToCartButton from "../components/AddToCartButton"


export default async function MenuPage() {
  const menuItems = await getMenuItems()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Menu 📃</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {menuItems.map((item:any) => (
          <div key={item._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-48 m-5">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} layout="fill" objectFit="contain" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">{item.category}</p>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">₹{item.price.toFixed(2)}</p>
                <AddToCartButton item={item}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


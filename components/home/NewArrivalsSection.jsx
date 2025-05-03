import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import ProductCard from "../shared/ProductCard"


export default function NewArrivalsSection() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Fresh Croissant",
      image: "/croissant.png",
      originalPrice: "$15",
      discountedPrice: "$12",
      buttonVariant: "orange",
    },
    {
      id: 2,
      name: "Fresh Bread",
      image: "/bread.png",
      originalPrice: "$15",
      discountedPrice: "$12",
    },
    {
      id: 3,
      name: "Pastries",
      image: "/pastries.png",
      originalPrice: "$15",
      discountedPrice: "$12",
    },
    {
      id: 4,
      name: "Croissant choco buns",
      image: "/choco-buns.png",
      originalPrice: "$15",
      discountedPrice: "$12",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-amber-800">NEW ARRIVAL</h2>
        <div className="flex space-x-2">
          <button className="border rounded-full p-1 text-gray-400">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="border rounded-full p-1 text-gray-400">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* New Arrival Icon */}
        <div className="bg-[#FFF8E7] p-6 rounded-lg flex flex-col items-center justify-center">
          <div className="text-amber-800 text-center">
            <h3 className="font-bold text-xl mb-2">NEW ARRIVAL</h3>
            <div className="flex justify-center">
              <Image
                src="/new-arrival-icon.png"
                alt="New Arrival"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Product Cards */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

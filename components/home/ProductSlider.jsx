import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ProductCard from "../shared/ProductCard";

export default function ProductSlider({products,title}) {

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-amber-800">{title}</h2>
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
        {/* <div className="bg-[#FFF8E7] p-6 rounded-lg flex flex-col items-center justify-center">
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
        </div> */}

        <div class="w-full h-[400px] flex items-center justify-center p-5 rounded-[10px] bg-[#FFF5E6] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10)]">
          <Image
            src="image/newArrival/newArrivalLogo.svg"
            alt="New arrival"
            width={150}
            height={150}
            className="object-contain h-32"
          />
        </div>
        {/* Product Cards */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

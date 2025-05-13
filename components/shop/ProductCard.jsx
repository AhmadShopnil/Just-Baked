import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, ShoppingCart } from "lucide-react";
import ConfirmAddToCartModal from "../shared/ConfirmAddToCartModal";

export default function ProductCard({ product,i }) {
  const [openModal, setOpenModal] = useState(false);

  const selectedItem = {
    id: product.id,
    name: product.name,
    price: product.discountedPrice,
    image: product.image,
    quantity: 1,
  };

  return (
    <>
      <div
        key={product.id}
        className={`h-[300px] md:h-[350px] group bg-white rounded-lg overflow-hidden border
         border-gray-100 shadow-sm hover:shadow-md transition-shadow ${""}`}
      >
        <div className={`w-full h-[50%] md:h-[58%] relative ${"aspect-square"} overflow-hidden
          flex justify-center items-center`}>
          {product.isNew && (
            <span
              className="absolute top-2 left-2 bg-[#724b00] text-white text-xs 
          px-2 py-1 rounded-full z-10"
            >
              New
            </span>
          )}
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
           width={180}
              height={180}
            className="object-cover transition-transform duration-300 group-hover:scale-105 h-24 md:h-32"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              href={`/product/${product.id}`}
              className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-[#724b00] hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View Details
            </Link>
          </div>
        </div>
       


        <div className={`p-4 ${""}`}>
          <h3 className=" text-sm md:text-[16px] mb-2 text-center font-semibold ">
            {product.name.slice(0, 15)}
          </h3>

          <div className="flex justify-center  items-center gap-4 my-3 text-sm md:text-md">
            <div className="flex py-1 px-2.5 items-center gap-0.5 rounded-md border border-gray-300">
              <span className="text-sm font-semibold">৳</span>
              <span className="text-sm font-semibold">
                {product.discountedPrice}
              </span>
            </div>
            {product.originalPrice > product.discountedPrice && (
              <span className="text-sm text-gray-500 line-through">
               ৳{product.originalPrice}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-4">
            {i === 0 ? (
              <button
                onClick={() => setOpenModal(true)}
                className="flex-1 py-1 rounded-md transition-colors flex items-center justify-center gap-2 group bg-orange-600 cursor-pointer"
              >
                <img src="image/newArrival/Vector.svg" alt="" />
              </button>
            ) : (
              <button
              onClick={() => setOpenModal(true)}
              className="flex-1 py-2 bg-[#724b00] text-white rounded-md hover:bg-[#5e3d00] 
                        transition-colors flex items-center justify-center gap-2 group"
            >
              <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium text-xs md:text-[13px]">
                Add to Cart
              </span>
            </button>
            )}

           
          </div>
        </div>
      </div>
      <ConfirmAddToCartModal
        show={openModal}
        onClose={() => setOpenModal(false)}
        product={selectedItem}
      />
    </>
  );
}

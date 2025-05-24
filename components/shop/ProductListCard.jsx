import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, ShoppingCart } from "lucide-react";
import ConfirmAddToCartModal from "../shared/ConfirmAddToCartModal";

export default function ProductListCard({ product }) {
  const [openModal, setOpenModal] = useState(false);

  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.discountedPrice,
    image: product.image,
    quantity: 1,
    description: product.description,
  };


  

  return (
    <>
      <div className="flex flex-row items-start gap-4 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md bg-white transition-all w-full">
        {/* Image Section */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-lg hover:scale-105 transition-transform"
          />
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-[#724b00] text-white text-xs px-2 py-1 rounded-full z-10">
              New
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between flex-1 min-w-0">
          {/* Top Row: Name & Details */}
          <div className="flex items-start justify-between flex-wrap gap-2">
            <h3 className="text-md font-semibold text-gray-800">
              {product.name}
            </h3>
            <Link
              href={`/product/${product.id}`}
              className="text-sm text-[#724b00] hover:underline flex items-center gap-1"
            >
              <Eye className="w-4 h-4" />
              View
            </Link>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description || "No description available."}
          </p>

          {/* Price & Action */}
          <div className="md:flex items-center justify-between  gap-2 mt-2">
            <div className="flex items-center gap-3 mb-1 md:mb-0">
              <span className="text-base font-semibold text-gray-900">
                ${discounted_price}
              </span>
              {original_price> discounted_price && (
                <span className="text-sm text-gray-500 line-through">
                  ${original_price}
                </span>
              )}
            </div>

            <button
              onClick={() => setOpenModal(true)}
              className="inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-[#724b00]
               hover:bg-[#5e3d00] text-white rounded-md transition text-xs md:text-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <ConfirmAddToCartModal
        show={openModal}
        onClose={() => setOpenModal(false)}
        product={cartItem}
      />
    </>
  );
}

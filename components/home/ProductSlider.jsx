import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ProductCard from "../shared/ProductCard";

export default function ProductSlider({ products, title,titleImage }) {
  return (
    <div className="max-w-[1700px] mx-auto py-12 px-4 sm:px-7 md:px-10 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-amber-800">{title}</h2>
     

        <div className="flex items-center gap-2.5">
          <button className="bg-[#F3F3F3] py-2.5 px-3 rounded-[5px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M7 1L2 6L7 11"
                stroke="#949494"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button className="bg-[#F3F3F3] py-2.5 px-3 rounded-[5px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M1 1L6 6L1 11"
                stroke="#949494"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
   
        <div className="w-full md:w-1/5 h-[400px] flex items-center justify-center p-5 rounded-[10px]
         bg-[#FFF5E6] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10)]">
          <Image
            src={titleImage}
            alt={title}
            width={150}
            height={150}
            className="object-contain h-32"
          />
        </div>
        {/* Product Cards */}
        <div className="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
         gap-2 md:gap-4">
        {products.map((product,i) => (
          <ProductCard key={product.id} product={product} i={i} />
        ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ProductCard from "../shop/ProductCard";
import axiosInstance from "@/helpers/axiosInstance";
import { filterProductsByCategoryId } from "@/helpers/filterProductsByCategoryIds";

export default function ProductSlider({
  title,
  titleImage,
  bg = "",
  category,
  products:allProducts
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [products, setProducts] = useState([]);
  const itemsPerPage = 4;


const products = filterProductsByCategoryId(allProducts, category?.id);


  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       let endpoint = `/posts?term_type=product`;
  //       if (category?.id) {
  //         endpoint += `&category_id=${category.id}`;
  //       }

  //       const res = await axiosInstance.get(endpoint);
  //       setProducts(res.data?.data || []);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, [category?.id]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handleNext = () => {
    const nextIndex = currentIndex + itemsPerPage;
    if (nextIndex < products.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - itemsPerPage;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className="max-w-[1700px] mx-auto py-12 px-4 sm:px-7 md:px-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-amber-800">{title.toUpperCase()}</h2>

        {/* Slide buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrev}
            className="bg-gray-200 py-2.5 px-3 rounded-[5px] cursor-pointer hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={18} color="#949494" />
          </button>

          <button
            onClick={handleNext}
            className="bg-gray-200 py-2.5 px-3 rounded-[5px] cursor-pointer hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex + itemsPerPage >= products.length}
          >
            <ChevronRight size={18} color="#949494" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
          {/* First card for logo */}
          <div
            className={`${bg} w-full h-[300px] md:h-[350px] flex items-center justify-center p-5 rounded-[10px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10)]`}
          >
            <Image
              src={titleImage}
              alt={title}
              width={150}
              height={150}
              className="object-contain h-24 md:h-32"
            />
          </div>

          {/* Product cards */}
          {visibleProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

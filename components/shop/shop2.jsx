"use client";

import { Grid, List } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import ProductSkeleton from "../shared/ProductSkeleton ";
import ProductCard from "./ProductCard";
import ProductListCard from "./ProductListCard";
import Pagination from "../shared/Pagination";
import { getCategoryNameBySlug } from "@/helpers/getCategoryNameBySlug";

export default function Shop({
  products,
  sortBy,
  setSortBy,
  currentPage,
  setCurrentPage,
  totalPages,
  loading,
  slug = { slug },
}) {
  const [viewMode, setViewMode] = useState("grid");

  console.log("frm category", products);
const categoryName = getCategoryNameBySlug(products, slug);
 
  return (
    <div className=" w-full h-full ">
      {/* Header */}
      <div className="md:flex justify-between items-center mb-8 ">
        {/* Breadcrumb */}

        <div className="  text-xs md:text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <span className="mx-1">/</span>
          <Link href="/shop" className="hover:text-gray-700">
            Shop
          </Link>
           <span className="mx-1">/</span>
          <Link href={`/shop/${slug}`} className="hover:text-gray-700">
            {categoryName}
          </Link>
        </div>

        <div className="flex  justify-end gap-4 ">
          <button
            onClick={() => setViewMode("grid")}
            className={` ${
              viewMode === "grid" ? "text-[#724b00]" : "text-gray-500"
            } hover:bg-gray-100 rounded-md transition-colors`}
            aria-label="Grid view"
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={` ${
              viewMode === "list" ? "text-[#724b00]" : "text-gray-500"
            } hover:bg-gray-100 rounded-md transition-colors`}
            aria-label="List view"
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Listing */}
      <div className="flex-1">
        <div
          className={`grid gap-2 md:gap-6 ${
            viewMode === "grid"
              ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {loading ? (
            Array.from({ length: viewMode === "grid" ? 8 : 4 }).map(
              (_, index) => <ProductSkeleton key={index} view={viewMode} />
            )
          ) : products.length > 0 ? (
            products.map((product) =>
              viewMode === "grid" ? (
                <ProductCard key={product.id} product={product} />
              ) : (
                <ProductListCard key={product.id} product={product} />
              )
            )
          ) : (
            <div className="col-span-full py-10 text-center text-gray-500">
              <p className="text-lg">
                No products found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSortBy("newest");
                  setCurrentPage(1);
                }}
                className="mt-4 px-4 py-2 bg-[#724b00] text-white rounded-md hover:bg-[#5e3d00] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {/* {products.length > 0 && totalPages > 1 && ( */}
        <div className="mt-12 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

"use client";

import { Grid, List } from "lucide-react";
import ProductListCard from "./ProductListCard";
import ProductCard from "./ProductCard";
import { useState } from "react";
import ProductSkeleton from "../shared/ProductSkeleton ";
import Pagination from "../shared/Pagination";
import Link from "next/link";

export default function Shop({
  products,
  categories,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  currentPage,
  setCurrentPage,
  totalPages,
  loading,
  setProductPerPage,
}) {
  const [viewMode, setViewMode] = useState("grid");

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-[1700px] mx-auto w-full px-4 md:px-10 py-8">
      <div className="md:flex justify-between items-center mb-8">
        <div className="flex mb-4 md:mb-0 items-center text-xs md:text-[14px] text-gray-500 justify-center md:justify-start">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <span className="mx-1">/</span>
          <Link href="/shop" className="hover:text-gray-700">
            Shop
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 ${
              viewMode === "grid" ? "text-[#724b00]" : "text-gray-500"
            } hover:bg-gray-100 rounded-md transition-colors`}
            aria-label="Grid view"
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 ${
              viewMode === "list" ? "text-[#724b00]" : "text-gray-500"
            } hover:bg-gray-100 rounded-md transition-colors`}
            aria-label="List view"
          >
            <List className="w-5 h-5" />
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm bg-white"
            aria-label="Sort products"
          >
            <option value="newest">Newest Arrivals</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        <div className="w-full lg:w-64 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h2 className="font-semibold text-lg mb-3">Categories</h2>
            {categories.map((cat) => (
              <label
                key={cat.id}
                className="flex items-center gap-2 mb-2 cursor-pointer hover:text-[#724b00] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.name)}
                  onChange={() => handleCategoryToggle(cat.name)}
                  className="rounded text-[#724b00] focus:ring-[#724b00]"
                />
                <span>{cat.name}</span>
              </label>
            ))}
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h2 className="font-semibold text-lg mb-3">Price Range</h2>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-24 border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#724b00]"
                min="0"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-24 border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#724b00]"
                min="0"
              />
            </div>
            <button
              onClick={() => {
                setPriceRange([0, 1000]);
                setCurrentPage(1);
              }}
              className="mt-3 text-sm text-[#724b00] hover:underline"
            >
              Reset
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
                    setSelectedCategories([]);
                    setPriceRange([0, 1000]);
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
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Grid, List, Eye, ShoppingCart, Heart } from "lucide-react";

export default function ShopPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const products = [
    {
      id: 1,
      name: "Fresh Croissantd",
      image: "/image/fastFood/burger.webp",
      originalPrice: 15,
      discountedPrice: 12,
      rating: 4.5,
      category: "Bakery",
      isNew: true,
    },
    {
      id: 2,
      name: "Fresh Bread",
      image: "/image/fastFood/chowmin.webp",
      originalPrice: 10,
      discountedPrice: 8,
      rating: 4.2,
      category: "Bakery",
    },
    {
      id: 3,
      name: "Pastries",
      image: "/image/fastFood/burger.webp",
      originalPrice: 18,
      discountedPrice: 15,
      rating: 4.6,
      category: "Pastry",
    },
    {
      id: 4,
      name: "Choco Buns",
      image: "/image/fastFood/pizza.webp",
      originalPrice: 16,
      discountedPrice: 13,
      rating: 4.4,
      category: "Pastry",
    },
    {
      id: 5,
      name: "Blueberry Muffin",
      image: "/image/fastFood/vegetableRoll.webp",
      originalPrice: 12,
      discountedPrice: 10,
      rating: 4.7,
      category: "Bakery",
    },
    {
      id: 6,
      name: "Cheese Danish",
      image: "/image/fastFood/burger.webp",
      originalPrice: 14,
      discountedPrice: 11,
      rating: 4.3,
      category: "Pastry",
    },
    {
      id: 7,
      name: "Almond Croissant",
      image: "/image/fastFood/pizza.webp",
      originalPrice: 17,
      discountedPrice: 14,
      rating: 4.5,
      category: "Bakery",
    },
    {
      id: 8,
      name: "Cinnamon Roll",
      image: "/image/food/a1.png",
      originalPrice: 13,
      discountedPrice: 10,
      rating: 4.6,
      category: "Pastry",
    },
    {
      id: 9,
      name: "Garlic Bread",
      image: "/image/food/a2.png",
      originalPrice: 9,
      discountedPrice: 7,
      rating: 4.1,
      category: "Bakery",
    },
    {
      id: 10,
      name: "Sourdough Loaf",
      image: "/image/food/a3.png",
      originalPrice: 11,
      discountedPrice: 9,
      rating: 4.2,
      category: "Bakery",
    },
    {
      id: 11,
      name: "Chocolate Donut",
      image: "/image/food/b1.png",
      originalPrice: 8,
      discountedPrice: 6,
      rating: 4.8,
      category: "Fast Food",
    },
    {
      id: 12,
      name: "Bagel with ",
      image: "/image/food/a4.png",
      originalPrice: 10,
      discountedPrice: 8,
      rating: 4.4,
      category: "Bakery",
    },
  ];

  const categories = ["Bakery", "Pastry", "Fast Food"];

  // Filter products based on selected filters
  const filteredProducts = products
    .filter(
      (product) =>
        product.originalPrice >= priceRange[0] &&
        product.originalPrice <= priceRange[1]
    )
    .filter(
      (product) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)
    )
    .sort((a, b) => {
      if (sortBy === "newest") return b.id - a.id;
      if (sortBy === "price-low-high") return a.originalPrice - b.originalPrice;
      if (sortBy === "price-high-low") return b.originalPrice - a.originalPrice;
      return 0;
    });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    // Show a toast or notification
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-[1700px] mx-auto w-full px-4 md:px-10 py-8">

       <div className="flex items-center text-xs md:text-[14px]  text-gray-500 mb-4  justify-center md:justify-start ">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <span className="mx-1">/</span>
          <Link href="/snacks" className="hover:text-gray-700">
            Shop
          </Link>
        </div>

      <div className="flex justify-center md:justify-end items-center mb-8">
       
        <div className="flex items-center gap-2">
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
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-2 mb-2 cursor-pointer hover:text-[#724b00] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="rounded text-[#724b00] focus:ring-[#724b00]"
                />
                <span>{category}</span>
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

        {/* Product Grid/List */}
        <div className="flex-1">
          <div
            className={`grid gap-2 md:gap-6 ${
              viewMode === "grid"
                ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
            }`}
          >
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${
                    viewMode === "list" ? "flex gap-4" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      viewMode === "list" ? "w-48 h-48" : "aspect-square"
                    } overflow-hidden`}
                  >
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-[#724b00] text-white text-xs px-2 py-1 rounded-full z-10">
                        New
                      </span>
                    )}
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                  <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <h3 className=" text-sm md:text-[16px] mb-2 text-center font-semibold ">
                      {product.name.slice(0,15)}
                    </h3>

                    <div className="flex justify-center  items-center gap-4 my-3 text-sm md:text-md">
                      <div className="flex py-1 px-2.5 items-center gap-0.5 rounded-md border border-gray-300">
                        <span className="text-sm font-semibold">$</span>
                        <span className="text-sm font-semibold">
                          {product.discountedPrice}
                        </span>
                      </div>
                      {product.originalPrice > product.discountedPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {viewMode === "list" && (
                      <p className="text-gray-600 mb-4">
                        Delicious freshly baked {product.name.toLowerCase()}{" "}
                        made with premium ingredients. Perfect for breakfast or
                        as a snack.
                      </p>
                    )}

                    <div className="flex items-center gap-2 mt-4">
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 py-2 bg-[#724b00] text-white rounded-md hover:bg-[#5e3d00] 
                        transition-colors flex items-center justify-center gap-2 group"
                      >
                        <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                        <span className="font-medium text-xs md:text-[13px]">Add to Cart</span>
                      </button>
                      {/* <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`p-2 border ${
                          wishlist.includes(product.id)
                            ? "bg-[#724b00] text-white border-[#724b00]"
                            : "border-gray-300 text-gray-500"
                        } rounded-full hover:bg-[#724b00] hover:border-[#724b00] hover:text-white transition-colors duration-300`}
                        aria-label={
                          wishlist.includes(product.id)
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                      >
                        <Heart className="w-5 h-5" />
                      </button> */}
                    </div>
                  </div>
                </div>
              ))
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
          {filteredProducts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 border rounded-md transition-colors duration-300 ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-4 py-2 border rounded-md transition-colors duration-300 ${
                        currentPage === pageNumber
                          ? "bg-[#724b00] text-white border-[#724b00]"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  )
                )}

                <button
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 border rounded-md transition-colors duration-300 ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

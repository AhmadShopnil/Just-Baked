"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Grid,
  List,
  ChevronDown,
  Star,
  Heart,
  ShoppingCart,
  Eye,
} from "lucide-react";

export default function ShopPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("newest");

  const products = [
    {
      id: 1,
      name: "Fresh Croissant",
      image: "/image/fastFood/burger.webp",
      originalPrice: "$15",
      discountedPrice: "$12",
      buttonVariant: "orange",
      rating: 4.5,
      category: "Bakery",
    },
    {
      id: 2,
      name: "Fresh Bread",
      image: "/image/fastFood/chowmin.webp",
      originalPrice: "$10",
      discountedPrice: "$8",
      rating: 4.2,
      category: "Bakery",
    },
    {
      id: 3,
      name: "Pastries",
      image: "/image/fastFood/burger.webp",
      originalPrice: "$18",
      discountedPrice: "$15",
      rating: 4.6,
      category: "Pastry",
    },
    {
      id: 4,
      name: "Choco Buns",
      image: "/image/fastFood/pizza.webp",
      originalPrice: "$16",
      discountedPrice: "$13",
      rating: 4.4,
      category: "Pastry",
    },
    {
      id: 5,
      name: "Blueberry Muffin",
      image: "/image/fastFood/vegetableRoll.webp",
      originalPrice: "$12",
      discountedPrice: "$10",
      rating: 4.7,
      category: "Bakery",
    },
    {
      id: 6,
      name: "Cheese Danish",
      image: "/image/fastFood/burger.webp",
      originalPrice: "$14",
      discountedPrice: "$11",
      rating: 4.3,
      category: "Pastry",
    },
    {
      id: 7,
      name: "Almond Croissant",
      image: "/image/fastFood/pizza.webp",
      originalPrice: "$17",
      discountedPrice: "$14",
      rating: 4.5,
      category: "Bakery",
    },
    {
      id: 8,
      name: "Cinnamon Roll",
      image: "/image/food/a1.png",
      originalPrice: "$13",
      discountedPrice: "$10",
      rating: 4.6,
      category: "Pastry",
    },
    {
      id: 9,
      name: "Garlic Bread",
      image: "/image/food/a2.png",
      originalPrice: "$9",
      discountedPrice: "$7",
      rating: 4.1,
      category: "Bakery",
    },
    {
      id: 10,
      name: "Sourdough Loaf",
      image: "/image/food/a3.png",
      originalPrice: "$11",
      discountedPrice: "$9",
      rating: 4.2,
      category: "Bakery",
    },
    {
      id: 11,
      name: "Chocolate Donut",
      image: "/image/food/b1.png",
      originalPrice: "$8",
      discountedPrice: "$6",
      rating: 4.8,
      category: "Fast Food",
    },
    {
      id: 12,
      name: "Bagel with Cream Cheese",
      image: "/image/food/a4.png",
      originalPrice: "$10",
      discountedPrice: "$8",
      rating: 4.4,
      category: "Bakery",
    },
    {
      id: 13,
      name: "Fruit Tart",
      image: "/image/food/a1.png",
      originalPrice: "$14",
      discountedPrice: "$11",
      rating: 4.7,
      category: "Pastry",
    },
    {
      id: 14,
      name: "Apple Pie Slice",
      image: "/image/bestSelling/samosa.webp",
      originalPrice: "$13",
      discountedPrice: "$10",
      rating: 4.5,
      category: "Pastry",
    },
    {
      id: 15,
      name: "Baguette",
      image: "/image/food/a1.png",
      originalPrice: "$9",
      discountedPrice: "$7",
      rating: 4.3,
      category: "Bakery",
    },
    {
      id: 16,
      name: "Mini Quiche",
      image: "/image/food/a2.png",
      originalPrice: "$12",
      discountedPrice: "$9",
      rating: 4.2,
      category: "Bakery",
    },
  ];

  const categories = ["Bakery", "Pastry", "Fast Food"];

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

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="max-w-[1700px] mx-auto w-full px-4 md:px-10 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setViewMode("grid")}
            className={p-2 ${
              viewMode === "grid" ? "text-red-500" : "text-gray-500"
            }}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={p-2 ${
              viewMode === "list" ? "text-red-500" : "text-gray-500"
            }}
          >
            <List className="w-5 h-5" />
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm bg-white"
          >
            <option value="newest">Newest Arrivals</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}

        <div className="w-full lg:w-48 space-y-6">
          <div>
            <h2 className="font-semibold mb-2">Categories</h2>
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="rounded text-red-500 focus:ring-red-500"
                />
                {category}
              </label>
            ))}
          </div>

          <div>
            <h2 className="font-semibold mb-2">originalPrice Range</h2>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-20 border rounded-md px-2 py-1"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-20 border rounded-md px-2 py-1"
              />
            </div>
          </div>
        </div>

        {/* Product Grid/List */}
        <div className="flex-1">
          <div
            className={grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                : "grid-cols-1"
            }}
          >
            {filteredProducts?.map((product) => (
              <div
                key={product.id}
                className={group ${viewMode === "list" ? "flex gap-4" : ""}}
              >
                <div
                  className={relative ${
                    viewMode === "list" ? "w-48" : "aspect-square"
                  } mb-4 overflow-hidden rounded-lg}
                >
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-primary-strong text-white text-xs px-2 py-1 rounded-full z-10">
                      New
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-black/20 bg-opacity-40 flex items-center justify-center
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Link
                      href={product/${product?.id}}
                      className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-primary-strong
                       hover:text-white transition-colors duration-300 flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </Link>
                  </div>
                </div>
                <div className={viewMode === "list" ? "flex-1" : ""}>
                  <h3 className="font-medium mb-2 text-center">
                    {product.name}
                  </h3>

                  <div className="flex justify-center items-center gap-5 self-stretch my-4">
                    {/* <!-- Price --> */}
                    <div className="flex py-[5px] px-2.5 justify-center items-start gap-[2px] rounded-[5px] border border-[#949494]">
                      <span className="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
                        ৳
                      </span>
                      <span className="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
                        {product?.discountedPrice}
                      </span>
                    </div>
                    {/* <!-- quantity --> */}
                    <div className="flex py-[5px] px-2.5 justify-center items-start gap-[2px] rounded-[5px] border border-[#949494]">
                      <span className="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
                        10
                      </span>
                      <span className="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
                        PC
                      </span>
                    </div>
                  </div>

                  {viewMode === "list" && (
                    <p className="text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  )}
                  <div className="flex items-center gap-2">
                    <button className="flex-1 py-2 bg-primary-strong text-white rounded-md
                     hover:bg-gray-200 hover:text-gray-700  flex items-center justify-center gap-2 group">
                      <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-medium">Add to Cart</span>
                    </button>
                    {/* <button className="p-2 border border-gray-300 rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors duration-300">
                      <Heart className="w-5 h-5" />
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center gap-2">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors duration-300">
            Previous
          </button>
          <button className="px-4 py-2 border rounded-md bg-red-500 text-white">
            1
          </button>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors duration-300">
            2
          </button>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors duration-300">
            3
          </button>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors duration-300">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}



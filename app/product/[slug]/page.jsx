"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Description from "@/components/product/Description";
import { ChevronLeft, ChevronRight, Facebook, Instagram, LayoutGrid } from "lucide-react";

export default function ProductPage() {
  const [mainImage, setMainImage] = useState("/images/products/watch.jpg");
  const [quantity, setQuantity] = useState(1);
  //   const [activeTab, setActiveTab] = useState("description");

  const images = [
    "/images/products/camera-2.jpg",
    "/images/products/item-2.jpg",
    "/images/products/lipstik.jpg",
    "/images/products/camera-2.jpg",
    "/images/products/item-2.jpg",
  ];

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="py-8 container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 py-10">
        {/* Product Images Section */}
        <div className="w-full md:w-2/5">
          {/* Main Image */}
          <div className="shadow-xl rounded-lg p-4 mb-4 bg-white">
            <div className="relative h-[450px] w-full">
              <Image
                src={mainImage || "/placeholder.svg"}
                alt="Chicken Roll"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`border cursor-pointer p-2 w-24 h-20 relative ${
                  mainImage === image ? "border-amber-600" : "border-gray-200"
                }`}
                onClick={() => handleThumbnailClick(image)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Chicken Roll thumbnail ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-3/5">
          {/* Breadcrumb */}
          <div className="flex justify-between">
           
            <div className="flex items-center text-sm mb-6 text-gray-500">
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
              <span className="mx-1">/</span>
              <Link href="/snacks" className="hover:text-gray-700">
                Snacks & Drinks
              </Link>
              <span className="mx-1">/</span>
              <Link href="/frozen-snacks" className="hover:text-gray-700">
                Frozen Snacks
              </Link>
              <span className="mx-1">/</span>
              <span className="text-gray-900">Chicken Roll</span>
            </div>

            <div className="flex gap-2">
            <ChevronLeft />
            <LayoutGrid />
            <ChevronRight />
            </div>
           
          </div>
          {/* Breadcrumb End */}

          <h1 className="text-3xl font-bold mb-2">Chicken Roll</h1>
          <div className="text-2xl font-bold mb-4">₹ 230/-</div>

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600 mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6 gap-4">
            {/* <span className="mr-4">Quantity:</span> */}
            <div className="flex border border-gray-300 rounded ">
              <button
                className="px-3 py-1 border-r border-gray-300"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                className="px-3 py- border-l border-gray-300"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            {/* Add to Cart Button */}
            <button
              className="bg-[#724B00] text-white py-[7px] px-6 rounded
             hover:bg-[#724B00] transition text-sm cursor-pointer "
            >
              ADD TO CART
            </button>
          </div>

          <div className=" border border-gray-200  "></div>

          {/* Product Details */}
          <div className="my-6">
            <div className="flex mb-2">
              <span className="font-semibold w-24">SKU:</span>
              <span>01-composite-order</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-24">Categories:</span>
              <span>Hot meals, snack roll</span>
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center">
            <span className="mr-2">Share:</span>
            <div className="flex gap-2">
              <button className="w-6 h-6 rounded-full bg-red-500">
              {/* <Youtube /> */}
              </button>
              <button className="w-6 h-6 rounded-full bg-blue-500">
              {/* <Facebook className="text-white" /> */}
              </button>
              <button className="w-6 h-6 rounded-full bg-green-500"></button>
              <button className="w-6 h-6 rounded-full bg-purple-500">
                {/* <Instagram  className=""/> */}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}

      <Description />
    </div>
  );
}

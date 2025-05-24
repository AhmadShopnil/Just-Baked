"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Description from "./Description";
import { useCart } from "@/hooks/useCart";
import { getMetaValueFromExtra_Fields } from "@/helpers/metaHelpers";



// Replace this with fetched API data in the future
// const product = {
//   id: "1",
//   name: "Chicken Roll",
//   price: 230,
//   description1:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   description2:
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   images: [
//     "/image/food/a1.png",
//     "/image/food/a2.png",
//     "/image/food/a3.png",
//     "/image/food/a4.png",
//   ],
//   sku: "01-composite-order",
//   categories: "Hot meals, snack roll",
//   ingredients: "Potato, Oil",
// };

export default  function Product({product}) {
  const { dispatch } = useCart();
  const [mainImage, setMainImage] = useState(product?.featured_image);
  const [quantity, setQuantity] = useState(1);
const images =getMetaValueFromExtra_Fields(product,"extra_images")

const original_price =getMetaValueFromExtra_Fields(product,"original_price")
const discounted_price =getMetaValueFromExtra_Fields(product,"discounted_price")


  // console.log("Single product images: ", images)


  const selectedItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product?.featured_image,
    quantity: quantity,
  };

// useEffect(()=>{
//   setMainImage(product?.featured_image)
// },[])

  const handleAddTocart = () => {
    dispatch({ type: "ADD_ITEM", payload: selectedItem });
  };

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
    <div className="py-8  max-w-[1700px] mx-auto w-full px-4 md:px-10">
      <div className="flex items-center text-xs md:text-[14px]  text-gray-500 justify-center md:justify-start">
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
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 py-10">
        {/* Product Images Section */}
        <div className="w-full md:w-2/5">
          <div className="shadow-md rounded-md p-4 mb-4 bg-white">
            <div className="relative h-[450px] w-full">
              <Image
                src={product?.featured_image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`shadow-md border rounded-md cursor-pointer p-2 w-full h-20 relative ${
                  mainImage === image ? "border-amber-600" : "border-gray-200"
                }`}
                onClick={() => handleThumbnailClick(image)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-3/5">
          <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
          <div className="text-2xl font-bold mb-4">৳ {discounted_price}/-</div>

          <p className="text-gray-600 mb-6">{product?.description}</p>
          {/* <p className="text-gray-600 mb-6">{product.description2}</p> */}

          {/* Quantity Selector and Add to Cart  */}
          <div className="flex items-center mb-6 gap-4">
            <div className="flex border border-gray-300 rounded">
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

            <Link
              href={"/cart"}
              onClick={handleAddTocart}
              className="bg-[#724B00] text-white py-[7px] px-6 rounded hover:bg-[#724B12]
                transition-transform duration-150 ease-in-out text-sm cursor-pointer active:scale-95"
            >
              ADD TO CART
            </Link>
          </div>

          <div className="border border-gray-200"></div>

          {/* Product Details */}
          <div className="my-6">
            <div className="flex mb-2 gap-6">
              <span className="font-semibold w-24">SKU</span>
              <span>{product.sku}</span>
            </div>
            <div className="flex gap-6">
              <span className="font-semibold w-24">Categories</span>
              <span>{product.categories}</span>
            </div>
            <div className="flex gap-6">
              <span className="font-semibold w-24">Ingredients</span>
              <span>{product.ingredients}</span>
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center gap-5">
            <span className="w-24">Share:</span>
            <div className="flex gap-2">
              <button className="w-6 h-6 rounded-full bg-red-500"></button>
              <button className="w-6 h-6 rounded-full bg-blue-500"></button>
              <button className="w-6 h-6 rounded-full bg-green-500"></button>
              <button className="w-6 h-6 rounded-full bg-purple-500"></button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Description />
    </div>
  );
}

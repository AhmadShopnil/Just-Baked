"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Description from "./Description";
import { useCart } from "@/hooks/useCart";
import { getMetaValueFromExtra_Fields } from "@/helpers/metaHelpers";
import ConfirmAddToCartModal from "../shared/ConfirmAddToCartModal";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import toast from "react-hot-toast";


export default function Product({ product }) {
  const [openModal, setOpenModal] = useState(false);
  const { dispatch } = useCart();
  const [mainImage, setMainImage] = useState(product?.featured_image);
  const [quantity, setQuantity] = useState(1);
  const images = getMetaValueFromExtra_Fields(product, "extra_images");
  const original_price = getMetaValueFromExtra_Fields(product, "original_price");
  const discounted_price = getMetaValueFromExtra_Fields(product, "discounted_price");
  const ingredients = getMetaValueFromExtra_Fields(product, "ingredients");
   const [origin, setOrigin] = useState("");

  const selectedItem = {
    id: product.id,
    name: product?.name,
    price: discounted_price,
    original_price: original_price,
    image: product?.featured_image,
    quantity: quantity,
  };

 

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const shareUrl = `${origin}/product/${product?.slug}`;
  const shareText = `Check out this product: ${product?.name}`;

 
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
    <div className="py-0 md:py-8 max-w-[1700px] mx-auto w-full px-4 md:px-10 ">
      {/* Breadcrumb */}
      <div className="flex items-center text-xs md:text-[14px] text-gray-500 
      justify-center md:justify-start ">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">{product?.name}</span>
      </div>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-8 py-4 md:py-10">
        {/* Product Images */}
        <div className="w-full md:w-2/5">
          <div className="shadow-md rounded-md p-4 mb-4 bg-white">
            <div className="relative h-[450px] w-full bg-gray-100 rounded-md">
              <Image
                src={mainImage || "/placeholder.svg"}
                alt={product?.name}
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 flex-wrap">
            {images?.map((image, index) => (
              <div
                key={index}
                className={`shadow-md border rounded-md p-2 w-20 h-20 relative cursor-pointer ${
                  mainImage === image ? "border-amber-600" : "border-gray-200"
                }`}
                onClick={() => handleThumbnailClick(image)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  width={85}
                  height={85}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-3/5">
          <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
          <div className="text-2xl font-bold mb-4 text-amber-600">৳ {discounted_price}/-</div>
          <div
            className="text-gray-600 mb-6"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          />

          {/* Quantity and Cart Button */}
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
                className="px-3 py-1 border-l border-gray-300"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button
              onClick={() => setOpenModal(true)}
              className="bg-[#724B00] text-white py-[7px] px-6 rounded hover:bg-[#724B12] transition-transform duration-150 ease-in-out text-sm cursor-pointer active:scale-95"
            >
              ADD TO CART
            </button>
          </div>

          <div className="border border-gray-200"></div>

          {/* Info */}
          <div className="my-6">
            <div className="flex mb-2 gap-6">
              <span className="font-semibold w-24">Categories</span>
              <span>
                {Array.isArray(product.categories)
                  ? product.categories.map((cat, index) => (
                      <span key={cat.id}>
                        {cat.name}
                        {index !== product.categories.length - 1 && ", "}
                      </span>
                    ))
                  : product.categories?.name || product.categories}
              </span>
            </div>

            <div className="flex gap-6">
              <span className="font-semibold w-24">Ingredients</span>
              <span>{ingredients}</span>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-5 mt-4">
            <span className="w-24 font-semibold">Share:</span>
            <div className="flex gap-3 text-lg [&>a]:transition [&>a:hover]:scale-110">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500"
              >
                <FaWhatsapp />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  shareUrl
                )}&text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                <FaLinkedinIn />
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  toast.success(`Link Copied`);
                }}
                className="text-gray-500 text-sm underline ml-2"
              >
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Description product={product} />

      <ConfirmAddToCartModal
        show={openModal}
        onClose={() => setOpenModal(false)}
        product={selectedItem}
      />
    </div>
  );
}

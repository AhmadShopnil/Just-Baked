"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import CategoryDropdown from "../shared/CategoryDropdown";
import CartDropdown from "../shared/CartDropdown";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import LoginModal from "../shared/LoginModal";

// Sample cart data
const cartItems = [
  {
    id: 1,
    name: "Chicken Roll",
    price: "৳ 230/-",
    quantity: 1,
    image: "/image/food/a1.png",
  },
  {
    id: 2,
    name: "Chicken Roll",
    price: "৳ 230/-",
    quantity: 1,
    image: "/image/food/a1.png",
  },
  {
    id: 3,
    name: "Chicken Roll",
    price: "৳ 230/-",
    quantity: 1,
    image: "/image/food/a1.png",
  },
];

const Mainmenu = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
    if (isCartOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isCategoriesOpen) setIsCategoriesOpen(false);
  };

  const closeDropdowns = () => {
    setIsCategoriesOpen(false);
    setIsCartOpen(false);
  };

  return (
    <div
      onClick={closeDropdowns}
      className="flex flex-col justify-center items-center gap-[10px] self-stretch border-t border-t-[#B2B2B2]"
      style={{
        background: "linear-gradient(0deg, #fff 0%, #fff 100%), #ffe6c5",
      }}
    >
      {/* Main container */}
      <div className="flex py-2 lg:py-5 justify-between items-center self-stretch w-full relative">
        {/* Left group (Browse & Offer) */}
        <div className="  hidden lg:flex gap-[30px] ">
          <div className="relative">
            {/* Browse Category */}
            <div
              className="flex h-[38px] px-5 py-[7px] items-center gap-10 rounded-[5px] bg-primary-strong cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toggleCategories();
              }}
            >
              <Image
                src="/image/Header Image/Group 1810.svg"
                alt="Browse Icon"
                width={18}
                height={18}
              />
              <span className="text-white text-base font-bold leading-normal uppercase">
                Browse category
              </span>
              <Image
                src="/image/Header Image/Rectangle 1425.svg"
                alt="Dropdown Icon"
                width={10}
                height={6}
              />
            </div>

            {isCategoriesOpen && (
              <div
                className="absolute top-[50px] left-0 bg-white shadow-lg z-50 p-4 
              w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <CategoryDropdown onClose={() => setIsCategoriesOpen(false)} />
              </div>
            )}
          </div>
          {/* Offer */}
          <button className="flex items-center gap-[7px] p-[7px_20px] rounded-[5px] bg-orange-600 cursor-pointer">
            <Image
              src="/image/Header Image/Vector (2).svg"
              alt="Offer Icon"
              width={16}
              height={16}
            />
            <h4 className="text-white text-base font-bold leading-normal uppercase">
              Offer
            </h4>
          </button>
        </div>

        {/* Search */}
        <div className="hidden lg:block">
          <input
            type="search"
            placeholder="Search for product"
            className="border border-primary-strong focus:outline-none 
            h-[38px] w-64 md:w-44 lg:w-sm 2xl:w-[712px] py-[7px]
             px-5 rounded-[5px]"
          />
        </div>

        {/* Login & Cart */}
        <div className="hidden lg:flex items-center gap-[26px] relative">
          <button
            className="cursor-pointer flex items-center gap-2.5"
            onClick={() => setIsLoginModalOpen(true)}
          >
            <Image
              src="/image/Header Image/Vector (4).svg"
              alt="Login Icon"
              width={16}
              height={16}
            />
            <h4 className="uppercase text-primary-strong hidden xl:flex">login/register</h4>
          </button>
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
          />

          <div
            className="flex items-center gap-2.5 cursor-pointer relative"
            onClick={(e) => {
              e.stopPropagation();
              toggleCart();
            }}
          >
            <Image
              src="/image/Header Image/Vector (5).svg"
              alt="Cart Icon"
              width={16}
              height={16}
            />
            <span className="text-black font-bold">330</span>

            {isCartOpen && <CartDropdown cartItems={cartItems} />}
          </div>
        </div>
      </div>


      {/* Mobile Menu */}
      <div className="lg:hidden w-full  pb-4 space-y-4 ">
        {/* Login & Cart */}
        <div className="flex  justify-between">
          <button
            className="flex items-center gap-2 text-primary-strong font-bold uppercase"
            onClick={() => setIsLoginModalOpen(true)}
          >
            <Image
              src="/image/Header Image/Vector (4).svg"
              alt="Login"
              width={16}
              height={16}
            />
            Login/Register
          </button>
          <div className="px-3">
            <LoginModal
              isOpen={isLoginModalOpen}
              onClose={() => setIsLoginModalOpen(false)}
            />
          </div>
          <Link href="/cart" className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/image/Header Image/Vector (5).svg"
              alt="Cart"
              width={16}
              height={16}
            />
            <span className="font-bold">330</span>
          </Link>
        </div>

        {/* Browse */}
        <div
          className="flex items-center justify-between bg-primary-strong text-white px-4 py-2 rounded cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            toggleCategories();
          }}
        >
          <span className="uppercase font-bold">Browse Category</span>
          <Image
            src="/image/Header Image/Rectangle 1425.svg"
            alt="Dropdown"
            width={10}
            height={6}
          />
        </div>
        {isCategoriesOpen && (
          <div
            className="bg-white shadow-md rounded px-2 py-1"
            onClick={(e) => e.stopPropagation()}
          >
            <CategoryDropdown onClose={() => setIsCategoriesOpen(false)} />
          </div>
        )}

        {/* Offer */}
        <div className="flex items-center gap-2 bg-orange-600 px-4 py-2 rounded text-white font-bold uppercase">
          <Image
            src="/image/Header Image/Vector (2).svg"
            alt="Offer"
            width={16}
            height={16}
          />
          Offer
        </div>

        {/* Search */}
        <input
          type="search"
          placeholder="Search for product"
          className="border border-primary-strong w-full py-2 px-3 rounded"
        />
      </div>
    </div>
  );
};

export default Mainmenu;

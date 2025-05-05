"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import CategoryDropdown from "../shared/CategoryDropdown";
import CartDropdown from "../shared/CartDropdown";
import Link from "next/link";

// Sample cart data
const cartItems = [
  { id: 1, name: "Chicken Roll", price: "৳ 230/-", quantity: 1 },
  { id: 2, name: "Chicken Roll", price: "৳ 230/-", quantity: 1 },
  { id: 3, name: "Chicken Roll", price: "৳ 230/-", quantity: 1 },
];

const Mainmenu = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
      <div className="flex py-5 px-2 lg:px-5 xl:px-16 2xl:px-[130px] justify-between items-center self-stretch w-full relative">
        {/* --------------------Browse----------------- */}
        <div className="flex gap-[30px] relative">
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
            <h4 className="text-white text-base font-bold leading-normal uppercase">
              Browse category
            </h4>
            <Image
              src="/image/Header Image/Rectangle 1425.svg"
              alt="Dropdown Icon"
              width={10}
              height={6}
            />
          </div>

          {isCategoriesOpen && (
            <div
              className="absolute top-[50px] left-0 bg-white  shadow-lg z-50 p-4 w-64"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Replace with <CategoryDropdown /> if needed */}

              <CategoryDropdown onClose={() => setIsCategoriesOpen(false)} />
              {/* <p className="text-sm text-gray-700">Category List Item 1</p>
              <p className="text-sm text-gray-700">Category List Item 2</p>
              <p className="text-sm text-gray-700">Category List Item 3</p> */}
            </div>
          )}

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

        {/* --------Search--------- */}
        <div>
          <input
            type="search"
            placeholder="Search for product"
            className="border border-primary-strong focus:outline-none h-[38px] w-64 lg:w-sm 2xl:w-[712px] py-[7px] px-5 rounded-[5px]"
          />
        </div>

        {/* ----------------login & cart------------ */}
        <div className="flex items-center gap-[26px] relative">
          <button className="cursor-pointer flex items-center gap-2.5">
            <Image
              src="/image/Header Image/Vector (4).svg"
              alt="Login Icon"
              width={16}
              height={16}
            />
            <h4 className="uppercase text-primary-strong">logon/register</h4>
          </button>
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

            {isCartOpen && (
              <div
                className="absolute right-0 top-[50px] bg-white  rounded-b-sm shadow-xl z-50 p-4 w-64"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Replace with <CartDropdown /> if needed */}
                <div className=" overflow-y-auto rounded-b-sm ">
                  {cartItems?.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 border-b border-gray-100"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-amber-100 p-2 rounded-md">
                          <Image
                            src="/chicken-roll.png"
                            alt={item.name}
                            width={30}
                            height={30}
                            className="h-6 w-6 object-contain"
                          />
                        </div>
                        <div className="">
                          <p className="text-sm font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-500 font-semibold">
                            {item.price}
                          </p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        X
                      </button>
                    </div>
                  ))}
                </div>
                <div className="p-4 ">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Subtotal:</span>
                    <span className="font-medium">5000</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 font-semibold">
                    <Link
                      href="/cart"
                      className="bg-gray-200  py-2 text-center 
                       text-sm rounded"
                    >
                      View Cart
                    </Link>
                    <Link
                      href="/checkout"
                      className="primary-strong bg-primary-strong text-white py-2 text-center 
                       text-sm rounded"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainmenu;

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, Phone, ChevronDown } from "lucide-react";
import CategoryDropdown from "../shared/CategoryDropdown";
import CartDropdown from "../shared/CartDropdown";


const Mainmenu = () => {
const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sample cart data
  const cartItems = [
    { id: 1, name: "Chicken Roll", price: "৳ 230/-", quantity: 1,image:"/image/food/a1.png" },
    { id: 2, name: "Chicken Roll", price: "৳ 230/-", quantity: 1,image:"/image/food/a1.png" },
    { id: 3, name: "Chicken Roll", price: "৳ 230/-", quantity: 1,image:"/image/food/a1.png" },
  ];

  const subtotal = "৳ 230/-";

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
    if (isCartOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isCategoriesOpen) setIsCategoriesOpen(false);
  };

  // Close dropdowns when clicking outside
  const closeDropdowns = () => {
    setIsCategoriesOpen(false);
    setIsCartOpen(false);
  };



    return (
      <div  onClick={closeDropdowns} className="container mx-auto flex justify-between items-center py-3 px-4">
      <div className="flex space-x-2 ">
        <div className="relative">
          <button
            className="bg-[#724B00] text-white px-4 py-2 rounded flex items-center text-sm"
            onClick={(e) => {
              e.stopPropagation();
              toggleCategories();
            }}
          >
            <span>BROWSE CATEGORIES</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>

          {/* Categories Dropdown */}
          {isCategoriesOpen && (
            <CategoryDropdown onClose={() => setIsCategoriesOpen(false)} />
          )}
        </div>

        <button className="bg-orange-500 text-white px-4 py-2 rounded flex items-center text-sm">
          <span>OFFER</span>
        </button>
      </div>

      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border rounded-md py-2 px-4 text-sm"
          />
          <button className="absolute right-0 top-0 h-full px-3">
            <Search className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/login" className="text-sm font-medium text-amber-800">
          LOGIN / REGISTER
        </Link>
        <div className="relative">
          <button
            className="relative"
            onClick={(e) => {
              e.stopPropagation();
              toggleCart();
            }}
          >
            <ShoppingCart className="h-5 w-5 text-amber-800" />
            <span className="absolute -top-2 -right-2 bg-amber-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Cart Dropdown */}
          {isCartOpen && (
            <CartDropdown
              items={cartItems}
              subtotal={subtotal}
              onClose={() => setIsCartOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
    );
}

export default Mainmenu;

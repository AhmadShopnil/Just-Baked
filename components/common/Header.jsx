"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, Phone, ChevronDown } from "lucide-react";
import CategoryDropdown from "../shared/CategoryDropdown";
import CartDropdown from "../shared/CartDropdown";
import TopBar from "./TopBar";
import Mainmenu from "./Mainmenu";

export default function Header() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sample cart data
  const cartItems = [
    { id: 1, name: "Chicken Roll", price: "৳ 230/-", quantity: 1 },
    { id: 2, name: "Chicken Roll", price: "৳ 230/-", quantity: 1 },
    { id: 3, name: "Chicken Roll", price: "৳ 230/-", quantity: 1 },
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
    <header onClick={closeDropdowns}>
      {/* Top Header with Contact Info */}

      <TopBar />

      {/* Search and Navigation Bar */}
      <Mainmenu/>
    </header>
  );
}

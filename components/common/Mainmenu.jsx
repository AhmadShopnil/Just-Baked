"use client";

import { useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import CategoryDropdown from "../shared/CategoryDropdown";
import CartDropdown from "../shared/CartDropdown";
import Link from "next/link";
import LoginModal from "../shared/LoginModal";
import { useCart } from "@/hooks/useCart";
import axiosInstance from "@/helpers/axiosInstance";
import { UserContext } from "@/context/UserContext";
import { LogOut, Search } from "lucide-react";

const Mainmenu = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { state } = useCart();
  const [categories, setCategories] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isOfferAvailable, setIsOfferAvailable] = useState(false);
  const { state: userState, dispatch } = useContext(UserContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const userName = userState?.user?.full_name;
  const cart = state.items;
  const subtotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.length > 0) {
        try {
          const res = await axiosInstance.get(
            `/posts?term_type=product&s=${searchTerm}`
          );
          setSuggestions(res.data.data);
        } catch (error) {
          console.error("Failed to fetch suggestions:", error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  useEffect(() => {
    const fetchOfferItems = async () => {
      try {
        const res = await axiosInstance.get(
          "/posts?term_type=product&category_slug=20-offer"
        );
        const offerItems = res.data.data;
        setIsOfferAvailable(offerItems.length > 0);
      } catch (error) {
        console.error("Failed to fetch offer items:", error);
        setIsOfferAvailable(false);
      }
    };

    fetchOfferItems();
  }, []);

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

  const OfferOrContactButton = () =>
    isOfferAvailable ? (
      <Link
        href="/shop/20-offer"
        className="flex items-center gap-[7px] p-[7px_20px] rounded-[5px] cursor-pointer bg-orange-600"
      >
        <Image
          src="/image/Header Image/Vector (2).svg"
          alt="Offer Icon"
          width={17}
          height={17}
        />
        <h4 className="text-white text-base font-bold leading-normal uppercase">
          Offer
        </h4>
      </Link>
    ) : (
      <Link
        href="/contact"
        className="flex items-center gap-[7px] p-[7px_20px] rounded-[5px] cursor-pointer bg-primary-strong"
      >
        <h4 className="text-white text-base font-bold leading-normal uppercase">
          Contact
        </h4>
      </Link>
    );

  return (
    <div
      onClick={closeDropdowns}
      className="flex flex-col justify-center items-center gap-[10px] self-stretch border-t border-t-[#B2B2B2]"
      style={{
        background: "linear-gradient(0deg, #fff 0%, #fff 100%), #ffe6c5",
      }}
    >
      {/* Desktop Header */}
      <div className="flex py-2 lg:py-5 justify-between items-center self-stretch w-full relative">
        <div className="hidden lg:flex gap-[30px]">
          <OfferOrContactButton />

          {/* Desktop Search with Toggle */}
          {/* search section */}
          <div className="hidden lg:flex  gap-5">
            <button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Search className="text-primary-strong" size={20} />
            </button>
            <div className="relative  items-center">
              <div
                className={`transition-all duration-300 ${
                  isSearchOpen ? "w-[500px] opacity-100" : "w-0 opacity-0"
                } overflow-hidden`}
              >
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onBlur={() => {
                    setTimeout(() => setSuggestions([]), 100);
                  }}
                  placeholder="Search for product"
                  className="border border-primary-strong focus:outline-none h-[38px] w-full py-[7px] px-5 rounded-[5px]"
                />
                {suggestions.length > 0 && (
                  <div className="absolute top-10 left-0 right-0 bg-white border border-gray-300 mt-1 z-20">
                    {suggestions.map((suggestion) => (
                      <Link
                        key={suggestion.id}
                        href={`/products/${suggestion.slug}`}
                        className="block px-3 py-2 hover:bg-gray-200"
                        onClick={() => setSearchTerm("")}
                      >
                        {suggestion.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-7 relative">
          {/* Cart */}
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
            <span className="text-black font-bold">{cart?.length}</span>
            {isCartOpen && (
              <CartDropdown
                cart={cart}
                subtotal={subtotal}
                onClose={() => setIsCartOpen(false)}
              />
            )}
          </div>

          {/* User Info */}
          {userName ? (
            <div className="flex items-center gap-7">
              <div className="flex items-center gap-2">
                <Image
                  src="/image/Header Image/Vector (4).svg"
                  alt="User Icon"
                  width={16}
                  height={16}
                />
                <span>{userName}</span>
              </div>
              <button onClick={handleLogout} title="Logout">
                <LogOut
                  size={16}
                  className="text-red-600 hover:text-red-800 cursor-pointer"
                />
              </button>
            </div>
          ) : (
            <>
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
                <h4 className="uppercase text-primary-strong hidden xl:flex">
                  login/register
                </h4>
              </button>
              <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
              />
            </>
          )}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden w-full pb-4 space-y-4">
        <div className="flex justify-between items-center px-4">
          {userName ? (
            <div className="flex items-center gap-2">
              <Image
                src="/image/Header Image/Vector (4).svg"
                alt="User Icon"
                width={16}
                height={16}
              />
              <span className="text-primary-strong font-bold">{userName}</span>
              <button onClick={handleLogout} title="Logout">
                <LogOut
                  size={16}
                  className="text-red-600 hover:text-red-800 cursor-pointer"
                />
              </button>
            </div>
          ) : (
            <button
              className="flex items-center gap-2 text-primary-strong font-bold uppercase"
              onClick={() => setIsLoginModalOpen(true)}
            >
              <Image
                src="/image/Header Image/Vector (4).svg"
                alt="Login Icon"
                width={16}
                height={16}
              />
              Login/Register
            </button>
          )}
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
          />

          <Link href="/cart" className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/image/Header Image/Vector (5).svg"
              alt="Cart"
              width={16}
              height={16}
            />
            <span className="font-bold">{subtotal}</span>
          </Link>
        </div>

        <div className="px-4">
          <OfferOrContactButton />
        </div>

        {/* Mobile Search with toggle */}
        <div className="px-4">
          <button
            onClick={() => setIsMobileSearchOpen((prev) => !prev)}
            className="flex items-center gap-2 text-primary-strong font-semibold"
          >
            <Search size={20} />
            <span>Search</span>
          </button>
          <div
            className={`mt-2 transition-all duration-300 ${
              isMobileSearchOpen
                ? "max-h-[100px] opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onBlur={() => {
                setTimeout(() => setSuggestions([]), 100);
              }}
              placeholder="Search for product"
              className="border border-primary-strong w-full py-2 px-3 rounded mt-2"
            />
            {suggestions.length > 0 && (
              <div className="bg-white border border-gray-300 mt-1 z-20">
                {suggestions.map((suggestion) => (
                  <Link
                    key={suggestion.id}
                    href={`/products/${suggestion.slug}`}
                    className="block px-3 py-2 hover:bg-gray-200"
                    onClick={() => setSearchTerm("")}
                  >
                    {suggestion.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainmenu;

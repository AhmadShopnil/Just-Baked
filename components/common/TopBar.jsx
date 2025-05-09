"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const TopBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Cart", href: "/cart" },
    { name: "Product", href: "/product" },
    { name: "Outlets", href: "/outlets" },
    // { name: "Halal investment", href: "/halal-investment" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex py-3 md:py-4 justify-between items-center self-stretch">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/image/Header Image/Vector.svg"
          alt="Logo"
          width={95}
          height={40}
          className="cursor-pointer"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-center items-center gap-[10px]">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <React.Fragment key={item.name}>
              <Link href={item.href} className="cursor-pointer">
                <span
                  className={`${
                    isActive
                      ? "text-primary-strong font-bold"
                      : "text-[#949494] font-normal"
                  } text-base leading-normal uppercase transition-colors`}
                >
                  {item.name}
                </span>
              </Link>
              {index !== menuItems.length - 1 && (
                <div className="border border-gray-200 h-4" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Contact Info */}
      <div className="hidden lg:flex items-center gap-[6px]">
        <Image
          src="/image/Header Image/Vector (1).svg"
          alt="Phone Icon"
          width={50}
          height={40}
        />
        <div className="grid-cols-1">
          <span className="text-black text-sm font-medium leading-[16px]">
            +880 1711 535 658,
            <br />
            +880 1755 682 026
          </span>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md z-50 px-4 py-4 lg:hidden">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <h5
                    className={`${
                      isActive
                        ? "text-primary-strong font-bold"
                        : "text-[#949494] font-normal"
                    } text-base leading-normal uppercase`}
                  >
                    {item.name}
                  </h5>
                </Link>
              );
            })}
            {/* Contact for mobile */}
            <div className="flex items-start gap-[6px] pt-3 border-t border-gray-200">
              <Image
                src="/image/Header Image/Vector (1).svg"
                alt="Phone Icon"
                width={30}
                height={30}
              />
              <div className="text-black text-sm font-medium leading-[16px]">
                +880 1711 535 658,
                <br />
                +880 1755 682 026
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;

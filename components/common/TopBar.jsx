"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Cart", href: "/cart" },
    { name: "Product", href: "/product" },
    // { name: "Gift", href: "/gift" },
    // { name: "Corporate", href: "/corporate" },
    { name: "Outlets", href: "/outlets" },
    { name: "Halal investment", href: "/halal-investment" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex px-2 lg:px-5 xl:px-16 2xl:px-[130px] py-6 justify-between items-center self-stretch">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/image/Header Image/Vector.svg"
          alt="Logo"
          width={100}
          height={40}
          className="cursor-pointer"
        />
      </Link>

      {/* Menu */}
      <div className="flex justify-center items-center gap-[10px]">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <React.Fragment key={item.name}>
              <Link href={item.href} className="cursor-pointer">
                <h5
                  className={`${
                    isActive
                      ? "text-primary-strong font-bold"
                      : "text-[#949494] font-normal"
                  } text-base leading-normal uppercase transition-colors`}
                >
                  {item.name}
                </h5>
              </Link>
              {index !== menuItems.length - 1 && (
                <div className="border border-gray-200 h-4" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Contact Info */}
      <div className="flex items-center gap-[6px]">
        <Image
          src="/image/Header Image/Vector (1).svg"
          alt="Phone Icon"
          width={50}
          height={50}
        />
        <div className="grid-cols-1">
          <span className="text-black text-sm font-medium leading-[16px]">
            +880 1711 535 658,
            <br />
            +880 1755 682 026
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

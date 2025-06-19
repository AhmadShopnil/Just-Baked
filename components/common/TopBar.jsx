"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useSettings } from "@/hooks/useSettings";
import { getMetaValueByMetaName } from "@/helpers/metaHelpers";
import axiosInstance from "@/helpers/axiosInstance";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { UserContext } from "@/context/UserContext";

const TopBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [settings, setSettings] = useState(null);
  
const { state, dispatch } = useContext(UserContext);
const user=state?.user
  useEffect(() => {
    axiosInstance
      .get("/frontend/settings")
      .then((response) => {
        setSettings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching settings:", error);
      });
  }, []);

  // const { settings, loading, error } = useSettings();
  const phone = getMetaValueByMetaName(settings, "company_phone") || "";
  const phone2 = getMetaValueByMetaName(settings, "company_phone_2") || "";
  const whatsApp = getMetaValueByMetaName(settings, "whats_app") || "";
  // console.log("settfing from topbar: ",settings)

 const menuItems = [
  { name: "Bakery", href: "/shop/bekery" },
  { name: "Fast Food", href: "/shop/fast-food" },
  { name: "Frozen Snacks", href: "/shop/frozen-snacks" },
  { name: "Cart", href: "/cart" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  ...(user ? [{ name: "My Orders", href: "/dashboard/orders" }] : []),
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
      <div className="hidden lg:flex flex-col items-center gap-[6px] ">
        <a
          href={`tel:${phone}`}
          className="flex items-center gap-2 hover:underline"
        >
          <FaPhoneAlt className="w-5 h-5 text-gray-700" />
          <span className="text-black text-sm font-medium leading-[16px]">
            {phone}
          </span>
        </a>

        <a
          href={`https://wa.me/${whatsApp.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <FaWhatsapp className="w-6 h-6 " />
          <span className="text-black text-sm font-medium leading-[16px]">
            {phone}
          </span>
        </a>
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
            <div className="flex flex-col items-start gap-[6px] pt-3 border-t border-gray-200">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 hover:underline"
              >
                <FaPhoneAlt className="w-5 h-5 text-gray-700" />
                <span className="text-black text-sm font-medium leading-[16px]">
                  {phone}
                </span>
              </a>

              <a
                href={`https://wa.me/${whatsApp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <FaWhatsapp className="w-6 h-6 text-green-600" />
                <span className="text-black text-sm font-medium leading-[16px]">
                  {whatsApp}
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;

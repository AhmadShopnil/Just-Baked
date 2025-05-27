"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CategoryDropdown({ onClose, categories }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      // ref={dropdownRef}
      className="absolute sm:top-48 md:top-0 left-0 w-full bg-white shadow-lg z-50"
    >
      <ul>
        {categories?.map((category) => (
          <Link
            key={category?.id}
            href={`/shop`}
            // href={`/shop?category=${category?.name.toLowerCase()}`}
            className="flex justify-between pl-4 pr-2 py-2 text-sm text-gray-700
             hover:bg-gray-100 border-b border-gray-200"
            
          >
            {category?.name}
            <span>
              <ChevronRight />
            </span>
          </Link>
        ))}
      </ul>
    </div>
  );
}

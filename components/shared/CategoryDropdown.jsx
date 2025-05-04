"use client"

import Link from "next/link"

export default function CategoryDropdown({ onClose }) {
  // Sample categories
  const categories = [
    "Honey",
    "Poultry & Meat",
    "Rice, Pulse & Grains",
    "Oil",
    "Signature Series",
    "Sweeteners & Dairy",
    "Spices",
    "Super Foods",
    "Dry Fish",
    "Tea, Snacks & Drinks",
    "Nuts & Dates",
    "Pickle & Chutney",
  ]

  return (
    <div
      className="absolute top-full left-0  w-full bg-white shadow-lg z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="py-1">
        {categories.map((category, index) => (
          <li key={index}>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700
             hover:bg-gray-100 border-b border-gray-200">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

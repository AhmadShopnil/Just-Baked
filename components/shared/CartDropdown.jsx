"use client"

import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

export default function CartDropdown({ items, subtotal, onClose }) {
  return (
    <div
      className="absolute top-full right-0 mt-2 w-80 bg-white border rounded-md shadow-lg z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="max-h-96 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border-b">
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
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">{item.price}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Subtotal:</span>
          <span className="font-medium">{subtotal}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/cart"
            className="bg-white border border-amber-800 text-amber-800 py-2 text-center text-sm rounded"
          >
            View Cart
          </Link>
          <Link href="/checkout" className="bg-amber-800 text-white py-2 text-center text-sm rounded">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

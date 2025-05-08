"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function CartDropdown({ cartItems, subtotal, onClose }) {
  return (
    <div
      className="absolute right-0 top-[50px] bg-white rounded-b-sm shadow-xl z-50 p-4 w-64"
      onClick={(e) => e.stopPropagation()}
    >
      {/* CartDropdown */}
      <div className="overflow-y-auto rounded-b-sm">
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
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500 font-semibold">
                  {item.price}
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">X</button>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Subtotal:</span>
          <span className="font-medium">5000</span>
        </div>
        <div className="grid grid-cols-2 gap-2 font-semibold">
          <Link
            href="/cart"
            className="bg-gray-200 py-2 text-center text-sm rounded"
          >
            View Cart
          </Link>
          <Link
            href="/checkout"
            className="primary-strong bg-primary-strong text-white py-2 text-center text-sm rounded"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function CartDropdown({ cart, subtotal, onClose }) {
  const {  dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <div
      className="absolute right-0 top-[50px] bg-white rounded-b-sm shadow-xl z-50 p-4 w-64"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="text-end ">
        <button onClick={onClose}>x</button>
      </div>
      {/* CartDropdown */}
      <div className="overflow-y-auto rounded-b-sm">
        {cart?.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b border-gray-100"
          >
            <div className="flex items-center space-x-3 text-[12px]">
              <div className="bg-white shadow-lg p-1 rounded-sm">
                <Image
                  src={item?.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className=" text-gray-500 font-semibold">{item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-gray-400 hover:text-gray-600"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
      <div className="p-4 text-[12px]">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Subtotal:</span>
          <span className="font-medium">{subtotal}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 font-semibold">
          <Link href="/cart" className="bg-gray-200 py-2 text-center  rounded">
            View Cart
          </Link>
          <Link
            href="/checkout"
            className="primary-strong bg-primary-strong text-white py-2 text-center  rounded"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function CartDropdown({ cart, subtotal, onClose }) {
  const { dispatch } = useCart();
  const dropdownRef = useRef(null);

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item?.id });
    toast.success(`${item?.name} removed from cart!`);
  };

  // Detect outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose(); // Close the dropdown
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const isEmpty = !cart || cart.length === 0;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-[50px] bg-white rounded-b-sm shadow-xl z-50 p-4 w-64"
    >
      <div className="text-end">
        <button onClick={onClose}>x</button>
      </div>

      {/* Cart Items or Empty Message */}
      <div className="overflow-y-auto rounded-b-sm">
        {isEmpty ? (
          <div className="p-4 text-center text-sm text-gray-500">
            🛒 Your cart is empty.
          </div>
        ) : (
          cart.map((item) => (
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
                  <div className="text-gray-500 font-semibold text-[10px]">
                    <span>{item.price}</span> x <span>{item.quantity}</span>{" "}
                    <span>= ৳ {item.price * item.quantity}/-</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Subtotal and Actions (only show if cart has items) */}
      {!isEmpty && (
        <div className="p-4 text-[12px]">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total:</span>
            <span className="font-medium">৳ {subtotal}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 font-semibold">
            <Link href="/cart" className="bg-gray-200 py-2 text-center rounded">
              View Cart
            </Link>
            <Link
              href="/checkout"
              className="bg-primary-strong text-white py-2 text-center rounded"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

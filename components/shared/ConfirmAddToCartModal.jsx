"use client";

import { addToCart } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

// import { addToCart } from "@/utils/cart";

export default function ConfirmAddToCartModal({ show, onClose, product }) {
  if (!show) return null;


  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };



  const handleConfirm = () => {
    // addToCart(product);
    handleAddToCart()
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl scale-95 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add this to your cart?</h2>

        <div className="flex items-start gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-xl shadow"
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900">{product?.name}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product?.short_description || "No description available."}</p>
            <div className="mt-2 text-sm text-gray-700">
              <p>Price: <span className="font-medium">${product.price}</span></p>
              <p>Quantity: <span className="font-medium">{product.quantity}</span></p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Confirm
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chicken Roll",
      price: 230,
      quantity: 2,
      image: "/images/chicken-roll-1.jpg",
    },
    {
      id: 2,
      name: "Chicken Roll",
      price: 230,
      quantity: 2,
      image: "/images/chicken-roll-1.jpg",
    },
    {
      id: 3,
      name: "Chicken Roll",
      price: 230,
      quantity: 2,
      image: "/images/chicken-roll-1.jpg",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showShippingCalculator, setShowShippingCalculator] = useState(false);
  const [shipping, setShipping] = useState(0);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Calculate total
  const total = subtotal + shipping - discount;

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Apply promo code
  const applyPromoCode = () => {
    // This would typically validate against an API
    // For demo purposes, any code gives 10% off
    if (promoCode.trim()) {
      setDiscount(Math.round(subtotal * 0.1));
    } else {
      setDiscount(0);
    }
  };

  // Calculate shipping
  const calculateShipping = () => {
    // This would typically call an API with address details
    // For demo purposes, set a flat rate
    setShipping(50);
    setShowShippingCalculator(false);
  };

  return (
    <div className="py-8">
      {/* Progress Steps */}
      <div className="bg-primary-strong text-white p-4 mb-8 flex justify-center items-center">
        <div className="flex items-center text-center ">
          <span className="font-bold">SHOPPING CART</span>
          <span className="mx-4">→</span>
          <span className="text-amber-300">CHECKOUT</span>
          <span className="mx-4">→</span>
          <span className="text-amber-300">ORDER COMPLETE</span>
        </div>
      </div>

      <div className="container px-2 lg:px-5 xl:px-16 2xl:px-[130px] mx-auto flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          <table className="w-full border-collapse shadow-2xl rounded-md">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-left font-bold">PRODUCT</th>
                <th className="px-6 py-4 text-left font-bold">PRICE</th>
                <th className="px-6 py-4 text-left font-bold">QUANTITY</th>
                <th className="px-6 py-4 text-left font-bold">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 last:border-b-0">
                  <td className="px-6 py-4 font-semibold">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                      <Trash2 size={18} />
                      </button>
                      <div className="w-16 h-16 relative">
                        <Image
                          src="/image/newArrival/freshCroissant.webp"
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">₹ {item.price}/-</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center border border-gray-300 w-fit">
                      <button
                        className="px-2 py-1 border-r border-gray-300"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="px-3 py-1">{item.quantity}</span>
                      <button
                        className="px-2 py-1 border-l border-gray-300"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    ₹ {item.price * item.quantity}/-
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Promo Code */}
          <div className="mt-8 p-6 shadow-2xl rounded-lg w-full lg:w-80">
            <h3 className="font-bold text-lg mb-4">Using A Promo Code?</h3>
            <div className="flex ">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border border-gray-200 p-2 flex-grow rounded-l-xl"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button
                className="bg-primary-strong text-white px-4 py-2 rounded-r-xl"
                onClick={applyPromoCode}
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Cart Total */}
        <div className="w-full lg:w-1/3">
          <div className="shadow-2xl rounded-lg p-6 font-semibold">
            <h3 className="font-bold text-xl mb-6">CART TOTAL</h3>

            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>₹ {subtotal}/-</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              {shipping > 0 ? (
                <span>₹ {shipping}/-</span>
              ) : (
                <button
                  className="text-amber-500 hover:underline"
                  onClick={() =>
                    setShowShippingCalculator(!showShippingCalculator)
                  }
                >
                  Calculate Shipping
                </button>
              )}
            </div>

            {showShippingCalculator && (
              <div className="mb-4 p-4 bg-gray-50">
                <p className="mb-2">
                  Shipping will be calculated based on your address.
                </p>
                <button
                  className="bg-primary-strong text-white px-4 py-2 w-full"
                  onClick={calculateShipping}
                >
                  Calculate
                </button>
              </div>
            )}

            {discount > 0 && (
              <div className="flex justify-between mb-4">
                <span>Discount</span>
                <span>-₹ {discount}/-</span>
              </div>
            )}

            <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
              <span>Total</span>
              <span>₹ {total}/-</span>
            </div>

            <button className="bg-primary-strong text-white py-2 w-full mt-6 font-bold">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

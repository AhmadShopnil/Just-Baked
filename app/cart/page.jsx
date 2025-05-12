"use client";
import { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Burger",
      price: 230,
      quantity: 2,
      image: "/image/fastFood/burger.webp",
    },
    {
      id: 2,
      name: "Chowmin",
      price: 230,
      quantity: 2,
      image: "/image/fastFood/chowmin.webp",
    },
    {
      id: 3,
      name: "Pizza",
      price: 230,
      quantity: 2,
      image: "/image/fastFood/pizza.webp",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showShippingCalculator, setShowShippingCalculator] = useState(false);
  const [shipping, setShipping] = useState(0);



  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const total = subtotal + shipping - discount;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.trim()) {
      setDiscount(Math.round(subtotal * 0.1));
    } else {
      setDiscount(0);
    }
  };

  const calculateShipping = () => {
    setShipping(50);
    setShowShippingCalculator(false);
  };


const cart = useSelector((state) => state.cart);
console.log("from cart:", cart);




  return (
    <div className="py-8 max-w-[1700px] mx-auto w-full px-4 md:px-10">
      {/* Progress Steps */}
     <div className="flex items-center text-xs md:text-[14px]  text-gray-500 mb-4 justify-center md:justify-start">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <span className="mx-1">/</span>
        <Link href="/snacks" className="hover:text-gray-700">
         Shopping Cart
        </Link>
      
        
      </div>

      {/* <div className="bg-primary-strong text-white p-4 mb-8 flex justify-center items-center">
        <div className="flex items-center text-center text-xs md:text-sm">
          <span className="font-bold">SHOPPING CART</span>
          <span className="mx-4">→</span>
          <span className="text-amber-300">CHECKOUT</span>
          <span className="mx-4">→</span>
          <span className="text-amber-300">ORDER COMPLETE</span>
        </div>
      </div> */}

      <div className="  flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3 ">

          <div className="overflow-x-auto shadow-sm">
            <div className="min-w-[640px]">
              <table className="w-full border-collapse shadow-2xl rounded-md">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-4 py-4 text-left font-bold">PRODUCT</th>
                    <th className="px-4 py-4 text-left font-bold">PRICE</th>
                    <th className="px-4 py-4 text-left font-bold">QUANTITY</th>
                    <th className="px-4 py-4 text-left font-bold">SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="px-4 py-4 font-semibold">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <Trash2 size={18} />
                          </button>
                          <div className="w-16 h-16 relative shrink-0">
                            <Image
                              src={item?.image}
                              alt={item?.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span>{item?.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        ₹ {item.price}/-
                      </td>
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
                      <td className="px-4 py-4 whitespace-nowrap">
                        ₹ {item.price * item.quantity}/-
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

         
        </div>

        {/* Cart Total */}
        <div className="w-full lg:w-1/3">
          <div className="shadow-sm rounded-lg p-6 font-semibold">
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
 {/* Promo Code */}
          <div className="mt-6 p-6 shadow-sm rounded-md w-full">
            <h3 className="font-bold text-lg mb-4">Using A Promo Code?</h3>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-0">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border border-gray-200 p-2 flex-grow 
                 sm:rounded-l-lg sm:rounded-r-none"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button
                className="bg-primary-strong text-white px-4 py-2  sm:rounded-l-none sm:rounded-r-lg"
                onClick={applyPromoCode}
              >
                Apply
              </button>
            </div>
          </div>
            <button className="bg-primary-strong rounded-md text-white py-2 w-full mt-6 font-bold">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

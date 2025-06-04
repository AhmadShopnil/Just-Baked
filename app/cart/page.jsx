"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { validateCoupon } from "@/helpers/validateCoupon";

export default function ShoppingCart() {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showShippingCalculator, setShowShippingCalculator] = useState(false);
  const [shipping, setShipping] = useState(0);
  const { state, dispatch } = useCart();

  const cart = state.items;

  // console.log("cart item ", cart);

  const subtotal = useMemo(
    () =>
      cart.reduce((acc, item) => {
        const price = parseFloat(item?.price) || 0;
        return acc + price * item.quantity;
      }, 0),
    [cart]
  );

  const total = subtotal + shipping - discount;

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const calculateShipping = () => {
    setShipping(50);
  };

  const applyPromoCode = async () => {
    const res = await validateCoupon(promoCode);
    // console.log(("prodo dis: ", res));

    if (res?.commission_type == "Parcentage") {
      const calculateDiscount = (res?.commission * subtotal) / 100;
      setDiscount(calculateDiscount);

      dispatch({
        type: "SET_DISCOUNT",
        payload: { amount: calculateDiscount,promoCode },
      });

    } else {
      setDiscount(res?.commission);
    }

  };

  // console.log("state from cart page: ", state);

  return (
    <div className="py-8 max-w-[1700px] mx-auto w-full px-4 md:px-10">
      {/* Breadcrumbs */}
      <div className="flex items-center text-xs md:text-[14px] text-gray-500 mb-4 justify-center md:justify-start">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <span className="mx-1">/</span>
        <Link href="/snacks" className="hover:text-gray-700">
          Shopping Cart
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
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
                  {cart.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="px-4 py-4 font-semibold">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <Trash2 size={18} />
                          </button>
                          <div className="w-16 h-16 relative shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        ৳ {item.price}/-
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center border border-gray-300 w-fit">
                          <button
                            className="px-2 py-1 border-r border-gray-300"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            className="px-2 py-1 border-l border-gray-300"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        ৳ {item.price * item.quantity}/-
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {cart.length === 0 && (
                <p className="text-center py-6 font-medium text-gray-500">
                  Your cart is empty.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="w-full lg:w-1/3">
          <div className="shadow-sm rounded-lg p-6 font-semibold">
            <h3 className="font-bold text-xl mb-6">CART TOTAL</h3>

            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>৳ {subtotal}/-</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              {shipping > 0 ? (
                <span>৳ {shipping}/-</span>
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
                <span>-৳ {discount}/-</span>
              </div>
            )}

            <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
              <span>Total</span>
              <span>৳ {total}/-</span>
            </div>

            {/* Promo Code Section */}
            <div className="mt-6 p-6 shadow-sm rounded-md w-full">
              <h3 className="font-bold text-lg mb-4">Using A Promo Code?</h3>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-0">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border border-gray-200 p-2 flex-grow rounded-md sm:rounded-l-lg sm:rounded-r-none"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button
                  className="bg-primary-strong text-white px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-lg"
                  onClick={applyPromoCode}
                >
                  Apply
                </button>
              </div>
            </div>
            <Link href={"/checkout"} className="cursor-pointer">
              <button className="bg-primary-strong rounded-md cursor-pointer text-white py-2 w-full mt-6 font-bold">
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

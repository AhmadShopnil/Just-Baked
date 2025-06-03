"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCart } from "@/hooks/useCart";
import { placeOrder } from "@/helpers/placeOrder";
import { redirect } from "next/navigation";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const { state, dispatch } = useCart();
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    thana: "",
    district: "",
    country: "Bangladesh",
  });
  const cartItems = state.items;
  const router = useRouter();

console.log("state from checkout page: ", state)


  // 🧮 Dynamic totals
  const shippingCost = 50;
  const discount = state?.discount || 0; // Hardcoded promo discount
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingCost - discount;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = async () => {
    const orderData = {
      shipping: {
        name: form.name,
        address: form.address,
        phone: form.phone,
        thana: form.thana,
        district: form.district,
        country: form.country,
      },
      paymentMethod,
      products: cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        original_price: item.original_price,
        id: item.id,
        qty: item.quantity,
        brand_id: 1,
        vendor_id: 1,
        category_id: 1,
        icon: item.image || "",
        slug: "",
        color: "",
        size: "",
      })),
      promoCode: "check_promo",
      promoType: "Fixed",
      promoAmount,
      shippingCost,
      total,
    };

    // console.log("Order data: ", orderData);
    try {
      const response = await placeOrder(orderData); // Calling the server action
      toast.success("Order placed successfully!");
      router.push(`/order/success?orderId=${response.unique_id}&total=${response.total}`);

      // redirect(`order/success?orderId=${response.id}&total=${response.total}`);
      // console.log("success", responce);
      // router.push("/order/success");
    } catch (error) {
      toast.error(error.message || "Order failed.");
    }
  };

  return (
    <div className="py-10 max-w-[1700px] mx-auto w-full px-4 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Recipient Name"
                className="border p-2 rounded-md w-full md:col-span-2"
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Shipping Address"
                className="border p-2 rounded-md w-full md:col-span-2"
                onChange={handleChange}
              />
              <input
                type="text"
                name="thana"
                placeholder="Thana"
                className="border p-2 rounded-md w-full"
                onChange={handleChange}
              />
              <input
                type="text"
                name="district"
                placeholder="District"
                className="border p-2 rounded-md w-full"
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="border p-2 rounded-md w-full"
                onChange={handleChange}
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="border p-2 rounded-md w-full"
                value={form.country}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow space-y-6 self-start">
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-4 mb-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b pb-2"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>৳ {(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
              <li className="flex justify-between border-b pb-2">
                <span>Subtotal</span>
                <span>৳ {subtotal.toFixed(2)}</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Shipping</span>
                <span>৳ {shippingCost.toFixed(2)}</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Discount</span>
                <span>-৳ {discount}</span>
              </li>
              <li className="flex justify-between font-semibold pt-2">
                <span>Total</span>
                <span>৳ {total.toFixed(2)}</span>
              </li>
            </ul>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-md font-medium mb-2">Payment Method</h3>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash"
                checked={paymentMethod === "Cash"}
                onChange={() => setPaymentMethod("Cash")}
              />
              <span>Cash on Delivery</span>
            </label>
          </div>

          <button
            onClick={handleSubmitOrder}
            className="w-full bg-[#724B00] text-white px-5 py-2 rounded-md hover:bg-[#5e3d00] transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCart } from "@/hooks/useCart";
import { placeOrder } from "@/helpers/placeOrder";
import { UserContext } from "@/context/UserContext";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const { state } = useCart();
  const { state: userState } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    thana: "",
    district: "",
    country: "Bangladesh",
    email: "",
    note: "",
  });
  const cartItems = state.items;
  const router = useRouter();
  const { dispatch } = useContext(UserContext);
  const isLoggedIn = userState?.user?.full_name ? true : false;
  const { dispatch: cartDispatch } = useCart();
  // console.log("state from checkout page: ", state)

  // 🧮 Dynamic totals
  const shippingCost = 50;
  const discount = state?.discount; // Hardcoded promo discount
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingCost - (discount?.amount || 0);

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
        email: form.email,
        note: form.note,
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
      promoCode: discount?.promoCode,
      promoType: "Fixed",
      promoAmount: discount?.amount,
      shippingCost,
      total,
    };

    // console.log("Order data: ", orderData);
    const token = localStorage.getItem("token");

    try {
      const response = await placeOrder(orderData, token, isLoggedIn); // Calling the server action

      // Optionally auto-login user after registration
      const { access_token, user_data } = response;

      const user = {
        full_name: user_data?.full_name,
        email: user_data?.email,
        phone: user_data?.phone,
      };

      dispatch({ type: "LOGIN", payload: { user, token: access_token } });
      cartDispatch({ type: "CLEAR_CART" });
      localStorage.setItem("token", access_token);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Order placed successfully!");
      router.push(
        `/order/success?orderId=${response?.order?.unique_id}&total=${response?.order?.total}`
      );
      
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
                required
                type="text"
                name="name"
                placeholder="Recipient Name"
                className="border p-2 rounded-md w-full md:col-span-2"
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="address"
                placeholder="Shipping Address"
                className="border p-2 rounded-md w-full md:col-span-2"
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="thana"
                placeholder="Thana"
                className="border p-2 rounded-md w-full"
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="district"
                placeholder="District"
                className="border p-2 rounded-md w-full"
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="phone"
                placeholder="Phone"
                className="border p-2 rounded-md w-full"
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="email"
                placeholder="Email"
                className="border p-2 rounded-md w-full"
                value={form.email}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="country"
                placeholder="Country"
                className="border p-2 rounded-md w-full"
                value={form.country}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="note"
                placeholder="Note"
                className="border p-2 rounded-md w-full"
                value={form.note}
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
                <span>-৳ {discount?.amount || 0}</span>
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
            className="w-full bg-[#724B00] text-white px-5 py-2 rounded-md hover:bg-[#5e3d00] transition cursor-pointer"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

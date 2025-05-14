"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleSubmitOrder = () => {
    const orderData = {
      billing: {
        firstName: "", 
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        postalCode: "",
        country: "",
      },
      shipping: {
        recipientName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
      },
      paymentMethod,
      products: [
        { name: "Product 1", price: 40 },
        { name: "Product 2", price: 25 },
      ],
      shippingCost: 5,
      total: 70,
    };

    // Replace this with your API call
    console.log("Submitting order:", orderData);
  };

  return (
    <div className="bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left: Billing & Shipping */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-2 rounded-md w-full" />
              <input type="text" placeholder="Last Name" className="border p-2 rounded-md w-full" />
              <input type="email" placeholder="Email Address" className="border p-2 rounded-md w-full md:col-span-2" />
              <input type="text" placeholder="Phone Number" className="border p-2 rounded-md w-full md:col-span-2" />
              <input type="text" placeholder="Address Line 1" className="border p-2 rounded-md w-full md:col-span-2" />
              <input type="text" placeholder="Address Line 2" className="border p-2 rounded-md w-full md:col-span-2" />
              <input type="text" placeholder="City" className="border p-2 rounded-md w-full" />
              <input type="text" placeholder="Zip/Postal Code" className="border p-2 rounded-md w-full" />
              <input type="text" placeholder="Country" className="border p-2 rounded-md w-full md:col-span-2" />
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Recipient Name" className="border p-2 rounded-md w-full md:col-span-2" />
              <input type="text" placeholder="Shipping Address" className="border p-2 rounded-md w-full md:col-span-2" />
              <input type="text" placeholder="City" className="border p-2 rounded-md w-full" />
              <input type="text" placeholder="Zip/Postal Code" className="border p-2 rounded-md w-full" />
              <input type="text" placeholder="Country" className="border p-2 rounded-md w-full md:col-span-2" />
            </form>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow space-y-6 self-start">
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-4 mb-4">
              <li className="flex justify-between border-b pb-2">
                <span>Product 1</span>
                <span>$40.00</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Product 2</span>
                <span>$25.00</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Shipping</span>
                <span>$5.00</span>
              </li>
              <li className="flex justify-between font-semibold pt-2">
                <span>Total</span>
                <span>$70.00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-medium mb-2">Payment Method</h3>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              <span>Cash on Delivery</span>
            </label>
          </div>

          <button
            onClick={handleSubmitOrder}
            className="w-full bg-[#724B00] text-white py-2 rounded-md hover:bg-[#5e3d00] transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

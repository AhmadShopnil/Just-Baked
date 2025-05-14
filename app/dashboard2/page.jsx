"use client";
import { useState, useEffect } from "react";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("orders");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching from API
    setTimeout(() => {
      setOrders([
        {
          id: "ORD12345",
          date: "2025-05-10",
          total: "$70.00",
          status: "Delivered",
          invoiceUrl: "/invoices/ORD12345.pdf", // Replace with your real endpoint
        },
        {
          id: "ORD12346",
          date: "2025-05-12",
          total: "$40.00",
          status: "Shipped",
          invoiceUrl: "/invoices/ORD12346.pdf",
        },
      ]);
      setLoading(false);
    }, 1000); // Simulated delay
  }, []);

  const renderTabContent = () => {
    if (loading) {
      return <p className="text-center py-10 text-gray-500">Loading orders...</p>;
    }

    if (activeTab === "orders") {
      return (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-md p-4 flex flex-col md:flex-row justify-between md:items-center bg-white shadow-sm"
            >
              <div>
                <p className="font-medium">Order #{order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>

              <div className="text-right mt-4 md:mt-0 space-y-1">
                <p className="font-semibold">{order.total}</p>
                <span
                  className={`text-sm px-2 py-1 rounded-full inline-block ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : order.status === "Shipped"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {order.status}
                </span>
                <div>
                  <a
                    href={order.invoiceUrl}
                    download
                    className="inline-block mt-1 text-sm text-[#724B00] hover:underline"
                  >
                    📄 Download Invoice
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === "tracking") {
      return (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p className="font-medium mb-2">Order #ORD12346</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>📦 Order Placed</li>
              <li>✅ Payment Confirmed</li>
              <li>🚚 Shipped</li>
              <li className="text-gray-400">⏳ Out for Delivery</li>
            </ul>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Welcome Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-2">Welcome, John Doe 👋</h1>
          <p className="text-gray-600">Manage your orders, track shipments, and view invoices.</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar/Profile Summary */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto bg-gray-200" />
              <p className="mt-2 font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">john@example.com</p>
            </div>
            <div className="space-y-2">
              <button
                className={`w-full py-2 rounded-md text-left px-3 ${
                  activeTab === "orders"
                    ? "bg-[#724B00] text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("orders")}
              >
                🧾 Order History
              </button>
              <button
                className={`w-full py-2 rounded-md text-left px-3 ${
                  activeTab === "tracking"
                    ? "bg-[#724B00] text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("tracking")}
              >
                🚚 Track Order
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";


import Link from "next/link";
import {
  BarChart3,
  Package,
  ShoppingCart,
  Heart,
  Settings,
  LogOut,
  Download,
  ChevronRight,
  Clock,
  CheckCircle2,
} from "lucide-react";
// import DownloadInvoiceButton from "@/components/shared/DownloadInvoiceButton";
import dynamic from "next/dynamic";
// Dynamically import with SSR disabled
const DownloadInvoiceButton = dynamic(() => import('@/components/shared/DownloadInvoiceButton'), {
  ssr: false,
});


// Sample data object
const dashboardData = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    initials: "JD",
  },
  stats: [
    {
      label: "Total Orders",
      value: 24,
      icon: <Package className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
    },
    {
      label: "Completed",
      value: 18,
      icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
      bgColor: "bg-green-50",
    },
    {
      label: "Pending",
      value: 6,
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      bgColor: "bg-amber-50",
    },
  ],
  recentOrders: [
    {
      id: "7245",
      orderId: "#ORD-7245",
      date: "May 12, 2025",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
      total: "$125.00",
    },
    {
      id: "7244",
      orderId: "#ORD-7244",
      date: "May 10, 2025",
      status: "Shipped",
      statusColor: "bg-blue-100 text-blue-800",
      total: "$75.50",
    },
    {
      id: "7243",
      orderId: "#ORD-7243",
      date: "May 8, 2025",
      status: "Processing",
      statusColor: "bg-yellow-100 text-yellow-800",
      total: "$249.99",
    },
  ],
};

export default function Dashboard() {
  const { user, stats, recentOrders } = dashboardData;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="flex flex-col flex-1 p-4 space-y-4">
          <div className="space-y-1">
            {/* <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Main
            </p> */}
            <Link
              href="/dashboard"
              className="flex items-center px-3 py-2 text-gray-800 bg-blue-50 rounded-lg font-medium"
            >
              <BarChart3 className="w-5 h-5 mr-3 text-blue-600" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/orders"
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Package className="w-5 h-5 mr-3 text-gray-500" />
              My Orders
            </Link>
            {/* <Link
              href="/dashboard/wishlist"
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Heart className="w-5 h-5 mr-3 text-gray-500" />
              Wishlist
            </Link> */}
          </div>
          {/* <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Account
            </p>
            <Link
              href="/dashboard/profile"
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Settings className="w-5 h-5 mr-3 text-gray-500" />
              Settings
            </Link>
            <button className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg w-full text-left">
              <LogOut className="w-5 h-5 mr-3 text-gray-500" />
              Logout
            </button>
          </div> */}
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
              {user.initials}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">
                  Welcome back, {user.name.split(" ")[0]}! Here's what's
                  happening with your orders.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  href="/shop"
                  className="inline-flex items-center px-4 py-2 bg-primary-strong text-white rounded-lg hover:bg-primary-strong focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
                >
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${item.bgColor}`}>
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">
                        {item.label}
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.value}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                  Recent Orders
                </h2>
                <Link
                  href="/dashboard/orders"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  View All
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order.orderId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.statusColor}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.total}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="p-1 rounded-md hover:bg-gray-100">
                              <DownloadInvoiceButton
                                order={{
                                  id: "7245",
                                  date: "May 12, 2025",
                                  status: "Delivered",
                                  total: "125.00",
                                }}
                              />

                              {/* <Download className="w-4 h-4 text-gray-500" /> */}
                            </button>
                            <Link
                              href={`/dashboard/orders/${order.id}`}
                              className="p-1 rounded-md hover:bg-gray-100"
                            >
                              <ChevronRight className="w-4 h-4 text-gray-500" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

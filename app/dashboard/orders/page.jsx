'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  ChevronRight,
  Search,
  Filter,
} from "lucide-react";
import dynamic from "next/dynamic";
import axiosInstance from "@/helpers/axiosInstance";
import { formatDateToDMY } from "@/helpers/formatDateToDMY";


const DownloadInvoiceButton = dynamic(
  () => import("@/components/shared/DownloadInvoiceButton"),
  { ssr: false }
);

const statusColor = {
  Delivered: "bg-green-100 text-green-800",
  Shipped: "bg-blue-100 text-blue-800",
  Processing: "bg-yellow-100 text-yellow-800",
  Cancelled: "bg-red-100 text-red-800",
};


export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.get("admin/orders/");
        setOrders(response.data?.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);


  console.log("order from oderder page:", orders)

  return (
    <div className="min-h-screen py-4 md:py-6 max-w-[1700px] mx-auto w-full px-4 md:px-10">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Link
          href="/"
          className="p-2 mr-2 rounded-lg hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
{/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
              <select className="pl-4 pr-8 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <option>All Orders</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="p-6 text-center text-gray-500">Loading orders...</div>
        ) : (
          <>
            {/* Orders Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    {["Order ID", "Date", "Status", "Items", "Total", "Actions"].map(
                      (heading) => (
                        <th
                          key={heading}
                          className={`px-6 py-3 text-xs font-medium uppercase tracking-wider ${
                            heading === "Actions" ? "text-right" : "text-left"
                          } text-gray-500`}
                        >
                          {heading}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                        #{`ORD-${order?.unique_id}`}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">

                        {formatDateToDMY(order?.created_at)}
                    
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            statusColor[order?.payment_status] ||
                            "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {order?.payment_status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {order?.quantity} {order?.quantity > 1 ? "items" : "item"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        ৳{order?.total}
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                        <div className="flex justify-end space-x-2">
                          <button className="p-1 rounded-md hover:bg-gray-100">
                            <DownloadInvoiceButton order={order} />
                          </button>
                          {/* <Link
                            href={`/dashboard/orders/${order?.unique_id}`}
                            className="p-1 rounded-md hover:bg-gray-100"
                          >
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                          </Link> */}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">{orders.length}</span> of{" "}
                  <span className="font-medium">24</span> orders
                </div>
                <div className="flex space-x-2">
                  <button
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled
                  >
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

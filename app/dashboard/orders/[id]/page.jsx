"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
} from "lucide-react";
import dynamic from "next/dynamic";
import axiosInstance from "@/helpers/axiosInstance";
import Image from "next/image";
import SingleOrderSkeleton from "@/components/MyOrder/SingleOrderSkeleton";

const DownloadInvoiceButton = dynamic(
  () => import("@/components/shared/DownloadInvoiceButton"),
  { ssr: false }
);

export default function OrderDetails({ params }) {
  const orderId = params.id;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axiosInstance.get(`/orders/${orderId}`);
        setOrder(res?.data || {});
      } catch (err) {
        console.error("Failed to fetch order:", err);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (!order) return <div className=""><SingleOrderSkeleton/></div>;

  const items = order?.order_item || []; // now an array
  const shipping = order?.shippings?.[0];
  const transaction = order?.transactions?.[0];

  return (
    <div className="min-h-screen py-6 px-4 md:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap items-center mb-6 gap-2">
        <Link
          href="/dashboard/orders"
          className="p-2 mr-2 rounded-lg hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          Order #{order.unique_id}
        </h1>
        <span className="ml-auto">
          <DownloadInvoiceButton
           order={order}
          >
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
              <Download className="w-4 h-4" />
              Download Invoice
            </button>
          </DownloadInvoiceButton>
        </span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Order Summary */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border rounded-xl shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Order Summary</h2>
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="text-left px-4 py-2">Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className="text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-gray-700">
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td className="flex items-center gap-4 px-4 py-3">
                        {item?.icon && (
                          <Image
                            src={item.icon}
                            alt={item.item_name}
                            width={50}
                            height={50}
                            className="rounded border"
                          />
                        )}
                        <div>
                          <p className="font-medium">{item.item_name}</p>
                        </div>
                      </td>
                      <td className="text-center">৳ {item.current_price}</td>
                      <td className="text-center">{item.quantity}</td>
                      <td className="text-right">
                        ৳ {item.current_price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan={3} className="text-right font-medium px-4 py-2">
                      Subtotal
                    </td>
                    <td className="text-right px-4 py-2">৳ {order.total}</td>
                  </tr>
                   <tr>
                    <td colSpan={3} className="text-right font-medium px-4 py-2">
                      Add Shipping Charge
                    </td>
                    <td className="text-right px-4 py-2">৳ {50}</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-right font-semibold px-4 py-2">
                     Total
                    </td>
                    <td className="text-right px-4 py-2 font-semibold text-lg">
                      ৳ { parseFloat(order.grand_total)+50}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Shipping and Payment Info */}
        <div className="space-y-6">
          <div className="bg-white border rounded-xl shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Shipping Information</h2>
            </div>
            <div className="p-6 text-sm text-gray-700 space-y-1">
              <p><strong>Name:</strong> {shipping?.name}</p>
              <p><strong>Phone:</strong> {shipping?.phone}</p>
              <p><strong>Email:</strong> {shipping?.email}</p>
              <p><strong>Address:</strong> {shipping?.address}</p>
              <p><strong>Thana:</strong> {shipping?.thana}</p>
              <p><strong>District:</strong> {shipping?.district}</p>
              <p><strong>Country:</strong> {shipping?.country}</p>
              <p><strong>Note:</strong> {shipping?.note || "N/A"}</p>
            </div>
          </div>

          <div className="bg-white border rounded-xl shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Payment Information</h2>
            </div>
            <div className="p-6 text-sm text-gray-700 space-y-1">
              <p><strong>Method:</strong> {transaction?.payment_method}</p>
              {/* <p><strong>Credit:</strong> ৳{transaction?.credit}</p> */}
              <p><strong>Status:</strong> {order.payment_status}</p>
            </div>
          </div>

          {/* <div className="bg-white border rounded-xl shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Need Help?</h2>
            </div>
            <div className="p-6 space-y-2 text-sm text-gray-700">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:tangailspaces@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  tangailspaces@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>015245</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

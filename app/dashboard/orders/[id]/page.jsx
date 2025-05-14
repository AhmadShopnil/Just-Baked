"use client";


import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Truck,
  Package,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";
// import DownloadInvoiceButton from "@/components/shared/DownloadInvoiceButton";


import dynamic from "next/dynamic";

// Dynamically import with SSR disabled
const DownloadInvoiceButton = dynamic(() => import('@/components/shared/DownloadInvoiceButton'), {
  ssr: false,
});

export default function OrderDetails({ params }) {
  const orderId = params.id;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <Link
            href="/dashboard/orders"
            className="p-2 mr-2 rounded-lg hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Order #{orderId}</h1>
          <span className="ml-auto inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <DownloadInvoiceButton
              order={{
                id: "7245",
                date: "May 12, 2025",
                status: "Delivered",
                total: "125.00",
              }}
            >
              <Download className="w-4 h-4 mr-2" />
            </DownloadInvoiceButton>
            Download Invoice
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">
                  Order Summary
                </h2>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="text-sm font-medium">May 10, 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order Status</p>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      Shipped
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payment Method</p>
                    <p className="text-sm font-medium">Credit Card</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-16 w-16 flex-shrink-0 rounded-md bg-gray-200"></div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              Wireless Headphones
                            </p>
                            <p className="text-sm text-gray-500">Black</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $75.50
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        $75.50
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-gray-50">
                    <tr>
                      <td
                        colSpan="3"
                        className="px-6 py-4 text-sm text-gray-500 text-right font-medium"
                      >
                        Subtotal
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">
                        $75.50
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan="3"
                        className="px-6 py-4 text-sm text-gray-500 text-right font-medium"
                      >
                        Shipping
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">
                        $5.00
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan="3"
                        className="px-6 py-4 text-sm text-gray-500 text-right font-medium"
                      >
                        Tax
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">
                        $6.04
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td
                        colSpan="3"
                        className="px-6 py-4 text-base text-gray-900 text-right font-bold"
                      >
                        Total
                      </td>
                      <td className="px-6 py-4 text-base text-gray-900 text-right font-bold">
                        $86.54
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Order Tracking */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900">
                    Order Tracking
                  </h2>
                  <div className="text-sm text-gray-500">
                    Tracking Number:{" "}
                    <span className="font-medium">TRK4587962354</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="relative">
                  <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200"></div>
                  <div className="space-y-8">
                    <div className="relative flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 z-10">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">
                          Order Placed
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          May 10, 2025 at 9:30 AM
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Your order has been placed and is being processed.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 z-10">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">
                          Order Processed
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          May 10, 2025 at 2:15 PM
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Your order has been processed and is ready for
                          shipping.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 z-10">
                        <Truck className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">
                          Order Shipped
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          May 11, 2025 at 10:45 AM
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Your order has been shipped via Express Delivery.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 animate-pulse z-10">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">
                          In Transit
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          May 12, 2025 at 8:30 AM
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Your package is on its way to your location.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 z-10">
                        <CheckCircle2 className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-400">
                          Delivered
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">
                          Estimated: May 15, 2025
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          Your package will be delivered to your address.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Shipping Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">
                  Shipping Information
                </h2>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    Shipping Address
                  </h3>
                  <p className="text-sm text-gray-600">John Doe</p>
                  <p className="text-sm text-gray-600">123 Main Street</p>
                  <p className="text-sm text-gray-600">Apt 4B</p>
                  <p className="text-sm text-gray-600">New York, NY 10001</p>
                  <p className="text-sm text-gray-600">United States</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    Shipping Method
                  </h3>
                  <p className="text-sm text-gray-600">
                    Express Delivery (2-3 business days)
                  </p>
                </div>
              </div>
            </div>

            {/* Billing Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">
                  Billing Information
                </h2>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    Payment Method
                  </h3>
                  <p className="text-sm text-gray-600">
                    Credit Card (Visa ending in 4242)
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    Billing Address
                  </h3>
                  <p className="text-sm text-gray-600">John Doe</p>
                  <p className="text-sm text-gray-600">123 Main Street</p>
                  <p className="text-sm text-gray-600">Apt 4B</p>
                  <p className="text-sm text-gray-600">New York, NY 10001</p>
                  <p className="text-sm text-gray-600">United States</p>
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Need Help?</h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-4">
                  If you have any questions about your order, please contact our
                  customer support team.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-500 mr-2" />
                    <a
                      href="mailto:support@shopease.com"
                      className="text-sm text-blue-600 hover:text-blue-500"
                    >
                      support@shopease.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-500 mr-2" />
                    <a
                      href="tel:+18001234567"
                      className="text-sm text-blue-600 hover:text-blue-500"
                    >
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

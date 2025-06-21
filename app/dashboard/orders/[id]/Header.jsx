"use client"

import Link from "next/link";
import {
  ArrowLeft,
  Download,
} from "lucide-react";
import dynamic from "next/dynamic";



const DownloadInvoiceButton = dynamic(
  () => import("@/components/shared/DownloadInvoiceButton"),
  { ssr: false }
);

const OrderDetailsHeader = ({order}) => {
    return (
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
    );
}

export default OrderDetailsHeader;

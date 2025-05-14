"use client"
import { PDFDownloadLink } from "@react-pdf/renderer"
import { Download } from "lucide-react"
import InvoiceDocument from "./InvoiceDocument"

export default function DownloadInvoiceButton({ order, children }) {
  return (
    <PDFDownloadLink
      document={<InvoiceDocument order={order} />}
      fileName={`invoice-${order.id}.pdf`}
    >
      {({ loading }) =>
        children ? (
          typeof children === "function" ? children({ loading }) : children
        ) : (
          <button className="p-1 rounded-md hover:bg-gray-100" disabled={loading}>
            <Download className="w-4 h-4 text-gray-500" />
          </button>
        )
      }
    </PDFDownloadLink>
  )
}

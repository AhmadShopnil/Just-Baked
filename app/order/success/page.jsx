'use client'; // Only needed in `app` directory if using interactive logic

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-10">
      <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Thank You for Your Order!
      </h1>
      <p className="text-gray-600 mt-4 max-w-xl">
        We’ve received your order and will begin processing it shortly. You’ll receive an update when your items are on the way.
      </p>

      <Link href="/shop" className="mt-8 inline-block bg-primary-strong text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-primary-dark transition">
        Continue Shopping
      </Link>
    </div>
  );
}

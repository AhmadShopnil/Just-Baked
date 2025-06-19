// app/shop/layout.tsx
import React from "react";
import Link from "next/link";
import { BASE_URL } from "@/helpers/baseUrl";

export default async function ShopLayout({ children }) {
  const url = `${BASE_URL}/categories?taxonomy_type=product_categories&order_direction=desc`;
  
  let categories = [];
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    categories = data?.data || [];

  } catch (error) {
    console.error("Error fetching best selling products:", error);
  }




  return (
    <div className="max-w-[1700px]  mx-auto w-full px-4 md:px-10 py-8 ">
    
      {/* Layout Grid */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Sidebar: Filters */}
        <aside className="w-full lg:w-56 space-y-6 ">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 ">
            <h2 className="font-semibold text-lg mb-3">Categories</h2>
            <div className="space-y-6 text-sm">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/shop/${cat?.slug}`}
                  className="block hover:text-[#724b00] transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Side: Dynamic Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

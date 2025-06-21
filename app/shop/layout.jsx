import React from "react";
import { BASE_URL } from "@/helpers/baseUrl";
import CategoriesSidebar from "@/components/shop/CategoriesSideBar";

export default async function ShopLayout({ children }) {
  const url = `${BASE_URL}/categories?taxonomy_type=product_categories&order_direction=desc`;
  
  let categories = [];
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }, // revalidate every 60 seconds
    });
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await res.json();
    categories = data?.data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  return (
    <div className="max-w-[1700px] mx-auto w-full px-4 md:px-10 py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar (client component with active logic) */}
        <CategoriesSidebar categories={categories} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

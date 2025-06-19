"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoriesSidebar({ categories }) {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-56 space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h2 className="font-semibold text-lg mb-3">Categories</h2>
        <div className="space-y-6 text-sm">
          {categories.map((cat) => {
            const isActive = pathname === `/shop/${cat.slug}`;
            return (
              <Link
                key={cat.id}
                href={`/shop/${cat.slug}`}
                className={`block transition-colors ${
                  isActive ? "text-[#724b00] font-semibold" : "hover:text-[#724b00]"
                }`}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

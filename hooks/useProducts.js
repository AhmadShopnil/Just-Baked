// lib/fetchProducts.ts

import { BASE_URL } from "@/helpers/baseUrl";

export const fetchProducts = async (termType = "product", perPage = 12) => {
  const url = `${BASE_URL}/posts?term_type=${termType}&per_page=${perPage}`;
  let products = [];

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }, // revalidate every 60 seconds
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products. Status: ${res.status}`);
    }

    const data = await res.json();
    products = data?.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return products;
};

import Shop from '@/components/shop/Shop';
import { BASE_URL } from '@/helpers/baseUrl';
import React from 'react';

const Page = async () => {
  const productUrl = `${BASE_URL}/posts?term_type=product`;
  const categoryUrl = `${BASE_URL}/categories?taxonomy_type=product_categories&order_direction=desc&is_featured=No`;

  let products = [];
  let categories = [];

  try {
    const [productRes, categoryRes] = await Promise.all([
      fetch(productUrl, { cache: "no-store" }),
      fetch(categoryUrl, { cache: "no-store" }),
    ]);

    if (!productRes.ok || !categoryRes.ok) {
      throw new Error("Failed to fetch data");
    }

    const productData = await productRes.json();
    const categoryData = await categoryRes.json();

    products = productData?.data || [];
    categories = categoryData?.data || [];
  } catch (error) {
    console.error("Error fetching products or categories:", error);
  }


console.log("from shop : ",categories)

  return (
    <div>
      <Shop products={products} categories={categories} />
    </div>
  );
};

export default Page;

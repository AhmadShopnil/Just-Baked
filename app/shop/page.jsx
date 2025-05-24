import Shop from '@/components/shop/Shop';
import { BASE_URL } from '@/helpers/baseUrl';
import React from 'react';

const Page =async () => {

 const url = `${BASE_URL}/posts?term_type=product`;
  // const url = `http://justbakedbd.com/api/v1/posts?term_type=product`;
  let products = [];
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    products = data?.data || [];



    // console.log("products from shop page: ", products)

  } catch (error) {
    console.error("Error fetching best selling products:", error);
  }




  return (
    <div>
      <Shop products={products} />
    </div>
  );
}

export default Page;

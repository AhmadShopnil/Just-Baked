import React from "react";
import ProductSlider from "./ProductSlider";
import { BASE_URL } from "@/helpers/baseUrl";

const BestSelling = async () => {
  

  const url = `${BASE_URL}/posts?term_type=product`;
  // const url = `http://justbakedbd.com/api/v1/posts?term_type=product`;
  let products = [];
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }, // revalidate every 60 seconds
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    products = data?.data || [];

  } catch (error) {
    console.error("Error fetching best selling products:", error);
  }



  return (
    <div className="bg-[url('/image/fastFood/fastFoodBg.webp')]">
      <ProductSlider
        titleImage={`/image/bestSelling/BestsellingLogo.png`}
        products={products}
        title={"BEST SELLING"}
        bg={"bg-white"}
      />
    </div>
  );
};

export default BestSelling;

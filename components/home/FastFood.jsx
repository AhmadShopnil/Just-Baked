import React from "react";
import ProductSlider from "./ProductSlider";
import { BASE_URL } from "@/helpers/baseUrl";

const FastFood = async() => {
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
  
    } catch (error) {
      console.error("Error fetching best selling products:", error);
    }


    
  return (
    <div className="bg-[url('/image/fastFood/fastFoodBg.webp')]">
      <ProductSlider
        titleImage={`/image/fastFood/fastFoodLogo.svg`}
        products={products}
        title={"FAST FOOD"}
        bg={"bg-white"}
      />
    </div>
  );
};

export default FastFood;

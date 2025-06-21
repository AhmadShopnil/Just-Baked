import { BASE_URL } from "@/helpers/baseUrl";
import React from "react";
import ProductSlider from "./ProductSlider";

const Featured = async () => {
  const productUrl = `${BASE_URL}/posts?term_type=product`;
  const catUrl = `${BASE_URL}/categories?taxonomy_type=product_categories&order_direction=desc&is_featured=Yes`;

  let products = [];
  let categories = [];

  try {
    const [productRes, categoryRes] = await Promise.all([
      fetch(productUrl, {
      next: { revalidate: 60 }, // revalidate every 60 seconds
    }),
      fetch(catUrl, {
      next: { revalidate: 60 }, // revalidate every 60 seconds
    }),
    ]);

    if (!productRes.ok) throw new Error("Failed to fetch products");
    if (!categoryRes.ok) throw new Error("Failed to fetch categories");

    const productData = await productRes.json();
    const categoryData = await categoryRes.json();

    products = productData?.data || [];
    categories = categoryData?.data || [];
  } catch (error) {
    console.error("Error fetching data:", error);
  }

    // console.log("from fetures :", products);

  return (
     <div>
      {categories?.map((category, index) => {
        const hasBackground = index % 2 !== 0;


        return (
          <div
            key={category?.id}
            className={hasBackground ? "bg-[url('/image/fastFood/fastFoodBg.webp')]" : ""}
          >
            <ProductSlider
              titleImage={category?.image}
              bg={hasBackground ? "bg-white" : "bg-[#FFF5E6]"}
              // products={category?.posts || []}
              products={products}
              title={category?.name}
              category={category}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Featured;

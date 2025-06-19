import Product from "@/components/product/Product";
import { BASE_URL } from "@/helpers/baseUrl";
import React from "react";

// 1. Generate Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const url = `${BASE_URL}/post?slug=${slug}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch product for metadata");

    const data = await res.json();
    const product =await data?.data;
    // console.log("from meta data", product);
    return {
      title: product?.meta_title || product?.name || "Product Details-",
      description:
        product?.meta_description ||
        product?.name ||
        "View product details",
      openGraph: {
        title: product?.meta_title,
        description: product?.meta_description || product?.meta_title || product?.name,
        images: [
          {
            url: product?.featured_image || "/default-og-image.jpg",
            alt: product?.meta_title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Metadata error:", error);
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }
}

// 2. Page Component
const Page = async ({ params }) => {
  const { slug } = params;
  const url = `${BASE_URL}/post?slug=${slug}`;

  let product = {};
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch single product");

    const data = await res.json();
    product = data?.data || {};
  } catch (error) {
    console.error("Error fetching single product:", error);
  }

  return (
    <div>
      <Product product={product} />
    </div>
  );
};

export default Page;

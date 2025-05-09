import React from "react";
import ProductSlider from "./ProductSlider";

const FastFood = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Fresh Croissant",
      image: "/croissant.png",
      originalPrice: "$15",
      discountedPrice: "$12",
      buttonVariant: "orange",
    },
    {
      id: 2,
      name: "Fresh Bread",
      image: "/bread.png",
      originalPrice: "$15",
      discountedPrice: "$12",
    },
    {
      id: 3,
      name: "Pastries",
      image: "/pastries.png",
      originalPrice: "$15",
      discountedPrice: "$12",
    },
    {
      id: 4,
      name: "Croissant choco buns",
      image: "/choco-buns.png",
      originalPrice: "$15",
      discountedPrice: "$12",
    },
  ];

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

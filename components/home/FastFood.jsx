import React from "react";
import ProductSlider from "./ProductSlider";

const FastFood = () => {
  // Sample product data
 const products = [
    {
      id: 1,
      name: "Fresh Croissant",
      image: "/image/fastFood/burger.webp",
      originalPrice: 15,
      discountedPrice: 12,
      buttonVariant: "orange",
      // short_description:`Duis aute irure dolor in reprehenderit in voluptate velit
      //  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      //  sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      id: 2,
      name: "Fresh Bread",
      image: "/image/fastFood/chowmin.webp",
      originalPrice: 20,
      discountedPrice: 8,
    },
    {
      id: 3,
      name: "Pastries",
      image: "/image/fastFood/burger.webp",
      originalPrice: 18,
      discountedPrice: 15,
    },
    {
      id: 4,
      name: "Choco Buns",
      image: "/image/fastFood/pizza.webp",
      originalPrice: 16,
      discountedPrice: 13,
    },
    {
      id: 5,
      name: "Blueberry Muffin",
      image: "/image/fastFood/vegetableRoll.webp",
      originalPrice: 12,
      discountedPrice: 10,
    },
    {
      id: 6,
      name: "Cheese Danish",
      image: "/image/fastFood/burger.webp",
      originalPrice: 14,
      discountedPrice: 11,
    },
    {
      id: 7,
      name: "Almond Croissant",
      image: "/image/fastFood/pizza.webp",
      originalPrice: 17,
      discountedPrice: 14,
    },
    {
      id: 8,
      name: "Cinnamon Roll",
      image: "/image/food/a1.png",
      originalPrice: 13,
      discountedPrice: 10,
    },
    {
      id: 9,
      name: "Garlic Bread",
      image: "/image/food/a2.png",
      originalPrice: 9,
      discountedPrice: 7,
    },
    {
      id: 10,
      name: "Sourdough Loaf",
      image: "/image/food/a3.png",
      originalPrice: 11,
      discountedPrice: 9,
    },
    {
      id: 11,
      name: "Chocolate Donut",
      image: "/image/food/b1.png",
      originalPrice: 8,
      discountedPrice:6 ,
    },
    {
      id: 12,
      name: "Bagel with Cream Cheese",
      image: "/image/food/a4.png",
      originalPrice: 10,
      discountedPrice: 8,
    },
    {
      id: 13,
      name: "Fruit Tart",
      image: "/image/food/a1.png",
      originalPrice: 14,
      discountedPrice: 11,
    },
    {
      id: 14,
      name: "Apple Pie Slice",
      image: "/image/bestSelling/samosa.webp",
      originalPrice: 13,
      discountedPrice: 10,
    },
    {
      id: 15,
      name: "Baguette",
      image: "/image/food/a1.png",
      originalPrice: 9,
      discountedPrice: 7,
    },
    {
      id: 16,
      name: "Mini Quiche",
      image: "/image/food/a2.png",
      originalPrice: 12,
      discountedPrice: 9,
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

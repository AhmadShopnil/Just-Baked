import React from 'react';
import ProductSlider from './ProductSlider';

const BestSelling = () => {

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
        <div>
               <ProductSlider titleImage={`/image/bestSelling/BestsellingLogo.png`} products={products} title={"BEST SELLING"}/>
        </div>
    );
}

export default BestSelling;

import Product from '@/components/product/Product';
import { BASE_URL } from '@/helpers/baseUrl';
import React from 'react';

const product={}


const Page = async ({params}) => {
 const { slug } = await params


 const url = `${BASE_URL}/post?slug=${slug}`;

  // console.log("url: ", url)

  // let product ={};
  // try {
  //   const res = await fetch(url, { cache: "no-store" });
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch single product");
  //   }
  //   const data = await res.json();
  //   product = data?.data || [];
  //   console.log("Single product: ", product)

  // } catch (error) {
  //   console.error("Error fetching single product:", error);
  // }


  return (
    <div>
      
      <Product product={product}/>
    </div>
  );
}

export default Page;

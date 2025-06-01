
import ComboPackage from '@/components/home/ComboPackage';
import Featured from '@/components/home/Featured';
import HeroSection from '@/components/home/HeroSection';
import React from 'react';

const Page = () => {

// const cart = useSelector((state) => state.cart);
// console.log(cart.items, cart.totalQuantity, cart.totalPrice);



  return (
    <div>
   
      <HeroSection />
      <Featured/>
      {/* <NewArrivalsSection />
      <FastFood/>
      <SignatureSeries/>
      <BestSelling/> */}
      <ComboPackage/>
    </div>
  );
}

export default Page;

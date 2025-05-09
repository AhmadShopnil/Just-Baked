import BestSelling from '@/components/home/BestSelling';
import ComboPackage from '@/components/home/ComboPackage';
import FastFood from '@/components/home/FastFood';
import HeroSection from '@/components/home/HeroSection';
import NewArrivalsSection from '@/components/home/NewArrivalsSection';
import SignatureSeries from '@/components/home/SignatureSeries';
import React from 'react';

const Page = () => {
  return (
    <div>
   
      <HeroSection />
      <NewArrivalsSection />
      <FastFood/>
      <SignatureSeries/>
      <BestSelling/>
      <ComboPackage/>
    </div>
  );
}

export default Page;

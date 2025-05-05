import FastFood from '@/components/home/FastFood';
import HeroSection from '@/components/home/HeroSection';
import NewArrivalsSection from '@/components/home/NewArrivalsSection';
import React from 'react';

const Page = () => {
  return (
    <div>
   
      <HeroSection />
      <NewArrivalsSection />
      <FastFood/>
    </div>
  );
}

export default Page;

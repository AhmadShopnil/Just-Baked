"use client";

import Image from "next/image";
import Link from "next/link";

const comboPackages = [
  {
    title: "Spinach Pizza & Burger",
    description:
      "Goodbye to mom's worries! Serve your child healthy, nutritious snacks and tiffin.",
    image: "/image/ComboPackage/SpinachPizzaBurger.webp",
    link: "/order/spinach-pizza-burger",
  },
  {
    title: "Chicken mixed vegetable chowmein and Chicken drumsticks",
    description: "",
    image: "/image/ComboPackage/ChickenMixedVegetables.webp",
    link: "/order/chicken-veg-chowmein",
  },
];

export default function ComboPackage() {
  return (
    <section className="w-full p-5 xl:px-16 2xl:px-[130px] lg:py-14 2xl:py-[60px]">
      <div className="w-full flex flex-col gap-[30px]">
        {/* Section header */}
        <div className="w-full flex justify-between items-center">
          <h3 className="text-2xl text-primary-strong font-bold leading-3.5 uppercase">
            Combo Packages
          </h3>
          <div className="flex items-center gap-2.5">
            <button className="bg-[#F3F3F3] py-2.5 px-3 rounded-[5px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
              >
                <path
                  d="M7 1L2 6L7 11"
                  stroke="#949494"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className="bg-[#F3F3F3] py-2.5 px-3 rounded-[5px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
              >
                <path
                  d="M1 1L6 6L1 11"
                  stroke="#949494"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[35px]">
          {comboPackages.map((item, index) => (
            <div
            key={index}
            className="relative w-full h-[440px] flex justify-start items-center pl-5 sm:pl-[54px] bg-cover
               bg-center bg-no-repeat rounded-[20px] 
              shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10)] overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center z-0" // z-0 keeps it behind content but not too far
            />
            <div className="relative z-[1] w-[90%] max-w-[300px] flex flex-col justify-between gap-[30px]">
              <h3 className="text-primary-strong font-semibold text-3xl sm:text-[38px]">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-lg text-black font-normal">{item.description}</p>
              )}
              <Link
                href={item.link}
                className="mt-5 bg-primary-strong text-white w-fit py-2.5 px-5 text-sm font-bold uppercase rounded-[5px]"
              >
                Order Now
              </Link>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
}

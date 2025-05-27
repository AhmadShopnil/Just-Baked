"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axiosInstance from "@/helpers/axiosInstance";

// const comboPackages = [
//   {
//     title: "Spinach Pizza & Burger",
//     description:
//       "Goodbye to mom's worries! Serve your child healthy, nutritious snacks and tiffin.",
//     image: "/image/ComboPackage/2.webp",
//     link: "/order/spinach-pizza-burger",
//   },
//   {
//     title: "Chicken mixed vegetable chowmein and Chicken drumsticks",
//     description: "",
//     image: "/image/ComboPackage/1.webp",
//     link: "/order/chicken-veg-chowmein",
//   },
//   {
//     title: "Spinach Pizza & Burger 222",
//     description:
//       "Goodbye to mom's worries! Serve your child healthy, nutritious snacks and tiffin 222.",
//     image: "/image/ComboPackage/2.webp",
//     link: "/order/spinach-pizza-burger",
//   },
//   {
//     title: "Chicken mixed vegetable chowmein and Chicken drumsticks 222",
//     description: "",
//     image: "/image/ComboPackage/1.webp",
//     link: "/order/chicken-veg-chowmein",
//   },
// ];

export default function ComboPackage() {
  const [comboPackages, setComboPackages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  useEffect(() => {
    axiosInstance
      .get("/posts?term_type=combo_package")
      .then((response) => {
        setComboPackages(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching comboPackages:", error);
      });
  }, []);

  console.log("Combos : ", comboPackages);

  const totalPages = Math.ceil(comboPackages.length / itemsPerPage);

  const visiblePackages = comboPackages.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handleNext = () => {
    const nextIndex = currentIndex + itemsPerPage;
    if (nextIndex < comboPackages.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - itemsPerPage;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <section className="max-w-[1700px] mx-auto w-full py-5 px-4 sm:px-7 md:px-10 my-5  ">
      <div className="w-full flex flex-col gap-[30px]">
        {/* Section header */}
        <div className="w-full flex justify-between items-center">
          <h3 className="text-2xl text-primary-strong font-bold leading-3.5 uppercase">
            Combo Packages
          </h3>
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="bg-gray-200 py-2.5 px-3 rounded-[5px] cursor-pointer
             hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} color="#949494" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + itemsPerPage >= comboPackages.length}
              className="bg-gray-200 py-2.5 px-3 rounded-[5px] cursor-pointer
             hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} color="#949494" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[35px]">
          {visiblePackages.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[440px] flex justify-start items-center pl-5 sm:pl-[54px] bg-cover
              bg-center bg-no-repeat rounded-[20px] 
              shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10)] overflow-hidden"
            >
              <Image
                src={item?.featured_image}
                alt={item?.name}
                fill
                className="object-cover object-center z-0"
              />
              <div className="relative z-[1] w-[90%] max-w-[300px] flex flex-col justify-between gap-[30px]">
                <h3 className="text-primary-strong font-semibold text-2xl sm:text-[38px]">
                  {item.name}
                </h3>
                 
                {item.description && (
                  <div
                    className="text-sm md:text-lg text-black font-normal"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                )}
                <Link
                  href={`/`}
                  className="mt-5 bg-primary-strong text-white w-fit py-2 md:py-2.5 px-5 text-sm font-bold uppercase rounded-[5px]"
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

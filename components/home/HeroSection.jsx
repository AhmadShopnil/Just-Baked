import Image from "next/image";
import Button from "../shared/Button";

export default function HeroSection() {
  return (
    <div
      className="w-full py-5 flex items-center 
    justify-center bg-cover bg-center bg-[url('/image/BannerImage/Banner.jpg')]"
    >
      <div
        className="flex flex-col lg:flex-row gap-[30px] w-full max-w-[1700px] px-4 sm:px-7 md:px-10  mx-auto"
      >
        {/* Card 1 */}
        <div
          className="w-full lg:w-[calc(100%-28rem-30px)] 2xl:w-[calc(100%-533px-30px)] 
        self-stretch h-[460px] lg:h-[400px] 2xl:h-[460px] rounded-2xl 
        bg-[linear-gradient(0deg,#FFF4DE_0%,#FFF4DE_100%),linear-gradient(180deg,#FFF_0.33%,#B3B3B3_62.18%,#FFF_100%)]"
        >
          <div
            className="h-full w-full bg-bottom-right md:bg-right bg-no-repeat bg-contain pl-5 
          md:px-[76px] bg-[url('/image/BannerImage/fastFood.webp')] rounded-2xl"
          >
            <div className="flex flex-col justify-center gap-[30px] max-w-[446px] h-full">
              <h1 className="text-3xl md:text-[38px] text-primary-strong font-semibold text-wrap">
                Freshly Baked Delights, Delivered to You!
              </h1>
              <p className="text-lg text-black font-normal">
                Croissants, pizza, burgers, patties, chow mein, and fresh bread
                daily.
              </p>
              <button className="cursor-pointer py-2.5 px-5 rounded-[5px] bg-primary-strong mt-5 w-fit">
                <span className="text-sm font-bold text-white">SHOP NOW</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-md 2xl:w-[533px] h-[460px] lg:h-[400px] 2xl:h-[460px] rounded-2xl bg-primary-strong">
          <div
            className="w-full h-full bg-no-repeat bg-bottom-right px-5 md:pl-[59px] bg-contain lg:bg-auto 
          bg-[url('/image/BannerImage/PizzaSlice.webp')] rounded-2xl"
          >
            <div className="h-full flex flex-col gap-[30px] justify-center">
              <h3 className="text-3xl md:text-[38px] text-white font-semibold uppercase">
                20% Off
              </h3>
              <p className="text-lg text-white font-normal max-w-60">
                Enjoy 20% off when you buy one Spinach Pizza.
              </p>
              <button className="w-fit cursor-pointer bg-white rounded-[5px] mt-5 py-2.5 px-5">
                <span className="uppercase text-sm font-bold text-primary-strong">
                  Shop now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

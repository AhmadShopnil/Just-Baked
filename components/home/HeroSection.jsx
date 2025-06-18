import { BASE_URL } from "@/helpers/baseUrl";
import Link from "next/link";

export default async function HeroSection() {
  const heroUrl = `${BASE_URL}/posts?term_type=hero`;
  const offerUrl = `${BASE_URL}/posts?term_type=product&category_slug=20-offer`;

  let heroItems = [];
  let offerItems = [];

  try {
    // Fetch hero items
    const res = await fetch(heroUrl, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch heroItems");
    }
    const data = await res.json();
    heroItems = data?.data || [];
  } catch (error) {
    console.error("Error fetching heroItems:", error);
  }

  let isOfferAvailable = false;

  try {
    // Fetch offer items
    const offerRes = await fetch(offerUrl, { cache: "no-store" });
    if (!offerRes.ok) {
      throw new Error("Failed to fetch offerItems");
    }
    const offerData = await offerRes.json();
    offerItems = offerData?.data || [];
    isOfferAvailable = offerItems.length > 0;
  } catch (error) {
    console.error("Error fetching offerItems:", error);
  }

  return (
    <div
      className="w-full py-12 flex items-center 
    justify-center bg-cover bg-center bg-[url('/image/BannerImage/Banner.jpg')]"
    >
      <div className="flex flex-col lg:flex-row gap-[30px] w-full max-w-[1700px] px-4 sm:px-7 md:px-10 mx-auto">
        {/* Hero Card */}
        <div
          className={`w-full ${
            isOfferAvailable
              ? "lg:w-[calc(100%-28rem-30px)] 2xl:w-[calc(100%-533px-30px)]"
              : ""
          } 
          self-stretch h-[460px] lg:h-[400px] 2xl:h-[460px] rounded-2xl 
          bg-[linear-gradient(0deg,#FFF4DE_0%,#FFF4DE_100%),linear-gradient(180deg,#FFF_0.33%,#B3B3B3_62.18%,#FFF_100%)]`}
        >
          <div
            className="h-full w-full bg-bottom-right md:bg-right bg-no-repeat bg-contain pl-5 
            md:px-[76px] rounded-2xl"
            style={{
              backgroundImage: `url(${
                heroItems[0]?.featured_image ||
                "/image/BannerImage/fastFood.webp"
              })`,
            }}
          >
            <div className="flex flex-col justify-center gap-[30px] max-w-[446px] h-full">
              <h1 className="text-2xl md:text-[38px] text-primary-strong font-semibold text-wrap">
                {heroItems[0]?.name}
              </h1>
              <p className="text-sm md:text-lg text-black font-normal">
                {heroItems[0]?.sub_title}
              </p>
              <Link
                href="/shop"
                className="cursor-pointer py-2 md:py-2.5 px-5 rounded-[5px] bg-primary-strong mt-5 w-fit"
              >
                <span className="text-sm font-bold text-white">SHOP NOW</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Offer Card - Only if data exists */}
        {isOfferAvailable && (
          <div className="w-full lg:w-md 2xl:w-[533px] h-[460px] lg:h-[400px] 2xl:h-[460px] rounded-2xl bg-primary-strong">
            <div
              className="w-full h-full bg-no-repeat bg-bottom-right px-5 md:pl-[59px] bg-contain lg:bg-auto 
              bg-[url('/image/BannerImage/PizzaSlice.webp')] rounded-2xl"
            >
              <div className="h-full flex flex-col gap-[30px] justify-center">
                <h3 className="text-2xl md:text-[38px] text-white font-semibold uppercase">
                  20% Off
                </h3>
                <p className="text-sm md:text-lg text-white font-normal max-w-60">
                  {`Enjoy 20% off when you buy one ${offerItems[0]?.sub_title}.`}
                  {/* Enjoy 20% off when you buy one Spinach Pizza. */}
                  {/* {offerItems[0]?.sub_title ||
                    "Enjoy 20% off when you buy one Spinach Pizza."} */}
                </p>
                <Link
                  href="/shop/20-offer"
                  className="w-fit cursor-pointer bg-white rounded-[5px]
                  mt-5 py-2 md:py-2.5 px-5"
                >
                  <span className="uppercase text-sm font-bold text-primary-strong">
                    Shop now
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function ProductCard({ product }) {
  const {
    id,
    name,
    image,
    originalPrice,
    discountedPrice,
    buttonVariant = "primary",
  } = product;

  return (
    <Link className="" href={`/product/${id}`}>
      <div class="flex w-full h-[400px] flex-col justify-between items-center p-5 rounded-[10px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10)] bg-white">
        <Image
          src="/image/newArrival/freshCroissant.webp"
          alt="Product Image"
          width={150}
          height={150}
          className="object-contain h-32"
        />
        <div class="flex flex-col items-center gap-5 self-stretch">
          <h4 class="text-center text-xl font-bold leading-[14px] text-[#000]">
            Fresh Croissant
          </h4>
          <div class="flex justify-center items-center gap-5 self-stretch">
            {/* <!-- Price --> */}
            <div class="flex py-[5px] px-2.5 justify-center items-start gap-[2px] rounded-[5px] border border-[#949494]">
              <span class="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
                ৳
              </span>
              <span class="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
                165
              </span>
            </div>
            {/* <!-- quantity --> */}
            <div class="flex py-[5px] px-2.5 justify-center items-start gap-[2px] rounded-[5px] border border-[#949494]">
              <span class="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
                10
              </span>
              <span class="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
                PC
              </span>
            </div>
          </div>
          <button class="flex py-[9.5px] px-5 justify-center items-center gap-2.5 self-stretch rounded-[5px] bg-orange-600 cursor-pointer">
            <img src="image/newArrival/Vector.svg" alt="" />
          </button>
        </div>
      </div>
    </Link>
  );
}

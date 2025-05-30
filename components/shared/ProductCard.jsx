import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import ConfirmAddToCartModal from "./ConfirmAddToCartModal";

export default function ProductCard({ product, i }) {
  const {
    id,
    name,
    image,
    originalPrice,
    discountedPrice,
    buttonVariant = "primary-strong",
  } = product;

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Link className="" href={`/product/${id}`}>
        <div className="flex w-full h-[300px] md:h-[350px] flex-col justify-between items-center p-5 rounded-[10px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10)] bg-white">
          {/*product Image  */}
          <div className="h-[50%] md:h-[60%]   flex justify-center items-center">
            <Image
              src={image}
              alt="Product Image"
              width={150}
              height={150}
              className="object-contain h-24 md:h-32"
            />
          </div>
          {/*product content */}
          <div className="flex flex-col items-center gap-5 self-stretch">
            <h4 className="text-center text-md font-bold leading-7 text-[#000]">
              {name}
            </h4>
            <div className="flex justify-center items-center gap-5 self-stretch">
              {/* <!-- Price --> */}
              <div className="flex py-[5px] px-2.5 justify-center items-start gap-[2px] rounded-[5px] border border-[#949494]">
                <span className="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
                  ৳
                </span>
                <span className="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
                  {discountedPrice}
                </span>
              </div>
              {/* <!-- quantity --> */}
              <div className="flex py-[5px] px-2.5 justify-center items-start gap-[2px] rounded-[5px] border border-[#949494]">
                <span className="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
                  100000
                </span>
                <span className="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
                  PC
                </span>
              </div>
            </div>

            {i === 0 ? (
              <button
                className="flex py-[7px] px-5 justify-center items-center gap-2.5 self-stretch
             rounded-[5px] bg-orange-600 cursor-pointer"
              >
                <img src="image/newArrival/Vector.svg" alt="" />
              </button>
            ) : (
              <Button
                className="w-full bg-primary-strong text-white"
                onClick={() => setOpenModal(true)}
              >
                Add To Cart
              </Button>
            )}
          </div>
        </div>
      </Link>
      <ConfirmAddToCartModal
        show={openModal}
        onClose={() => setOpenModal(false)}
        product={product}
      />
    </>
  );
}

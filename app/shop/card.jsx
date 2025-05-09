import React from "react";

const Card = () => {
  return (
    <div
      key={product.id}
      className={`group ${viewMode === "list" ? "flex gap-4" : ""}`}
    >
      <div
        className={`relative ${
          viewMode === "list" ? "w-48" : "aspect-square"
        } mb-4 overflow-hidden rounded-lg`}
      >
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-primary-strong text-white text-xs px-2 py-1 rounded-full z-10">
            New
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-black/20 bg-opacity-40 flex items-center justify-center
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Link
            href={`product/${product?.id}`}
            className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-primary-strong
                               hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View Details
          </Link>
        </div>
      </div>
      <div className={viewMode === "list" ? "flex-1" : ""}>
        <h3 className="font-medium mb-2 text-center">{product.name}</h3>

        <div className="flex justify-center items-center gap-5 self-stretch my-4">
          {/* <!-- Price --> */}
          <div className="flex py-[5px] px-2.5 justify-center items-start gap-[2px] rounded-[5px] border border-[#949494]">
            <span className="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
              ৳
            </span>
            <span className="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
              {product?.discountedPrice}
            </span>
          </div>
          {/* <!-- quantity --> */}
          <div className="flex py-[5px] px-2.5 justify-center items-start gap-[2px] rounded-[5px] border border-[#949494]">
            <span className="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
              10
            </span>
            <span className="text-center text-[12px] font-semibold leading-3.5 text-[#000]">
              PC
            </span>
          </div>
        </div>

        {viewMode === "list" && (
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        )}
        <div className="flex items-center gap-2">
          <button
            className="flex-1 py-2 bg-primary-strong text-white rounded-md
                             hover:bg-gray-200 hover:text-gray-700  flex items-center justify-center gap-2 group"
          >
            <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-medium">Add to Cart</span>
          </button>
          {/* <button className="p-2 border border-gray-300 rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors duration-300">
                              <Heart className="w-5 h-5" />
                            </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;

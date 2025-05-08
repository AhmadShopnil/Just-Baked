import Image from "next/image";
import Link from "next/link";

import overlay from "@/public/image/contact/overlay.png";
import logo from "@/public/image/Footer/Logo.svg";
import rectBackground from "@/public/image/contact/Rectangle.png";
import Map from "@/components/contact/map";

export default function ContactSection() {
  return (
    // Main layer
    <div
      className="bg-[#FFE6C5] min-h-[1100px] md:min-h-[800px] "
      style={{
        backgroundImage: "url('/image/contact/overlay.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* log */}
      <div className="flex items-center justify-center ">
        <Image src={logo} alt="Just Baked Logo" width={200} height={200} />
      </div>

      {/* get in touch */}
      <div className="relative px-4 py-10 mt-8 min-h-[370px]">
        {/* Background image with low opacity */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/image/contact/Rectangle.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4, // Adjust this for desired visibility
          }}
        />

        <div className="">
          {/* Content */}
          <div className="relative z-10 text-white text-center">
            <h1 className="text-[40px] font-bold">Get In Touch</h1>
            <p className="font-semibold text-md mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Map */}
          <div className="relative -top-44 z-10">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

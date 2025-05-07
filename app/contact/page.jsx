"use client";

import Image from "next/image";
import React from "react";

// Images
import logo from "@/public/image/Footer/Logo.svg";
import phoneIcon from "@/public/image/contact/phone.svg";
import fbIcon from "@/public/image/contact/fb.svg";
import emailIcon from "@/public/image/contact/email.svg";
import locationIcon from "@/public/image/contact/location.svg";
import overlay from "@/public/image/contact/overlay.png";
import rectBackground from "@/public/image/contact/Rectangle.png";
import cityMap from "@/public/image/contact/cityMap.png";
import foodBg from "@/public/image/contact/food.png";
import mobileLogo from "@/public/image/contact/mobileLogo.svg";
import mobileOverlay from "@/public/image/contact/mobileOverlay.png";
import mobileRectBg from "@/public/image/contact/mobileRectengularBG.png";
import mobileMap from "@/public/image/contact/mmap.png";

const Contact = () => {
  return (
    <div className="relative w-full min-h-[1000px] bg-[#FFE6C5]">
      {/* <-- --------------------DeskTop--------------- --> */}
      <div className="relative w-full h-screen lg:flex justify-center bg-[#FFE6C5] hidden">
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-100">
          <Image src={overlay} alt="Overlay background" fill className="object-cover" />
        </div>

        <div className="w-full">
          <div className="w-full flex justify-center my-8">
            <Image src={logo} alt="Just Baked Logo" />
          </div>

          <div className="bg-[url('/image/contact/Rectangle.png')] h-full max-h-[480px] w-full flex justify-center">
            <div>
              <h1 className="text-[40px] text-white font-bold text-center mt-8">Get In Touch</h1>
              <p className="text-white text-center font-semibold text-lg mb-8 relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="relative z-20 w-[1319px] h-[546px] bg-center bg-cover p-[30px]" style={{ backgroundImage: `url('/image/contact/cityMap.png')` }}>
                <div className="bg-primary-strong w-full max-w-[494px] rounded-[15px] ml-[30px]">
                 
                  <div className="p-[60px]" 
                  style={{ backgroundImage: `url('/image/contact/food.png')`, backgroundPosition: "right", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                    <div className="flex flex-col gap-[30px]">
                      <div>
                        <h3 className="text-white text-2xl font-semibold">Contact Information</h3>
                        <p className="text-white text-sm font-normal">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                      </div>
                      <div className="flex flex-col gap-5">
                        {/* Phone */}
                        <div className="flex items-center gap-[30px]">
                          <Image src={phoneIcon} alt="Phone icon" />
                          <span className="text-white font-normal">
                            +880 1711 535 658
                            <br />
                            +880 1755 682 026
                          </span>
                        </div>

                        {/* Facebook */}
                        <div className="flex items-center gap-[30px]">
                          <Image src={fbIcon} alt="Facebook icon" />
                          <span className="text-white font-normal">/Justbakedbd</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-[30px]">
                          <Image src={emailIcon} alt="Email icon" />
                          <span className="text-white font-normal">info@justbakedbd.com</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-[30px]">
                          <Image src={locationIcon} alt="Location icon" />
                          <span className="text-white font-normal">
                            W/20, Noorjahan Road
                            <br />
                            Mohammadpur, Dhaka-1207
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ---------------Mobile---------------- --> */}
      <div className="relative w-full h-[100dvh] flex justify-center bg-[#FFE6C5] lg:hidden">
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-100">
          <Image src={mobileOverlay} alt="Mobile overlay" fill className="object-cover" />
        </div>

        <div className="w-full">
          <div className="w-full flex justify-center my-2.5">
            <Image src={mobileLogo} alt="Just Baked Mobile Logo" />
          </div>

          <div className="bg-[url('/image/contact/mobileRectengularBG.png')] h-[410px] w-full flex justify-center">
            <div>
              <h1 className="text-base text-white font-bold text-center mt-4 px-2.5">Get In Touch</h1>
              <p className="text-white text-[10px] text-center font-semibold relative z-10 px-2.5 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="relative z-20 w-[317px] h-[567px] bg-center bg-cover bg-no-repeat p-5 rounded-3xl mx-auto" style={{ backgroundImage: `url('/image/contact/mmap.png')` }}>
                <div className="bg-primary-strong w-full max-w-[494px] rounded-[15px]">
                  <div className="p-5" style={{ backgroundImage: `url('/image/contact/food.png')`, backgroundPosition: "right", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                    <div className="flex flex-col gap-5">
                      <div>
                        <h3 className="text-white text-base font-semibold">Contact Information</h3>
                        <p className="text-white text-[10px] font-normal">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        {/* Phone */}
                        <div className="flex items-center gap-2.5">
                          <Image src={phoneIcon} alt="Phone icon" width={24} height={24} />
                          <span className="text-white font-normal text-[12px]">
                            +880 1711 535 658
                            <br />
                            +880 1755 682 026
                          </span>
                        </div>

                        {/* Facebook */}
                        <div className="flex items-center gap-2.5">
                          <Image src={fbIcon} alt="Facebook icon" width={24} height={24} />
                          <span className="text-white font-normal text-[12px]">/Justbakedbd</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2.5">
                          <Image src={emailIcon} alt="Email icon" width={24} height={24} />
                          <span className="text-white font-normal text-[12px]">info@justbakedbd.com</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2.5">
                          <Image src={locationIcon} alt="Location icon" width={24} height={24} />
                          <span className="text-white font-normal text-[12px]">
                            W/20, Noorjahan Road
                            <br />
                            Mohammadpur, Dhaka-1207
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

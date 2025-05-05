import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full  ">
      <div className="w-full bg-[#FFF4DE] md:px-32 py-[60px] flex justify-center">
        <div className="flex flex-col gap-[60px] w-full lg:max-w-[1378px] px-5 2xl:px-0">
          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/" className="cursor-pointer">
              <Image src="/image/Footer/Logo.svg" alt="Logo" width={160} height={40} />
            </Link>
          </div>

          <p className="text-center text-sm text-black leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>

          {/* About Section */}
          <div className="h-full w-full flex flex-col lg:flex-row justify-between gap-5 lg:gap-0">
            {/* Contact Us */}
            <div className="w-[216px] flex flex-col gap-[20px]">
              <h3 className="text-base text-black font-bold leading-4 uppercase">Contact Us</h3>
              <div className="flex items-center gap-3">
                <Image src="/image/Footer/Phone.svg" alt="" width={29} height={29} />
                <span className="text-[12px] text-black font-medium leading-4">
                  +880 1711 535 658 <br /> +880 1755 682 026
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/image/Footer/Mail.svg" alt="" width={29} height={29} />
                <span className="text-[12px] text-black font-medium leading-4">
                  info@justbakedbd.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/image/Footer/FB.svg" alt="" width={29} height={29} />
                <span className="text-[12px] text-black font-medium leading-4">/justbaked</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/image/Footer/location.svg" alt="" width={29} height={29} />
                <span className="text-[12px] text-black font-medium leading-4">
                  W/20, Noorjahan Road Mohammadpur, Dhaka-1207
                </span>
              </div>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-base text-black font-bold leading-4 uppercase">Useful Links</h3>
              <div className="flex flex-col gap-1">
                {[
                  'Home',
                  'Products',
                  'Gift',
                  'Corporate',
                  'Outlets',
                  'Halal Investment',
                  'Blog',
                ].map((link, idx) => (
                  <Link key={idx} href="#" className="cursor-pointer">
                    <span className="text-[12px] text-black font-medium leading-4">{link}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* View Map */}
            <div className="flex flex-col gap-[20px]">
              <h3 className="text-base text-black font-bold leading-4 uppercase">View Map</h3>
              <Image src="/image/Footer/Map.webp" alt="Map" width={220} height={140} />
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col gap-2.5">
              <h3 className="text-base text-black font-bold leading-4 uppercase">Pay with</h3>
              <div className="flex flex-col gap-1 mt-5">
                {[...Array(5)].map((_, rowIdx) => (
                  <div key={rowIdx} className="flex gap-1">
                    {[...Array(5)].map((_, colIdx) => {
                      const imgNum = rowIdx * 5 + colIdx + 1;
                      const imgPath =
                        imgNum === 21
                          ? '/image/Payment/21 1.png'
                          : `/image/Payment/${String(imgNum).padStart(2, '0')} 1.png`;
                      return (
                        <Image
                          key={imgNum}
                          src={imgPath}
                          alt={`Pay ${imgNum}`}
                          width={40}
                          height={24}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-[5px] mt-2">
                <span className="text-[10px] text-black font-normal">Verified by</span>
                <Image src="/image/Payment/25 59.png" alt="Verified" width={60} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-primary-strong py-2.5 md:px-32">
        <div className="w-full px-5 2xl:px-0 md:max-w-[1378px] mx-auto">
          <div className="w-full flex flex-col items-start md:flex-row md:justify-between">
            <span className="text-white text-sm">
              ©2021 Just Baked All rights reserved
            </span>
            <div className="flex items-center gap-2">
              {/* Replace these SVGs or images with proper icon components if preferred */}
              <button className="cursor-pointer">
                <Image src="/image/Footer/FacebookIcon.svg" alt="FB" width={28} height={28} />
              </button>
              <button className="cursor-pointer">
                <Image src="/image/Footer/InstraLogo.svg" alt="Instagram" width={28} height={28} />
              </button>
              <button className="cursor-pointer">
                <Image src="/image/Footer/YoutubeIcon.svg" alt="YouTube" width={28} height={28} />
              </button>
              <button className="cursor-pointer">
                <Image src="/image/Footer/TwitterIcon.svg" alt="Twitter" width={28} height={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

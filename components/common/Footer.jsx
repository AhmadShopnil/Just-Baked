"use client";

import axiosInstance from "@/helpers/axiosInstance";
import { getMetaValueByMetaName } from "@/helpers/metaHelpers";
// import { useSettigs } from '@/hooks/useSettings';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

// Footer Data
const footerData = {
  logo: "/image/Footer/Logo.svg",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...`,
  contact: [
    {
      icon: "/image/Footer/Phone.svg",
      text: "+880 1711 535 658\n+880 1755 682 026",
    },
    { icon: "/image/Footer/Mail.svg", text: "info@justbakedbd.com" },
    { icon: "/image/Footer/FB.svg", text: "/justbaked" },
    {
      icon: "/image/Footer/location.svg",
      text: "W/20, Noorjahan Road\nMohammadpur, Dhaka-1207",
    },
  ],
  links: [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Gift", href: "#" },
    { label: "Corporate", href: "#" },
    { label: "Outlets", href: "#" },
    { label: "Halal Investment", href: "#" },
    { label: "Blog", href: "#" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4092513513743!2d90.36424031536325!3d23.803579392546565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12dc8c3b109%3A0x3178df3025e4f282!2sJust%20Baked!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
  paymentImages: [
    "/image/Payment/1.png",
    "/image/Payment/2.png",
    "/image/Payment/3.png",
    "/image/Payment/4.png",
    "/image/Payment/5.png",
    "/image/Payment/6.png",
    "/image/Payment/7.png",
    "/image/Payment/8.png",
    "/image/Payment/9.png",
    "/image/Payment/10.png",
    "/image/Payment/12.png",
    "/image/Payment/13.png",
    "/image/Payment/14.png",
    "/image/Payment/15.png",
  ],
  verifiedImage: "/image/Payment/25 59.png",
  socials: [
    { icon: <FaFacebookF />, label: "Facebook", href: "#" },
    { icon: <FaInstagram />, label: "Instagram", href: "#" },
    { icon: <FaYoutube />, label: "YouTube", href: "#" },
    { icon: <FaTwitter />, label: "Twitter", href: "#" },
  ],

  // socials: [
  //   {
  //     icon: <FaFacebookF className="text-[#1877F2]" />,
  //     label: "Facebook",
  //     href: "#",
  //   },
  //   {
  //     icon: <FaInstagram className="text-[#E4405F]" />,
  //     label: "Instagram",
  //     href: "#",
  //   },
  //   {
  //     icon: <FaYoutube className="text-[#FF0000]" />,
  //     label: "YouTube",
  //     href: "#",
  //   },
  //   {
  //     icon: <FaTwitter className="text-[#1DA1F2]" />,
  //     label: "Twitter",
  //     href: "#",
  //   },
  // ],
};

const Footer = () => {
  // const settings= await useSettigs()

  const [settings, setSettings] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/frontend/settings")
      .then((response) => {
        setSettings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching settings:", error);
      });
  }, []);

  console.log("settings from footer: ", settings);
  const phone = getMetaValueByMetaName(settings, "company_phone") || "";
  // const phone2 = getMetaValueByMetaName(settings, "company_phone_2") || "";
  const company_email = getMetaValueByMetaName(settings, "company_email") || "";
  const facebookLink = getMetaValueByMetaName(settings, "facebook_url") || "#";
  const linkedinLink = getMetaValueByMetaName(settings, "linkedin_url") || "#";
  const instagramLink =
    getMetaValueByMetaName(settings, "instagram_url") || "#";
 const youtubeLink = getMetaValueByMetaName(settings, "youtube_url") || "#";

  return (
    <div className="w-full">
      <div className="w-full bg-[#FFF4DE] md:px-32 py-[60px] flex justify-center">
        <div className="flex flex-col gap-[60px] w-full lg:max-w-[1378px] px-5 2xl:px-0">
          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/" className="cursor-pointer">
              <Image src={footerData.logo} alt="Logo" width={160} height={40} />
            </Link>
          </div>

          {/* Description */}
          <p className="text-center text-sm text-black leading-relaxed whitespace-pre-line">
            {footerData.description}
          </p>

          {/* Footer Sections */}
          <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0">
            {/* Contact Us */}
            <div className="w-[216px]">
              <FooterSection title="Contact Us">
                <ContactItem
                  icon={"/image/Footer/Phone.svg"}
                  text={`${phone} `}
                />
                <ContactItem
                  icon={"/image/Footer/Mail.svg"}
                  text={company_email}
                />
                <ContactItem
                  icon={"/image/Footer/FB.svg"}
                  text={facebookLink}
                />
              </FooterSection>
            </div>

            {/* Useful Links */}
            <FooterLinkList links={footerData.links} />

            {/* View Map */}
            <FooterSection title="View Map">
              <iframe
                src={footerData.mapEmbedUrl}
                width="100%"
                height="155"
                className="rounded-md border-none"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </FooterSection>

            {/* Payment Methods */}
            <FooterSection title="Pay with">
              <div className="grid grid-cols-5 gap-1 ">
                {footerData?.paymentImages?.map((img, idx) => (
                  <Image
                    key={img}
                    src={img}
                    alt="payment"
                    width={40}
                    height={24}
                  />
                ))}
              </div>
              <div className="flex items-center gap-[5px] mt-2">
                <span className="text-[10px] text-black font-normal">
                  Verified by
                </span>
                <Image
                  src={footerData?.verifiedImage}
                  alt="Verified"
                  width={60}
                  height={20}
                />
              </div>
            </FooterSection>
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
            <div className="flex items-center gap-3 text-white text-lg">
              <Link href={facebookLink} aria-label={""}>
                <span className="hover:text-gray-300">
                  <FaFacebookF />
                </span>
              </Link>

              <Link href={instagramLink} aria-label={""}>
                <span className="hover:text-gray-300">
                 <FaInstagram />
                </span>
              </Link>
              <Link href={youtubeLink} aria-label={""}>
                <span className="hover:text-gray-300">
                  <FaYoutube />
                </span>
              </Link>
              {/* <Link href={facebookLink} aria-label={""}>
                <span className="hover:text-gray-300">
                  <FaFacebookF />
                </span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const FooterSection = ({ title, children }) => (
  <div className="flex flex-col gap-[12px]">
    <h3 className="text-base text-black font-bold uppercase leading-4">
      {title}
    </h3>
    {children}
  </div>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-start gap-3">
    <Image src={icon} alt="" width={24} height={24} />
    <span className="text-[11px] text-black font-medium leading-4 whitespace-pre-line">
      {text}
    </span>
  </div>
);

const FooterLinkList = ({ links }) => (
  <div className="flex flex-col gap-[8px]">
    <h3 className="text-base text-black font-bold leading-2.5 uppercase">
      Useful Links
    </h3>
    <div className="flex flex-col">
      {links.map((link, idx) => (
        <Link key={idx} href={link.href}>
          <span className="text-[11px] text-black font-medium leading-2.5">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  </div>
);

export default Footer;

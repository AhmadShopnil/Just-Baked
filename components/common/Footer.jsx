"use client";

import { UserContext } from "@/context/UserContext";
import axiosInstance from "@/helpers/axiosInstance";
import { getMetaValueByMetaName } from "@/helpers/metaHelpers";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [settings, setSettings] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const { state } = useContext(UserContext);
  const user = state?.user;

  // Footer Data
  const footerData = {
    logo: "/image/Footer/Logo.svg",
    links: [
      { name: "Bakery", href: "/shop/bakery" },
      { name: "Fast Food", href: "/shop/fast-food" },
      { name: "Frozen Snacks", href: "/shop/frozen-snacks" },
      { name: "Cart", href: "/cart" },
      // { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      ...(user ? [{ name: "My Orders", href: "/dashboard/orders" }] : []),
    ],

    verifiedImage: "/image/Payment/25 59.png",
  };

  useEffect(() => {
    axiosInstance
      .get("/frontend/settings")
      .then((response) => {
        setSettings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching settings:", error);
      });

    axiosInstance
      .get("/posts?term_type=pay_with")
      .then((response) => {
        setPaymentMethods(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching payment methods:", error);
      });
  }, []);

  const phone = getMetaValueByMetaName(settings, "company_phone") || "";
  const company_email = getMetaValueByMetaName(settings, "company_email") || "";
  const facebookLink = getMetaValueByMetaName(settings, "facebook_url") || "#";
  const linkedinLink = getMetaValueByMetaName(settings, "linkedin_url") || "#";
  const instagramLink =
    getMetaValueByMetaName(settings, "instagram_url") || "#";
  const youtubeLink = getMetaValueByMetaName(settings, "youtube_url") || "#";
  const footer_content =
    getMetaValueByMetaName(settings, "footer_content") || "";
  const bottom_footer_content =
    getMetaValueByMetaName(settings, "bottom_footer_content") || "";

  // const logo =
  //   getMetaValueByMetaName(settings, "site_logoimg_id") ||
  //   "/image/Footer/Logo.svg";

  return (
    <div className="w-full">
      <div className="w-full bg-[#FFF4DE] md:px-32 py-[60px] flex justify-center">
        <div className="flex flex-col gap-[60px] w-full lg:max-w-[1378px] px-5 2xl:px-0">
          <div>
            {/* Logo */}
            <div className="flex justify-center">
              <Link href="/" className="cursor-pointer">
                <Image
                  // src={logo}
                  src="/image/Footer/Logo.svg"
                  alt="Logo"
                  width={160}
                  height={40}
                />
              </Link>
            </div>

            {/* Description */}
            <div
              className="text-center text-sm text-black leading-relaxed whitespace-pre-line mt-3"
              dangerouslySetInnerHTML={{ __html: footer_content }}
            />
          </div>

          {/* Footer Sections */}
          <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0">
            {/* Contact Us */}
            <div className="w-[216px] ">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.200123456789!2d90.35980012345678!3d23.74330012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c123456789ab%3A0xcdef123456789abc!2sW%2F20%20Noorjahan%20Road%2C%20Mohammadpur%2C%20Dhaka-1207!5e0!3m2!1sen!2sbd!4v1718968000000!5m2!1sen!2sbd"
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
                {paymentMethods?.map((method) => (
                  <Image
                    key={method?.id}
                    src={method?.featured_image}
                    alt={method?.name}
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
            <div
              className="text-white text-sm"
              dangerouslySetInnerHTML={{ __html: bottom_footer_content }}
            />
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
  <div className="flex flex-col gap-[15px]">
    <h3 className="text-base text-primary-strong font-bold uppercase leading-4">
      {title}
    </h3>
    {children}
  </div>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-start gap-3">
    <Image src={icon} alt="" width={24} height={24} />
    <span className="text-sm text-primary-strong font-medium leading-4 whitespace-pre-line">
      {text}
    </span>
  </div>
);

const FooterLinkList = ({ links }) => (
  <div className="flex flex-col gap-[12px] mt-1">
    <h3 className="text-base text-primary-strong font-bold leading-2.5 uppercase">
      Useful Links
    </h3>
    <div className="flex flex-col">
      {links.map((link, idx) => (
        <Link key={idx} href={link?.href}>
          <span className="text-sm text-primary-strong font-medium leading-2.5">
            {link?.name}
          </span>
        </Link>
      ))}
    </div>
  </div>
);

export default Footer;

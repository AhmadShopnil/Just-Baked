"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import axiosInstance from "@/helpers/axiosInstance";
import { getMetaValueByMetaName } from "@/helpers/metaHelpers";

const Map = () => {
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

  const phone = getMetaValueByMetaName(settings, "company_phone") || "";
  const phone2 = getMetaValueByMetaName(settings, "company_phone_2") || "";
  const whatsApp = getMetaValueByMetaName(settings, "whats_app") || "";
  const company_email = getMetaValueByMetaName(settings, "company_email") || "";
  const facebookLink = getMetaValueByMetaName(settings, "facebook_url") || "#";
  const office_location = getMetaValueByMetaName(settings, "office_location") || "";

  return (
    <div className="absolute w-full top-40 right:0 md:right-2">
      <div className="relative max-w-screen-lg mx-auto">
        <div className="relative flex flex-col-reverse md:flex-row gap-6 items-center md:items-stretch">
          {/* Map */}
          <div className="w-full h-[700px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sBrooklyn%20Bridge!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Box */}
          <div
            className="w-[90%] max-w-sm bg-[#5c4d28] text-white p-6 rounded-lg 
            shadow-lg absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 
            top-6 md:absolute md:left-6 md:top-1/2 md:transform md:-translate-y-1/2 z-10"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-white text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>

            <div className="flex flex-col gap-5 mt-2 text-sm">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="w-5 h-5 text-white" />
                <span>{phone}</span>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-4">
                <FaFacebookF className="w-5 h-5 text-white" />
                <span>{facebookLink}</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <FaEnvelope className="w-5 h-5 text-white" />
                <span>{company_email}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="w-5 h-5 text-white" />
                <span>{office_location}</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsApp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 px-4 py-2 bg-[#5c4d28]
               hover:bg-green-700 text-white rounded-lg
                transition-all duration-200 border-white border-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;

import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import { getMetaValueByMetaName } from "@/helpers/metaHelpers";

const Map = ({ settings }) => {
  const phone = getMetaValueByMetaName(settings, "company_phone") || "";
  const phone2 = getMetaValueByMetaName(settings, "company_phone_2") || "";
  const whatsApp = getMetaValueByMetaName(settings, "whats_app") || "";
  const company_email = getMetaValueByMetaName(settings, "company_email") || "";
  const facebookLink = getMetaValueByMetaName(settings, "facebook_url") || "#";
  const office_location =
    getMetaValueByMetaName(settings, "office_location") || "";

// const officeMapEmbed = getMetaValueByMetaName(settings, "office_map_embed") || defaultEmbed;


  return (
    <div className="absolute w-full top-40 right:0 md:right-2">
      <div className="relative max-w-screen-lg mx-auto">
        <div className="relative flex flex-col-reverse md:flex-row gap-6 items-center md:items-stretch">
          {/* Map */}
          <div className="w-full h-[700px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.200123456789!2d90.35980012345678!3d23.74330012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c123456789ab%3A0xcdef123456789abc!2sW%2F20%20Noorjahan%20Road%2C%20Mohammadpur%2C%20Dhaka-1207!5e0!3m2!1sen!2sbd!4v1718968000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Box */}
          <div
            className="w-[90%] max-w-sm bg-[#5c4d28] text-white p-6 rounded-lg 
            shadow-lg absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 
            top-6 md:absolute md:left-6 md:top-1/2 md:transform md:-translate-y-1/2 z-10"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

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

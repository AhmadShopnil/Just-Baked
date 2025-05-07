import React from "react";

const Map = () => {
  return (
    <div className="absolute w-full top-40 right-2">
      <div className="relative max-w-screen-lg mx-auto">
        <div className="relative flex flex-col-reverse md:flex-row gap-6 items-center md:items-stretch">
          {/* Map */}
          <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sBrooklyn%20Bridge!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Box */}
          <div className="w-full max-w-sm bg-[#5c4d28] text-white p-6 rounded-lg shadow-lg md:absolute md:left-6 md:top-1/2 md:transform md:-translate-y-1/2 z-10">
            {/* Content unchanged */}
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;

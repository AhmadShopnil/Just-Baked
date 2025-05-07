export default function ContactPage() {
    return (
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Layer 1: Main background (kraft paper texture) */}
        <div className="absolute inset-0 bg-[#f8f0e3]">{/* You'll add your kraft paper texture background here */}</div>
  
        {/* Decorative food images around the edges */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-80">{/* Croissant image */}</div>
        <div className="absolute bottom-10 left-10 w-40 h-40 opacity-80">{/* Sandwich/burger image */}</div>
        <div className="absolute top-10 right-10 w-36 h-36 opacity-80">{/* Pastry image */}</div>
        <div className="absolute bottom-10 right-10 w-44 h-44 opacity-80">{/* Food image */}</div>
  
        <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Layer 2: Get in Touch section with overlay */}
          <div className="relative mb-16 md:mb-24">
            {/* Overlay for Get in Touch section */}
            <div className="absolute inset-0 bg-[#f0e6d2] rounded-xl -z-10"></div>
  
            {/* Logo and header */}
            <div className="flex flex-col items-center py-8 px-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/placeholder.svg?height=40&width=40" alt="Cup icon" className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold">Just Baked</h2>
              </div>
              <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
              <p className="text-center max-w-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
  
          {/* Layer 3 & 4: Map and Contact Information */}
          <div className="relative mt-[-80px] md:mt-[-120px]">
            {/* This negative margin pulls the map up to overlap with the Get in Touch section */}
  
            <div className="relative flex flex-col md:flex-row gap-6 items-center md:items-stretch">
              {/* Layer 3: Map (spans across both the overlay and main background) */}
              <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl order-2 md:order-none">
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
  
              {/* Layer 4: Contact information box (positioned over the map) */}
              <div className="md:absolute md:left-6 md:top-1/2 md:transform md:-translate-y-1/2 z-10 w-full max-w-sm bg-[#5c4d28] text-white p-6 rounded-lg shadow-lg order-1 md:order-none">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-sm mb-6">Reach out to us for any inquiries or to place an order</p>
  
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span>+1 (123) 456-7890</span>
                  </div>
  
                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span>info@justbaked.com</span>
                  </div>
  
                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span>123 Bakery Street, Flour City, FC 12345</span>
                  </div>
  
                  {/* Website */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <span>www.justbaked.com</span>
                  </div>
                </div>
  
                {/* Decorative leaf illustration */}
                <div className="absolute bottom-4 right-4 opacity-30">{/* Leaf illustration will go here */}</div>
              </div>
            </div>
          </div>
  
          {/* Mobile version (visible only on small screens) */}
          <div className="md:hidden mt-8 max-w-sm mx-auto">
            <div className="bg-[#f5e6c9] rounded-lg overflow-hidden shadow-lg">
              <div className="bg-[#5c4d28] text-white p-4">
                <h3 className="text-lg font-semibold">Get in Touch</h3>
              </div>
              <div className="p-4 space-y-3">
                {/* Phone */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center text-[#5c4d28]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">+1 (123) 456-7890</span>
                </div>
  
                {/* Email */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center text-[#5c4d28]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">info@justbaked.com</span>
                </div>
  
                {/* Location */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center text-[#5c4d28]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">123 Bakery Street, Flour City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
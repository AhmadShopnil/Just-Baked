import Map from "@/components/contact/map";
import { BASE_URL } from "@/helpers/baseUrl";
import { getMetaValueByMetaName } from "@/helpers/metaHelpers";

export default async function ContactSection() {
  const url = `${BASE_URL}/frontend/settings`;
  let settings = [];
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }, // revalidate every 60 seconds
    });
    if (!res.ok) {
      throw new Error("Failed to fetch settings");
    }
    const data = await res.json();
    settings = data || [];
  } catch (error) {
    console.error("Error fetching best settings:", error);
  }

  const contact_us_content =
    getMetaValueByMetaName(settings, "contact_us_content") || "";

  // console.log("contact_us_content : ", contact_us_content)
  // console.log("settings : ", settings)

  return (
    <div
      className="bg-[#FFE6C5] min-h-[1100px] md:min-h-[800px] "
      style={{
        backgroundImage: "url('/image/contact/overlay.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* log */}
      <div className="flex items-center justify-center h-20 ">
        {/* <Image src={logo} alt="Just Baked Logo" width={200} height={200} /> */}
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
            opacity: 0.4,
          }}
        />

        <div className="">
          {/* Content */}
          <div className="relative z-10 text-white text-center mb-8">
            <h1 className="text-[40px] font-bold">Get In Touch</h1>

            <div
              className="font-semibold text-md  max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: contact_us_content }}
            />

            {/* <p className="font-semibold text-md  max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          {/* Map */}
          <div className="relative -top-44 z-10">
            <Map settings={settings} />
          </div>
        </div>
      </div>
    </div>
  );
}

import ComboPackage from "@/components/home/ComboPackage";
import Featured from "@/components/home/Featured";
import HeroSection from "@/components/home/HeroSection";
import { BASE_URL } from "@/helpers/baseUrl";
import { getMetaValueByMetaName } from "@/helpers/metaHelpers";
import React from "react";

// 1. Metadata Function
export async function generateMetadata() {
  const url = `${BASE_URL}/frontend/settings`;
  const heroUrl = `${BASE_URL}/posts?term_type=hero`;
  let heroItems = [];
  let settings;

  try {
    // Fetch hero items
    const res = await fetch(heroUrl, {
      next: { revalidate: 60 }, // revalidate every 60 seconds
    });
    if (!res.ok) {
      throw new Error("Failed to fetch heroItems");
    }
    const data = await res.json();
    heroItems = data?.data || [];
  } catch (error) {
    console.error("Error fetching heroItems:", error);
  }

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }, // revalidate every 60 seconds
    });
    const data = await res.json();
    settings = data;
  } catch (error) {
    console.error("Error fetching settings for metadata:", error);
  }

  const title = getMetaValueByMetaName(settings, "main_speech") || "JustBaked";
  const description =
    getMetaValueByMetaName(settings, "paragraphs") ||
    "JustBaked - Freshly baked goods and more.";
  const image = heroItems[0]?.featured_image;
  // const image = getMetaValueByMetaName(settings, "og_image") || "/default-og-image.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://my-app-weld-six.vercel.app/", // 🔁 Replace with actual domain
      type: "website",
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    // other: {
    //   "og:image": image, // ✅
    //   "og:image:alt": title,
    // },
  };
}

const Page = async () => {
  return (
    <div>
      <HeroSection />
      <Featured />
      <ComboPackage />
    </div>
  );
};

export default Page;

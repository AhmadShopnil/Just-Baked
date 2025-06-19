// app/shop/[slug]/page.tsx
import Shop from "@/components/shop/shop2";
import { BASE_URL } from "@/helpers/baseUrl";
import {
  getCategoryBySlug,
  getCategoryNameBySlug,
} from "@/helpers/getCategoryNameBySlug";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const catUrl = `${BASE_URL}/categories?taxonomy_type=product_categories&order_direction=desc&is_featured=Yes`;

  let categories;
  try {
    const res = await fetch(
      catUrl,
      // `${BASE_URL}/posts?term_type=product&category_slug=${slug}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    categories = data?.data;

    const category = getCategoryBySlug(categories, slug);

    return {
      title: `${category?.name || "Shop"} - Products | JustBaked`,
      description: `Browse products in category ${category?.slug || "Shop"}`,
      openGraph: {
        title: category?.name,
        description: `Browse products in category ${category?.slug || "Shop"}`,
        images: [
          {
            url: category?.image || "/default-og-image.jpg",
            alt: category?.name,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Shop - Products | Your Site Name",
      description: "Browse our latest products",
    };
  }
}

export default async function Page({ params }) {
  const { slug } = await params;
  let categories;
  const catUrl = `${BASE_URL}/categories?taxonomy_type=product_categories&order_direction=desc&is_featured=Yes`;
  try {
    const res = await fetch(
      catUrl,
    
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    categories = data?.data;
    // const category = getCategoryBySlug(categories, slug);
   
  } catch (error) {}


  return <Shop slug={slug} />;
}

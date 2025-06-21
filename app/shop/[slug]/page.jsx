// app/shop/[slug]/page.tsx
import Shop from "@/components/shop/shop2";
import { BASE_URL } from "@/helpers/baseUrl";
import { getCategoryBySlug } from "@/helpers/getCategoryNameBySlug";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const catUrl = `${BASE_URL}/categories?taxonomy_type=product_categories&order_direction=desc`;
  const fullUrl = `https://my-app-weld-six.vercel.app/shop/${slug}`;
  let categories;

  try {
    const res = await fetch(catUrl, {
      next: { revalidate: 60 }, // revalidate every 60 seconds
    });
    const data = await res.json();
    categories = data?.data;
    const category = getCategoryBySlug(categories, slug);

    return {
      title: `${category.name} - Products | JustBaked`,
      description: `Browse products in category ${category.slug}`,
      openGraph: {
        title: category.name,
        description: `Browse products in category ${category.slug}`,
        url: fullUrl,
        type: "website",
        images: [
          {
            url: category?.image || "/default-og-image.jpg",
            width: 1200,
            height: 630,
            alt: category.name || "Category",
          },
        ],
      },
      other: {
        "og:image": category?.image || "/default-og-image.jpg",
        "og:image:alt": category?.name || "Category",
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
  const catUrl = `${BASE_URL}/categories?taxonomy_type=product_categories&order_direction=desc`;
  try {
    const res = await fetch(
      catUrl,

      {
        next: { revalidate: 60 }, // revalidate every 60 seconds
      }
    );
    const data = await res.json();
    categories = data?.data;
    const category = getCategoryBySlug(categories, slug);
  } catch (error) {}

  return <Shop slug={slug} />;
}

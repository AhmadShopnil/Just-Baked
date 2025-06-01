"use client";


import Shop from "@/components/shop/shop2";
import axiosInstance from "@/helpers/axiosInstance";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
 
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("newest");
  const [productsPerPage, setProductPerPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // ✅ Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let query = `/posts?term_type=product&per_page=${productsPerPage}&page=${currentPage}&is_status=publish`;

        // Sorting
        if (sortBy === "newest") {
          query += "&order_by=id:desc";
        } else if (sortBy === "price-low-high") {
          query += "&order_by=original_price:asc";
        } else if (sortBy === "price-high-low") {
          query += "&order_by=original_price:desc";
        }

        // Price filter
        if (priceRange[0] > 0 || priceRange[1] < 1000) {
          query += `&extra_field=original_price:gte:${priceRange[0]}|original_price:lte:${priceRange[1]}`;
        }

        const res = await axiosInstance.get(query);
        setProducts(res.data?.data || []);
        setTotalPages(
          Math.ceil(res.data?.meta?.total / res.data?.meta?.per_page)
        );
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [priceRange, sortBy, currentPage, productsPerPage]);

  // console.log("slug: ", slug)

  return (
    <Shop
      products={products}
      sortBy={sortBy}
      setSortBy={setSortBy}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      loading={loading}
      totalPages={totalPages}
      slug={''}
    />
  );
};

export default Page;

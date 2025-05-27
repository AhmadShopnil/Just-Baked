'use client';

import Shop from "@/components/shop/Shop";
import axiosInstance from "@/helpers/axiosInstance";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("newest");
  const [productsPerPage, setProductPerPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // ✅ Set selected category from URL query
  useEffect(() => {
    if (categoryFromURL && !selectedCategories.includes(categoryFromURL)) {
      setSelectedCategories([categoryFromURL]);
    }
  }, [categoryFromURL]);

  // ✅ Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryUrl = `/categories?taxonomy_type=product_categories&order_direction=desc&is_featured=No`;
        const res = await axiosInstance.get(categoryUrl);
        setCategories(res.data?.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // ✅ Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let query = `/posts?term_type=product&per_page=${productsPerPage}&page=${currentPage}&is_status=publish`;

        // Category filter
        if (selectedCategories.length === 1) {
          query += `&category_slug=${selectedCategories[0]}`;
        }

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
  }, [selectedCategories, priceRange, sortBy, currentPage, productsPerPage]);

  return (
    <Shop
      products={products}
      categories={categories}
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
      priceRange={priceRange}
      setPriceRange={setPriceRange}
      sortBy={sortBy}
      setSortBy={setSortBy}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      productsPerPage={productsPerPage}
      setProductPerPage={setProductPerPage}
      loading={loading}
      totalPages={totalPages}
    />
  );
};

export default Page;

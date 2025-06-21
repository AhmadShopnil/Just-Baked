// utils/filterProducts.ts

export function filterProductsByCategoryId(products, categoryId) {
  return products.filter(product =>
    product.categories?.some(cat => cat.id === categoryId)
  );
}

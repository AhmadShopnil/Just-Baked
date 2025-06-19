export function getCategoryNameBySlug(products, slugToFind) {
  const category = products
    .flatMap((product) => product.categories)
    .find((category) => category.slug === slugToFind);

  return category ? category.name : null;
}

export function getCategoryBySlug(categories, slugToFind) {
  const category = categories.find((category) => category.slug === slugToFind);

  return category ? category : null;
}

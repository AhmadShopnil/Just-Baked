export function getTitleSlugBySlug (product, templateSlug) {
  const section = product?.sections_on_api?.find(
    sec => sec?.template_info?.slug === templateSlug
  );
  return section ? section.title_slug : null;
};


// Reusable function to filter sections by title_slug and map all sub-sections
export function getSubSectionsBySlug (data, titleSlug, onlySub = false) {
  const section = data?.sections_on_api?.find(
    section => section.title_slug === titleSlug
  )

  if (!section) return onlySub ? [] : null

  return onlySub ? section.sub_sections || [] : section
}


export function mapSectionsByTitleSlug(data) {
  const sectionMap = {};

  function processSection(section) {
    // Add the current section to the map
    sectionMap[section?.title_slug] = section;

    // If the section has sub_sections, process them recursively
    if (section.sub_sections && section?.sub_sections?.length > 0) {
      section?.sub_sections.forEach(processSection);
    }
  }

  // Start processing the root sections
  data?.forEach(processSection);

  return sectionMap;
}
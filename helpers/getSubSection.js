export const getSubSection = (data, section_title) => {
 return data?.find((el) => el?.title_slug === section_title);

};

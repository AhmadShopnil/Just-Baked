// metaHelpers.js

export const getMetaValueByMetaName = (jsonData, metaName) => {
  //console.log(jsonData?.data);
  const foundItem = jsonData?.data?.find((item) => item.meta_name === metaName);
  return foundItem ? foundItem.meta_value : null;
};


export const getMetaValueFromExtraFields = (jsonData, metaName) => {
  //console.log(jsonData?.extraFields);
  const foundItem = jsonData?.extraFields?.find((item) => item.meta_name === metaName);
  return foundItem ? foundItem.meta_value : null;
};


export const getMetaValueFromExtraFieldsNonCapital = (jsonData, metaName) => {
  //console.log(jsonData?.extraFields);
  const foundItem = jsonData?.extra_fields?.find((item) => item.meta_name === metaName);
  return foundItem ? foundItem.meta_value : null;
};

// {product?.extra_fields.find(field => field.meta_name === "product_model")?.meta_value}
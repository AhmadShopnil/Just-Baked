import axiosInstance from "./axiosInstance";

// GET request helper
export const fetcher = async (url, options = {}) => {
  try {
    const response = await axiosInstance.get(url, options);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error fetching data";
  }
};

// POST request helper
export const poster = async (url, data, options = {}) => {
  try {
    const response = await axiosInstance.post(url, data, options);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error posting data";
  }
};

// PUT request helper
export const putter = async (url, data, options = {}) => {
  try {
    const response = await axiosInstance.put(url, data, options);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error updating data";
  }
};

// DELETE request helper
export const deleter = async (url, options = {}) => {
  try {
    const response = await axiosInstance.delete(url, options);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error deleting data";
  }
};

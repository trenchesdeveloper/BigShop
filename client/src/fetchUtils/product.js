import axios from 'axios';

export const fetchProductsByFilters = async (arg) =>
  await axios.post(`/api/product/search/filters`, arg);

export const fetchProductsByCount = async (count) => {
  try {
    return await axios.get(`/api/product/${count}`);
  } catch (err) {
    console.log(err);
  }
};

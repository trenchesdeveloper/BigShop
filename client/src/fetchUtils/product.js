import axios from "axios";

export const fetchProductsByFilters = async (arg) =>
  await axios.post(`/api/product/search/filters`, arg);

export const fetchProductsByCount = async (count) =>
  await axios.get(`/api/product/${count}`);

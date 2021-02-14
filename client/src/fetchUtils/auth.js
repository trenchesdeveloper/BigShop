import axios from "axios";

export const createOrUpdateUser = async (authtoken) => {
  return;
};

export const currentAdmin = async (token) => {
  const config = {
    headers: {
      token,
    },
  };

  return await axios.get(`/api/auth/currentAdmin`, config);
};

export const createCategory = async (token, name) => {
  const config = {
    headers: {
      token,
    },
  };

  return await axios.post(`/api/category`, { name }, config);
};

export const getCategories = async () => {
  return await axios.get(`/api/category`);
};

export const getCategory = async (slug) => {
  return await axios.get(`/api/category/${slug}`);
};

export const updateCategory = async (slug, token, name) => {
  const config = {
    headers: {
      token,
    },
  };
  return await axios.put(`/api/category/${slug}`, { name }, config);
};

export const deleteCategory = async (slug, token) => {
  const config = {
    headers: {
      token,
    },
  };
  return await axios.delete(`/api/category/${slug}`, config);
};

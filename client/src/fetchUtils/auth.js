import axios from 'axios'

export const createOrUpdateUser = async (authtoken) => {
  return 
};


export const currentAdmin = async (token) =>{
const config = {
  headers: {
    token
  }
}

  return await axios.get(`/api/auth/currentAdmin`, config)
}
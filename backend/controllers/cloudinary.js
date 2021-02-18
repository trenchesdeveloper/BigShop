import asyncHandler from "express-async-handler";
import cloudinary from 'cloudinary'

// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const upload = asyncHandler (async (req, res, next) =>{

})


export const remove = asyncHandler(async (req, res, next) => {});
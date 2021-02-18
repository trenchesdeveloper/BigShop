import asyncHandler from "express-async-handler";
import cloudinary from 'cloudinary'
import AppError from "../utils/appError";

// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const upload = asyncHandler (async (req, res, next) =>{
const result = await cloudinary.uploader.upload(req.body.image, {
    public_id: `${Date.now()}`,
    resource_type: 'auto',

})

if(!result){
    next(new AppError(`Error with cloudinary`, 400))
}



})


export const remove = asyncHandler(async (req, res, next) => {});
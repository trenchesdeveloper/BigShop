import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary";
import AppError from "../utils/appError.js";

// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const upload = asyncHandler(async (req, res, next) => {
  const result = await cloudinary.v2.uploader.upload(req.body.image, {
    public_id: `${Date.now()}`,
    resource_type: "auto",
  });

  if (!result) {
    return next(new AppError(`Error with cloudinary`, 400));
  }

  res.status(200).json({
    public_id: result.public_id,
    url: result.secure_url,
  });
});

export const remove = asyncHandler(async (req, res, next) => {
  const imageId = req.body.public_id;

  const result = await cloudinary.v2.uploader.destroy(imageId);

  if (!result) {
    return next(new AppError("error deleting from cloudinary"));
  }

  res.status(200).send("removed");
});

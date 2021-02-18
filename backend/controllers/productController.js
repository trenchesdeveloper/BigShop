import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import AppError from "../utils/appError.js";

export const create = asyncHandler(async (req, res, next) => {
console.log(req.body.subs);
  const product = await Product.create(req.body);

  res.status(201).json(product);
});

export const getAll = asyncHandler(async (req, res, next) => {
  const product = await Product.find({}).sort({ createdAt: -1 }).populate('category');

  res.status(200).json(product);
});

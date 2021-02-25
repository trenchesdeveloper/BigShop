import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import AppError from "../utils/appError.js";

export const create = asyncHandler(async (req, res, next) => {
  console.log(req.body.subs);
  const product = await Product.create(req.body);

  res.status(201).json(product);
});

export const getAll = asyncHandler(async (req, res, next) => {
  const product = await Product.find({})
    .sort({ createdAt: -1 })
    .populate("category");

  res.status(200).json(product);
});

export const listAll = asyncHandler(async (req, res, next) => {
  console.log(req.params.count);
  const product = await Product.find({})
    .limit(parseInt(req.params.count))
    .populate("subs")
    .sort([["createdAt", "desc"]])
    .populate("category");

  res.status(200).json(product);
});

export const deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findOneAndRemove({ slug: req.params.slug });

  res.status(204).json(product);
});

export const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findOne({ slug: req.params.slug })
    .populate("category")
    .populate("subs");

  if (!product) {
    return next(new AppError(`product not found`, 404));
  }

  res.status(200).json(product);
});

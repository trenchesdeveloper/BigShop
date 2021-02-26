import asyncHandler from "express-async-handler";
import slugify from "slugify";
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

export const updateProduct = asyncHandler(async (req, res, next) => {
  if (req.body.title) {
    req.body.title = slugify(req.body.title);
  }
  const product = await Product.findOneAndUpdate(
    { slug: req.params.slug },
    req.body,
    { new: true }
  )
    .populate("category")
    .populate("subs");

  if (!product) {
    return next(new AppError(`product not found`, 404));
  }

  res.status(200).json(product);
});

export const listProducts = asyncHandler(async (req, res, next) => {
  const { sort, order, limit } = req.body;

  const products = await Product.find({})
    .populate("subs")
    .populate("category")
    .limit(parseInt(limit))
    .sort([[sort, order]]);

  res.status(200).json(products);
});

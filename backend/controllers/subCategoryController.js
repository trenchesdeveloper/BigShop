import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import SubCategory from "../models/subCategorySchema.js";
import AppError from "../utils/appError.js";

export const create = asyncHandler(async (req, res, next) => {
  const { name, category } = req.body;

  const subCat = await SubCategory.create({ name, parent: category });

  res.status(201).json(subCat);
});

export const getAll = asyncHandler(async (req, res, next) => {
  const subCat = await SubCategory.find({}).sort({ createdAt: -1 });

  res.status(200).json(subCat);
});

export const getOne = asyncHandler(async (req, res, next) => {
  const subCat = await SubCategory.findOne({ slug: req.params.slug });

  if (!subCat) {
    next(new AppError("sub-category not found", 404));
  }

  const products = await Product.find({ subs: subCat })
    .populate("category")
    .populate("subs");

  res.status(200).json({
    subCat,
    products,
  });
});

export const updateOne = asyncHandler(async (req, res, next) => {
  const cat = await SubCategory.findOne({ slug: req.params.slug });

  if (!cat) {
    next(new AppError("sub-category not found", 404));
  }
  cat.name = req.body.name;
  cat.parent = req.body.parent;

  const updatedSubCategory = await cat.save();

  res.status(200).json(updatedSubCategory);
});

export const deleteOne = asyncHandler(async (req, res, next) => {
  await SubCategory.findOneAndDelete({ slug: req.params.slug });

  res.status(204).send("deleted");
});

import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";
import AppError from "../utils/appError.js";

export const create = asyncHandler(async (req, res, next) => {
  const { name } = req.body;

  const cat = await Category.create({ name });

  res.status(201).json(cat);
});

export const getAll = asyncHandler(async (req, res, next) => {
  const cat = await Category.find({}).sort({ createdAt: -1 });

  res.status(200).json(cat);
});

export const getOne = asyncHandler(async (req, res, next) => {
  const cat = await Category.findOne({ slug: req.params.slug });

  if (!cat) {
    next(new AppError("category not found", 404));
  }

  res.status(200).json(cat);
});

export const updateOne = asyncHandler(async (req, res, next) => {
     const cat = await Category.findOne({ slug: req.params.slug });

      if (!cat) {
        next(new AppError("category not found", 404));
      }

});

export const deleteOne = asyncHandler(async (req, res, next) => {
    await Category.findOneAndDelete({ slug: req.params.slug });

    res.status(204).send('deleted')
});

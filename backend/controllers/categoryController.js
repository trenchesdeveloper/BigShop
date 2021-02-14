import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";
import AppError from "../utils/appError.js";


export const create = asyncHandler(async (req, res, next) =>{
    const {name} = req.body;

    const cat = await Category.create({name})

    res.status(201).json(cat)
})

export const getAll = asyncHandler(async (req, res, next) => {});

export const getOne = asyncHandler(async (req, res, next) => {});

export const updateOne = asyncHandler(async (req, res, next) => {});

export const deleteOne = asyncHandler(async (req, res, next) => {});
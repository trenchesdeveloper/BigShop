import asyncHandler from "express-async-handler";
import slugify from "slugify";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import AppError from "../utils/appError.js";

//@DESC  Create a new product
//@route POST api/products
//@access PRIVATE
export const create = asyncHandler(async (req, res, next) => {
  console.log(req.body.subs);
  const product = await Product.create(req.body);

  res.status(201).json(product);
});

//@DESC  Get All Products
//@route GET api/products
//@access PUBLIC

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

//@DESC  Fetch all Products without paginations
//@route GET api/products
//@access PUBLIC

// export const listProducts = asyncHandler(async (req, res, next) => {
//   const { sort, order, limit } = req.body;

//   const products = await Product.find({})
//     .populate("subs")
//     .populate("category")
//     .limit(parseInt(limit))
//     .sort([[sort, order]]);

//   res.status(200).json(products);
// });

//@DESC  Fetch all Products with paginations
//@route GET api/product/allProducts
//@access PUBLIC
export const listProducts = asyncHandler(async (req, res, next) => {
  const { sort, order, page } = req.body;

  const currentPage = page || 1;

  const perPage = 3;

  const total = await Product.find({}).estimatedDocumentCount();

  const products = await Product.find({})
    .skip((currentPage - 1) * perPage)
    .populate("subs")
    .populate("category")
    .limit(parseInt(perPage))
    .sort([[sort, order]]);

  res.status(200).json({ products, total });
});

//@DESC  count all documents in the collection
//@route GET api/product/total
//@access PUBLIC

export const productsCount = asyncHandler(async (req, res, next) => {
  const total = await Product.find({}).estimatedDocumentCount();

  res.status(200).json(total);
});

//@DESC  update product star rating
//@route PUT api/product/star/:productId
//@access PRIVATE

export const productStar = asyncHandler(async (req, res, next) => {
  const { star } = req.body;

  const product = await Product.findById(req.params.productId);

  const user = await User.findOne({ email: req.user.email });

  // check if current loggedin user have already added rating to this product
  let existingRatingObject = product.ratings.find(
    (el) => el.postedBy.toString() === user._id.toString()
  );

  // if user haven't left rating before, push it into product.rating
  if (existingRatingObject === undefined) {
    let ratingAdded = await Product.findByIdAndUpdate(
      req.params.productId,
      {
        $push: { ratings: { star, postedBy: user._id } },
      },
      { new: true }
    );

    res.status(200).json(ratingAdded);
  } else {
    // if user have already left rating, update it
    let ratingUpdated = await Product.updateOne(
      {
        ratings: { $elemMatch: existingRatingObject },
      },
      { $set: { "ratings.$.star": star } },
      { new: true }
    );

    res.status(200).json(ratingUpdated);
  }
});

//@DESC  Fetch all Related Products
//@route GET api/product/related/:productId
//@access PUBLIC
export const getRelatedProducts = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.productId);

  const related = await Product.find({
    _id: { $ne: product._id },
    category: product.category,
  })
    .limit(6)
    .populate("category")
    .populate("subs");

  res.status(200).json(related);
});

// search-text helper method
const handleQuery = async (req, res, query) => {
  const products = await Product.find({
    $text: { $search: query },
  })
    .populate("category")
    .populate("subs", "_id name")
    .populate("postedBy", "_id name");

  res.status(200).json(products);
};

const handlePrice = async (req, res, price) => {

    const products = await Product.find({
      $gte: price[0],
      $lte: price[1],
    })
      .populate("category")
      .populate("subs", "_id name")
      .populate("postedBy", "_id name");

    res.status(200).json(products);
}

//@DESC  Filtering endpoint
//@route POST api/product/search/filters
//@access PUBLIC
export const searchFilters = asyncHandler(async (req, res, next) => {
  const { query } = req.body;

  if (query) {
    console.log("query", query);

    await handleQuery(req, res, query);
  }

  // price [0, 200]
  if (price !== undefined) {
    console.log("price  ==>", price);
    await handlePrice(req, res, price);
  }
});

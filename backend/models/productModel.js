import mongoose from "mongoose";
import slugify from "slugify";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },

    price: {
      type: Number,
      trim: true,
      required: true,
    },
    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    // },
    // subs: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "SubCategory",
    //   },
    // ],
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    // images: Array,
    shipping: {
      type: String,
      enum: ["Yes", "No"],
    },
    color: {
      type: String,
      enum: ["black", "brown", "silver", "white", "blue"],
    },
    brand: {
      type: String,
      enum: ["Apple", "Lenovo", "Samsung", "Microsoft", "ASUS"],
    },
    // ratings: [
    //   {
    //     star: Number,
    //     postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    //   },
    // ],
  },
  { timestamps: true }
);

productSchema.pre("save", async function (next) {
  this.slug = await slugify(this.title);
  next();
});

const Product = mongoose.model("Product", productSchema);

export default Product;

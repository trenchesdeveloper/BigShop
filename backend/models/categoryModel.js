import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "name is required"],
      minlength: [3, "Too short"],
      maxlength: [32, "Too long"],
    },
    slot: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;

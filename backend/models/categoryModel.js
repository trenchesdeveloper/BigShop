import mongoose from "mongoose";
import slugify from "slugify";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "name is required"],
      minlength: [3, "Too short"],
      maxlength: [32, "Too long"],
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

categorySchema.pre("save", async function (next) {
  
  this.slug = await slugify(this.name);
  next();
});

const Category = mongoose.model("Category", categorySchema);

export default Category;

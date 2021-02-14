import mongoose from "mongoose";
import slugify from "slugify";

const subCategorySchema = new mongoose.Schema(
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
      //unique: true,
      //index: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

subCategorySchema.pre("save", async function (next) {
  this.slug = await slugify(this.name);
  next();
});

const SubCategory = mongoose.model("SubCategory", subCategorySchema);

export default SubCategory;

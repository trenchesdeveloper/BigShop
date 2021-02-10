import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      index: true,
    },

    role: {
      type: String,
      default: "subscriber",
    },

    cart: {
      type: Array,
      default: [],
    },
    address: String,
    //wishlist: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const createOrUpdateUser = asyncHandler(async (req, res, next) => {
  const { name, email, picture } = req.user;

  const user = await User.findOneAndUpdate(
    { email },
    { name, picture },
    { new: true }
  );

  console.log(user);

  if (user) {
    res.status(200).json(user);
  } else {
    const newUser = await User.create({ name, email, picture });

    res.status(201).json(newUser);

    console.log(newUser);
  }
});

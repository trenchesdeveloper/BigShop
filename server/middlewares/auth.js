import asyncHandler from "express-async-handler";
import admin from "../utils/firebase.js";
import User from "../models/userModel.js";
import AppError from '../utils/appError.js'

export const authCheck = asyncHandler(async (req, res, next) => {
  // 1) Get the authToken from req.headers
  const { token } = req.headers;

  // 2) Authenticate the user
  const firebaseUser = await admin.auth().verifyIdToken(token);
  // 3) add it to the req object
  req.user = firebaseUser;

  next();
});

export const adminCheck = asyncHandler(async (req, res, next) => {
  // 1) Get the authToken from req.headers
  const { email } = req.user;

  const adminUser = await User.findOne({ email });

  if (!adminUser) {
    return next(new AppError("user not found", 404));
  }

  // check if the role is admin
  if(adminUser !== 'admin'){
    return next(new AppError("not authorized", 403));
  }
  
  next();
});

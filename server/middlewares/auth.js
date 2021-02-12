import asyncHandler from "express-async-handler";
import admin from "../utils/firebase.js";

export const authCheck = asyncHandler(async (req, res, next) => {
  // 1) Get the authToken from req.headers
  const { token } = req.headers;

  // 2) Authenticate the user
  const firebaseUser = await admin.auth().verifyIdToken(token);
  // 3) add it to the req object
  req.user = firebaseUser;

  next();
});
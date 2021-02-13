import express from "express";
import {
  createOrUpdateUser,
  currentUser,
} from "../controllers/authController.js";
import { adminCheck, authCheck } from "../middlewares/auth.js";
import {
  create,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/").get(getAll).post(authCheck, adminCheck, create);

router.route("/:slug").get(getOne).put(updateOne).delete(deleteOne);

export default router;

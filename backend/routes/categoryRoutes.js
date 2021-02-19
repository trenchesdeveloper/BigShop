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
  getSubs,
} from "../controllers/categoryController.js";

const router = express.Router();

import subRouter from "./subCategoryRoutes.js";



router.route("/").get(getAll).post(authCheck, adminCheck, create);

router
  .route("/:slug")
  .get(getOne)
  .put(authCheck, adminCheck, updateOne)
  .delete(authCheck, adminCheck, deleteOne);

router.get("/:id/subs", getSubs);

export default router;

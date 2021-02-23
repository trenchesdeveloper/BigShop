import express from "express";
import {
  create,
  deleteProduct,
  getAll,
  listAll,
} from "../controllers/productController.js";

import { adminCheck, authCheck } from "../middlewares/auth.js";

const router = express.Router();

router.route("/").get(getAll).post(authCheck, adminCheck, create);
router.route("/:count").get(listAll); //products/100

router.delete("/:slug", authCheck, adminCheck, deleteProduct);

// router
//   .route("/:slug")
//   .get(getOne)
//   .put(authCheck, adminCheck, updateOne)
//   .delete(authCheck, adminCheck, deleteOne);

export default router;

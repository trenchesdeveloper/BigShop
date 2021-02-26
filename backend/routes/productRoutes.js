import express from "express";
import {
  create,
  deleteProduct,
  getAll,
  listAll,
  getProduct,
  updateProduct,
} from "../controllers/productController.js";

import { adminCheck, authCheck } from "../middlewares/auth.js";

const router = express.Router();

router.route("/").get(getAll).post(authCheck, adminCheck, create);
router.route("/:count").get(listAll); //products/100

router
  .route("/:slug")
  .delete(authCheck, adminCheck, deleteProduct)
  .put(authCheck, adminCheck, updateProduct);

router.get("/product/:slug", getProduct);

// router
//   .route("/:slug")
//   .get(getOne)
//   .put(authCheck, adminCheck, updateOne)
//   .delete(authCheck, adminCheck, deleteOne);

export default router;

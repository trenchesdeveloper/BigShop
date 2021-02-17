import express from "express";
import { create, getAll } from "../controllers/productController.js";

import { adminCheck, authCheck } from "../middlewares/auth.js";

const router = express.Router();

router.route("/").get(getAll).post(authCheck, adminCheck, create);

// router
//   .route("/:slug")
//   .get(getOne)
//   .put(authCheck, adminCheck, updateOne)
//   .delete(authCheck, adminCheck, deleteOne);

export default router;

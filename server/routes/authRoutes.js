import express from "express";
import { createOrUpdateUser } from "../controllers/authController.js";
import { authCheck } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createOrUpdateUser", authCheck, createOrUpdateUser);

export default router;

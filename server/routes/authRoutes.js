import express from "express";
import { createOrUpdateUser, currentUser } from "../controllers/authController.js";
import { authCheck } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createOrUpdateUser", authCheck, createOrUpdateUser);

router.get('/currentUser', authCheck, currentUser);

export default router;

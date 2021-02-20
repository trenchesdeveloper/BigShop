import express from "express";
import { remove, upload } from "../controllers/cloudinary.js";
import { adminCheck, authCheck } from "../middlewares/auth.js";

const router = express.Router();

router.post("/uploadImages", authCheck, adminCheck, upload);
router.post("/removeImages", authCheck, adminCheck, remove);

export default router;

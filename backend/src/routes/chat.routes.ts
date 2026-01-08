import express from "express";
import { chatHandler } from "../controllers/chat.controller";

const router = express.Router();
router.post("/", chatHandler);

export default router;

import express from "express";
import { createNote, getNotes } from "./controller.js";

const router = express.Router();

router.post("/", createNote);
router.get("/", getNotes);

export default router;

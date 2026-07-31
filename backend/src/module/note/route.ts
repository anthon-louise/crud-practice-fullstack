import express from "express";
import { createNote, getNoteById, getNotes } from "./controller.js";

const router = express.Router();

router.post("/", createNote);
router.get("/:id", getNoteById);
router.get("/", getNotes);


export default router;

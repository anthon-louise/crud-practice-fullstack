import express from "express";
import { createNote, deleteNote, getNoteById, getNotes, updateNote } from "./controller.js";

const router = express.Router();

router.post("/", createNote);
router.get("/:id", getNoteById);
router.get("/", getNotes);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);


export default router;

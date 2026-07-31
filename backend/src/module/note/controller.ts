import asyncHandler from "express-async-handler";
import { Note } from "./type.js";
import { createNoteSchema, updateNoteSchema } from "./schema.js";
import { pool } from "../../config/db.js";
import { AppError } from "../../errors/AppError.js";
import { Request, Response } from "express";

export const createNote = asyncHandler(async (req: Request, res: Response) => {
  const {title, content} = createNoteSchema.parse(req.body);

  await pool.query(`
    INSERT INTO
    notes (title, content)
    VALUES ($1, $2)
    `, [title, content]);

  res.status(201).json({
    message: "Note created"
  });

});

export const getNotes = asyncHandler(async (req: Request, res: Response) => {
  const notes = await pool.query<Note>(`
    SELECT *
    FROM notes
    `);

  res.json({
    notes: notes.rows,
    message: "Notes fetched"
  })
});

import asyncHandler from "express-async-handler";
import { Note } from "./type.js";
import { createNoteSchema, updateNoteSchema } from "./schema.js";
import { pool } from "../../config/db.js";
import { AppError } from "../../errors/AppError.js";
import { Request, Response } from "express";

export const createNote = asyncHandler(async (req: Request, res: Response) => {
  const { title, content } = createNoteSchema.parse(req.body);

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
    SELECT
    id,
    title,
    content,
    created_at
    FROM notes
    `);

  res.status(200).json({
    notes: notes.rows,
    message: "Notes fetched"
  })

});

export const getNoteById = asyncHandler(async (req: Request, res: Response) => {

  const noteId = req.params.id;

  const note = await pool.query<Note>(`
      SELECT
      id,
      title,
      content,
      created_at
      FROM notes
      WHERE id=$1
      `, [noteId]);

    if (note.rows.length === 0) {
       throw new AppError("Note not found", 404);
    }

    res.status(200).json({
      note: note.rows[0],
      message: "Note fetched"
    });

});

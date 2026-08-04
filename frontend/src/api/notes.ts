import type { createNoteInput, updateNoteInput } from "../schemas/note";
import type { Note } from "../types/note";
import { api } from "./axios";

export const getNotes = async (): Promise<Note[]> => {
  const res = await api.get("/");
  return res.data.notes;
}

export const getNoteById = async (id: number): Promise<Note> => {
  const res = await api.get(`/${id}`);
  return res.data.note;
}

export const createNote = async (data: createNoteInput) => {
  const res = await api.post("/", data);
  return res.data;
}

export const updateNote = async (data: updateNoteInput, id: number) => {
  const res = await api.put(`/${id}`, data);
  return res.data;
}

export const deleteNote = async (id: number) => {
  const res = await api.delete(`/${id}`);
  return res.data;
}

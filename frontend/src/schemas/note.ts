import z from "zod";

export const createNoteSchema = z.object({
  title: z.string().min(1, "Title cannot be empty").max(255, "Title too long"),
  content: z.string().min(1, "Content cannot be empty").max(255, "Content too long")
});
export const updateNoteSchema = createNoteSchema.optional();

export type createNoteInput = z.infer<typeof createNoteSchema>
export type updateNoteInput = z.infer<typeof updateNoteSchema>

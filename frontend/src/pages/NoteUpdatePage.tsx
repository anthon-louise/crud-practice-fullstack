import { useForm } from "react-hook-form"
import { updateNoteSchema, type updateNoteInput } from "../schemas/note"
import { zodResolver } from "@hookform/resolvers/zod";
import { useNote, useUpdateNote } from "../hooks/notes";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const NoteUpdatePage = () => {
  const noteId = Number(useParams().id);
  const updateMutation = useUpdateNote();
  const { data: note, isLoading } = useNote(noteId);
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<updateNoteInput>({
    resolver: zodResolver(updateNoteSchema),
    defaultValues: {
      title: "",
      content: ""
    }
  });

  useEffect(() => {
    if (note) {
      reset({ title: note.title, content: note.content })
    }
  }, [note, reset]);

  if (isLoading) return <p>Loading</p>

  const onSubmit = (data: updateNoteInput) => {
    updateMutation.mutate({ data, id: noteId }, {
      onSuccess: () => nav("/")
    });
  }

  return (
    <div>
      <h3>Update Note</h3>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <input placeholder="Title" {...register("title")} />
          {errors.title && <p>
            {errors.title.message}
          </p>}
        </div>

        <div>
          <input placeholder="Content" {...register("content")} />
          {errors.content && <p>
            {errors.content.message}
            </p>}
        </div>

        <button type="submit" disabled={updateMutation.isPending}>
            {updateMutation.isPending ? "Updating..." : "Update"}
        </button>

        <Link to="/">Cancel</Link>
      </form>
    </div>
  )
}

export default NoteUpdatePage

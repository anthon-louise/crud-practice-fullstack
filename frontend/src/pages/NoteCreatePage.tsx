import { useForm } from "react-hook-form"
import { createNoteSchema, type createNoteInput } from "../schemas/note"
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateNote } from "../hooks/notes";
import { Link, useNavigate } from "react-router-dom";

const NoteCreatePage = () => {
  const nav = useNavigate();
  const createMutation = useCreateNote();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<createNoteInput>({
    resolver: zodResolver(createNoteSchema),
    defaultValues: { title: "", content: "" }
  });

  const onSubmit = (data: createNoteInput) => {
    createMutation.mutate(data, {
      onSuccess: () => nav("/")
    });
  }

  return (
    <div>
      <h3>Create Note</h3>
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



        <button type="submit" disabled={createMutation.isPending}>
          {createMutation.isPending ? "Creating..." : "Create"}
        </button>

        <Link to="/">Cancel</Link>
      </form>
    </div>
  )
}

export default NoteCreatePage

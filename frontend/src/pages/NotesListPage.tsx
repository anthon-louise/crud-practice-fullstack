import { Link } from "react-router-dom";
import { useDeleteNote, useNotes } from "../hooks/notes"

const NotesListPage = () => {
  const {data: notes, isLoading, error} = useNotes( );
  const deleteMutation = useDeleteNote();


  if (isLoading) return <p>Loading</p>
  if (error) return <p>Something went wrong</p>

  return (
    <div>
      <h2>My Notes</h2>

      <Link to="/new">Create Note</Link>

      {notes?.map((note) => (
        <div key={note.id}>
          <h4>{note.title}</h4>
          <p>{note.content}</p>
          <button onClick={() => deleteMutation.mutate(note.id)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default NotesListPage

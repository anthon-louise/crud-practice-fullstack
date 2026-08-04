import { useDeleteNote, useNotes } from "../hooks/notes"

const NotesListPage = () => {
  const {data: notes, isLoading, error} = useNotes( );


  if (isLoading) return <p>Loading</p>
  if (error) return <p>Something went wrong</p>

  return (
    <div>
      <h2>My Notes</h2>

      {notes?.map((note) => (
        <div key={note.id}>
          <h4>{note.title}</h4>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  )
}

export default NotesListPage

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import NotesListPage from "./pages/NotesListPage";
import NoteCreatePage from "./pages/NoteCreatePage";
import NoteUpdatePage from "./pages/NoteUpdatePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-right"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotesListPage/>}/>
          <Route path="/new" element={<NoteCreatePage/>}/>
          <Route path="/edit/:id" element={<NoteUpdatePage/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App

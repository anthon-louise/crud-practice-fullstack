import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import NotesListPage from "./pages/NotesListPage";
import NoteCreatePage from "./pages/NoteCreatePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-right"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotesListPage/>}/>
          <Route path="/new" element={<NoteCreatePage/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App

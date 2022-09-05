import FormTasks from "./page/FormTasks";
import Tasks from "./page/Tasks";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex  items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/create-task" element={<FormTasks />} />
            <Route path="/edit-task/:id" element={<FormTasks />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

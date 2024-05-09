// App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Pages/ErrorPage";
import Task from "./Pages/Task";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Sidebar from './Components/Sidebar';
import AddTask from "./AddTask";
import Datatasks from "./data/Datatasks.json";
import SingleTask from "./SingleTask";
import UpdateTask from "./UpdateTask";



function App() {
  
  const [tasks, setTask] = useState(Datatasks);
    
  const createTask = (task) => {
    setTask([...tasks, task]);
  };

  const deleteItem = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  
  
  
  
  
  
  return (



   
    

    <>

      <Routes>
      <Route
          path="/tasks/new"
          element={<AddTask createTask={createTask} />}
        />
        <Route
          path="/tasks/:taskId"
          element={<SingleTask tasks={tasks} />}
          />
          <Route
            path="/tasks/:taskId/edit"
            element={
              <UpdateTask tasks={tasks} setTasks={setTask} />
            }
        />
      <Route path="/" element={<Sidebar />}>
      <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="*" element={<ErrorPage />} />
        
        </Route>
      </Routes>
    </>
  );
}

export default App;
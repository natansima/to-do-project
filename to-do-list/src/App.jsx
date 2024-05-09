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
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  const [tasks, setTasks] = useState(Datatasks);
  
 
  const createTask = (task) => {
    console.log(task)
    setTasks([...tasks, task]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  

  const deleteItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };    
            
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/tasks/new" element={<AddTask addTask={createTask} />} />
        <Route path="/tasks/:taskId" element={<SingleTask tasks={tasks} />} />
        <Route path="/tasks/:taskId/edit" element={<UpdateTask tasks={tasks} setTasks={setTasks} />} />
        
        <Route path="/" element={<Sidebar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<Task tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteItem={deleteItem} />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;


import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeaderFooter from "./Components/HeaderFooter";
import "./AddTask.css";
import Datatasks from "./data/Datatasks.json";

export default function AddTask({ addTask }) {
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!task) {
      alert("Please fill in all fields");
      return;
    }

    // generate id, if no image default image is used & add student to the list
    const id = uuidv4();
    const newTask = { id, task, completed: false }; // Renamed variable to newTask
    addTask(newTask); // Fixed variable name to match

    // clear form
    setTask("");

    // redirect to tasks list
    navigate("/tasks");
  };

  return (
    <div>
      <Navbar />
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}> {/* Moved handleSubmit to onSubmit event of form */}
        <div className="input-wrapper">
          <label>Task:</label>
          <input
            type="text"
            name="task"
            value={task}
            onChange={handleTaskChange}
          />
        </div>
        <button type="submit">Save</button> {/* Removed onClick and used type="submit" */}
      </form>
      <HeaderFooter />
    </div>
  );
}

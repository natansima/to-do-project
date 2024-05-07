import { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeaderFooter from "./Components/HeaderFooter";

export default function AddTask({ tasks, setTasks }) {
  const { taskId } = useParams();

  // find task using .find()
  const task = tasks.find((task) => task.id === taskId);
  // if task is not found, redirect to tasks list
  if (!task) return <Navigate to="/tasks" />;

  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");
  const navigate = useNavigate();

  const handleWhatChange = (e) => {
    setWhat(e.target.value);
  };

  const handleWhereChange = (e) => {
    setWhere(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!what || !where) {
      alert("Please fill in all fields");
      return;
    }

    const updatedTask = { id: taskId, what, where };

    // Update task in the list
    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? updatedTask : t
    );

    setTasks(updatedTasks);

    // Redirect to tasks list
    navigate("/tasks");
  };

  return (
    <div>
        <Navbar />
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label>What:</label>
          <input
            type="text"
            name="what"
            value={what}
            onChange={handleWhatChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Where:</label>
          <div className="select-wrapper">
            <select
              name="where"
              value={where}
              onChange={handleWhereChange}
            >
              <option value="">Select where</option>
              <option value="Home">Home</option>
              <option value="School">School</option>
              <option value="Work">Work</option>
            </select>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
      <HeaderFooter />
    </div>
  );
}

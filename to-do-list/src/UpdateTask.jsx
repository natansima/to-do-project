import { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeaderFooter from "./Components/HeaderFooter";

export default function AddTask({ tasks, setTasks }) {
  const { taskId } = useParams();

  // find task using .find()
  const foundTask = tasks.find((task) => task.id === taskId);
  // if task is not found, redirect to tasks list
  if (!foundTask) return <Navigate to="/tasks" />;

  const [taskState, setTaskState] = useState(foundTask.task);
  const navigate = useNavigate();

  const handleTaskStateChange = (e) => {
    setTaskState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!taskState) {
      alert("Please add some content to the task");
      return;
    }

    const updatedTask = { ...foundTask, task: taskState };

    // Update task in the list
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? updatedTask : task
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
          <label>Task:</label>
          <input
            type="text"
            name="task"
            value={taskState}
            onChange={handleTaskStateChange}
          />
        </div>
       
        <button type="submit">Save</button>
      </form>
      <HeaderFooter />
    </div>
  );
}

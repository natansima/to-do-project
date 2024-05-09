import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeaderFooter from "./Components/HeaderFooter";
import "./AddTask.css";
import Datatasks from "./data/Datatasks.json"

export default function AddTask() {
  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");
  const [completed, setCompleted] = useState(false)
  const [task, setTask] = useState(Datatasks)
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
    if (!what|| !where) {
      alert("Please fill in all fields");
      return;
    }

    const id = uuidv4();
    const task = { id, what, where, completed };
    setTask(task)

    // clear form
    setWhat("");
    setWhere("");

    // redirect to tasks list
    navigate("/tasks");
  };

  return (

    <div>
     
      <Navbar />
      <h1>Add Task</h1>
      <form>
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
              <option value="">Select Where</option>
              <option value="Home">Home</option>
              <option value="School">School</option>
              <option value="Work">Work</option>
            </select>
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
      <HeaderFooter />
    </div>
  );
}

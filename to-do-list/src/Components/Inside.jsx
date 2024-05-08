import { useState } from "react";
import "./Inside.css";
import ButtonDel from "./ButtonsDel";

import Datatasks from "../data/Datatasks";

export default function Inside() {
  // useState for the task items
  const [items, setItems] = useState(Datatasks);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addItem = () => {
    if (task === "") return;

    const id = items.length + 1;
    setItems([...items, { id, task, completed: false }]);
    setTask("");
  };

  const toggleTaskCompletion = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="DENTRO">
      <div className="wrapper">
        <div>
          {/* <div className="form-wrapper">
            <input type="text" value={task} onChange={handleChange} />
            <button onClick={addItem}>Add</button>
          </div> */}
        </div>

        <ul>
          {items.map((item) => {
            return (
              <li
                id="card"
                key={item.id}
                className={item.completed ? "completed" : ""}
              >
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTaskCompletion(item.id)}
                />

                {item.what}

                <div>
                  <ButtonDel task={item} deleteItem={deleteItem} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

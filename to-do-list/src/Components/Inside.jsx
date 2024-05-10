import { useState } from "react";
import "./Inside.css";
import ButtonDel from "./ButtonsDel";
import "./chekbox.css";

export default function Inside({ tasks, toggleTaskCompletion, deleteItem }) {
  return (
    <div className="DENTRO">
      <div className="wrapper">
        <div className="form-wrapper"></div>

        <div className="tasks-list-wrapper">
          {tasks.map((item) => (
            <div id="card" key={item.id} className={item.completed ? "completed" : ""}>
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTaskCompletion(item.id)}
                />
                <span className="checkmark"></span>
              </div>
              <span className="task-text">{item.task || item.id}</span>
              <ButtonDel task={item} deleteItem={deleteItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
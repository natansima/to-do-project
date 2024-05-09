import { useState } from "react";
import "./Inside.css";
import ButtonDel from "./ButtonsDel";

export default function Inside({ tasks, toggleTaskCompletion, deleteItem }) {
  return (
    <div className="DENTRO">
      <div className="wrapper">
        <div className="form-wrapper"></div>

        <div className="tasks-list-wrapper">
          {tasks.map((item) => {
            return (
              <div
                id="card"
                key={item.id}
                className={item.completed ? "completed" : ""}
              >
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTaskCompletion(item.id)}
                />
                {item.task || item.id} 
                <div>
                  <ButtonDel task={item} deleteItem={deleteItem} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

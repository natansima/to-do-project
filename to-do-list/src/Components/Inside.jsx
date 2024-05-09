import { useState } from "react";
import "./Inside.css";
import ButtonDel from "./ButtonsDel";


export default function Inside({tasks}) {
  // useState for the task items
  

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
        
          <div className="form-wrapper">
      
        </div>

        <ul>
          {tasks.map((item) => {
            return (

              <li id="card"
              key={item.id} className={item.completed ? "completed" : ""}>
                <input
                  type="checkbox"
                  checked={item.completed}
                
                  onChange={() => toggleTaskCompletion(item.id)}
                />
                

                {item.task || (item.what)}
                
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

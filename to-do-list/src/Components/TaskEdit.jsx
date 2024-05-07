import React, { useState, useRef, useEffect } from "react";

const TaskEdit = ({ task, onSave }) => {
  const [editedTask, setEditedTask] = useState(task.task);
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input field when the component mounts
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Save the edited task when Enter is pressed
      onSave(editedTask);
    }
  };

  const handleBlur = () => {
    // Save the edited task when the input field loses focus
    onSave(editedTask);
  };

  return (
    <input
      type="text"
      value={editedTask}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      ref={inputRef}
    />
  );
};

export default TaskEdit;

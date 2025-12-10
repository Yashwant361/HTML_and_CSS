import React from "react";

export default function TodoInput({ newTask, setNewTask, handleAdd, inputRef }) {
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={newTask}
        placeholder="Add task..."
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

import React, { useState, useRef, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  // Autofocus on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Add Task
  function handleAdd() {
    if (newTask.trim() === "") return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: newTask,
        completed: false,
        isEditing: false,
        tempText: newTask,
      },
    ]);
    setNewTask("");
    inputRef.current.focus();
  }

  // Toggle Complete
  function handleToggle(id) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  // Delete
  function handleDelete(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  // Start Edit
  function handleEdit(id) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, isEditing: true } : t
      )
    );
  }

  // Edit Temp Change
  function handleTempChange(id, value) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, tempText: value } : t
      )
    );
  }

  // Save Edited
  function handleUpdate(id) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              text: t.tempText.trim() === "" ? t.text : t.tempText,
              isEditing: false,
            }
          : t
      )
    );
  }

  // Cancel Edit
  function handleCancel(id) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, isEditing: false, tempText: t.text }
          : t
      )
    );
  }

  return (
    <div>
      <h1>Todo App</h1>

      {/* Add Task Input */}
      <TodoInput
        newTask={newTask}
        setNewTask={setNewTask}
        handleAdd={handleAdd}
        inputRef={inputRef}
      />

      {/* List */}
      <TodoList
        tasks={tasks}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleCancel={handleCancel}
        handleUpdate={handleUpdate}
        handleTempChange={handleTempChange}
      />
    </div>
  );
}

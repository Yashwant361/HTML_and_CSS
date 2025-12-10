import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  tasks,
  handleToggle,
  handleDelete,
  handleEdit,
  handleCancel,
  handleUpdate,
  handleTempChange,
}) {
  return (
    <ul style={{ padding: 0 }}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
          handleUpdate={handleUpdate}
          handleTempChange={handleTempChange}
        />
      ))}
    </ul>
  );
}

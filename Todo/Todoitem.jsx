import React from "react";
import TodoEditInput from "./TodoEditInput";

export default function TodoItem({
  task,
  handleToggle,
  handleDelete,
  handleEdit,
  handleCancel,
  handleUpdate,
  handleTempChange,
}) {
  return (
    <li style={{ margin: "8px 0", listStyle: "none" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggle(task.id)}
      />

      {/* Normal View */}
      {!task.isEditing ? (
        <>
          <span
            style={{
              marginLeft: 8,
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>

          <button onClick={() => handleEdit(task.id)} style={{ marginLeft: 10 }}>
            Edit
          </button>

          <button onClick={() => handleDelete(task.id)} style={{ marginLeft: 6 }}>
            Delete
          </button>
        </>
      ) : (
        // Edit View
        <TodoEditInput
          task={task}
          handleTempChange={handleTempChange}
          handleUpdate={handleUpdate}
          handleCancel={handleCancel}
        />
      )}
    </li>
  );
}

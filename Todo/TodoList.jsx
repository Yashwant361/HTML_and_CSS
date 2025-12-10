import React from "react";

export default function TodoEditInput({
  task,
  handleTempChange,
  handleUpdate,
  handleCancel,
}) {
  return (
    <>
      <input
        type="text"
        value={task.tempText}
        onChange={(e) => handleTempChange(task.id, e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleUpdate(task.id);
          if (e.key === "Escape") handleCancel(task.id);
        }}
        style={{ marginLeft: 8 }}
      />

      <button onClick={() => handleUpdate(task.id)} style={{ marginLeft: 6 }}>
        Save
      </button>

      <button onClick={() => handleCancel(task.id)} style={{ marginLeft: 6 }}>
        Cancel
      </button>
    </>
  );
}

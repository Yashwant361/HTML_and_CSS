import React, { useState } from "react";

function Message() {
  // Step 1: state banai
  const [msg, setMsg] = useState("Hello");

  // Step 2: text change karne ka function
  function changeText() {
    setMsg("Welcome Master Ray!");
  }

  return (
    <div>
      <h2>{msg}</h2>  {/* Step 3: UI me state show */}

      <button onClick={changeText}>Change Text</button>
    </div>
  );
}

export default Message;

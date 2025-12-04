import React, { useState } from "react";

function InputBox() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}  // update state
      />

      <h3>You typed: {text}</h3>  {/* show live text */}
    </div>
  );
}

export default InputBox

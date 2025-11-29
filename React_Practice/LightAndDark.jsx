import React, { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    height: "100vh",
    padding: "20px"
  };

  return (
    <div style={pageStyle}>
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;

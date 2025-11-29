import React, { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(true);  // start with showing text

  return (
    <div>
      {show && <h2>Hello Master Ray!</h2>}  {/* show only if show=true */}

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default ShowHide;

import { useState, useMemo } from "react";

function Expensive() {
  const [num, setNum] = useState(1);

  const double = useMemo(() => {
    console.log("Calculating...");
    return num * 2;
  }, [num]);

  return (
    <div>
      <h2>Double: {double}</h2>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
}

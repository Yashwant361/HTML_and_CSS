import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("Component Mounted!");
  }, []);   // empty array means run only once

  return <h2>Time: {time}</h2>;
}

export default Timer;

import React, { FunctionComponent, useState, useEffect } from "react";

const Count: FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
  const [count, setCount] = useState<number>(
    () => JSON.parse(window.localStorage.getItem("count")!) || initial
  );

  useEffect(
    () => window.localStorage.setItem("count", JSON.stringify(count)),
    [count]
  );
  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };
  const reset = () => {
    setCount(initial);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default Count;

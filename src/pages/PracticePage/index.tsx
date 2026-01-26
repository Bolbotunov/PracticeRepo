import { useEffect, useLayoutEffect, useState } from "react";

export default function Practice() {
  const [count, setCount] = useState(0);

  const handlerCount = () => {
    console.log("handler work with count:", count);
    setCount((prev) => prev + 1);
    console.log("handler finish work with count:", count);
  };

  console.log("render preactice");

  useEffect(() => {
    console.log("count updated:", count);
  }, [count]);

  useLayoutEffect(() => {
    console.log("count updated useLayout:", count);
  }, [count]);

  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  });

  return (
    <>
      <h1>Practice Page</h1>
      <div>
        <h2>{count}</h2>
        <button onClick={handlerCount}>PLUS</button>
      </div>
    </>
  );
}

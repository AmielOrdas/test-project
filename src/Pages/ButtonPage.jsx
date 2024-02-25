import React, { useCallback, useEffect, useState } from "react";
import Button from "../Button";
import Navigation from "../Navigation";
import useOnMountUnsafe from "../useOnMountUnsafe";

function ButtonPage() {
  const [count, setCount] = useState(0);

  useOnMountUnsafe(() => {
    const data = sessionStorage.getItem("countKey");
    setCount(JSON.parse(data));
  });

  useEffect(() => {
    sessionStorage.setItem("countKey", count);
  }, [count]);
  function handleCountAdd() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleCountSubtract() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleCountReset() {
    setCount((prevCount) => (prevCount = 0));
  }
  return (
    <>
      <Navigation />

      <main className="flex justify-center p-[250px] ">
        <div className="border-[3px] border-dashed border-blue-600 h-36 w-[15rem] rounded ">
          <h2 className="flex justify-center mt-8">{count}</h2>
          <Button
            handleCountAdd={handleCountAdd}
            handleCountSubtract={handleCountSubtract}
            handleCountReset={handleCountReset}
          />
        </div>
      </main>
    </>
  );
}

export default ButtonPage;

// const handleCountAdd = useCallback(() => {
//   setCount((prevCount) => prevCount + 1);
//   localStorage.setItem("countKey", count);
// }, [count]);
// const handleCountSubtract = useCallback(
//   () => setCount((prevCount) => prevCount - 1),
//   [count]
// );
// const handleCountReset = useCallback((prevCount) => (prevCount = 0), [count]);

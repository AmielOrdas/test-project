import { useEffect, useState } from "react";
import Button from "../Button";
import Navigation from "../Navigation";
import useOnMountUnsafe from "../useOnMountUnsafe";

function ButtonPage() {
  const [count, setCount] = useState(0);

  useOnMountUnsafe(() => {
    const data = sessionStorage.getItem("countKey"); // fetches the key "countKey" in the session storage.
    console.log("Ran once");
    data === null ? setCount(0) : setCount(JSON.parse(data)); // if data is null then count = 0 will be displayed. If data is not null then we parse the saved number
    // in the local storage so that it becomes a number instead of a string.
  });

  useOnMountUnsafe(() => {
    console.log("Ran once XD");
    sessionStorage.setItem("countKey", JSON.stringify(count));
  }, count);

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

      <main className="flex justify-center h-[32.8rem] ">
        <div className="border-[3px] border-dashed border-blue-600 h-36 w-[15rem] rounded m-auto ">
          <h2 className="flex justify-center mt-8">{count}</h2>
          <Button
            text={"Add"}
            Function={handleCountAdd}
            styles={"text-amber-300 m-2 bg-lime-600 p-2 rounded"}
          />
          <Button
            text={"Subtract"}
            Function={handleCountSubtract}
            styles={"text-amber-300 m-2 bg-red-600 p-2 rounded"}
          />
          <Button
            text={"Reset"}
            Function={handleCountReset}
            styles={"text-amber-300 m-2 bg-black p-2 rounded"}
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

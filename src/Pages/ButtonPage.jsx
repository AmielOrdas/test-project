import { useEffect, useState } from "react";
import Button from "../Button";
import Navigation from "../Navigation";
import useOnMountUnsafe from "../useOnMountUnsafe";

function ButtonPage() {
  const [count, setCount] = useState(0);
  useOnMountUnsafe(() => {
    const data = sessionStorage.getItem("countKey"); // fetches the key "countKey" in the local storage.

    data === null ? setCount(0) : setCount(JSON.parse(data)); // if data is null then count = 0 will be displayed. If data is not null then we parse the saved number
    // in the local storage so that it becomes a number instead of a string.

    console.log(data);
  });

  useEffect(() => {
    sessionStorage.setItem("countKey", count); // whenever the state "count" changes,
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

      <main className="flex justify-center h-[32.8rem] ">
        <div className="border-[3px] border-dashed border-blue-600 h-36 w-[15rem] rounded m-auto ">
          <h2 className="flex justify-center mt-8">{count}</h2>
          <Button
            text1="add"
            text2="subtract"
            text3="reset"
            function1={handleCountAdd}
            function2={handleCountSubtract}
            function3={handleCountReset}
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

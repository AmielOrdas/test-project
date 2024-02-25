import React from "react";

function Button({ handleCountAdd, handleCountSubtract, handleCountReset }) {
  return (
    <div className="flex justify-center">
      <button
        className="text-amber-300 m-2 bg-lime-600 p-2 rounded"
        onClick={handleCountAdd}
      >
        Add
      </button>
      <button
        className="text-amber-300 m-2 bg-lime-600 p-2 rounded"
        onClick={handleCountSubtract}
      >
        Subtract
      </button>
      <button
        className="text-amber-300 m-2 bg-lime-600 p-2 rounded"
        onClick={handleCountReset}
      >
        Reset
      </button>
    </div>
  );
}

export default Button;

import React from "react";

function Button() {
  return (
    <div className="flex justify-center">
      <button className="text-amber-500 m-2 bg-lime-600 p-2">Add</button>
      <button className="text-amber-500 m-2 bg-lime-600">Subtract</button>
      <button className="text-amber-500 m-2 bg-lime-600">Reset</button>
    </div>
  );
}

export default Button;

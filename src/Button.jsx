import React from "react";

function Button({ text1, text2, text3, function1, function2, function3 }) {
  return (
    <div>
      <button className="text-amber-300 m-2 bg-lime-600 p-2 rounded" onClick={function1}>
        {text1}
      </button>
      <button className="text-amber-300 m-2 bg-lime-600 p-2 rounded" onClick={function2}>
        {text2}
      </button>
      <button className="text-amber-300 m-2 bg-lime-600 p-2 rounded" onClick={function3}>
        {text3}
      </button>
    </div>
  );
}

export default Button;

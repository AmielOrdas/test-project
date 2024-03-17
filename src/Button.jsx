import React from "react";

function Button({ text, Function, styles }) {
  return (
    <button className={`${styles} animate-bounce hover:bg-gray-500`} onClick={Function}>
      {text}
    </button>
  );
}

export default Button;

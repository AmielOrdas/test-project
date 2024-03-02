import React from "react";

function Button({ text, Function, styles }) {
  return (
    <button className={`${styles} animate-bounce`} onClick={Function}>
      {text}
    </button>
  );
}

export default Button;

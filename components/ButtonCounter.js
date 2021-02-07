import React, { useState } from "react";

export function ButtonCounter({ title, onClick }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    onClick ? onClick() : null;
  };

  return (
    <button className="btn btn-outline-secondary" onClick={handleClick}>
      {title} {count}
    </button>
  );
}

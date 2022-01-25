import React, { useState } from "react";

function Items(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone(!isDone);
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : null }}
    >
      {props.itemText}
    </li>
  );
}

export default Items;

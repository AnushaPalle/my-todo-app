import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
      data-testid="todoitem"
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;

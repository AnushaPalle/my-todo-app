import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function ToDoItem(props) {
  return (
    <div>
      <li>{props.text}
        <span className="icon">
          <DeleteIcon
            onClick={() => {
            props.onChecked(props.id);
            }}
            data-testid="todoitem"
          />
        </span>
      </li>
    </div>
  );
}

export default ToDoItem;

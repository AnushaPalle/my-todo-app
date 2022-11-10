import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useState } from "react";

function ToDoItem(props) {
  
  const [taskCompleted, setTaskCompleted] = useState(false)

  return (
    <div>
      <li
        style={{
          textDecoration: taskCompleted ? "line-through": ""
        }}
      >
        {props.text}
        <span className="icon">
          <CheckCircleIcon
            onClick={() => setTaskCompleted(prevTaskCompletedStatus => !prevTaskCompletedStatus)}
          />
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

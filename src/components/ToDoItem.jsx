import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteConfirmationModal from "./modals/DeleteConfirmationModal"
import { useState } from "react";

function ToDoItem(props) {
  
  const [taskCompleted, setTaskCompleted] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  const handleDialogOpen = () => {
    setShowDialog(true)
  }

  const handleDialogClose = () => {
    setShowDialog(false)
  }

  const handleDeleteTodo = () => {
    props.onChecked(props.id);
    setShowDialog(false);
  }

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
            id="checkCircleIcon"
            data-testid="checkCircleIcon"
            onClick={() => setTaskCompleted(prevTaskCompletedStatus => !prevTaskCompletedStatus)}
          />
          <DeleteIcon
            id="deleteIcon"
            data-testid="deleteIcon"
            onClick={ () => {setShowDialog(true)}}
          />
          {showDialog ? <DeleteConfirmationModal handleDeleteTodo={handleDeleteTodo} handleDialogOpen={handleDialogOpen} handleDialogClose={handleDialogClose} showDialog={showDialog}/>:null} 
        </span>
      </li>
    </div>
  );
}

export default ToDoItem;

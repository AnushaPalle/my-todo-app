import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} placeholder="Add todo ..."/>
      <button
        aria-label="Add"
        onClick={() => {
          if (inputText.trim().length !==0) {
            props.onAdd(inputText);
            setInputText("");  
          }
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

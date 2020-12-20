// version 2
// state is inside CounterForms

import { React, useState } from "react";
import ButtonsActions from "./ButtonsActions";
import "./CounterForm.sass";

function CounterForm(props) {
  const [currentInput, setCurrentInput] = useState("");

  const handleChange = (event) => {
    setCurrentInput(event.target.value.replace(/\D/, ""));
  };
  const increaseInput = () => {
    if (currentInput === undefined) return;
    setCurrentInput(Number(currentInput) + 1);
    console.log("increaseInput");
  };
  const decreaseInput = () => {
    if (currentInput === undefined) return;
    setCurrentInput(Number(currentInput) - 1);
    console.log("decreaseInput");
  };
  const sendInput = props.sendInput;

  return (
    <div className="main-container">
      <input
        className="input-area"
        type="text"
        placeholder="Enter number"
        value={currentInput}
        onChange={handleChange}
      />
      <ButtonsActions increase={increaseInput} decrease={decreaseInput} />
    </div>
  );
}

export default CounterForm;

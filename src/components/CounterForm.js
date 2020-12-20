// version 3
// useReducer
// BAD: all counters re-renders on any change in one counter

import React from "react";
import ButtonsActions from "./ButtonsActions";
import "./CounterForm.sass";

function CounterForm({ form, dispatch }) {
  const handleChange = (event) => {
    event.preventDefault();
    dispatch({
      type: "set-counter",
      payload: {
        id: form.id,
        savedValue: event.target.value.replace(/\D/, ""),
      },
    });
    console.log(form.savedValue);
  };

  console.log("counter " + form.id + " renders");

  return (
    <div className="form-container">
      <input
        className="input-area"
        type="text"
        pattern="[0-9]*"
        inputMode="numeric"
        placeholder="Enter number"
        value={form.savedValue}
        onChange={handleChange}
      />
      <ButtonsActions form={form} dispatch={dispatch} />
    </div>
  );
}

export default CounterForm;

import React from "react";
import "./CounterForm.sass";

function ButtonsActions({ form, dispatch }) {
  return (
    <div className="flex">
      <button
        type="button"
        onClick={() =>
          dispatch({ type: "increment", payload: { id: form.id } })
        }
      >
        Increase
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: "decrement", payload: { id: form.id } })
        }
      >
        Decrease
      </button>
    </div>
  );
}

export default ButtonsActions;

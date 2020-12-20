// version 3
// useReducer

import { React, useReducer } from "react";
import CounterForm from "./CounterForm";
import "./ManyForms.sass";

function reducer(formsData, action) {
  switch (action.type) {
    case "set-counter":
      return formsData.map((form) => {
        if (form.id === action.payload.id) {
          return { ...form, savedValue: action.payload.savedValue };
        }
        return form;
      });
    case "increment":
      return formsData.map((form) => {
        if (form.id === action.payload.id) {
          return { ...form, savedValue: Number(form.savedValue) + 1 };
        }
        return form;
      });
    case "decrement":
      return formsData.map((form) => {
        if (form.id === action.payload.id) {
          return { ...form, savedValue: Number(form.savedValue) - 1 };
        }
        return form;
      });
    case "add-form":
      return [...formsData, newForm()];
    case "save-forms":
      return formsData.map((form) => {
        if (form.savedValue === "") {
          form.savedValue = 0;
        }
        return { ...form, restoredValue: form.savedValue };
      });
    case "restore-forms":
      return formsData.map((form) => {
        return { ...form, savedValue: form.restoredValue };
      });
    default:
      return formsData;
  }
}

function newForm() {
  return { id: Date.now(), savedValue: "", restoredValue: "" };
}

function ManyForms() {
  const [formsData, dispatch] = useReducer(reducer, [
    {
      id: Date.now(),
      savedValue: "",
      restoredValue: "",
    },
  ]);

  return (
    <div className="form">
      <button
        className="button-plus"
        action="button"
        onClick={() => dispatch({ type: "add-form" })}
      >
        +
      </button>
      {formsData.map((form) => {
        return <CounterForm key={form.id} form={form} dispatch={dispatch} />;
      })}
      <div className="main-buttons">
        <button
          className="save"
          type="button"
          onClick={() => dispatch({ type: "save-forms" })}
        >
          Save
        </button>
        <button
          className="restore"
          type="button"
          disabled={formsData[0].restoredValue === ""}
          onClick={() => dispatch({ type: "restore-forms" })}
        >
          Restore
        </button>
      </div>
    </div>
  );
}
export default ManyForms;

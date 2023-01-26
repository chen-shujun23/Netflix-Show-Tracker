import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      // btn from Bootstrap and styles from CSS file;
      // props.className: If styling is placed in className, it will overwrite the default Btn/Styles.css
      className={`btn ${styles.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {/* Anything between the opening and closing tags; Evaluates == "Add Task" */}
      {props.children}
    </button>
  );
}

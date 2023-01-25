import React from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Button from "./Button";

function Overlay(props) {
  return (
    <div className={styles.backdrop} onClick={props.okayClicked}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.okayClicked}>Okay</Button>
        </footer>
      </div>
    </div>
  );
}

export default function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          okayClicked={props.okayClicked}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
}

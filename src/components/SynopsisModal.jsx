import React from "react";
import ReactDOM from "react-dom";
import styles from "./SynopsisModal.module.css";
import Button from "./Button";

function Overlay(props) {
  return (
    <div className={styles.backdrop} onClick={props.handleClose}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.synopsis}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.handleClose}>Close</Button>
        </footer>
      </div>
    </div>
  );
}

export default function SynopsisModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          synopsis={props.synopsis}
          handleClose={props.handleClose}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
}

import React from "react";
import Card from "../UI/Card.jsx";
import Button from "./Button.jsx";
import errorModalCss from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={errorModalCss.backdrop} onClick={props.onConfirm} />
      <Card className={errorModalCss.modal}>
        <header className={errorModalCss.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={errorModalCss.content}>
          <p>{props.message}</p>
        </div>
        <footer className={errorModalCss.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

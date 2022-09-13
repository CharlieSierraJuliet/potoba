import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React, { Fragment } from "react";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const OverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalHandler=document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClick={props.onClick}/>,portalHandler)}
      {ReactDOM.createPortal(<OverLay>{props.children}</OverLay>,portalHandler)}
    </Fragment>
  );
};

export default Modal;

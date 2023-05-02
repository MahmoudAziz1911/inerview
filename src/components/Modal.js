import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="fixed inset-0 z-20 bg-black/75" onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[20vh] left-[30%] w-[40%] bg-white p-5 rounded-lg z-30">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const ModalView = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default ModalView;

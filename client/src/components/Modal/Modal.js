import React, { Children } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";
//create Sign in Modal pop up to display admin or employee profile choices

export default function Modal({ children, open, onClose }) {
  if (!open) return null;
  return (
  <>
  <div id="overlay-styles"/>
    <div id="modal-container">
      <div id="close-button">
        {/* exit button on popup modal */}
        <FontAwesomeIcon onClick={onClose} icon={faWindowClose} size="lg" color="darkslategrey" />
      </div>
      {children}
    </div>
  </>
  );
}

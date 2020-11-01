import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import Modal from "../Modal/Modal";

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const history = useHistory();

  function employeeHandler() {
    setIsOpen(false);
    history.push("/profile");
  }
  function adminHandler() {
    setIsOpen(false);
    history.push("/adminprofile");
  }

  function loginHandler() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <h3 onClick={loginHandler} className="sign-in-button">
          Sign In
          <FontAwesomeIcon
            className="clip-board"
            icon={faSignInAlt}
            size="2x"
            color="darkslategrey"
          />
        </h3>

        {/* <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Login
        </button> */}
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          >
          <h2>Please Sign In</h2>
          <div>
            <button　className="employee-sign-in-button" onClick={employeeHandler}>Employee</button> <br/>
            <button className="employee-sign-in-button" onClick={adminHandler}>Admin</button>
          </div>
        </Modal>
      </div>
    </>
  );
}

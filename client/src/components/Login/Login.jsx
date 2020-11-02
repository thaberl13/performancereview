import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import Modal from "../Modal/Modal";

export default function Login() {
  //variable set to display Sign In modal when user clicks sign in button
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  //sends user to employee profile page
  function employeeHandler() {
    setIsOpen(false);
    history.push("/profile");
  }
  //sends user to admin profile page
  function adminHandler() {
    setIsOpen(false);
    history.push("/adminprofile");
  }

  //opens Sign in Modal
  function loginHandler() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        {/* sign in display in  */}
        <a onClick={loginHandler} className="sign-in-button">
          <FontAwesomeIcon
            className="clip-board"
            icon={faSignInAlt}
            size="2x"
            color="darkslategrey"
            />
        </a>
            <h3>Sign In </h3>
        {/* displays Sign in Modal */}
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <h2>Please Sign In</h2>
          <div>
            {/* when clicked, send employee to admin profile page */}
            <button className="employee-sign-in-button" onClick={adminHandler}>
              Admin
            </button>{" "}
            <br />
            {/* when clicked, send user to employee profile */}
            <button
              className="employee-sign-in-button"
              onClick={employeeHandler}
            >
              Employee
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}

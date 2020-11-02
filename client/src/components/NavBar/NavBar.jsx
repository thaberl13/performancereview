import React, { useState } from "react";
import Login from "../Login/Login.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
//import route history to navigate to different pages
import { useHistory } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  //variable for Route history to navigate to different components
  const history = useHistory();

  //send a user to the home page when the click home icon
  function homeHandler() {
    return history.push("/");
  }
  return (
    <div id="nav-bar">
      {/* send a user to the home page when the click home icon */}
      <a id="home-button" onClick={homeHandler}>
        <FontAwesomeIcon icon={faHome} size="2x" color="darkslategrey" />
      </a>
      <Login />
    </div>
  );
}

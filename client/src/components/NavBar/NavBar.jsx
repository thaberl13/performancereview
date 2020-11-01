import React, { useState } from "react";
import Login from "../Login/Login.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "./NavBar.css";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  function homeHandler() {
    return history.push("/");
  }
  return (
    <div id="nav-bar">
      <div id="home-button" onClick={homeHandler}> 
        <FontAwesomeIcon icon={faHome} size="2x" color="darkslategrey" />
      </div>
      <Login />
    </div>
  );
}

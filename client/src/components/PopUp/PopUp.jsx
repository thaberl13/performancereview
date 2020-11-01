import React from "react";
import { useHistory } from "react-router-dom";

export default function PopUp() {
  const history = useHistory();
  function employeeHandler() {
    return history.push("/profile");
  }
  function adminHandler() {
    return history.push("/adminprofile");
  }

  return (
    <div>
      <button onClick={employeeHandler}>Employee</button>
      <button onClick={adminHandler}>Admin</button>
    </div>
  );
}

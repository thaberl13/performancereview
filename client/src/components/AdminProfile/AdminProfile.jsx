import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminProfile.css";
import {
  faClipboard,
  faKey,
  faCheck,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminProfile() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const res = await axios.get("http://localhost:4000/api/employees");
      console.log(res.data);
      setEmployees(res.data);
    }
    fetchEmployees();
  }, []);

 async function reviewSubmitHandler() {
   
 }

  return (
    <div id="administrator-performance-form">
      <h1 className="header">Administrator</h1>
      <form className="profile-form">
        <h3 className="form-header">
          <FontAwesomeIcon
            className="clip-board"
            icon={faClipboard}
            size="lg"
            color="darkslategrey"
          />
          Employee Performance Review: 
        </h3>
        <select className="employee-select">
          {employees.map((employee, index) => {
            return (
              <option value={employee.first_name}>
                {employee.first_name} {employee.last_name}
              </option>
            );
          })}
        </select>
        
        <h3 className="form-header">
          <FontAwesomeIcon
            className="clip-board"
            icon={faKey}
            size="lg"
            color="darkslategrey"
          />
          Employee id: 
        </h3>
        <input className="profile-input" placeholder="Employee id"></input>
        
        <h3 className="form-header">
          <FontAwesomeIcon
            className="clip-board"
            icon={faCheck}
            size="lg"
            color="darkslategrey"
          />
          Employee to give feedback on performance review: 
        </h3>
        <select className="employee-select">
          {employees.map((employee, index) => {
            {
              console.log(employee.first_name);
            }
            return (
              <option value={employee.first_name}>
                {employee.first_name} {employee.last_name}
              </option>
            );
          })}
        </select>
        
        <h3 className="form-header">
          <FontAwesomeIcon
            className="clip-board"
            icon={faPen}
            size="lg"
            color="darkslategrey"
          />
          Performance Review: 
        </h3>
        <textarea
          rows="10"
          cols="60"
          placeholder="New Performance Review"
        ></textarea>{" "}
        
        <input id="admin-performance-submit" type="Submit" />
      </form>
    </div>
  );
}

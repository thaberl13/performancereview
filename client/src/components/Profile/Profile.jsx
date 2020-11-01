import React, { useState, useEffect, useContext } from "react";
import { EmployeesContext } from "../useContext/EmployeesContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";
import axios from "axios";

export default function Profile() {
  const { employees, setEmployees } = useContext(EmployeesContext);
  // const [employeesToReview, setEmployeesToReview] = useState([]);
  const [employeeReview, setEmployeeReview] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  useEffect(() => {
    async function fetchEmployees() {
      const res = await axios.get("http://localhost:4000/api/employees");
      console.log(res.data);
      setEmployees(res.data);
    }
    fetchEmployees();
  }, []);

  async function reviewFetch() {
    console.log(selectedEmployee)
    const res = await axios.get(
      `http://localhost:4000/api/reviews/${selectedEmployee}`
    );
    console.log(res.data[0].text)
    setEmployeeReview(res.data[0].text)
    console.log(employeeReview)
  }

  return (
    <div id="employee-profile-container">
      <h1 className="header">Employee</h1>
      <div className="employee-profile-form">
        <h1>Employee Profile</h1>
        <FontAwesomeIcon
          className="user-img-preview"
          icon={faUserCircle}
          size="10x"
          color="darkslategrey"
        />
        <h2>Performance Review</h2>

        <h3>Performance Review Feedback:</h3>
        <select
          placeholder="select"
          onChange={(e) => {
            setSelectedEmployee(e.target.value);
            reviewFetch()
          }}
          className="employee-select"
        >
          {employees ? employees.map((employee, index)=>{
            return (
              <option value={employee.first_name}>
                {employee.first_name} {employee.last_name}
              </option>
            );
          }) : <option value={"Select Employee"}>
          {"Select Employee"}
        </option>}
        <input type="submit"/>
        </select>
        <textarea
          rows="10"
          cols="60"
          placeholder="Please leave feedback"
        ></textarea>
        <button className="employee-profile-submit" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

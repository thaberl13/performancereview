import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./AdminProfile.css";
//import icons from Font Awesome
import {
  faClipboard,
  faKey,
  faCheck,
  faPen,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmployeesContext } from "../useContext/EmployeesContext.jsx";

export default function AdminProfile() {
  //useContext for employees variable for fetching data from API
  const { employees, setEmployees } = useContext(EmployeesContext);

  //Fetch Employee data once upon intial render
  useEffect(() => {
    async function fetchEmployees() {
      const res = await axios.get("http://localhost:4000/api/employees");
      setEmployees(res.data);
    }
    fetchEmployees();
  }, []);


  return (
    <div id="administrator-performance-form">
      <h1 className="header">Administrator</h1>
      {/* post new performance review to database */}
      <form
        onSubmit={async (e) => {
          await axios.post("http://localhost:4000/api/reviews", {
            last_name: e.target.employee.value,
            text: e.target.text.value,
          });
        }}
        className="profile-form"
      >
        {/* Font awesome icons and styles */}
        <FontAwesomeIcon
          className="user-img-preview"
          icon={faChartLine}
          size="10x"
          color="darkslategrey"
        />
        <h3 className="form-header">
          <FontAwesomeIcon
            className="clip-board"
            icon={faClipboard}
            size="lg"
            color="darkslategrey"
          />
          Employee Performance Review:
        </h3>
        <select name="employee" className="employee-select">
          {/* if employees have been fetched from database map through to display in dropdown list*/}
          {employees ? (
            employees.map((employee, index) => {
              return (
                <option key="employeeName" name="last_name" value={employee.last_name}>
                  {employee.first_name} {employee.last_name}
                </option>
              );
            })
          ) : (
            <option value={"Select Employee"}>{"Select Employee"}</option>
          )}
        </select>
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
          {/* select employee to assign performance review feedback to  */}
          {employees ? (
            employees.map((employee, index) => {
              return (
                <option key="employeeName" name="other_employee" value={employee.first_name}>
                  {employee.first_name} {employee.last_name}
                </option>
              );
            })
          ) : (
            <option value={"Select Employee"}>{"Select Employee"}</option>
          )}
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
          name="text"
          rows="10"
          cols="60"
          placeholder="New Performance Review"
        ></textarea>{" "}
        <input id="admin-performance-submit" type="Submit" />
      </form>
    </div>
  );
}

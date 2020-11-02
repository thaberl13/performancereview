import React, { useState, useEffect, useContext } from "react";
//import Employee Context from useContext File to set employees to variable after fetch
import { EmployeesContext } from "../useContext/EmployeesContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";
import axios from "axios";
require("dotenv").config();

export default function Profile() {
  //EmployeeContext variable
  const { employees, setEmployees } = useContext(EmployeesContext);
  //variable/react hook used to set given employees review
  const [employeeReview, setEmployeeReview] = useState(undefined);
  //variable/react hook set selected employee to send performance review to upon click
  const [selectedEmployee, setSelectedEmployee] = useState(undefined);
  //variable/react hook set employee review id upon selection to post to database
  const [employeeReviewId, setEmployeeReviewId] = useState(undefined);

  //fetch employees upon initial render
  useEffect(() => {
    async function fetchEmployees() {
      const res = await axios.get(
        `http://localhost:4000/api/employees` ||
          `${process.env.REACT_APP_BACKEND_URL}/api/employees`
      );
      setEmployees(res.data);
    }
    fetchEmployees();
  }, []);
  //fetch user reviews up selection
  async function reviewFetch() {
    const res = await axios.get(
      `http://localhost:4000/api/reviews/${selectedEmployee}` ||
        `${process.env.REACT_APP_BACKEND_URL}/api/reviews/${selectedEmployee}`
    );
    //set employee review text
    setEmployeeReview(res.data[0]);
    //set employee review Id to post to database
    setEmployeeReviewId(res.data[0].id);
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
        {/* on submit, post new performance review to database */}
        <form
          onSubmit={async (e) => {
            await axios.post("http://localhost:4000/api/feedback" || `${process.env.REACT_APP_BACKEND_URL}/api/feedback`, {
              employee_id: parseInt(e.target.employee.value),
              review_id: employeeReviewId,
              comment: e.target.comment.value,
            });
          }}
        >
          {/* drop down select to set selected employee upon changing */}
          <select
            name="employee"
            placeholder="select"
            onChange={(e) => {
              setSelectedEmployee(e.target.value);
            }}
            className="employee-select"
          >
            {/* if employees have been fetched, display them in dropdown */}
            {employees ? (
              employees.map((employee, index) => {
                return (
                  <option
                    key="employeeName"
                    name="employee"
                    value={employee.id}
                  >
                    {employee.first_name} {employee.last_name}
                  </option>
                );
              })
            ) : (
              <option value={"Select Employee"}>{"Select Employee"}</option>
            )}
            <input type="submit" />
          </select>
          {/* button to confirm which employees review is to be selected and fetched */}
          <a
            className="select-employee-submit"
            value="Select"
            onClick={reviewFetch}
          >
            {/* icon for clickable employee check box */}
            <FontAwesomeIcon
              className="clip-board"
              icon={faCheck}
              size="lg"
              color="darkslategrey"
            />
          </a>
          {/* if a review has been selected to display, display review */}
          {employeeReview ? (
            <p
              name="employee_review"
              value={employeeReview}
              id="employee-review"
            >
              {employeeReview.text}
            </p>
          ) : (
            <h4>Review</h4>
          )}
          <textarea
            name="comment"
            rows="10"
            cols="60"
            placeholder="Please leave feedback"
          ></textarea>
          <button className="employee-profile-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

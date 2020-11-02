import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Profile from "./components/Profile/Profile.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import AdminProfile from "./components/AdminProfile/AdminProfile";
import { EmployeesContext } from "./components/useContext/EmployeesContext";
function App() {
  const [employees, setEmployees] = useState(null);

  return (
    <div className="App">
      <img
        id="pay-pay-header-logo"
        src="https://developer.paypay.ne.jp/static/img/pay_pay_logo@2x.6fe31c85.svg"
        alt="pay pay logo"
      />
      <NavBar />
      <h1>PayPay Performance Reviews</h1>
      <EmployeesContext.Provider
        value={{ employees, setEmployees }}
      >
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/adminprofile" exact component={AdminProfile} />
      </Switch>
      </EmployeesContext.Provider>
    </div>
  );
}

export default App;

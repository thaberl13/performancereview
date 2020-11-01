import "./App.css";
import { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Profile from "./components/Profile/Profile.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import PopUp from "./components/PopUp/PopUp";
import AdminProfile from "./components/AdminProfile/AdminProfile";
import Modal from "./components/Modal/Modal";
function App() {
  

  return (
    <div className="App">
      <img
        id="pay-pay-header-logo"
        src="https://developer.paypay.ne.jp/static/img/pay_pay_logo@2x.6fe31c85.svg"
      />
      <NavBar/>
      <h1>PayPay Performance Reviews</h1>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/popup" exact component={PopUp} />
        <Route path="/adminprofile" exact component={AdminProfile} />
      </Switch>
    </div>
  );
}

export default App;

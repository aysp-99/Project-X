import React, {Component} from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Dashboard from "./Components/Dashboard_components/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Login from "./Components/Login";

const App = () => (
  <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/user" component={Dashboard} />
  </Router>
);
export default App;
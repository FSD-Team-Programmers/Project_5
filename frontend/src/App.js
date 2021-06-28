import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Register from './components/Register';
import Dashboard from "./components/dashboard/Dashboard"
import AddPlace from "./components/dashboard/AddPlace"


const App = () => {
  return (
    <>
	      <Route path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addPlace" component={AddPlace} />

    </>
  );
  };

export default App;

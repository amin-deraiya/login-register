import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Modules/Home'
import Register from './Modules/Register'
import Login from './Modules/Login'
//Routing
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";
  
  
  function Routing() {
  return (
  <div>
  <Router>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/Register" component={Register} />
  <Route path="/Login" component={Login} />
  <Route path="*" component={Home} />
  </Switch>
  </Router>
  </div>
  );
  }
  
  ReactDOM.render(<Routing />,document.getElementById("root"));
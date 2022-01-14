import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddUser from "./components/AddUser";
import User from "./components/User";
import UsersList from "./components/UsersList";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
         <a href="/users" className="navbar-brand">
          User Management Service
        </a>       
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/users"} className="nav-link">
                | User List
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                | Add user
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/users"]} component={UsersList} />
            <Route exact path="/add" component={AddUser} />
            <Route path="/users/:id" component={User} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

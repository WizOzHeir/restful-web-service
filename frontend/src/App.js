import React, { Component, Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { GoBook, GoDiffAdded } from "react-icons/go";

import AddUser from "./components/AddUser";
import UserPage from "./components/UserPage";
import UsersList from "./components/UsersList";
import NotFound from "./components/NotFound";
import SuccessPage from "./components/SuccessPage";
import "./App.css";

class App extends Component {
  render() {
    return (
		<Fragment>
			<header className="mt-3">
		        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow-2">
		        	<div className="container-fluid justify-content-between">
		        		<div className="d-flex my-2 my-sm-0">
		         			<a href="/users" className="navbar-brand mr-2 mb-1 d-flex align-items-center">
		          				User Management Service
		        			</a>   
		        		</div>
		        		<ul className="navbar-nav flex-row">
		        			<li className="nav-item mr-3 mr-lg-1">
				               <Link to={"/users"} className="nav-link">
				                	<GoBook className="mb-1" /> Users 
				              	</Link>       				
		        			</li>
		        			
		        			<li className="nav-item mr-3 mr-lg-1">
		              			<Link to={"/add"} className="nav-link">
		                			<span><i className="fas fa-plus-circle fa-lg"></i></span>
		                			<GoDiffAdded className="mb-1" /> New user
		                		</Link>
		            		</li>
		        		</ul>
		        	</div>    
		        </nav>
			</header>
			<main className="mt-4 container-fluid">
	          <Switch>
	            <Route exact path={["/", "/users"]} component={UsersList} />
	            <Route exact path="/add" component={AddUser} />
	            <Route path="/users/:id" component={UserPage} />
	            <Route path="/success" component={SuccessPage} />
	            <Route path="*" component={NotFound} />
	          </Switch>
			</main>
	     </Fragment>
    );
  }
}

export default App;

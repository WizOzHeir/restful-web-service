import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import { GoPerson, GoAlert, GoChevronRight, GoPencil, GoSearch } from "react-icons/go";

import withAlert from "../utility/withAlert";
import { UseUserApi, UserApiMethods } from "../services/useUserApi";


function UsersList(props){
	const [userList, setUserList] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(-1);
	const [query, setQuery] = useState();
	
	const [{ data, isLoading, isError }, setSetup] = UseUserApi(UserApiMethods.GET);

	useEffect(() => setUserList(data), [userList, data]);

	const setActiveUser = (user, index) => {
	    setCurrentUser(user);
	    setCurrentIndex(index);
  	};

  	const handleRemoveAllUsers = async () => {
		await setSetup({ method: UserApiMethods.DELETE });	
		setUserList(null);
		props.history.push({
			pathname: "/success",
			state: { detail: "All users are removed." }
		});
	};
  
  	const onSubmitSearch = (e) => {
		console.log("I am in progress.")
		
		e.prevent.default();
  	};
  	
 	const renderSearch = () => {
		return (
			<form className="input-group mb-3" onSubmit={onSubmitSearch}>
				<input
			         type="text"
			         className="form-control"
			         placeholder="Search by name"
		             onChange={e => setQuery(e.target.value)}/>	
		          <div className="input-group-append">
			          <button className="btn btn-outline-primary" type="submit">
			         	<GoSearch />
			         </button>	
		         </div>		
			</form>			
		);
	};
  
  	const renderCurrentUser = () => {	
		return (
			<div className="card border border-primary">
				<div className="card-header bg-white py-3">
	            	<p className="text-uppercase small mb-2">
	            		<strong><GoPerson className="mb-1" /> User Data</strong>
	            	</p>
	            </div>
				<div className="card-body">
	            	<ul className="list-group list-group-flush">
						{Object.keys(currentUser).map((key, i) => key !== "id" && (
							<li key={i} className="list-group-item">
								{key.toUpperCase() + ": " + currentUser[key]}
							</li>
						))}
					</ul>
				</div>
				<div className="card-footer bg-white py-3">
					<Link to={"/users/" + currentUser.id} className="nav-link">
		            	<button type="button" className="btn btn-outline-info btn-sm">
		            		<GoPencil className="mb-1" /> Edit
		            	</button>
	           		</Link>
	            </div>
			</div>
		);
	};
	
	const UserListWithAlert = withAlert(() => {
		console.log(userList)
		if(!userList.length) {
			return (
				<div>Sorry. There is no users at this moment.</div>
			);
		}
		return (
			<div>
				<ul className="list-group">
		          {userList.map((user, index) => (
		              <li
		                className={
		                  "d-flex justify-content-between list-group-item " + (index === currentIndex ? "active" : "")
		                }
		                onClick={() => setActiveUser(user, index)}
		                key={index}
		              >
		                <p>{user.name}</p> 
		                <GoChevronRight className="mb-1" />
		              </li>
		            ))}
	        	</ul>
	
		        <button
		          className="m-3 btn btn-outline-secondary btn-sm"
		          onClick={handleRemoveAllUsers}
		        >
		          <GoAlert className="mb-1" /> Remove all users
		        </button>
	        </div>
		);
	});

	return (
	    <section className="p-5 container-fluid">
	        { renderSearch() }
	      <div className="list row">
		      <div className="col-md-6">
		        <h5>User List</h5>
		         <UserListWithAlert isLoading={isLoading} isError={isError} />
		      </div>
		      <div className="col-md-6">
		        {currentUser && renderCurrentUser()}
		      </div>
	      </div>
	    </section>
	  );
};

export default UsersList;
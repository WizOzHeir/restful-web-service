import React, { useEffect, useReducer } from "react";

import { UseUserApi, UserApiMethods } from "../services/useUserApi";
import SmartUserForm from "./SmartUserForm";
import withAlert from "../utility/withAlert";


const FormWithAlert = withAlert(SmartUserForm);

const fields = ["name", "age", "email", "address", "country", "telephone"];
const initialState = {
	isLoading: false,
	isError: false,
	isDeleted: false,
	isSaved: false,
	userData: []
};

function UserPage(props){
	const userUrl = `/${props.match.params.id}`;
	const [state, dispatch] = useReducer(userPageDataReducer, initialState);

	const [{ data, isError }, setSetup] =
		UseUserApi(UserApiMethods.GET, {}, userUrl);

	useEffect(() => {
		dispatch({ type: "FETCH_INIT" });	
		if(isError) {
			dispatch({ type: "FETCH_FAILURE" });
		} else {
			dispatch({ type: "FETCH_SUCCESS", payload: data });
		}
	}, [state.isLoading, state.isError, state.isDeleted, state.isSaved, state.userData, data]);
		
  	const onSubmit = (newUserData) => {
		dispatch({ type: "FETCH_INIT" });
		setSetup({
			method: UserApiMethods.PUT,
			config: {
				data: newUserData
			},
			url: userUrl
		});
		if(isError) {
			dispatch({ type: "FETCH_FAILURE" });
		} else {
			dispatch({ type: "FETCH_SUCCESS", payload: newUserData });
			props.history.push({
				pathname: "/success",
				state: { detail: "User is edited." }
			});			
		}
	};
	
	const onRemove = async () => {
		dispatch({ type: "FETCH_INIT" });
		await setSetup({
			method: UserApiMethods.DELETE,
			url: userUrl
		});
		if(isError) {
			dispatch({ type: "FETCH_FAILURE" });

		} else {
			dispatch({ type: "FETCH_SUCCESS", payload: {}  });
			props.history.push({
				pathname: "/success",
				state: { detail: "User is removed." }
			});
		}
	};
	
	
	// RESTORE changes
	
	return (
    <div className="submit-form p-5 col-md-6">  
    	<FormWithAlert
    		defaultValues={state.userData}
    		onSubmit={onSubmit}
    		isLoading={state.isLoading}
    		isError={state.isError}
    	>
	        <div className="form-group">
	          <button type="submit" className="btn btn-primary">
	            Save user
	          </button>
	          <button
	            type="button"
	            onClick={onRemove}
	            className="btn btn-secondary float-right"
	          >
	            Remove user
	          </button>
	        </div>
    	</FormWithAlert>  
      </div>
  );
}

const userPageDataReducer = (state, action) => {
	console.log(state)
	switch(action.type) {
		case "FETCH_INIT":
			return {
				...initialState,
				isLoading: true,
			};
		case "FETCH_SUCCESS":
		return {
				...initialState,
				isSaved: true,
				userData: action.payload
			};
		case "FETCH_FAILURE":
			return {
				...initialState,
				isError: true
			};
		default:
			throw new Error("[USER_PAGE_DATA_REDUCER]: Something is wrong");
	}
};

export default UserPage;
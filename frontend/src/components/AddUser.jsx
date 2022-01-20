import React from "react";

import { UseUserApi, UserApiMethods } from "../services/useUserApi";
import withAlert from "../utility/withAlert";
import SmartUserForm from "./SmartUserForm";

const FormWithAlert = withAlert(SmartUserForm);

function AddUser(props){
	const labels = ["Name", "Age", "Email", "Address", "Country", "Telephone"];
	
  	const [{ data, isLoading, isError }, setSetup] = UseUserApi();
  	
  	const onSubmit = (userData) => {
		setSetup({
			method: UserApiMethods.POST,
			config: {
				data: userData
			}
		});
		props.history.push({
			pathname: "/success",
			state: { detail: "User is created." }
		});
	}
	
	const onCancel = () => {
		props.history.push({
			pathname: "/",
		});
	};
		
	// GENERATE user
	
	
	return (
    <div className="submit-form p-5 col-md-6">  
    	<FormWithAlert
    		dafaultValues={null}
    		labels={labels}
    		onSubmit={onSubmit}
    		isLoading={isLoading}
    		isError={isError}
    	>
	        <div className="form-group">
	          <button type="submit" className="btn btn-primary">
	            Add user
	          </button>
	          <button
	            type="button"
	            onClick={onCancel}
	            className="btn btn-secondary float-right"
	          >
	            Cancel
	          </button>
	        </div>
    	</FormWithAlert>  
      </div>
  );
};

export default AddUser;
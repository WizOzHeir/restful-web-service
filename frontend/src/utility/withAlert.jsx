import React from "react";


function withAlert(Component) {
	return function EnhancedComponent({ isLoading, isError, msg="", ...props}) {
		if(isLoading) {
			return (
				<div className="alert alert-primary" role="alert">
					<p>Loading...</p>
				</div>
			);
		}
		if(isError) {
			return (
				<div className="alert alert-danger" role="alert">
					<p>Something went wrong...</p>
				</div>
			);
		}
		
		return <Component {...props} />;
	}
}

export default withAlert;
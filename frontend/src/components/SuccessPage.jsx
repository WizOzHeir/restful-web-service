import React from "react";
import { useLocation } from "react-router-dom";
import { GoThumbsup } from "react-icons/go";


function SuccessPage() {
	const location = useLocation();
	return (
	  <div className="container-fluid p-5">
	    <h5 className="text-monospace">
	    	<GoThumbsup className="mb-1" /> Success
	    </h5>
	    <div className="alert alert-success" role="alert">
	    	<p>{location?.state?.detail}</p>
	    </div>
	  </div>
	);
}

export default SuccessPage;
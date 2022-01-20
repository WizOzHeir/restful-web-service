import React from "react";
import { GoBug } from "react-icons/go";


const TITLE_404="404: Not found";
const TEXT_404="You just hit a page that doesn't exist... the sadness.";

function NotFound() {
	return (
	  <div className="container-fluid p-5">
	    <h5 className="text-monospace">{TITLE_404}</h5>
	    <div className="alert alert-dark" role="alert">
	    	<p><GoBug className="mb-1" /> {TEXT_404}</p>
	    </div>
	  </div>
	);
}

export default NotFound;
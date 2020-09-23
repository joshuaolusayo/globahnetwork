import React from "react";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";

const Details = () => {
	return (
		<div className="col-lg-3 details">
			<div className="row flex-column flex-sm-row flex-lg-column mx-0">
				<FirstContainer />
				<SecondContainer />
			</div>
		</div>
	);
};

export default Details;

import React from "react";
import Details from "./Details/index";
import Header from "./Header";
import Main from "./Main/index";

const Dashboard = () => {
	return (
		<div className="dashboard wrapper">
			<Header />
			<div className="content container">
				<div className="row my-4">
                    <Details />
                    <Main />
                </div>
			</div>
		</div>
	);
};

export default Dashboard;

import React from "react";
import Details from "../Details";
import Header from "../Header";
import Main from "./Main";

const Page = () => {
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

export default Page;

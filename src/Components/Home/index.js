import React from "react";
import Details from "./Details";
import Header from "./Header";
import Main from "./Main";

const Home = () => {
	return (
		<div className="home wrapper">
			<Header />
			<div className="content container">
				<div className="row">
                    <Details />
                    <Main />
                </div>
			</div>
		</div>
	);
};

export default Home;

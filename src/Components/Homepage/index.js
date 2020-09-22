import React from "react";
import About from "./About";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Header from "./Header";
import PayingSystem from "./PayingSystem";

const Homepage = () => {
	return (
		<div className="homepage">
			<div className="wrapper">
				<Header />
				<About />
				<PayingSystem />
				<FAQ />
				<Footer />
			</div>
		</div>
	);
};

export default Homepage;

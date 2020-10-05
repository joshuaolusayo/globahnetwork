import React, { lazy, Suspense } from "react";

import PayingSystem from "./PayingSystem";

const Header = lazy(() => import("./Header"));
const About = lazy(() => import("./About"));
const FAQ = lazy(() => import("./FAQ"));
const Footer = lazy(() => import("./Footer"));

const Homepage = () => {
	return (
		<div className="homepage">
			<div className="wrapper">
				<Suspense fallback={
					<div className="fall__back d-flex justify-content-center align-items-center">
						<div className="spinner-grow text-pry" role="status">
							<span className="sr-only">Loading...</span>
						</div>
						<strong>Loading...</strong>
					</div>
				}>
					<Header />
					<About />
					<PayingSystem />
					<FAQ />
					<Footer />
				</Suspense>
			</div>
		</div>
	);
};

export default Homepage;

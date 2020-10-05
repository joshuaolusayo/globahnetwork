import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./Header"));
const Details = lazy(() => import("./Details"));
const Main = lazy(() => import("./Main"));

const Dashboard = () => {
	return (
		<div className="dashboard wrapper">
			<Suspense
				fallback={
					<div className="fall__back d-flex justify-content-center align-items-center">
						<div className="spinner-grow text-pry" role="status">
							<span className="sr-only">Loading...</span>
						</div>
						<strong>Loading...</strong>
					</div>
				}
			>
				<Header />
				<div className="content container">
					<div className="row my-4">
						<Details />
						<Main />
					</div>
				</div>
			</Suspense>
		</div>
	);
};

export default Dashboard;

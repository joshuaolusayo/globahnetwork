import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./Header"));
const Details = lazy(() => import("./Details"));
const Main = lazy(() => import("./Main"));

const Dashboard = () => {
	return (
		<div className="dashboard wrapper">
			<Suspense fallback={<div>Loading</div>}>
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

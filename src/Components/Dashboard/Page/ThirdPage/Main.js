import React, { lazy, Suspense } from "react";

const Info = lazy(() => import("./Info"));
const Table = lazy(() => import("../Table"));

const Main = () => {
	return (
		<div className="col-lg-9 main mt-5 mt-lg-0 border-bg page">
			<Suspense
				fallback={
					<div className="fall__back d-flex justify-content-center align-items-center">
						<div className="spinner-grow text-yellow" role="status">
							<span className="sr-only">Loading...</span>
						</div>
						<strong>Loading...</strong>
					</div>
				}
			>
				<Info />
				<div className="container my-3 invite">
					<div className="row text-uppercase">
						<div className="col-md-6">
							<div>
								<span className="bg-logo draw"></span>
								<span className="ml-2">Partner invited by you</span>
							</div>
							<div>
								<span className="bg-logo draw"></span>
								<span className="ml-2">Overflow from up</span>
							</div>
							<div>
								<span className="bg-logo draw"></span>
								<span className="ml-2">Payout to higher partner</span>
							</div>
						</div>
						<div className="col-md-6">
							<div>
								<span className="bg-yellow draw"></span>
								<span className="ml-2">Bottom overflow</span>
							</div>
							<div>
								<span className="bg-yellow draw"></span>
								<span className="ml-2">Partner who is ahead of his partner</span>
							</div>
						</div>
					</div>
				</div>
				<Table />

				<div className="notif__bar bg-logo rounded-circle text-center">
					<i className="fa fa-bell text-white"></i>
				</div>
			</Suspense>
		</div>
	);
};

export default Main;

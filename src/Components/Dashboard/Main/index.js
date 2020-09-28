import React, { lazy, Suspense } from "react";

const FirstContainer = lazy(() => import("./FirstContainer"));
const SecondContainer = lazy(() => import("./SecondContainer"));
const ThirdContainer = lazy(() => import("./ThirdContainer"));

const Main = () => {
	return (
		<div className="col-lg-9 main mt-5 mt-lg-0 border-bg">
			<Suspense fallback={<div>Loading</div>}>
				<FirstContainer />

				<div className="d-flex flex-column flex-sm-row flex-wrap justify-content-center align-items-center text-center my-3 py-3 bg-transparent text-uppercase font-weight-bold">
					<p className="ml-sm-3 mb-lg-0">
						<span className="text-logo">gbn</span> the cost of slots in gbn
					</p>
					<p className="mx-sm-3 mb-lg-0">
						<span className="text-danger">
							<i className="fa fa-refresh"></i>
						</span>{" "}
						number of reinvests
					</p>
					<p className="mr-sm-3 mb-lg-0">
						<span className="text-logo">
							<i className="fa fa-user"></i>
						</span>{" "}
						partners on the slot
					</p>
				</div>

				<SecondContainer />

				<div className="container my-3 invite">
					<div className="row text-uppercase">
						<div className="col-md-6">
							<div>
								<span className="bg-logo draw"></span>
								<span className="ml-2">Partner invited by you</span>
							</div>
							<div>
								<span className="bg-yellow draw"></span>
								<span className="ml-2">Overflow from you</span>
							</div>
						</div>
						<div className="col-md-6">
							<div>
								<span className="bg-green draw"></span>
								<span className="ml-2">Partner invited by you</span>
							</div>
							<div>
								<span className="bg-secondary draw"></span>
								<span className="ml-2">Overflow from you</span>
							</div>
						</div>
					</div>
				</div>

				<ThirdContainer />

				<div className="container my-3 invite">
					<div className="row text-uppercase">
						<div className="col-md-6">
							<div>
								<span className="bg-logo draw"></span>
								<span className="ml-2">Partner invited by you</span>
							</div>
							<div>
								<span className="bg-yellow draw"></span>
								<span className="ml-2">Overflow from you</span>
							</div>
						</div>
						<div className="col-md-6">
							<div>
								<span className="bg-green draw"></span>
								<span className="ml-2">Partner invited by you</span>
							</div>
							<div>
								<span className="bg-secondary draw"></span>
								<span className="ml-2">Overflow from you</span>
							</div>
						</div>
					</div>
				</div>
			</Suspense>
		</div>
	);
};

export default Main;

import React from "react";
import { Link } from "react-router-dom";

const ThirdContainer = () => {
	return (
		<div className="border-bg p-3">
			<h3 className="font-neogrey font-weight-bold font-italic text-center my-4 mb-lg-5">Global Network</h3>
			<div className="row justify-content-center">
				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child">
								<Link
									to="#"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									// className="d-inline-block w-100 h-100 bg-logo rounded-circle border mb-1 ml-n-1"
									title="UID: 7958"
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="#"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
										></Link>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2"></span>
								</div>
							</span>
                            
							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child">
								<Link
									to="#"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2"></span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2"></span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-yellow"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThirdContainer;
import React from "react";
import { Link } from "react-router-dom";

const PayingSystem = () => {
	return (
		<section className="container px-lg-5">
			<h2 className="text-uppercase font-weight-bold text-center">
				<span className="text-yellow">Commission payout system</span>
				<br />
				<span className="">x3, x4 and x8 partner income explained</span>
			</h2>
			<div className="row justify-content-center px-3 px-md-auto">
				<div className="col-sm-10 col-md-8 col-lg-5 mx-2 bg-logo card display__card shadow mt-3">
					<div className="d-flex flex-column justify-content-center align-items-center p-3 px-lg-4 py-lg-5">
						<h3>
							GBN <span className="text-yellow">X1</span>
						</h3>
						<img className="card-img" src="/images/01.png" alt="first img" />
						<div className="d-flex justify-content-between align-items-center mt-4">
							<i className="fa fa-2x fa-refresh"></i>
							<span className="pl-4">
								Automatic deduction of reopening fees keeps your platform(s) active as new partners register in your
								downstream structure
							</span>
						</div>
						<div className="d-flex justify-content-between align-items-center mt-4">
							<i className="fa fa-2x fa-refresh"></i>
							<span className="pl-4">
								Automatic deduction of reopening fees keeps your platform(s) active as new partners register in your
								downstream structure
							</span>
						</div>
					</div>
				</div>
				<div className="col-sm-10 col-md-8 col-lg-5 mx-2 bg-logo card display__card shadow mt-3">
					<div className="d-flex flex-column justify-content-center align-items-center p-3 px-lg-4 py-lg-5">
						<h3>
							GBN <span className="text-yellow">X1</span>
						</h3>
						<img className="card-img" src="/images/02.png" alt="first img" />
						<div className="d-flex justify-content-between align-items-center mt-4">
							<i className="fa fa-2x fa-refresh"></i>
							<span className="pl-4">
								Automatic deduction of reopening fees keeps your platform(s) active as new partners register in your
								downstream structure
							</span>
						</div>
						<div className="d-flex justify-content-between align-items-center mt-4">
							<i className="fa fa-2x fa-refresh"></i>
							<span className="pl-4">
								Automatic deduction of reopening fees keeps your platform(s) active as new partners register in your
								downstream structure
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center my-4">
				<Link className="d-inline-block px-4 py-3 bg-yellow rounded text-white text-uppercase" to="/" target="_blanc">
					Only 0.03 eth to join
				</Link>
			</div>
		</section>
	);
};

export default PayingSystem;

import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
	return (
		<div className="border-bg p-1 p-sm-2 info second__box">
			<h3 className="font-neogrey font-weight-bold font-italic text-center my-4 mb-lg-5">Global Network</h3>
			<div className="p__abs d-flex justify-content-between align-items-center">
				<div className="d-flex flex-nowrap ab">
					<Link to="/home/page2" className="bg-pry text-logo spn d-inline-block rounded-circle">
						<i className="fa fa-arrow-left"></i>
					</Link>
					<span className="bg-logo rounded spn d-inline-block bg">15</span>
				</div>

				<div className="d-flex flex-column flex-md-row py-2 justify-content-center align-items-center w-100 max__w">
					<div className="col-md-4 d-flex justify-content-center align-items-center flex-md-wrap">
						<div className="d-flex flex-column justify-content-between align-items-center">
							<Link className="text-white" to="/home/page2">
								<i className="fa fa-caret-up"></i>
							</Link>
							<span className="text-pry text-uppercase">History</span>
							<Link className="text-white" to="/home/page2">
								<i className="fa fa-caret-down"></i>
							</Link>
						</div>
						<select className="mx-1 rounded" name="history" id="history">
							<option value="1">1</option>
							<option value="2">2</option>
						</select>
						<i className="fa fa-database text-pry"></i>
						<i className="fa fa-refresh text-pry px-1 px-sm-2"></i>
						<span>444</span>
					</div>

					<div className="col-md-4">
						<button className="btn w-100 rounded mb-2 bg-transparent border py-1 py-sm-2 text-logo text-right" type="btn">
							<i className="fa fa-arrow-up"></i>&nbsp;ID
						</button>

						<button className="btn w-100 rounded bg-logo px-1 px-sm-2 d-flex flex-column justify-content-center align-items-between">
							<span className="w-100 d-flex justify-content-between">
								<span>1</span>
								<span className="text-white">ID 7860</span>
							</span>
							<span className="w-100 text-white d-flex justify-content-end py-1">
								<span className="bg-pry p-1 shadow-lg rounded bg-dark-logo">
									$ <span>0</span>
								</span>
								<span className="bg-pry p-1 shadow-lg rounded bg-dark-logo ml-1">
									0 <span>XLM</span>
								</span>
							</span>
						</button>
						<div className="d-flex flex-column">
							<div>
								<div className="first__line d-flex justify-content-between">
									<span className="pl-1"></span>
									<span className="pr-1"></span>
								</div>
								<div className="first__row d-flex justify-content-between">
									<span className="d-inline-block border rounded-circle">
										{/* <Link className="rounded-circle d-inline-block w-100 h-100" to="/"></Link> */}
									</span>
									<span className="d-inline-block border rounded-circle"></span>
								</div>
							</div>
							<div className="sec__d">
								<div className="secd__line d-flex justify-content-between">
									<div className="first">
										<span className="d-inline-block pl-1"></span>
										<span className="d-inline-block pl-1"></span>
									</div>
									<div className="second">
										<span className="d-inline-block pr-1"></span>
										<span className="d-inline-block pr-1"></span>
									</div>
								</div>
								<div className="secd__row d-flex justify-content-between">
									<div className="first">
										<span className="d-inline-block border rounded-circle"></span>
										<span className="d-inline-block border rounded-circle"></span>
									</div>
									<div className="second">
										<span className="d-inline-block border rounded-circle"></span>
										<span className="d-inline-block border rounded-circle"></span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4 d-flex justify-content-center align-items-center flex-wrap">
						<div className="text-center">
							<i className="fa fa-users text-logo"></i>
							<span className="pl-1">951</span>
						</div>
						<div className="pl-1 text-center">
							<i className="fa fa-gift text-pry"></i>
							<span className="pl-1">2.39</span>
						</div>
						<div className="pl-1 text-center">
							<i className="fa fa-minus bg-pry rounded-circle"></i>
							<span className="pl-1">2.39</span>
						</div>
					</div>
				</div>

				<div className="d-flex flex-nowrap ab">
					<span className="bg-logo rounded spn d-inline-block bg">15</span>
					<Link to="/home/page2" className="bg-pry text-logo spn d-inline-block rounded-circle">
						<i className="fa fa-arrow-right"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Info;

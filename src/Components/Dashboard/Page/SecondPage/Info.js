import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
	return (
		<div className="border-bg p-1 p-sm-2 info">
			<h3 className="font-neogrey font-weight-bold font-italic text-center my-4 mb-lg-5">Global Network</h3>
			<div className="p__abs d-flex justify-content-between align-items-center">
				<div className="d-flex flex-nowrap ab">
					<Link to="/" className="bg-yellow text-logo spn d-inline-block rounded-circle">
						<i className="fa fa-arrow-left"></i>
					</Link>
					<span className="bg-logo rounded spn d-inline-block bg">15</span>
				</div>

				<div className="d-flex flex-column justify-content-center align-items-center">
					<button className="btn bg-transparent border py-1 py-sm-2 text-logo bd text-right mr-md-5 mr-xl-0" type="btn">
						<i className="fa fa-arrow-up"></i>&nbsp;ID
					</button>
					<div className="d-flex flex-column flex-md-row py-2 justify-content-center align-items-center">
						<div className="col d-flex justify-content-center align-items-center flex-md-wrap">
							<div className="d-flex flex-column justify-content-between align-items-center">
								<i className="fa fa-caret-up"></i>
								<span className="text-yellow text-uppercase">History</span>
								<i className="fa fa-caret-down"></i>
							</div>
							<select className="mx-1 rounded" name="history" id="history">
								<option value="1">1</option>
								<option value="2">2</option>
							</select>
							<i className="fa fa-database text-yellow"></i>
							<i className="fa fa-refresh text-yellow px-1 px-sm-2"></i>
							<span>444</span>
						</div>

						<div className="">
							<button className="btn rounded bg-logo px-1 px-sm-2 id__details d-flex flex-column justify-content-center align-items-between">
								<span className="w-100 d-flex justify-content-between">
									<span>1</span>
									<span className="text-white">ID 7860</span>
								</span>
								<span className="w-100 text-white d-flex justify-content-end py-1">
									<span className="bg-yellow p-1 shadow-lg rounded bg-dark-logo">
										$ <span>0</span>
									</span>
									<span className="bg-yellow p-1 shadow-lg rounded bg-dark-logo ml-1">
										0 <span>eth</span>
									</span>
								</span>
							</button>
							<div className="border mt-3 gbn__h d-flex flex-column rounded">
								<div>
									<div className="w-100 p-2 bg-light-col rounded d-flex justify-content-between align-items-end text-center">
										<div className="dt rounded-circle">
											<Link className="d-inline-block w-100 h-100 bg-yellow rounded-circle" to="/"></Link>
										</div>
										<div className="d-flex justify-content-end">
											<div>
												<i className="fa fa-users text-logo"></i>
												<span className="pl-1">0</span>
											</div>
											<div className="pl-1">
												<i className="fa fa-gift text-yellow"></i>
												<span className="pl-1">0</span>
											</div>
										</div>
									</div>
									<div className="w-100 w-90 p-2 bg-light-col rounded d-flex justify-content-between align-items-end text-center">
										<div className="dt rounded-circle">
											<Link className="d-inline-block w-100 h-100 bg-yellow rounded-circle" to="/"></Link>
										</div>
										<div className="d-flex justify-content-end">
											<div>
												<i className="fa fa-users text-logo"></i>
												<span className="pl-1">0</span>
											</div>
											<div className="pl-1">
												<i className="fa fa-gift text-yellow"></i>
												<span className="pl-1">0</span>
											</div>
										</div>
									</div>
								</div>
								<div className="w-100 p-2 bg-light-col rounded border-top d-flex justify-content-between align-items-end text-center">
									<div className="dt rounded-circle"></div>
									<div className="d-flex justify-content-end">
										<div>
											<i className="fa fa-users text-logo"></i>
											<span className="pl-1">0</span>
										</div>
										<div className="pl-1">
											<i className="fa fa-gift text-yellow"></i>
											<span className="pl-1">0</span>
										</div>
									</div>
								</div>
								<div className="w-100 p-2 bg-light-col rounded border-top d-flex justify-content-between align-items-end text-center">
									<div className="dt rounded-circle"></div>
									<div className="d-flex justify-content-end">
										<div>
											<i className="fa fa-users text-logo"></i>
											<span className="pl-1">0</span>
										</div>
										<div className="pl-1">
											<i className="fa fa-gift text-yellow"></i>
											<span className="pl-1">0</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col d-flex justify-content-center align-items-center">
							<div className="text-center">
								<i className="fa fa-users text-logo"></i>
								<span className="pl-1">951</span>
							</div>
							<div className="pl-1 text-center">
								<i className="fa fa-gift text-yellow"></i>
								<span className="pl-1">2.39</span>
							</div>
							<div className="pl-1 text-center">
								<i className="fa fa-minus bg-yellow rounded-circle"></i>
								<span className="pl-1">2.39</span>
							</div>
						</div>
					</div>
				</div>

				<div className="d-flex flex-nowrap ab">
					<span className="bg-logo rounded spn d-inline-block bg">15</span>
					<Link to="/" className="bg-yellow text-logo spn d-inline-block rounded-circle">
						<i className="fa fa-arrow-right"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Info;

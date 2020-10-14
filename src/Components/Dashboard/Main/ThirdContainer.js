import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ThirdContainer = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get("../../db.json")
			.then((res) => {
				setItems(res.data.dashboardThirdContainer);
			})
			.catch((err) => console.log(err));

		return () => {
			// callback function
		};
	}, []);

	if (items.length !== -1) {
		return (
			<div className="border-bg p-3">
				<h3 className="font-neogrey font-weight-bold font-italic text-center my-4 mb-lg-5">Global Network</h3>
				<div className="row justify-content-center">
					{items.map((item) => {
						return (
							<div key={item.id} className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
								<div className="">
									<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
										<span className="no">{item.num}</span>
										<span className="amt">{item.eth}</span>
										<span className="text-danger">
											<i className="fa fa-refresh"></i>
										</span>
									</Link>

									<div className="d-flex justify-content-between c__l mb-5">
										<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
											{item.people[0].link ? (
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													
												></Link>
											) : (
												""
											)}

											<div className="d-flex justify-content-between mt-4">
												<span className="hole rounded-circle border ml-n3 second-child t-n2">
													{item.people[0].followers[0].link ? (
														<Link
															to="/home/page3"
															className="d-inline-block w-100 h-100 bg-pry rounded-circle border"
															
														></Link>
													) : (
														""
													)}

													<div className="d-flex justify-content-between">
														<span className="rounded-circle third-child ml-n2">
															{item.people[0].followers[0].followers[0].link ? (
																<Link
																	to="/home/page3"
																	className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
																	
																></Link>
															) : (
																""
															)}
														</span>
														<span className="rounded-circle third-child mr-n2">
															{item.people[0].followers[0].followers[1].link ? (
																<Link
																	to="/home/page3"
																	className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
																	
																></Link>
															) : (
																""
															)}
														</span>
													</div>
												</span>
												<span className="hole rounded-circle border mr-n3 second-child t-n2">
													{item.people[0].followers[1].link ? (
														<Link
															to="/home/page3"
															className="d-inline-block w-100 h-100 bg-pry rounded-circle border"
															
														></Link>
													) : (
														""
													)}
													<div className="d-flex justify-content-between">
														<span className="rounded-circle third-child ml-n2">
															{item.people[0].followers[1].followers[0].link ? (
																<Link
																	to="/home/page3"
																	className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
																	
																></Link>
															) : (
																""
															)}
														</span>
														<span className="rounded-circle third-child mr-n2">
															{item.people[0].followers[1].followers[1].link ? (
																<Link
																	to="/home/page3"
																	className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
																	
																></Link>
															) : (
																""
															)}
														</span>
													</div>
												</span>
											</div>
										</span>

										<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
											{item.people[1].link ? (
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													
												></Link>
											) : (
												""
											)}
											<div className="d-flex justify-content-between mt-4">
												<span className="hole rounded-circle border ml-n3 second-child t-n2">
													{item.people[1].followers[0].link ? (
														<Link
															to="/home/page3"
															className="d-inline-block w-100 h-100 bg-pry rounded-circle border"
															
														></Link>
													) : (
														""
													)}
													<div className="d-flex justify-content-between">
														<span className="rounded-circle third-child ml-n2">
															{item.people[1].followers[0].followers[0].link ? (
																<Link
																	to="/home/page3"
																	className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
																	
																></Link>
															) : (
																""
															)}
														</span>
														<span className="rounded-circle third-child mr-n2">
															{item.people[1].followers[0].followers[1].link ? (
																<Link
																	to="/home/page3"
																	className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
																	
																></Link>
															) : (
																""
															)}
														</span>
													</div>
												</span>
												<span className="hole rounded-circle border mr-n3 second-child t-n2">
													{item.people[1].followers[1].link ? (
														<Link
															to="/home/page3"
															className="d-inline-block w-100 h-100 bg-pry rounded-circle border"
															
														></Link>
													) : (
														""
													)}
													<div className="d-flex justify-content-between">
														<span className="rounded-circle third-child ml-n2">
															{item.people[1].followers[1].followers[0].link ? (
																<Link
																	to="/home/page3"
																	className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
																	
																></Link>
															) : (
																""
															)}
														</span>
														<span className="rounded-circle third-child mr-n2">
															{item.people[1].followers[1].followers[1].link ? (
																<Link
																	to="/home/page3"
																	className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
																	
																></Link>
															) : (
																""
															)}
														</span>
													</div>
												</span>
											</div>
										</span>
									</div>

									<div className="text-center my-3 text-bg">
										<span>
											950 <i className="fa fa-user text-logo"></i>
										</span>
										<span className="ml-2 ml-md-3">
											440 <i className="fa fa-refresh text-pry"></i>
										</span>
									</div>
								</div>
							</div>
						);
					})}

					{/* <div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="/home/page3"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
											
										></Link>

										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-green rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="/home/page3"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
											
										></Link>

										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-green rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="/home/page3"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
											
										></Link>

										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-green rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="/home/page3"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
											
										></Link>

										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-green rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="/home/page3"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
											
										></Link>

										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-green rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="/home/page3"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
											
										></Link>

										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-green rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="/home/page3"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
											
										></Link>

										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-green rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="/home/page3"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
											
										></Link>

										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-green rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="/home/page3"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
											
										></Link>

										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="/home/page3"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
											
										></Link>

										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-green rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="/home/page3"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
											
										></Link>

										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-green rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<Link
											to="/home/page3"
											className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
											title="UID: 7958"
											
										></Link>

										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<Link
									to="/home/page3"
									className="d-inline-block w-100 h-100 bg-green rounded-circle border"
									title="UID: 7958"
									
								></Link>
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2">
												<Link
													to="/home/page3"
													className="d-inline-block w-100 h-100 bg-secondary rounded-circle border"
													title="UID: 7958"
													
												></Link>
											</span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
					<div className="">
						<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page3">
							<span className="no">1</span>
							<span className="amt">0.01</span>
							<span className="text-danger">
								<i className="fa fa-refresh"></i>
							</span>
						</Link>

						<div className="d-flex justify-content-between c__l mb-5">
							<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child mb-3">
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>

							<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child mb-3">
								<div className="d-flex justify-content-between mt-4">
									<span className="hole rounded-circle border ml-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
									<span className="hole rounded-circle border mr-n3 second-child t-n2">
										<div className="d-flex justify-content-between">
											<span className="rounded-circle third-child ml-n2"></span>
											<span className="rounded-circle third-child mr-n2"></span>
										</div>
									</span>
								</div>
							</span>
						</div>

						<div className="text-center my-3 text-bg">
							<span>
								950 <i className="fa fa-user text-logo"></i>
							</span>
							<span className="ml-2 ml-md-3">
								440 <i className="fa fa-refresh text-pry"></i>
							</span>
						</div>
					</div>
				</div> */}
				</div>
			</div>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default ThirdContainer;

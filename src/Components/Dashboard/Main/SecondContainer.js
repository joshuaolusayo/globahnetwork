import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SecondContainer = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get("../../db.json")
			.then((res) => {
				setItems(res.data.dashboardSecondContainer);
			})
			.catch((err) => console.log(err));

		return () => {
			// callback function
		};
	}, []);

	if (items.length !== 0) {
		return (
			<div className="border-bg p-3">
				<h3 className="font-neogrey font-weight-bold font-italic text-center my-4 mb-lg-5">Global Network</h3>
				<div className="row justify-content-center">
					{items.map((item) => {
						return (
							<div key={item.id} className="col-6 col-5-4 col-sm-4 col-md-3 my-3">
								<div className="">
									<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page2">
										<span className="no">{item.num}</span>
										<span className="amt">{item.eth}</span>
										<span className="text-danger">
											<i className="fa fa-refresh"></i>
										</span>
									</Link>
									<div className="d-flex justify-content-between f__l mb-5">
										<span className="hole rounded-circle border ml-3 ml-md-4 mt-3 first-child">
											{item.people[0].link ? (
												<Link
													to="/home/page2"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border mb-1"
													target="_blank"
												></Link>
											) : (
												""
											)}
											<div className="d-flex justify-content-between mt-4">
												<span className="hole rounded-circle border ml-n3 second-child">
													{item.people[0].followers[0].link ? (
														<Link
															to="/home/page2"
															className="d-inline-block w-100 h-100 bg-pry rounded-circle border mb-1"
															target="_blank"
														></Link>
													) : (
														""
													)}
												</span>
												<span className="hole rounded-circle border mr-n3 second-child">
													{item.people[0].followers[1].link ? (
														<Link
															to="/home/page2"
															className="d-inline-block w-100 h-100 bg-pry rounded-circle border mb-1"
															target="_blank"
														></Link>
													) : (
														""
													)}
												</span>
											</div>
										</span>
										<span className="hole rounded-circle border mr-3 ml-md-4 mt-3 first-child">
											{item.people[1].link ? (
												<Link
													to="/home/page2"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle border mb-1"
													target="_blank"
												></Link>
											) : (
												""
											)}
											<div className="d-flex justify-content-between mt-4">
												<span className="hole rounded-circle border ml-n3 second-child">
													{item.people[1].followers[0].link ? (
														<Link
															to="/home/page2"
															className="d-inline-block w-100 h-100 bg-pry rounded-circle border mb-1"
															target="_blank"
														></Link>
													) : (
														""
													)}
												</span>
												<span className="hole rounded-circle border mr-n3 second-child">
													{item.people[1].followers[1].link ? (
														<Link
															to="/home/page2"
															className="d-inline-block w-100 h-100 bg-pry rounded-circle border mb-1"
															target="_blank"
														></Link>
													) : (
														""
													)}
												</span>
											</div>
										</span>
									</div>
									<div className="text-center my-3 text-bg">
										<span>
											{item.gift} <i className="fa fa-user text-logo"></i>
										</span>
										<span className="ml-2 ml-md-3">
											{item.refresh} <i className="fa fa-refresh text-pry"></i>
										</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else {
		return <div>Loading</div>;
	}
};

export default SecondContainer;

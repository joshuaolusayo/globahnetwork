import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FirstContainer = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get("../../db.json")
			.then((res) => {
				setItems(res.data.dashboardFirstContainer);
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
									<Link className="d-flex justify-content-between text-white p-2 bg-logo rounded" to="/home/page1">
										<span className="no">{item.num}</span>
										<span className="amt">{item.eth}</span>
										<span className="text-danger">
											<i className="fa fa-refresh"></i>
										</span>
									</Link>
									<div className="line d-flex justify-content-center">
										<span className="d-inline-block"></span>
										<span className="d-inline-block mx-4"></span>
										<span className="d-inline-block"></span>
									</div>
									<div className="rounded-box d-flex justify-content-center">
										<span className="hole rounded-circle border">
											{item.link1 ? (
												<Link
													to="/home/page1"
													className="d-inline-block w-100 h-100 bg-logo rounded-circle"
													title={`UID: ${item.title}`}
													target="_blank"
												></Link>
											) : (
												""
											)}
										</span>
										<span className="hole rounded-circle border mx-3">
											{item.link2 ? (
												<Link
													to="/home/page1"
													className="d-inline-block w-100 h-100 bg-pry rounded-circle"
													title={`UID: ${item.title}`}
													target="_blank"
												></Link>
											) : (
												""
											)}
										</span>
										<span className="hole rounded-circle border">
											{item.link3 ? (
												<Link
													to="/home/page1"
													className="d-inline-block w-100 h-100 bg-secondary rounded-circle"
													title={`UID: ${item.title}`}
													target="_blank"
												></Link>
											) : (
												""
											)}
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
		return <div>Loading...</div>;
	}
};

export default FirstContainer;

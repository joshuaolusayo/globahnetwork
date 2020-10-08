import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Info = () => {
	const [items, setItems] = useState([]);
	const [count, setCount] = useState(0);
	const [total, setTotal] = useState(0);

	function handleRightClick() {
		if (count === total - 1) {
			setCount(0);
		} else {
			setCount(count + 1);
		}
	}

	function handleLeftClick() {
		if (count === 0) {
			setCount(total - 1);
		} else {
			setCount(count - 1);
		}
	}

	useEffect(() => {
		axios
			.get("../../db.json")
			.then((res) => {
				setItems(res.data.firstPage[count]);
				setTotal(res.data.firstPage.length);
			})
			.catch((err) => console.log(err));

		return () => {
			console.log("unmounting");
		};
	}, [count]);

	if (items.length !== 0) {
		return (
			<div className="border-bg p-1 p-sm-2 info">
				<h3 className="font-neogrey font-weight-bold font-italic text-center my-4 mb-lg-5">Global Network</h3>
				<div className="p__abs d-flex justify-content-between align-items-center">
					<div className="d-flex flex-nowrap ab">
						<span className="bg-pry text-logo spn d-inline-block rounded-circle" onClick={handleLeftClick}>
							<i className="fa fa-arrow-left"></i>
						</span>
						<span className="bg-logo rounded spn d-inline-block bg">{items.navPage1}</span>
					</div>

					<div className="d-flex flex-column justify-content-center align-items-center">
						<button className="btn bg-transparent border py-1 py-sm-2 text-logo bd text-right mr-md-0" type="btn">
							<i className="fa fa-arrow-up"></i>&nbsp;ID
						</button>
						<div className="d-flex flex-column flex-md-row py-2 justify-content-center align-items-center">
							<div className="col d-flex justify-content-center align-items-center flex-md-wrap">
								<div className="d-flex flex-column justify-content-between align-items-center">
									<Link className="text-white" to="/home/page1">
										<i className="fa fa-caret-up"></i>
									</Link>
									<span className="text-pry text-uppercase">History</span>
									<Link className="text-white" to="/home/page1">
										<i className="fa fa-caret-down"></i>
									</Link>
								</div>
								<select className="mx-1 rounded" name="history" id="history">
									<option value="1">1</option>
									<option value="2">2</option>
								</select>
								<i className="fa fa-database text-pry"></i>
								<i className="fa fa-refresh text-pry px-1 px-sm-2"></i>
								<span>{items.history}</span>
							</div>

							<div className="">
								<button className="btn rounded bg-logo px-1 px-sm-2 id__details d-flex flex-column justify-content-center align-items-between">
									<span className="w-100 d-flex justify-content-between">
										<span>{items.id}</span>
										<span className="text-white">ID 7860</span>
									</span>
									<span className="w-100 text-white d-flex justify-content-end py-1">
										<span className="bg-pry p-1 shadow-lg rounded bg-dark-logo">
											$ <span>{items.idAmt}</span>
										</span>
										<span className="bg-pry p-1 shadow-lg rounded bg-dark-logo ml-1">
											{items.stellarAmt} <span>XLM</span>
										</span>
									</span>
								</button>
								<div className="border mt-3 gbn__h d-flex flex-column rounded">
									{items.people.map((item) => (
										<div
											key={item.id}
											className={`w-100 p-2 bg-light-col rounded d-flex justify-content-between align-items-end text-center ${
												item.id !== 1 ? "border-top" : ""
											}`}
										>
											<div className="dt rounded-circle">
												{item.link ? (
													<Link
														className="d-inline-block w-100 h-100 bg-pry rounded-circle"
														to="/home/page1"
													></Link>
												) : (
													""
												)}
											</div>
											<div className="d-flex justify-content-end">
												<div>
													<i className="fa fa-users text-logo"></i>
													<span className="pl-1">{item.users}</span>
												</div>
												<div className="pl-1">
													<i className="fa fa-gift text-pry"></i>
													<span className="pl-1">{item.gift}</span>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="col d-flex justify-content-center align-items-center">
								<div className="text-center">
									<i className="fa fa-users text-logo"></i>
									<span className="pl-1">{items.item1}</span>
								</div>
								<div className="pl-1 text-center">
									<i className="fa fa-gift text-pry"></i>
									<span className="pl-1">{items.item2}</span>
								</div>
								<div className="pl-1 text-center">
									<i className="fa fa-minus bg-pry rounded-circle"></i>
									<span className="pl-1">{items.item3}</span>
								</div>
							</div>
						</div>
					</div>

					<div className="d-flex flex-nowrap ab">
						<span className="bg-logo rounded spn d-inline-block bg">{items.navPage2}</span>
						<span className="bg-pry text-logo spn d-inline-block rounded-circle" onClick={handleRightClick}>
							<i className="fa fa-arrow-right"></i>
						</span>
					</div>
				</div>
			</div>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default Info;

import React, { useState, useEffect } from "react";
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
				setItems(res.data.thirdPage[count]);
				setTotal(res.data.thirdPage.length);
			})
			.catch((err) => console.log(err));

		return () => {
			// callback function
		};
	}, [count]);

	if (items.length !== 0) {
		return (
			<div className="border-bg p-1 p-sm-2 info third__box">
				<h3 className="font-neogrey font-weight-bold font-italic text-center my-4 mb-lg-5">Global Network</h3>
				<div className="p__abs d-flex justify-content-between align-items-center">
					<div className="d-flex flex-nowrap ab">
						<span className="bg-pry text-logo spn d-inline-block rounded-circle" onClick={handleLeftClick}>
							<i className="fa fa-arrow-left"></i>
						</span>
						<span className="bg-logo rounded spn d-inline-block bg">{items.navPage1}</span>
					</div>

					<div className="d-flex flex-column flex-md-row py-2 justify-content-center align-items-center w-100 max__w">
						<div className="col-md-4 d-flex justify-content-center align-items-center flex-md-wrap">
							<div className="d-flex flex-column justify-content-between align-items-center">
								<Link className="text-white" to="/home/page3">
									<i className="fa fa-caret-up"></i>
								</Link>
								<span className="text-pry text-uppercase">History</span>
								<Link className="text-white" to="/home/page3">
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

						<div className="col-md-4">
							<button className="btn w-100 rounded mb-2 bg-transparent border py-1 py-sm-2 text-logo text-right" type="btn">
								<i className="fa fa-arrow-up"></i>&nbsp;ID
							</button>

							<button className="btn w-100 rounded bg-logo px-1 px-sm-2 d-flex flex-column justify-content-center align-items-between">
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
							<div className="d-flex flex-column">
								<div>
									<div className="first__line d-flex justify-content-between">
										<span className=""></span>
										<span className=""></span>
									</div>
									<div className="first__row d-flex justify-content-between">
										<span className="d-inline-block border rounded-circle">
											{items.people[0].id === 1 && items.people[0].link ? (
												<Link className="rounded-circle d-inline-block w-100 h-100 bg-logo" to="/home/page3"></Link>
											) : (
												""
											)}
										</span>
										<span className="d-inline-block border rounded-circle">
											{items.people[1].id === 2 && items.people[1].link ? (
												<Link className="rounded-circle d-inline-block w-100 h-100 bg-logo" to="/home/page3"></Link>
											) : (
												""
											)}
										</span>
									</div>
								</div>
								<div className="thd">
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
									<div className="third__row d-flex justify-content-between">
										<div className="first d-flex">
											<span className="d-inline-block border rounded-circle">
												{items.people[0].followers[0].id === 1 && items.people[0].followers[0].link ? (
													<Link
														className="rounded-circle d-inline-block w-100 h-100 bg-pry"
														to="/home/page3"
													></Link>
												) : (
													""
												)}
											</span>
											<span className="d-inline-block border rounded-circle">
												{items.people[0].followers[1].id === 2 && items.people[0].followers[1].link ? (
													<Link
														className="rounded-circle d-inline-block w-100 h-100 bg-pry"
														to="/home/page3"
													></Link>
												) : (
													""
												)}
											</span>
										</div>
										<div className="second d-flex">
											<span className="d-inline-block border rounded-circle">
												{items.people[1].followers[0].id === 1 && items.people[1].followers[0].link ? (
													<Link
														className="rounded-circle d-inline-block w-100 h-100 bg-pry"
														to="/home/page3"
													></Link>
												) : (
													""
												)}
											</span>
											<span className="d-inline-block border rounded-circle">
												{items.people[1].followers[1].id === 2 && items.people[1].followers[1].link ? (
													<Link
														className="rounded-circle d-inline-block w-100 h-100 bg-pry"
														to="/home/page3"
													></Link>
												) : (
													""
												)}
											</span>
										</div>
									</div>
								</div>
								<div className="fth">
									<div className="thd__line d-flex justify-content-between">
										<div className="first d-flex justify-content-between">
											<div className="ft">
												<span className="d-inline-block"></span>
												<span className="d-inline-block"></span>
											</div>
											<div className="sd">
												<span className="d-inline-block"></span>
												<span className="d-inline-block"></span>
											</div>
										</div>
										<div className="second d-flex justify-content-between">
											<div className="ft">
												<span className="d-inline-block"></span>
												<span className="d-inline-block"></span>
											</div>
											<div className="sd">
												<span className="d-inline-block"></span>
												<span className="d-inline-block"></span>
											</div>
										</div>
									</div>
									{/* #848b93 */}
									<div className="last__row d-flex justify-content-between">
										<div className="box1 d-flex justify-content-between">
											<div className="fdrw">
												<span className="d-inline-block rounded-circle border">
													{items.people[0].followers[0].followers[0].id === 1 &&
													items.people[0].followers[0].followers[0].link ? (
														<Link
															className="rounded-circle d-inline-block w-100 h-100 bg-secondary"
															to="/home/page3"
														></Link>
													) : (
														""
													)}
												</span>
												<span className="d-inline-block rounded-circle border">
													{items.people[0].followers[0].followers[1].id === 2 &&
													items.people[0].followers[0].followers[1].link ? (
														<Link
															className="rounded-circle d-inline-block w-100 h-100 bg-secondary"
															to="/home/page3"
														></Link>
													) : (
														""
													)}
												</span>
											</div>
											<div className="ldrw">
												<span className="d-inline-block rounded-circle border">
													{items.people[0].followers[1].followers[0].id === 1 &&
													items.people[0].followers[1].followers[0].link ? (
														<Link
															className="rounded-circle d-inline-block w-100 h-100 bg-secondary"
															to="/home/page3"
														></Link>
													) : (
														""
													)}
												</span>
												<span className="d-inline-block rounded-circle border">
													{items.people[0].followers[1].followers[1].id === 2 &&
													items.people[0].followers[1].followers[1].link ? (
														<Link
															className="rounded-circle d-inline-block w-100 h-100 bg-secondary"
															to="/home/page3"
														></Link>
													) : (
														""
													)}
												</span>
											</div>
										</div>
										<div className="box2 d-flex justify-content-between">
											<div className="fdrw">
												<span className="d-inline-block rounded-circle border">
													{items.people[1].followers[0].followers[0].id === 1 &&
													items.people[1].followers[0].followers[0].link ? (
														<Link
															className="rounded-circle d-inline-block w-100 h-100 bg-secondary"
															to="/home/page3"
														></Link>
													) : (
														""
													)}
												</span>
												<span className="d-inline-block rounded-circle border">
													{items.people[1].followers[0].followers[1].id === 2 &&
													items.people[1].followers[0].followers[1].link ? (
														<Link
															className="rounded-circle d-inline-block w-100 h-100 bg-secondary"
															to="/home/page3"
														></Link>
													) : (
														""
													)}
												</span>
											</div>
											<div className="ldrw">
												<span className="d-inline-block rounded-circle border">
													{items.people[1].followers[1].followers[0].id === 1 &&
													items.people[1].followers[1].followers[0].link ? (
														<Link
															className="rounded-circle d-inline-block w-100 h-100 bg-secondary"
															to="/home/page3"
														></Link>
													) : (
														""
													)}
												</span>
												<span className="d-inline-block rounded-circle border">
													{items.people[1].followers[1].followers[1].id === 2 &&
													items.people[1].followers[1].followers[1].link ? (
														<Link
															className="rounded-circle d-inline-block w-100 h-100 bg-secondary"
															to="/home/page3"
														></Link>
													) : (
														""
													)}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4 d-flex justify-content-center align-items-center flex-wrap">
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
		return <div>Loading</div>;
	}
};

export default Info;

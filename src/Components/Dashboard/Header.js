import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="d-flex container justify-content-between align-items-center pb-3">
			<div className="row justify-content-center justify-content-md-between py-3 align-items-center w-100">
				<Link className="d-inline-block" to="/" target="_blanc">
					<img className="logo" src="/images/logo.png" alt="Logo" />
				</Link>
				<img className="globe" src="/images/globe.png" alt="Globe" />
			</div>
			<div className="flex-basis-100 w-100">
				<nav className="d-flex justify-content-center">
					<ul className="d-inline-flex pl-0">
						<li>
							<Link className="text-logo m-2 ml-0 d-inline-block" to="/">
								<i className="fa fa-telegram"></i>
							</Link>
						</li>
						<li>
							<Link className="text-logo m-2 d-inline-block" to="/">
								<i className="fa fa-eye"></i>
							</Link>
						</li>
						<li>
							<Link className="text-white m-2 d-inline-block" to="/">
								Office
							</Link>
						</li>
						<li>
							<Link className="text-white m-2 d-inline-block" to="/">
								Information
							</Link>
						</li>
						<li>
							<Link className="text-white m-2 mr-0 d-inline-block" to="/">
								Logout
							</Link>
						</li>
					</ul>
				</nav>
				<div className="d-flex flex-column justify-content-center display__items">
					<div className="row no-gutters">
						<div className="col-lg-7 text-right pr-lg-2 font-neogrey-medium font-weight-bold fa-2x text-danger">7857</div>
						<div className="col-lg-5 text-uppercase sm">
							all <br />
							participants
						</div>
					</div>
					<div className="row no-gutters">
						<div className="col-lg-7 text-right pr-lg-2 font-neogrey-medium font-weight-bold fa-2x text-logo">+0</div>
						<div className="col-lg-5 text-uppercase sm">
							joined <br />
							in 24hours
						</div>
					</div>
					<div className="row no-gutters">
						<div className="col-lg-7 text-right pr-lg-2 font-neogrey-medium font-weight-bold fa-2x text-yellow">1420.2</div>
						<div className="col-lg-5 text-uppercase sm">
							participants <br />
							have earned XLM
						</div>
					</div>
					<div className="row no-gutters">
						<div className="col-lg-7 text-right pr-lg-2 font-neogrey-medium font-weight-bold fa-2x text-yellow">561092.62</div>
						<div className="col-lg-5 text-uppercase sm">
							participants <br />
							have earned usd
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

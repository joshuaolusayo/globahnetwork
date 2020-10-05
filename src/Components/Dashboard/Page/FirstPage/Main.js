import React from "react";

import Info from "./Info";
import Table from "../Table";

const Main = () => {
	return (
		<div className="col-lg-9 main mt-5 mt-lg-0 border-bg page">
			<Info />
			<div className="container my-3 invite">
				<div className="row text-uppercase">
					<div className="col-md-6">
						<div>
							<span className="bg-logo draw"></span>
							<span className="ml-2">Partner invited by you</span>
						</div>
					</div>
					<div className="col-md-6">
						<div>
							<span className="bg-pry draw"></span>
							<span className="ml-2">Partner invited by you</span>
						</div>
					</div>
				</div>
			</div>
			<Table />

			<div className="notif__bar bg-logo rounded-circle text-center">
				<i className="fa fa-bell text-white"></i>
			</div>
		</div>
	);
};

export default Main;

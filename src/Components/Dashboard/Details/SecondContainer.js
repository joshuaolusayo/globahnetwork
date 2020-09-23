import React from "react";

const SecondContainer = () => {
	return (
		<div className="container px-0 px-sm-4 px-lg-0 py-lg-3 col-sm-6 col-lg-12 mt-4 mt-sm-0 mt-lg-4">
			<div className="d-flex flex-column justify-content-center text-center border px-3 py-2">
				<div className="d-flex justify-content-between">
					<span className="text-muted">Affiliate link</span>
					<span>
						3 <i className="fa fa-user"></i>
					</span>
				</div>
				<button type="button" className="btn p-1 bg-logo rounded-0 my-2 text-white link shadow">
					hgvbnljsdfhuigkjnldewhfgbdknslfhisbjknslfh
				</button>
				<div className="d-flex justify-content-center">
					<button type="button" className="btn px-4 py-2 bg-yellow text-white mg__n5">
						Copy
					</button>
				</div>
			</div>
			<div className="d-flex flex-column justify-content-center text-center border px-3 pt-4 pb-2 mt-5">
				<h5>Your Etherum wallet</h5>
				<h6 className="text-muted">0x8AE...FJH6k</h6>
				<div className="d-flex justify-content-center">
					<button className="btn p-2 rounded text-white mg__n5">
						<span className="bg-logo p-2 rounded-left text-capitalize">to gbn</span>
						<span className="bg-yellow p-2 rounded-right">Copy</span>
					</button>
				</div>
			</div>
			<div className="d-flex flex-column justify-content-center text-center border px-3 pt-4 pb-2 mt-5">
				<h5>Your Etherum wallet</h5>
				<h6 className="text-muted">0x8AE...FJH6k</h6>
				<div className="d-flex justify-content-center">
					<button className="btn p-2 rounded text-white mg__n5">
						<span className="bg-logo p-2 rounded-left text-capitalize">to gbn</span>
						<span className="bg-yellow p-2 rounded-right">Copy</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SecondContainer;
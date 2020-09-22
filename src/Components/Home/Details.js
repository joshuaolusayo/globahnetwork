import React from "react";

const Details = () => {
	return (
		<div className="col-lg-3 details">
			<div className="row flex-column flex-sm-row flex-lg-column mx-0">
				<div className="container px-0 border-bg p-4 p-lg-3 col-sm-6 col-lg-12">
					<div className="d-flex flex-column align-items-center">
						<img className="sm__img" src="/images/ether.png" alt="ether" />
						<div className="d-flex justify-content-between w-100 txt__bg">
							<div className="text-uppercase font-weight-bold font-neogrey-medium">id 7</div>
							<div>
								3
								<span>
									<i className="fa fa-refresh"></i>
								</span>
							</div>
							<div className="font-neogrey-medium font-weight-bold">$ 75.07</div>
						</div>
						<button type="button" className="btn p-2 my-4 bg-yellow rounded text-white text-uppercase w-100" to="/">
							<i className="fa fa-exclamation-triangle"></i> 0.19 eth
						</button>
					</div>
					<div className="d-flex flex-column mt-4 mt-lg-5 text-center border py-2">
						<h4 className="font-neogrey-medium mt-2">GBN 3</h4>
						<button className="btn p-2 rounded text-white mg__n5">
							<span className="bg-logo p-2 rounded-left">$ 7.9</span>
							<span className="bg-yellow p-2 rounded-right">0.02 eth</span>
						</button>
					</div>
					<div className="d-flex flex-column mt-4 mt-lg-5 text-center border py-2">
						<h4 className="font-neogrey-medium mt-2">GBN 3</h4>
						<button className="btn p-2 rounded text-white mg__n5">
							<span className="bg-logo p-2 rounded-left">$ 7.9</span>
							<span className="bg-yellow p-2 rounded-right">0.02 eth</span>
						</button>
					</div>
					<div className="d-flex flex-column mt-4 mt-lg-5 text-center border py-2">
						<h4 className="font-neogrey-medium mt-2">GBN 3</h4>
						<button className="btn p-2 rounded text-white mg__n5">
							<span className="bg-logo p-2 rounded-left">$ 7.9</span>
							<span className="bg-yellow p-2 rounded-right">0.02 eth</span>
						</button>
					</div>
					<p className="text-uppercase mt-5">
						<i className="fa fa-globe"></i> <span className="font-weight-bold">usd</span> <span>eur</span> <span>rub</span>
					</p>
				</div>
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
			</div>
		</div>
	);
};

export default Details;

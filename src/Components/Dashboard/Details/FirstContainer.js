import React from "react";

const FirstContainer = () => {
	return (
		<div className="container border-bg py-2 p-sm-4 p-lg-3 col-6 col-sm-6 col-lg-12">
			<div className="d-flex flex-column align-items-center">
				<img className="sm__img" src="/images/ether.png" alt="ether" />
				<div className="d-flex justify-content-between w-100 txt__bg">
					<div className="text-uppercase font-weight-bold font-neogrey-medium">id 7</div>
					<div className="font-neogrey-medium">
						3
						<span>
							<i className="fa fa-refresh"></i>
						</span>
					</div>
					<div className="font-neogrey-medium font-weight-bold">$ 75.07</div>
				</div>
				<button type="button" className="btn p-1 mt-2 my-sm-4 bg-yellow rounded text-white text-uppercase w-100" to="/">
					<i className="fa fa-exclamation-triangle"></i> 0.19 XLM
				</button>
			</div>
			<div className="d-flex flex-column mt-4 mt-lg-5 text-center border py-2">
				<h4 className="font-neogrey-medium mt-1 mt-sm-2 ft">GBN 3</h4>
				<button className="btn p-1 p-sm-2 rounded text-white mg__n5">
					<span className="bg-logo p-1 p-sm-2 rounded-left">$ 7.9</span>
					<span className="bg-yellow p-1 p-sm-2 rounded-right">0.02 XLM</span>
				</button>
			</div>
			<div className="d-flex flex-column mt-4 mt-lg-5 text-center border py-2">
				<h4 className="font-neogrey-medium mt-1 mt-sm-2 ft">GBN 3</h4>
				<button className="btn p-1 p-sm-2 rounded text-white mg__n5">
					<span className="bg-logo p-1 p-sm-2 rounded-left">$ 7.9</span>
					<span className="bg-yellow p-1 p-sm-2 rounded-right">0.02 XLM</span>
				</button>
			</div>
			<div className="d-flex flex-column mt-4 mt-lg-5 text-center border py-2">
				<h4 className="font-neogrey-medium mt-1 mt-sm-2 ft">GBN 3</h4>
				<button className="btn p-1 p-sm-2 rounded text-white mg__n5">
					<span className="bg-logo p-1 p-sm-2 rounded-left">$ 7.9</span>
					<span className="bg-yellow p-1 p-sm-2 rounded-right">0.02 XLM</span>
				</button>
			</div>
			<p className="text-uppercase mt-5">
				<i className="fa fa-globe"></i> <span className="font-weight-bold">usd</span> <span>eur</span> <span>rub</span>
			</p>
		</div>
	);
};

export default FirstContainer;

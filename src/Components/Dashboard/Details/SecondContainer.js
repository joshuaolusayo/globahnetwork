import React from "react";
import "copy-button/bundled.min.js";

const SecondContainer = () => {

	return (
		<div className="container pr-0 pl-md-4 px-lg-0 py-lg-3 col-6 col-sm-6 col-lg-12 mt-lg-4">
			<div className="d-flex flex-column justify-content-center text-center border px-3 py-2">
				<div className="d-flex justify-content-between">
					<span className="text-muted">Affiliate link</span>
					<span>
						3 <i className="fa fa-user"></i>
					</span>
				</div>
				<button type="button" id="copy-1" className="btn p-1 bg-logo rounded-0 my-2 text-white link shadow">
					hgvbnljsdfhuigkjnldewhfgbdknslfhisbjknslfh
				</button>

				<div className="d-flex justify-content-center">
					<copy-button target-element="#copy-1">
						<button type="button" className="btn py-1 px-2 bg-pry text-white mg__n5 cop_y">
							Copy{" "}
							<span className="check">
								<i className="fa fa-check text-logo"></i>
							</span>
						</button>
					</copy-button>
				</div>
			</div>
			<div className="d-flex flex-column justify-content-center text-center border px-1 px-sm-3 pt-2 pt-sm-4 pb-2 mt-5 fgt">
				<h5>Your Stellar wallet</h5>
				<h6 className="text-muted cpy px-2" id="copy-2">
					0x8AE...jkhgvfcdnbFJH6k
				</h6>
				<div className="d-flex justify-content-center">
					<button className="btn rounded text-white mg__n5">
						<span className="bg-logo p-1 p-sm-2 rounded-left text-capitalize">to XLM</span>
						<copy-button target-element="#copy-2">
							<span className="bg-pry p-1 p-sm-2 rounded-right text-white cop_y" tabIndex="1">
								Copy &nbsp;
								<span className="check">
									<i className="fa fa-check text-logo"></i>
								</span>
							</span>
						</copy-button>
					</button>
				</div>
			</div>
			<div className="d-flex flex-column justify-content-center text-center border px-1 px-sm-3 pt-2 pt-sm-4 pb-2 mt-5 fgt">
				<h5>Your Stellar wallet</h5>
				<h6 className="text-muted px-2 cpy" id="copy-3">
					0x8AE...FJH6k
				</h6>
				<div className="d-flex justify-content-center">
					<button className="btn rounded text-white mg__n5">
						<span className="bg-logo p-1 p-sm-2 rounded-left text-capitalize">to XLM</span>
						<copy-button target-element="#copy-3">
							<span className="bg-pry p-1 p-sm-2 rounded-right text-white cop_y" tabIndex="1">
								Copy &nbsp;
								<span className="check">
									<i className="fa fa-check text-logo"></i>
								</span>
							</span>
						</copy-button>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SecondContainer;

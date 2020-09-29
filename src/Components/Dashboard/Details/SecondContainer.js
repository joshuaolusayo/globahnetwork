import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const SecondContainer = () => {
	const [inputValue] = useState("");

	return (
		<div className="container pr-0 pl-md-4 px-lg-0 py-lg-3 col-6 col-sm-6 col-lg-12 mt-lg-4">
			<div className="d-flex flex-column justify-content-center text-center border px-3 py-2">
				<div className="d-flex justify-content-between">
					<span className="text-muted">Affiliate link</span>
					<span>
						3 <i className="fa fa-user"></i>
					</span>
				</div>
				<button type="button" className="btn p-1 bg-logo rounded-0 my-2 text-white link shadow" value={inputValue}>
					hgvbnljsdfhuigkjnldewhfgbdknslfhisbjknslfh
				</button>

				<div className="d-flex justify-content-center">
					<CopyToClipboard text={inputValue}>
						<button type="button" className="btn py-1 px-2 bg-yellow text-white mg__n5">
							Copy
						</button>
					</CopyToClipboard>
				</div>
			</div>
			<div className="d-flex flex-column justify-content-center text-center border px-1 px-sm-3 pt-2 pt-sm-4 pb-2 mt-5 fgt">
				<h5>Your Stellar wallet</h5>
				<h6 className="text-muted">0x8AE...FJH6k</h6>
				<div className="d-flex justify-content-center">
					<button className="btn rounded text-white mg__n5">
						<span className="bg-logo p-1 p-sm-2 rounded-left text-capitalize">to XLM</span>
						<span className="bg-yellow p-1 p-sm-2 rounded-right">Copy</span>
					</button>
				</div>
			</div>
			<div className="d-flex flex-column justify-content-center text-center border px-1 px-sm-3 pt-2 pt-sm-4 pb-2 mt-5 fgt">
				<h5>Your Stellar wallet</h5>
				<h6 className="text-muted">0x8AE...FJH6k</h6>
				<div className="d-flex justify-content-center">
					<button className="btn rounded text-white mg__n5">
						<span className="bg-logo p-1 p-sm-2 rounded-left text-capitalize">to XLM</span>
						<span className="bg-yellow p-1 p-sm-2 rounded-right">Copy</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SecondContainer;

import React from "react";
import Info from "./Info";
import Table from "./Table";

const Main = () => {
	return (
		<div className="col-lg-9 main mt-5 mt-lg-0 border-bg page">
			<Info />
			<div class="container my-3 invite">
				<div class="row text-uppercase">
					<div class="col-md-6">
						<div>
							<span class="bg-logo draw"></span>
							<span class="ml-2">Partner invited by you</span>
						</div>
					</div>
					<div class="col-md-6">
						<div>
							<span class="bg-yellow draw"></span>
							<span class="ml-2">Partner invited by you</span>
						</div>
					</div>
				</div>
			</div>
            <Table />
		</div>
	);
};

export default Main;

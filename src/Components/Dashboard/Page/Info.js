import React from "react";

const Info = () => {
	return (
		<div className="border-bg p-3 info">
			<h3 className="font-neogrey font-weight-bold font-italic text-center my-4 mb-lg-5">Global Network</h3>
			<div className="p__abs d-flex justify-content-between">
				<span className="bg-logo rounded spn">15</span>
				<div className="d-flex flex-column justify-content-center align-items-center">
					<button className="btn bg-transparent border py-1 py-sm-2 text-logo bd text-right" type="btn">
						<i className="fa fa-arrow-up"></i>&nbsp;ID
					</button>
					<div className="d-flex justify-content-center align-items-center flex-nowrap">
						<div className="d-flex justify-content-center align-items-center">
							<div className="d-flex flex-column justify-content-between align-items-center">
								<i className="fa fa-caret-up"></i>
								<span className="text-yellow text-uppercase">History</span>
								<i className="fa fa-caret-down"></i>
							</div>
							<select className="mx-1 rounded" name="history" id="history">
								<option value="1">1</option>
								<option value="2">2</option>
							</select>
							<i className="fa fa-database text-yellow"></i>
							<i className="fa fa-refresh text-yellow px-1 px-sm-2"></i>
							<span>444</span>
						</div>

						<div>
							<button className="btn rounded bg-logo px-1 px-sm-2 pb-4 id__details">
								<span className="d-flex justify-content-between">
									<span>1</span>
									<span className="text-white">ID 7860</span>
								</span>
								<span className="text-white p__abs rounded shadow p-2 d-flex flex-column text-left">
                                    <span>$ <span>0</span></span>
                                    <span>0 <span>eth</span></span>
								</span>
							</button>
                            <div className="line">
                                
                            </div>
                            <div className="clickable">
                                <span className="hole d-inline-block rounded-circle"></span>
                            </div>
						</div>

						<div className="d-flex justify-content-center align-items-center">
							<div>
								<i className="fa fa-users text-logo"></i>
								<span className="pl-1">951</span>
							</div>
							<div className="pl-1">
								<i className="fa fa-gift text-yellow"></i>
								<span className="pl-1">2.39</span>
							</div>
							<div className="pl-1">
								<i className="fa fa-minus bg-yellow rounded-circle"></i>
							</div>
						</div>
					</div>
				</div>
				<span className="bg-logo rounded spn">2</span>
			</div>
		</div>
	);
};

export default Info;

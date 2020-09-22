import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
	return (
		<div className="col-lg-9 main border-bg">
			<div className="border-bg p-3">
				<h3 className="font-neogrey font-weight-bold font-italic text-center">Global Network</h3>
				<div className="row">
					<div className="col-3">
						<div className="">
							<Link className="d-flex justify-content-between text-white p-2 bg-logo" to="/">
								<span className="no">1</span>
								<span className="amt">0.01</span>
								<span className="text-danger">
									<i className="fa fa-refresh"></i>
								</span>
							</Link>
                            <div className="rounded-box">
                                <span className="hole rounded-circle border"></span>
                                <span className="hole rounded-circle border mx-3"></span>
                                <span className="hole rounded-circle border"></span>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;

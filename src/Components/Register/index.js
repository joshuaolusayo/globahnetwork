import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Homepage/Footer";

const Join = () => {
	const [change, setChange] = useState(true);
	return (
		<div className="join">
			<div className="wrapper">
				<header className="p-4 d-flex justify-content-center justify-content-md-between">
					<Link className="d-inline-block" to="/">
						<img className="logo" src="/images/logo.png" alt="Logo" />
					</Link>

					<Link className="p-4 d-none d-md-inline-block" to="/">
						Homepage
					</Link>
				</header>
				<section className="container my-5 my-md-auto">
					<div className="row no-gutters register">
						<div className="col-md-6 d-none d-md-block">
							<img className="register__img" src="/images/img1.jpg" alt="Join" />
						</div>
						<div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-4 text-center">
							{change ? (
								<div>
									<p className="mb-1">
										Upline:&nbsp;
										<span className="font-weight-bold">9898</span>
									</p>
									<button onClick={() => setChange(!change)} className="btn text-logo text-underline change bg-white">
										(Change)
									</button>
								</div>
							) : (
								<div>
									<p className="mb-1">Upline:</p>
									<input type="text" />
								</div>
							)}

							<p>
								The current Ethereum network load:
								<span className="text-logo font-weight-bold"> Very high</span>
							</p>
							<p className="text-uppercase text-underline">
								the recommended gas price (mining fee):
								<span className="font-weight-bold"> 323 gwei</span>
							</p>
							<button className="rounded bg-logo border-0 text-white btn w-100 py-3 signup">Sign up</button>
							<p>Check the ID of your inviter</p>
							<p>You can edit before proceed to payment</p>
							<Link className="d-inline-block text-center rounded auth text-white w-100 bg-logo py-3" to="/auth" target="_blanc">
								Authorization
							</Link>
						</div>
					</div>
				</section>
				<p className="text-center mt-2">
					Join us on telegram&nbsp;
					<Link className="text-logo" to="/">
						here
					</Link>
				</p>
				<Footer />
			</div>
		</div>
	);
};

export default Join;

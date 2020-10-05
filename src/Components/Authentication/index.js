import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const Footer = lazy(() => import("../Homepage/Footer"));

const Authenticate = () => {
	return (
		<div className="auth">
			<div className="wrapper">
				<Suspense
					fallback={
						<div className="fall__back d-flex justify-content-center align-items-center">
							<div className="spinner-grow text-pry" role="status">
								<span className="sr-only">Loading...</span>
							</div>
							<strong>Loading...</strong>
						</div>
					}
				>
					<header className="pt-4 pb-0 p-sm-4 d-flex flex-column flex-sm-row justify-content-center align-items-center justify-content-sm-between">
						<Link className="d-inline-block" to="/" target="_blank">
							<img className="logo" src="/images/logo.png" alt="Logo" />
						</Link>

						<Link className="pt-3 pb-0 p-sm-4 d-md-inline-block hme" to="/home/dashboard" target="_blank">
							Dashboard
						</Link>
					</header>
					<section className="container my-5 my-md-auto">
						<div className="row no-gutters register">
							<div className="col-md-6 d-none d-md-block">
								<img className="register__img img2" src="/images/img2.jpg" alt="Join" />
							</div>
							<div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-4 text-center">
								<div>
									<h3>The entrance to the office</h3>
									<p>For access to all the functions of your personal account, use Login:</p>
								</div>

								<hr className="bg-white w-100" />

								<form className="w-100" action="#">
									<p>To view the enter account ID or XLM purse</p>
									<input
										className="auth__input w-100 p-2 p-md-3 bg-logo border-0 text-center text-white"
										type="text"
										name="acct-id"
										placeholder="Enter id"
									/>
									<button className="btn border-0 d-inline-block text-center auth text-logo w-100 bg-white py-3 view">
										Viewing
									</button>
								</form>

								<hr className="bg-white w-100" />

								<div className="w-100">
									<p>Join if you are not yet with us</p>
									<Link
										className="d-inline-block text-center rounded auth text-white w-100 bg-logo py-3"
										to="/join"
										target="_blank"
									>
										Join
									</Link>
								</div>
							</div>
						</div>
					</section>
					<p className="text-center mt-2">
						Join us on telegram&nbsp;
						<Link className="text-logo" to="/" target="_blank">
							here
						</Link>
					</p>
					<Footer />
				</Suspense>
			</div>
		</div>
	);
};

export default Authenticate;

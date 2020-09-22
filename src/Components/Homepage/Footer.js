import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer text-center w-100 d-flex flex-column justify-content-end pb-4">
			<p className="mb-0">© Global Network 2020</p>
			<Link className="text-yellow" to="mailto://info@globah.ntwork">
				info@globah.network
			</Link>
		</footer>
	);
};

export default Footer;

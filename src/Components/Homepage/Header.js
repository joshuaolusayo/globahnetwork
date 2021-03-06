import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="p-4 d-flex justify-content-center justify-content-md-start">
			<Link className="d-inline-block" to="/" target="_blank">
				<img className="logo" src="/images/logo.png" alt="Logo" loading="lazy" />
			</Link>
		</header>
	);
};

export default Header;

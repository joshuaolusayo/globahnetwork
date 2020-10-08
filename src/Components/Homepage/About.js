import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Animation on scroll  using AOS
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);
	return (
		<section className="container-fluid d-flex flex-column justify-content-center align-items-center overflow-hidden">
			<img className="banner__img mb-5" src="/images/globe.png" alt="Running man" loading="lazy" data-aos="zoom-in" data-aos-duration="2000" />
			<h1 className="text-uppercase font-weight-bold text-center" data-aos="fade-left">The First Ever</h1>
			<h3 className=" text-uppercase text-center" data-aos="fade-right">100% decentralized</h3>
			<div className="action__btn container d-flex flex-column flex-md-row justify-content-md-center">
				<Link className="d-inline-block btn text-center text-white py-3 mr-md-3 my-3" target="_blank" to="/join">
					JOIN NOW
				</Link>
				<Link className="d-inline-block btn text-center text-white py-3 mx-md-3 my-3" target="_blank" to="/">
					PDF
				</Link>
				<Link className="d-inline-block btn text-center text-white py-3 ml-md-3 my-3" target="_blank" to="/auth">
					LOGIN
				</Link>
			</div>
			<div className="mt-5 text-center container">
				<h2 className="font-weight-bold">
					<span className="text-pry">international crowdfunding</span>
					<br />
					<span className="">the new generation platform</span>
				</h2>
				<p className="text-muted">
					Revolutionary Smart Contract* technology provides decentralized market participants with the ability to directly engage
					in personal and business transactions. The Rapido Decentralized Matrix Project's Smart Contract is publicly and
					perpetually available to view on the Stellar Blockchain.
				</p>
				<div className="row jumbotron bg-transparent">
					<div className="col-md-6 text-left items mb-3" data-aos="fade-right">
						<h4 className="text-pry">Zero Risk Factors</h4>
						<p className=" mb-0">
							On July 29, 2020, Rapido developers deployed a self-executing smart contract on the Stellar Blockchain that
							exists in perpetuity and cannot be modified by any entity.
						</p>
					</div>
					<div className="col-md-6 text-left items mb-3" data-aos="fade-left">
						<h4 className="text-pry">Zero Risk Factors</h4>
						<p className=" mb-0">
							On July 29, 2020, Rapido developers deployed a self-executing smart contract on the Stellar Blockchain that
							exists in perpetuity and cannot be modified by any entity.
						</p>
					</div>
					<div className="col-md-6 text-left items mb-3" data-aos="fade-right">
						<h4 className="text-pry">Zero Risk Factors</h4>
						<p className=" mb-0">
							On July 29, 2020, Rapido developers deployed a self-executing smart contract on the Stellar Blockchain that
							exists in perpetuity and cannot be modified by any entity.
						</p>
					</div>
					<div className="col-md-6 text-left items mb-3" data-aos="fade-left">
						<h4 className="text-pry">Zero Risk Factors</h4>
						<p className=" mb-0">
							On July 29, 2020, Rapido developers deployed a self-executing smart contract on the Stellar Blockchain that
							exists in perpetuity and cannot be modified by any entity.
						</p>
					</div>
					<div className="col-md-6 text-left items mb-3" data-aos="fade-right">
						<h4 className="text-pry">Zero Risk Factors</h4>
						<p className=" mb-0">
							On July 29, 2020, Rapido developers deployed a self-executing smart contract on the Stellar Blockchain that
							exists in perpetuity and cannot be modified by any entity.
						</p>
					</div>
					<div className="col-md-6 text-left items mb-3"  data-aos="fade-left">
						<h4 className="text-pry">Zero Risk Factors</h4>
						<p className=" mb-0">
							On July 29, 2020, Rapido developers deployed a self-executing smart contract on the Stellar Blockchain that
							exists in perpetuity and cannot be modified by any entity.
						</p>
					</div>
					<p className="text-center text-muted" data-aos="fade-up">
						*A Smart Contract is a computer-programmed code containing a stringent set of criteria that must be satisfied before
						a transaction will be approved. Reconciliation of these transactions are performed by a global collection of
						computer 'nodes' that are volunteered for service by human and corporate entity 'miners' (the computer owners) who
						are members of the Stellar Blockchain’s globally distributed network infrastructure.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;

import React from "react";

const FAQ = () => {
	return (
		<div className="container-fluid faq accordion container py-5" id="gbn__faq">
			<h2 className="font-weight-bold text-center text-uppercase">
				frequently asked questions
				<br />
				<span className="text-yellow">(faq)</span>
			</h2>
			<div className="row justify-content-center">
				<div className="d-flex flex-column justify-content-center col-sm-10 col-md-9 col-lg-10 px-4 px-md-auto">
					<div className="card bg-logo">
						<div className="card-header" id="headingOne">
							<h5 className="mb-0">
								<button
									className="btn btn-link text-white"
									type="button"
									data-toggle="collapse"
									data-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									1. Why do we collect your data?
								</button>
							</h5>
						</div>

						<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#gbn__faq">
							<div className="card-body">
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit, natus amet aspernatur ab
									mollitia molestiae. Pariatur, et nisi aliquid vel, ad nihil, illo provident temporibus dolor unde fugiat
									distinctio!
								</p>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam vel corporis facere nisi doloribus
									quisquam maiores molestiae, eius, vero odit in, voluptatum explicabo laudantium iusto rerum tempore
									praesentium aliquam. Asperiores animi distinctio earum repellat et deserunt consectetur modi consequatur
									quos.
								</p>
							</div>
						</div>
					</div>
					<div className="card bg-logo">
						<div className="card-header" id="headingTwo">
							<h5 className="mb-0">
								<button
									className="btn btn-link text-white collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									2. Why do we process your personal information?
								</button>
							</h5>
						</div>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#gbn__faq">
							<div className="card-body">
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem dolore laboriosam sapiente blanditiis
									laborum similique excepturi nobis voluptatum! Aspernatur, quam.
								</p>
								<ol type="i">
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae tempore ea ipsum
										reprehenderit ducimus?
									</li>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat beatae, dolorem culpa
										reiciendis quaerat dolorum dolore iure.
									</li>
								</ol>
							</div>
						</div>
					</div>
					<div className="card bg-logo">
						<div className="card-header" id="headingThree">
							<h5 className="mb-0">
								<button
									className="btn btn-link text-white collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									3. How will we inform you about changes in our privacy statement?
								</button>
							</h5>
						</div>
						<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#gbn__faq">
							<div className="card-body">
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima sed minus, quidem dolor nisi sequi
									inventore, deleniti necessitatibus unde laboriosam nobis voluptatum mollitia, sit modi!
								</p>
							</div>
						</div>
					</div>
					<div className="card bg-logo">
						<div className="card-header" id="headingFour">
							<h5 className="mb-0">
								<button
									className="btn btn-link text-white collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseFour"
									aria-expanded="false"
									aria-controls="collapseFour"
								>
									4. Communication and marketing
								</button>
							</h5>
						</div>
						<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#gbn__faq">
							<div className="card-body">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit minima qui quae eaque dolorum,
									reiciendis odio illo. Hic, deleniti voluptatibus quis dolore cum, atque debitis accusantium, explicabo
									quod aliquam quo temporibus laudantium odio quisquam.
								</p>
								<p> You may receive marketing communications from us if you:</p>
								<ul>
									<li>Have requested such information from us;</li>
									<li>Our Platform or Services;</li>
									<li>Provided us with your details when you entered a competition; or registered for a promotion.</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="card bg-logo">
						<div className="card-header" id="headingFive">
							<h5 className="mb-0">
								<button
									className="btn btn-link text-white collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseFive"
									aria-expanded="false"
									aria-controls="collapseFive"
								>
									5. Who do we share your data with?
								</button>
							</h5>
						</div>
						<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#gbn__faq">
							<div className="card-body">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos odio atque possimus consequuntur ea
									totam vero nobis sed voluptatibus.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ad, fuga ut iusto corporis quisquam
									repudiandae. Eaque aperiam nostrum fuga sequi magni. Magni, corrupti dolor consectetur numquam dolorum
									quidem assumenda?
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam distinctio, cumque quos ea sequi aut
									autem eius quis!
								</p>
							</div>
						</div>
					</div>
					<div className="card bg-logo">
						<div className="card-header" id="headingSix">
							<h5 className="mb-0">
								<button
									className="btn btn-link text-white collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseSix"
									aria-expanded="false"
									aria-controls="collapseSix"
								>
									6. Technical and organizational measures and processing security
								</button>
							</h5>
						</div>
						<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#gbn__faq">
							<div className="card-body">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore eaque, consectetur magnam harum
									ex aperiam repellendus necessitatibus ratione rerum?{" "}
									<a className="btn-link text-white" href="https://www.globah.network">
										globah.network
									</a>{" "}
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptatum fuga ipsam suscipit maiores
									quod aliquam labore expedita nulla similique?:
								</p>
								<ol>
									<li>help secure your data against accidental or unlawful loss, access or disclosure,</li>
									<li>identify reasonably foreseeable risks to the security of the ILEOJA.NG network, and</li>
									<li>
										minimize security risks, including through risk assessment and regular testing. In addition, we
										ensure that all payment data are encrypted and well secured.
									</li>
								</ol>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officiis neque sapiente provident,
									illum recusandae laudantium ipsa nostrum maxime voluptatem, harum iste facere? Reprehenderit qui
									deserunt molestiae ab fugiat assumenda voluptatem vero autem veniam voluptates.
								</p>
							</div>
						</div>
					</div>
					<div className="card bg-logo">
						<div className="card-header" id="headingSeven">
							<h5 className="mb-0">
								<button
									className="btn btn-link text-white collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseSeven"
									aria-expanded="false"
									aria-controls="collapseSeven"
								>
									7. Links to third-party websites
								</button>
							</h5>
						</div>
						<div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#gbn__faq">
							<div className="card-body">
								<p>
									Our Platform may contain links to third party websites or apps. If you click on one of these links,
									please note that each one will have its own privacy policy. We do not control these websites/apps and
									are not responsible for those policies. When you leave our Platform, we encourage you to read the
									privacy notice of every website you visit.
								</p>
							</div>
						</div>
					</div>
					<div className="card bg-logo">
						<div className="card-header" id="headingEight">
							<h5 className="mb-0">
								<button
									className="btn btn-link text-white collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseEight"
									aria-expanded="false"
									aria-controls="collapseEight"
								>
									8. Data Retention
								</button>
							</h5>
						</div>
						<div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#gbn__faq">
							<div className="card-body">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, odio quas velit harum, fugiat ab
									impedit labore repellat est temporibus recusandae sint veniam perspiciatis illo tenetur aperiam ipsam
									quasi accusantium neque. Quasi, culpa itaque ducimus eum eos ab error, provident quae dolorem hic modi
									unde.
								</p>
							</div>
						</div>
					</div>
					<div className="card bg-logo">
						<div className="card-header" id="headingNine">
							<h5 className="mb-0">
								<button
									className="btn btn-link text-white collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseNine"
									aria-expanded="false"
									aria-controls="collapseNine"
								>
									9. Contact Us
								</button>
							</h5>
						</div>
						<div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#gbn__faq">
							<div className="card-body">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed ex incidunt, quia magni expedita
									asperiores aliquam veritatis, ducimus nulla eum delectus deleniti pariatur nobis aliquid. Nisi ipsum
									necessitatibus asperiores.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;

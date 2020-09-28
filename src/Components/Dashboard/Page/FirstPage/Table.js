import React from "react";
import { Link } from "react-router-dom";

const Table = () => {
	return (
		<div className="border-bg p-1 p-sm-2 table">
			<div className="row">
				<div className="col">
					<div className="table-responsive">
						<table className="table table-striped text-white">
							<thead>
								<tr>
									<th>(0)</th>
									<th>Date</th>
									<th>ID</th>
									<th>Wallet</th>
									<th>ETH/USD</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<i className="fa fa-circle text-logo"></i>
									</td>
									<td>2020.09.23 08:45</td>
									<td>7860</td>
									<td>
										<div className="">
											<Link className="pr-1" to="">
												<i className="fa fa-copy"></i>
											</Link>
											<Link className="pr-1" to="">
												<i className="fa fa-external-link"></i>
											</Link>
											<span title="">0x6026...e189d3</span>
										</div>
									</td>
									<td title="ETH: 0.000 | EUR: 0">
										<span>0.01 / 3.95 $</span>
									</td>
								</tr>
								<tr>
									<td>
										<i className="fa fa-circle text-logo"></i>
									</td>
									<td>2020.09.23 08:45</td>
									<td>7860</td>
									<td>
										<div className="">
											<Link className="pr-1" to="">
												<i className="fa fa-copy"></i>
											</Link>
											<Link className="pr-1" to="">
												<i className="fa fa-external-link"></i>
											</Link>
											<span title="">0x6026...e189d3</span>
										</div>
									</td>
									<td title="ETH: 0.000 | EUR: 0">
										<span>0.01 / 3.95 $</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Table;

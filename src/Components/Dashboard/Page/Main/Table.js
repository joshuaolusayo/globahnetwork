import React from "react";

const Table = () => {
	return (
		<div className="border-bg p-1 p-sm-2 table">
			<div className="row">
				<div className="col">
					<div className="table-responsive">
						<table class="table table-striped text-white">
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
									<td scope="row"></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
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

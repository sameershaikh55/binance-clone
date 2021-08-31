import React, { useState } from "react";
import { AiOutlineAppstore, AiOutlineUnorderedList } from "react-icons/ai";
import TableRow from "./TableRow";
import TableRow1 from "./TableRow1";

const Table = () => {
	const [sort, setSort] = useState(false);

	return (
		<>
			<div className="table_container page_container2">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-lg-12 mx-auto">
								<div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center w-100">
									<div className="d-flex justify-content-between justify-content-lg-start align-items-center">
										<h3 className="fw600 mb-0 me-4">Recent Withdrawals</h3>
										<div className="rounded-pill bg-light">
											<button
												onClick={() => setSort(false)}
												className="px-3 bg-transparent py-1 border-0"
											>
												<AiOutlineAppstore
													color={`${(sort && "#cecece") || "#000"}`}
												/>
											</button>
											<button
												onClick={() => setSort(true)}
												className="px-3 bg-transparent py-1 border-0"
											>
												<AiOutlineUnorderedList
													color={`${(!sort && "#cecece") || "#000"}`}
												/>
											</button>
										</div>
									</div>
									<div className="d-flex flex-column flex-lg-row align-items-lg-center mt-3 mt-lg-0">
										<a className="color1 f14" href="">
											Why has my withdrawal not arrived?
										</a>
										<div className="d-flex align-items-center ns-0 ms-lg-4 mt-2 mt-lg-0">
											<label class="checkbox-label">
												<input type="checkbox" />
												<span class="checkbox-custom rectangular"></span>
											</label>
											<p className="mb-0 color1 ms-1">Hide error notices</p>
										</div>
									</div>
								</div>
								{(!sort && (
									<div className="row mt-4">
										{[1, 1, 1, 1].map((prev, i) => {
											return <TableRow ind={i} />;
										})}
										<span>
											<button className="bg-transparent text-secondary border-0 fw-bold mb-5 text-decoration-underline">
												View all
											</button>
										</span>
									</div>
								)) || (
									<div className="dataTable mt-4">
										<table class="table">
											<thead>
												<tr>
													<th className="fw600 py-3">Time</th>
													<th className="fw600 py-3">Asset</th>
													<th className="fw600 py-3">Amount</th>
													<th className="fw600 py-3">Address</th>
													<th className="fw600 py-3">TxID</th>
													<th className="fw600 py-3">Status</th>
													<th className="fw600 py-3"></th>
												</tr>
											</thead>
											<tbody>
												{[1, 1, 1, 1, 1, 1, 1, 1].map((prev, i) => {
													return <TableRow1 ind={i} />;
												})}
											</tbody>
										</table>

										<span>
											<button className="bg-transparent text-secondary border-0 fw-bold mb-5 text-decoration-underline">
												View all
											</button>
										</span>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Table;

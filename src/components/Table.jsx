import React, { useState } from "react";
import { AiOutlineAppstore, AiOutlineUnorderedList } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { GrLink } from "react-icons/gr";
import logo from "../assets/logo.png";

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

								<div className="row mt-4">
									{[1, 1, 1, 1].map((prev, i) => {
										return (
											<div key={i} className="col-12 w-100">
												<div className="d-flex justify-content-between align-items-center w-100">
													<div className="d-flex flex-column w-100">
														<div className="d-flex align-items-center w-100">
															<div className="mb-0">
																<img
																	className="logo_container"
																	src={logo}
																	alt=""
																/>
																<span className="ms-3 f16 fw-bold">
																	9.9995 BNB
																</span>
															</div>
															<div className="completed_green px-2 f14 ms-4">
																Completed
															</div>
														</div>

														<div className="d-flex flex-column flex-lg-row mt-2 f14 text-secondary w-100">
															<div className="d-flex">
																<p className="mb-0">2021-08-21 &nbsp; 22:56</p>
																<p className="ms-5 mb-0">
																	Network <span className="fw700">BSC</span>
																</p>
															</div>
															<div className="d-flex flex-column flex-md-row mt-md-0">
																<p className="d-flex align-items-center mb-0 md-0 ms-lg-5">
																	Address &nbsp;{" "}
																	<span className="fw700">
																		749826464879236498236498369486{" "}
																		<GrLink
																			fontSize="0.8rem"
																			className="text-secondary ms-1 pointer"
																		/>
																		<MdContentCopy
																			fontSize="0.8rem"
																			className="text-secondary ms-1 pointer"
																		/>
																	</span>
																</p>
																<p className="s-flex align-items-center ms-0 ms-md-5 mb-0">
																	TxID &nbsp;
																	<span className="fw700">
																		947984...9879847{" "}
																		<GrLink
																			fontSize="0.8rem"
																			className="text-secondary ms-1 pointer"
																		/>
																		<MdContentCopy
																			fontSize="0.8rem"
																			className="text-secondary ms-1 pointer"
																		/>
																	</span>
																</p>
															</div>
														</div>
													</div>
													<div>
														<IoIosArrowForward className="pointer p-1 bg-light h4 rounded-circle" />
													</div>
												</div>

												<hr className="my-4" />
											</div>
										);
									})}

									<span>
										<button className="bg-transparent text-secondary border-0 fw-bold mb-5 text-decoration-underline">
											View all
										</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Table;

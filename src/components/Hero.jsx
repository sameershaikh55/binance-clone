import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi";
import logo from "../assets/logo.png";
import ErrorPopup from "./ErrorPopup";
import { SuccessMessage } from "./SuccessMessage";
import Slider from "@material-ui/core/Slider";

const Hero = () => {
	let balance = 50000;
	let fee = 1200;

	const [inpBtn, setInpBtn] = useState(false);
	const [inpField, setInpField] = useState(12500);
	const [slider, setSlider] = useState(25);
	const [rAmount, setRAmount] = useState(inpField + fee);
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [select, setSelect] = useState(false);
	const [selected, setSelected] = useState({
		f1: "Convert BNB0",
		f2: "TO NLT AND FREEZE",
	});

	// ONCHANGE HANDLE START
	const handleChange = (e) => {
		let inpConvert = (e.target.value / balance) * 100;
		setInpField(e.target.value);
		setSlider(inpConvert);
		setRAmount(inpField + fee);
	};

	// SLIDER CHANGE FUNCTION
	function slideChange(event, newValue) {
		let inpConvert = (newValue / 100) * balance;
		setSlider(newValue);
		setInpField(inpConvert);
		setRAmount(inpField + fee);
	}

	const modalFunction = () => {
		if (inpField > balance) {
			setOpen(true);
		} else {
			setOpen2(true);
		}
	};

	const marks = [
		{
			value: 0,
			label: "0%",
		},
		{
			value: 25,
			label: "25%",
		},
		{
			value: 50,
			label: "50%",
		},
		{
			value: 75,
			label: "75%",
		},
		{
			value: 100,
			label: "100%",
		},
	];

	function valuetext(value) {
		return `${value}%`;
	}

	const selectData = [
		{
			f1: "Convert BNB1",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB2",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB3",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB4",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB5",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB6",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB6",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB6",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB6",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB6",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB6",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB6",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB6",
			f2: "TO NLT AND FREEZE",
		},
		{
			f1: "Convert BNB6",
			f2: "TO NLT AND FREEZE",
		},
	];

	const handleSelect = (prev) => {
		setSelected(prev);
	};

	return (
		<>
			{/* POP-UPS START */}
			<ErrorPopup open={open} setOpen={setOpen} inpField={balance} />
			<SuccessMessage open={open2} setOpen={setOpen2} inpField={inpField} />
			{/* POP-UPS END */}

			<div className="hero_container page_container2">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-lg-12 mx-auto">
								<div className="row">
									<div className="col-12 col-lg-8">
										<div className="d-flex flex-column flex-md-row align-items-start">
											<h6 className="first color1 fw600 mb-0">Select coin</h6>
											<div className="second w-100 mt-3 mt-md-0">
												<label className="color1 fw600" htmlFor="">
													Coin
												</label>
												<div className="position-relative">
													<div className="mt-1 select_container w-100 position-relative">
														<div
															style={{
																border: (select && "2px solid #f3ba2f") || "",
															}}
															onClick={() => setSelect(!select)}
															className="d-flex align-items-center select w-100 fw-bold f16 pointer"
														>
															{selected.f1}
															<span className="text-secondary f12 ms-2">
																{selected.f2}
															</span>
														</div>
														<img className="logo_img" src={logo} alt="" />
														<IoIosArrowDown className="arrow" />
													</div>
													{select && (
														<div className="DropSelect_container mt-2 px-1 py-1">
															{selectData.map((prev, e) => {
																return (
																	<div
																		onClick={() => handleSelect(prev)}
																		className="mt-1 select_container w-100 position-relative"
																	>
																		<div
																			onClick={() => setSelect(!select)}
																			className="d-flex align-items-center select w-100 fw-bold f16 pointer"
																		>
																			{prev.f1}
																			<span className="text-secondary f12 ms-2">
																				{prev.f2}
																			</span>
																		</div>
																		<img
																			className="logo_img"
																			src={logo}
																			alt=""
																		/>
																		<IoIosArrowDown className="arrow" />
																	</div>
																);
															})}
														</div>
													)}
												</div>
											</div>
										</div>

										<div className="d-flex flex-column flex-md-row mt-5">
											<h6 className="first color1 fw600">Withdraw amount</h6>
											<div className="second w-100 mt-3 mt-md-0">
												<div className="d-flex justify-content-between">
													<label className="text-secondary" htmlFor="">
														Amount
													</label>
													<label
														className="position-relative hover_tooltip text-secondary"
														htmlFor=""
													>
														<span className="fw600 text-secondary f14">
															{balance} BNB
														</span>{" "}
														<span className="color1 f14 ms-1">
															available
															<AiOutlineExclamationCircle className="ms-1" />
														</span>
														<div className="position-absolute tooltip_ text-center py-2 px-2">
															<p className="text-secondary mb-0">
																Spot amount: 3.8748346
															</p>
															<p className="text-secondary mb-1">
																Total: 4.8748346 ETH Inc
															</p>
														</div>
													</label>
												</div>
												<div className="inp_container w-100 position-relative">
													<input
														value={inpField}
														onChange={handleChange}
														type="number"
														name=""
														id=""
														className="w-100"
													/>
													<div className="inp_btns">
														<button
															onClick={() => {
																setInpBtn(true);
																setInpField(balance);
																setSlider((balance / balance) * 100);
															}}
															className={`${
																(inpBtn && "color2") || "text-secondary"
															}  bg-transparent f14 fw600 pe-2 border-0`}
														>
															MAX
														</button>
														<button
															onClick={() => setInpBtn(false)}
															className={`border-0 bg-transparent ${
																(!inpBtn && "color2") || "text-secondary"
															} f14 fw600 border-bottom-0 border-top-0 border-start-2 ps-2 border-left border-1`}
														>
															BNB
														</button>
													</div>
												</div>
												<label htmlFor="" className="text-end w-100 f14">
													<span className="fw600 text-secondary11">
														{" "}
														100 BTC/100 BtC{" "}
													</span>
													<span className="text-secondary f12 fw600 ms-2">
														{" "}
														24h remaining limit{" "}
													</span>
												</label>
												<div className="row mt-2 mt-md-0">
													<div className="slider_container col-md-6">
														<Slider
															value={slider}
															defaultValue={10}
															getAriaValueText={valuetext}
															onChange={slideChange}
															valueLabelDisplay="auto"
															step={25}
															min={0}
															max={100}
															marks={marks}
														/>
													</div>
												</div>
											</div>
										</div>

										<div className="d-flex flex-column flex-md-row mt-3">
											<h6 className="first color1 fw600">Receive amount</h6>
											<div className="d-flex flex-column flex-md-row justify-content-between w-100 align-items-md-center mt-2">
												<div>
													<h3 className="fw-bold mb-0">
														{inpField && rAmount} NLT
													</h3>
													<p className="fw600 f14 text-secondary">
														{fee} NLT processing fee included{" "}
														<AiOutlineExclamationCircle />
													</p>
												</div>
												<button
													onClick={modalFunction}
													className="freeze_btn border-0 rounded-3 fw600"
												>
													FREEZE
												</button>
											</div>
										</div>
									</div>
									<div className="col-lg-1"></div>
									<div className="col-12 col-lg-3 mt-5 mt-md-0">
										<h6 className="fw-bold mb-4">FAQ</h6>
										<ul className="list-unstyled">
											<li className="d-flex align-items-center mb-2 pointer">
												<FaRegPlayCircle
													style={{ marginRight: "0.7rem" }}
													className="color1"
												/>
												<span className="f16 text-decoration-underline color1">
													Lorem ipsum dolor sit.
												</span>
											</li>
											{[1, 1, 1, 1].map((prev, i) => {
												return (
													<li
														key={i}
														className="d-flex align-items-center mb-3 pointer"
													>
														<HiOutlineDocumentText
															fontSize="1.2rem"
															className="color1 me-2"
														/>
														<span className="f16 text-decoration-underline color1">
															Lorem ipsum, dolor sit amet
														</span>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

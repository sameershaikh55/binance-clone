import React, { useRef, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import logo from "../assets/logo.png";
import { MdContentCopy } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { GrLink } from "react-icons/gr";
import { FcCheckmark } from "react-icons/fc";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const WithdrawalDetails = ({ open, setOpen, inpField }) => {
	const [addressS, setAddressS] = useState(true);
	const [txId, settxId] = useState(true);
	const address = useRef(null);
	const id = useRef(null);

	const addressFunc = () => {
		address.current.select();
		document.execCommand("copy");
		setAddressS(false);
	};
	const idFunc = () => {
		id.current.select();
		document.execCommand("copy");
		settxId(false);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
				className="withdraw_popup"
			>
				<DialogTitle id="alert-dialog-slide-title">
					<div>
						<div className="d-flex justify-content-between w-100 align-items-center">
							<h5 className="fw-bold mb-0">Withdrawal Details</h5>
							<img
								onClick={handleClose}
								style={{
									width: "40px",
									height: "auto",
									float: "right",
									marginTop: "-0.5rem",
									marginRight: "-1rem",
								}}
								className="pointer"
								src="https://friconix.com/jpg/fi-xtluxx-times-thin.jpg"
								alt=""
							/>
						</div>
					</div>
				</DialogTitle>
				<hr className="mt-0" />
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						<div className="d-flex flex-column align-items-start">
							<li className="d-flex">
								<div className="yellow_circle fw-bold">1</div>
								<div className="ms-3">
									<h6 className="fw-bold mb-0 f16 text-dark">
										Withdrawal order submitted
									</h6>
									<p className="f12 fw-bold mt-0">2021-08-21 22:56</p>
								</div>
							</li>
							<li className="d-flex">
								<div className="yellow_circle fw-bold">2</div>
								<div className="ms-3">
									<h6 className="fw-bold mb-0 f16 text-dark">
										System Processing
									</h6>
									<p className="f12 fw-bold mt-0">2021-08-21 22:56</p>
								</div>
							</li>
							<li className="d-flex">
								<div className="yellow_circle fw-bold">3</div>
								<div className="ms-3">
									<h6 className="fw-bold mb-0 f16 text-dark">Completed</h6>
									<p className="f12 fw-bold mt-0">2021-08-21 22:56</p>
								</div>
							</li>
						</div>
						<hr className="mt-0" />

						<ul className="list-unstyled">
							<li className="d-flex justify-content-between align-items-center">
								<p className="fw-bold">Status</p>
								<p className="fw600 text-dark">
									<GoPrimitiveDot color="#26C281" /> Completed
								</p>
							</li>
							<li className="d-flex justify-content-between">
								<p className="fw-bold">Date</p>
								<p className="fw600 text-dark">2021-08-21 22:56</p>
							</li>
							<li className="d-flex justify-content-between align-items-center">
								<p className="fw-bold">Coin</p>
								<p className="fw600 text-dark">
									<img className="logo" src={logo} alt="logo" /> BNB
								</p>
							</li>
							<li className="d-flex justify-content-between">
								<p className="fw-bold">Withdraw Amount</p>
								<p className="fw600 text-dark">9.9994</p>
							</li>
							<li className="d-flex justify-content-between">
								<p className="fw-bold">Network fee</p>
								<p className="fw600 text-dark">1200</p>
							</li>
							<li className="d-flex justify-content-between">
								<p className="fw-bold">Network</p>
								<p className="fw600 text-dark">BSC</p>
							</li>
							<li className="d-flex justify-content-between">
								<p className="fw-bold">Address</p>
								<p className="fw600 text-dark">
									{" "}
									<input
										type="number"
										value="749826464879236498236498369486"
										ref={address}
										className="addrr text-dark fw-bold"
									/>
									<GrLink
										fontSize="0.8rem"
										className="text-secondary ms-1 pointer"
									/>
									{(addressS && (
										<MdContentCopy
											fontSize="0.8rem"
											className="text-secondary ms-1 pointer"
											onClick={addressFunc}
										/>
									)) || <FcCheckmark className="text-secondary ms-1 pointer" />}
								</p>
							</li>
							<li className="d-flex justify-content-between">
								<p className="fw-bold">TxID</p>
								<p className="fw600 text-dark">
									<input
										type="number"
										value="94798498798470974209"
										className="id fw-bold"
										ref={id}
									/>
									<GrLink
										fontSize="0.8rem"
										className="text-secondary ms-1 pointer"
									/>
									{(txId && (
										<MdContentCopy
											fontSize="0.8rem"
											className="text-secondary ms-1 pointer"
											onClick={idFunc}
										/>
									)) || <FcCheckmark className="text-secondary ms-1 pointer" />}
								</p>
							</li>
						</ul>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default WithdrawalDetails;

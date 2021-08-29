import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import error from "../assets/error.png";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export const SuccessMessage = ({ open, setOpen, inpField }) => {
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
				className="success_popup"
			>
				<DialogTitle id="alert-dialog-slide-title">
					<div className="d-flex justify-content-between align-items-center">
						<h6 className="f18 fw-bold mb-0">CONVERT AND FREEZE</h6>
						<div>
							<img
								onClick={handleClose}
								style={{
									width: "40px",
									height: "auto",
									float: "right",
									marginTop: "-0.2rem",
									marginRight: "-0.8rem",
								}}
								className="pointer"
								src="https://friconix.com/jpg/fi-xtluxx-times-thin.jpg"
								alt=""
							/>
						</div>
					</div>
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						<div className="bgBtn py-3">
							<ul className="list-unstyled mb-0">
								<li className="container-fluid mb-1">
									<div className="row">
										<div className="col-5 col-sm-3 f14 text-secondary">
											Label
										</div>
										<div className="col-7 col-sm-9 f14 text-secondary fw-bold">
											Freeze NLT
										</div>
									</div>
								</li>
								<li className="container-fluid mb-1">
									<div className="row">
										<div className="col-5 col-sm-3 f14 text-secondary">
											Amount
										</div>
										<div className="col-7 col-sm-9 f14 text-secondary fw-bold">
											Receive 479874987 BNB (Network fee 0.0005 BNB)
										</div>
									</div>
								</li>
								<li className="container-fluid mb-1">
									<div className="row">
										<div className="col-5 col-sm-3 f14 text-secondary">
											Garrauntted Amount:
										</div>
										<div className="col-7 col-sm-9 f14 text-secondary fw-bold">
											$580937
										</div>
									</div>
								</li>
								<li className="container-fluid mb-1">
									<div className="row">
										<div className="col-5 col-sm-3 f14 text-secondary">
											Network:
										</div>
										<div className="col-7 col-sm-9 f14 text-secondary fw-bold">
											${inpField} NLT
										</div>
									</div>
								</li>
							</ul>
						</div>

						<div>
							<ul className="mb-0 mt-3">
								<li className="text-danger fw600">
									BNB would be converted to NLT and freeze
								</li>
								<li className="fw600">Transaction cannot be cancelled</li>
							</ul>
						</div>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleClose}
						className="freeze_btn fw-bold py-2 mb-2"
					>
						Continue
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

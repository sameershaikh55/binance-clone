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

export default function ErrorPopup({ open, setOpen, inpField }) {
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
				className="error_popup"
			>
				<DialogTitle id="alert-dialog-slide-title">
					<div>
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

					<div className="container-fluid pt-4">
						<div className="row">
							<div className="col-4 mx-auto">
								<div className="d-flex justify-content-center">
									<img className="w-100 text-center" src={error} alt="" />
								</div>
							</div>
						</div>
					</div>
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						<div className="text-danger fw-bold text-center my-2">
							Error: Freeze Amount is more than amount you have Select{" "}
							{inpField} BNB or less
						</div>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleClose}
						className="w-100 bgBtn text-secondary fw600 mb-1"
					>
						Return
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

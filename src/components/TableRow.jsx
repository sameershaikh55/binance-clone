import React, { useRef, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { GrLink } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import logo from "../assets/logo.png";

const TableRow = ({ ind }) => {
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

	return (
		<div key={ind} className="col-12 w-100">
			<div className="d-flex justify-content-between align-items-center w-100">
				<div className="d-flex flex-column w-100">
					<div className="d-flex align-items-center w-100">
						<div className="mb-0">
							<img className="logo_container" src={logo} alt="" />
							<span className="ms-3 f16 fw-bold">9.9995 BNB</span>
						</div>
						<div className="completed_green px-2 f14 ms-4">Completed</div>
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
									<input
										type="number"
										value="749826464879236498236498369486"
										ref={address}
										className="addrr"
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
								</span>
							</p>
							<p className="d-flex align-items-center ms-0 ms-md-5 mb-0">
								TxID &nbsp;
								<span className="fw700">
									947984...9879847
									<input
										type="number"
										value="9479849879847"
										className="id visually-hidden"
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
};

export default TableRow;

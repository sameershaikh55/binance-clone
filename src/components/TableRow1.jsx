import React, { useRef, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { GrLink } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import WithdrawalDetails from "./WithdrawalDetails";

const TableRow1 = ({ ind }) => {
	const [addressS, setAddressS] = useState(true);
	const [open, setOpen] = useState(false);
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
		<>
			<WithdrawalDetails open={open} setOpen={setOpen} />

			<tr key={ind}>
				<td className="color1 fw600 f14 py-4">2021-08-21 22:56</td>
				<td className="color1 fw600 f14">BNB</td>
				<td className="color1 fw600 f14">9.9995</td>
				<td className="color1 fw600 f14">
					<input
						type="number"
						value="749826464879236498236498369486"
						ref={address}
						className="addrr"
					/>
					<GrLink fontSize="0.8rem" className="text-secondary ms-1 pointer" />
					{(addressS && (
						<MdContentCopy
							fontSize="0.8rem"
							className="text-secondary ms-1 pointer"
							onClick={addressFunc}
						/>
					)) || <FcCheckmark className="text-secondary ms-1 pointer" />}
				</td>
				<td className="color1 fw600 f14">
					<input type="number" value="9479849879847" className="id" ref={id} />
					<GrLink fontSize="0.8rem" className="text-secondary ms-1 pointer" />
					{(txId && (
						<MdContentCopy
							fontSize="0.8rem"
							className="text-secondary ms-1 pointer"
							onClick={idFunc}
						/>
					)) || <FcCheckmark className="text-secondary ms-1 pointer" />}
				</td>
				<td className="color1 fw600 f14">Completed</td>
				<td className="color1 fw600 f14">
					<IoIosArrowForward
						onClick={() => setOpen(true)}
						className="pointer p-1 bg-light h4 rounded-circle"
					/>
				</td>
			</tr>
		</>
	);
};

export default TableRow1;

import React from "react";

// ICONS
import { IoIosArrowBack } from "react-icons/io";
import { TiArrowRight } from "react-icons/ti";

const Header = () => {
	// STICKY FUNCTIONS START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".header_container");
		if (header !== null) {
			header.classList.toggle("sticky", window.scrollY > 1);
			header.classList.toggle("shadow-sm", window.scrollY > 1);
		}
	});
	// STICKY FUNCTIONS END

	return (
		<div className="header_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex justify-content-between align-items-center">
								<div className="d-flex justify-content-between align-items-center">
									<IoIosArrowBack fontSize="1.8rem" className="pointer" />
									<h4 className="mb-0 ms-2 fw600">Freeze NLT</h4>
								</div>
								<div>
									<button className="fw600 f14 text-dark bg-gray border-0 px-3 py-1 rounded-3">
										Withdraw Fiat <TiArrowRight fontSize="1.8rem" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

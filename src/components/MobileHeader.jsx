import React from "react";

function MobileHeader() {
	return (
		<div className="px-2 w-full h-12 flex items-center fixed top-0 shadow-md bg-white">
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</button>
		</div>
	);
}

export default MobileHeader;

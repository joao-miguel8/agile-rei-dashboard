import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "@/assets/icons/Home";
import Properties from "@/assets/icons/Properties";
import Contact from "@/assets/icons/Contact";
import Pencil from "@/assets/icons/Pencil";
import Logout from "../../assets/icons/Logout";

function MobileHeader() {
	const [toggleMobileMenu, setToggleMobileMenu] = useState(true);

	return (
		<>
			<header className="relative pt-14 z-50 bg-white">
				{/* inner header container */}
				<div className="px-4 w-full h-14 flex items-center fixed top-0 shadow-md bg-white">
					<button onClick={prevState => setToggleMobileMenu(!prevState)}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button>
				</div>
				{/* hidden navbar container */}
				<div className={`opacity-90 z-50 absolute top-0 p-4 h-screen w-5/6  bg-pink-800  ${toggleMobileMenu ? "-translate-x-full transition ease-out duration-300" : "translate-x-0 transition ease-out duration-300"}`}>
					<nav className="h-full flex flex-col">
						<div className="flex justify-between">
							<a className="text-20 text-gray-200 " href="#">
								AGILE.REI
							</a>
							{/* Close Menu Button */}
							<button onClick={prevState => setToggleMobileMenu(prevState)}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
						<ul className="h-full mt-10 flex flex-col justify-start gap-12 text-white">
							<li>
								<Link to={"/dashboard"} className="flex gap-2">
									<Home />
									<h6>Home</h6>
								</Link>
							</li>
							<li>
								<Link to={"/properties"} className="flex gap-2">
									<Properties />
									<h6>Properties</h6>
								</Link>
							</li>
							<li>
								<Link to={"/notes"} className="flex gap-2">
									<Pencil />
									<h6>Notes</h6>
								</Link>
							</li>
							<li className="">
								<Link to={"/contacts"} className="flex gap-2">
									<Contact />
									<h6>Contacts</h6>
								</Link>
							</li>
						</ul>
						<div className="text-white">
							<Logout />
						</div>
					</nav>
				</div>
			</header>
		</>
	);
}

export default MobileHeader;

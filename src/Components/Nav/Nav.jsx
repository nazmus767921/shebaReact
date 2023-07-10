/* eslint-disable react/prop-types */
//! Imports
import { useState } from "react";
import { navLinks } from "../../Constants/ConstantData";
import { Times, brandLogo, hamBurger } from "../../assets/Images/Img";
import { Btn } from "../Button/Btn";

const Nav = (props) => {
	const { setBangla, isBangla } = props;
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<nav>
				<div className="container flex justify-between items-center py-5">
					<div className="nav_logo w-[12em] flex justify-center items-center">
						<img src={brandLogo} alt="Sheba Homeo Hall" />
					</div>
					<div className="nav_menu desktopXs:hidden">
						<div
							className="ham--icon p-4 relative z-50 w-[46px]"
							onClick={() => setOpen((prev) => !prev)}>
							<img
								src={isOpen ? Times : hamBurger}
								className="object-contain"
								alt="Mobile menu"
							/>
						</div>
						<div
							className={`${
								isOpen === true ? `flex` : `hidden`
							} absolute top-0 right-0 z-40 bg-white border-l-2 rounded-md  min-w-screen min-h-screen flex-col pt-10`}>
							{navLinks.map((links) => (
								<li
									className="list-none text-xl py-9 px-8 hover:text-brand hover:ring-2 transition-all"
									key={links.id}>
									<a href={links.link}>{links.linkText}</a>
								</li>
							))}
							<div
								className="px-12 pt-12 text-xl"
								onClick={() => setBangla((prev) => !prev)}>
								<Btn name={`Change to ${isBangla ? "English" : "Bangla"}`} />
							</div>
						</div>
					</div>
					<div className="nav_menu flex-1 hidden desktopXs:flex justify-end items-center">
						<ul className="flex items-center">
							{navLinks.map((links) => (
								<li
									key={links.id}
									className="px-[1.5em]  text-md list-none hover:text-brand transition-all">
									<a href={links.link}>{links.linkText}</a>
								</li>
							))}
							<div onClick={() => setBangla((prev) => !prev)}>
								<Btn name={`Change to ${isBangla ? "English" : "Bangla"}`} />
							</div>
							{/* <Btn name={`Change to ${isBangla ? "Bangla" : "English"}`} /> */}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;

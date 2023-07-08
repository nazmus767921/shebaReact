//! Imports
import { useState } from "react";
import { navLinks } from "../../Constants/Constant";
import { Brand, hamBurger } from "../../assets/Images/Img";
import { Btn } from "../Button/Btn";

//! Nav function
const Nav = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	const handleMobileMenu = () => {
		setMobileMenu((prev) => !prev);
	};
	return (
		<>
			<nav>
				<div className="container">
					<div className="nav_wrapper flex justify-between items-center my-md">
						<div className="nav_logo flex items-center w-[17%]">
							<img src={Brand} alt="logo" />
						</div>
						<div className="nav_menu hidden md:flex ">
							<ul className="nav_link flex justify-around items-center text-md">
								{navLinks.map((link) => (
									<li className="mx-4 my-1" key={link.id}>
										<a href={link.link}>{link.name}</a>
									</li>
								))}
								<Btn name="Contact us" />
							</ul>
						</div>
						<div
							className="nav_mobile flex md:hidden"
							onClick={() => {
								handleMobileMenu();
							}}>
							<div className="ham_burger w-5 relative z-10 m-2 focus:ring-2">
								<img src={hamBurger} alt="mobile-menu" />
							</div>
							<div
								className={`${
									mobileMenu ? "flex" : "hidden"
								} nav_menu--mobile`}>
								<ul className="nav_link justify-start items-center text-xl flex flex-col w-[65%] h-screen fixed right-0 top-0 bg-slate-200">
									{navLinks.map((link) => (
										<li
											className="mx-auto my-8 border-b-2 border-black"
											key={link.id}>
											<a href={link.link}>{link.name}</a>
										</li>
									))}
									<Btn name="Contact us" />
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
export default Nav;

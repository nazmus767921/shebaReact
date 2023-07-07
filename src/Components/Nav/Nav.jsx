import { navLinks } from "../../Constants/Constant";
import { Brand } from "../../assets/Images/Img";
const Nav = () => {
	return (
		<>
			<nav>
				<div className="container">
					<div className="nav_wrapper flex justify-between items-center my-11">
						<div className="nav_logo flex items-center w-[17%]">
							<img src={Brand} alt="logo" />
						</div>
						<div className="nav_menu">
							<ul className="nav_link flex justify-around items-center xl:text-lg md:text-base">
								{navLinks.map((link) => (
									<li className="mx-4 my-1" key={link.id}>
										<a href={link.link}>{link.name}</a>
									</li>
								))}
								<button className="btn">
									Get Started
								</button>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;

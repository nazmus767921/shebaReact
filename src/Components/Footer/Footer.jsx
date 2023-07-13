import { useContext } from "react";
import { fontContext } from "../../App";
import { footer } from "../../Constants/ConstantData";
import { brandLogoMono } from "../../assets/Images/Img";

const Footer = () => {
	const [base, h, p] = useContext(fontContext);
	return (
		<section>
			<div className="container flex flex-col gap-lg">
				<div className="flex justify-between">
					<div>
						<div className="w-md">
							<img src={brandLogoMono} alt="" />
						</div>
					</div>
					<div>
						<h3 className={`${p} text-xl`}>Others</h3>
						<hr className="mb-xs mt-3" />
						<ul className={`${base} flex flex-col gap-7 text-[1.1em] tracking-wide`}>
							{footer.links.map((footer) => (
								<a key={footer.title} href={footer.link}>
									<li>{footer.title}</li>
								</a>
							))}
						</ul>
					</div>
				</div>
				<div className="mx-auto text-center">
					<small className="">{footer.copyright}</small>
				</div>
			</div>
		</section>
	);
};

export default Footer;

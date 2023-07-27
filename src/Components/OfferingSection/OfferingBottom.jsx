//! Imports
//? Images imports
import { useContext } from "react";
import { Offerings } from "../../assets/Images/Img";
import { offeringsPitch, tagLines } from "../../Constants/ConstantData";

//?context imports
import { LanguageChange, fontContext } from "../../ContextAPI";

const OfferingBottom = () => {
	//! Context API
	const handleLanguage = useContext(LanguageChange);
	const [base, h, p] = useContext(fontContext);
	return (
		<section>
			<div className="container desktopXs:flex desktopXs:items-center desktopXs:flex-row-reverse">
				<div className="w-full flex justify-center items-center">
					<div className="w-[70%] tabletSm:w-[50%] desktopXs:w-[70%] my-md">
						<img src={Offerings} alt="" />
					</div>
				</div>
				<div className="text-center desktopXs:text-left desktopXs:basis-1/2 desktopXs:shrink-0">
					<p className="tagLine">{handleLanguage(tagLines[3], tagLines[3])}</p>
					<h2 className={h}>
						{handleLanguage(offeringsPitch.bn.title, offeringsPitch.en.title)}
					</h2>
					<ul>
						{offeringsPitch.list.map((list) => (
							<li
								key={list.id}
								className={`${p} bg-[#f2fff5] my-[.75em] p-[.75em]`}
							>
								{handleLanguage(list.bn, list.en)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default OfferingBottom;

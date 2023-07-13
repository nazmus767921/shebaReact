//! Imports
//? content import
import { offeringsMedicine, tagLines } from "../../Constants/ConstantData";
//? context imports
import { useContext } from "react";
import { LanguageChange, fontContext } from "../../App";
//? images imports
import { bottle } from "../../assets/Images/Img";

const OfferingTop = () => {
	//! context api
	const handleLanguage = useContext(LanguageChange);
	const [base, h, p] = useContext(fontContext);
	return (
		<section>
			<div className="container">
				<div className="flex flex-col tabletLg:flex-row tabletLg:items-center">
					<div className="w-[55%] tabletSm:w-[30%] desktopXs:w-[25%] m-[2em_auto]">
						<img src={bottle} alt="" />
					</div>
					<div className="text-center tabletLg:basis-1/2 tabletLg:flex-grow-0 tabletLg:text-left">
						<p className={`tagLine mb-xs`}>
							{handleLanguage(tagLines[2], tagLines[2])}
						</p>
						<h2 className={`${h} mb-xs`}>
							{handleLanguage(
								offeringsMedicine.bn.title,
								offeringsMedicine.en.title
							)}
						</h2>
					</div>
				</div>
				<div className="">
					<p className={`${p} text-justify tabletLg:text-center`}>
						{handleLanguage(
							offeringsMedicine.bn.description,
							offeringsMedicine.en.description
						)}
					</p>
				</div>
			</div>
		</section>
	);
};

export default OfferingTop;

//! Imports
//? content import
import { offeringsMedicine, tagLines } from "../../Constants/ConstantData";
//? context imports
import { useContext } from "react";
import { LanguageChange } from "../../App";
//? images imports
import { bottle } from "../../assets/Images/Img";

const OfferingTop = () => {
	//! context api
	const handleLanguage = useContext(LanguageChange);
	return (
		<div className="pt-lg">
			<div className="container">
				<div className="flex flex-col tabletLg:flex-row tabletLg:items-center">
					<div className="w-[55%] tabletLg:w-[30%] desktopXs:w-[25%] m-[2em_auto]">
						<img src={bottle} alt="" />
					</div>
					<div className="text-center tabletLg:basis-1/2 tabletLg:flex-grow-0 tabletLg:text-left">
						<p className="tagLine mb-xs">
							{handleLanguage(tagLines[2], tagLines[2])}
						</p>
						<h2 className="mb-xs">
							{handleLanguage(
								offeringsMedicine.bn.title,
								offeringsMedicine.en.title
							)}
						</h2>
					</div>
				</div>
				<div className="">
					<p className="text-justify tabletLg:text-center">
						{handleLanguage(
							offeringsMedicine.bn.description,
							offeringsMedicine.en.description
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default OfferingTop;
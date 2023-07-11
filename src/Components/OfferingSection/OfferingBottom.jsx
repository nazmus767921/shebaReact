//! Imports
//? Images imports
import { useContext } from "react";
import { Offerings } from "../../assets/Images/Img";
import { offeringsPitch, tagLines } from "../../Constants/ConstantData";

//?context imports
import { LanguageChange } from "../../App";

const OfferingBottom = () => {
	//! Context API
	const handleLanguage = useContext(LanguageChange);
	return (
		<>
			<div className="w-full flex justify-center items-center">
				<div className="w-[65%] my-md">
					<img src={Offerings} alt="" />
				</div>
			</div>
			<div className="text-center">
				<p className="tagLine">{handleLanguage(tagLines[3], tagLines[3])}</p>
				<h2>
					{handleLanguage(offeringsPitch.bn.title, offeringsPitch.en.title)}
				</h2>
			</div>
		</>
	);
};

export default OfferingBottom;

//! Imports
//? content import
import { offeringsMedicine, tagLines } from "../../Constants/ConstantData";
//? context imports
import { useContext } from "react";
import { LanguageChange } from "../../App";
//? images imports
import { bottle } from "../../assets/Images/Img";

const Offering = () => {
	//! context api
	const handleLanguage = useContext(LanguageChange);
	return (
		<div className="border-t-2 pt-lg mt-lg">
			<div className="container">
				<div className="">
					<div className="w-[55%] m-[2em_auto]">
						<img src={bottle} alt="" />
					</div>
					<div className="text-center">
						<p className="tagLine mb-xsm">
							{handleLanguage(tagLines[2], tagLines[2])}
						</p>
						<h2 className="mb-xsm">
							{handleLanguage(
								offeringsMedicine.bn.title,
								offeringsMedicine.en.title
							)}
						</h2>
						<p className="text-justify ">
							{handleLanguage(
								offeringsMedicine.bn.description,
								offeringsMedicine.en.description
							)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offering;

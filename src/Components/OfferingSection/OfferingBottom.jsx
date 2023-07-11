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
			<div className="container my-md">
				<div className="w-full flex justify-center items-center">
					<div className="w-[70%] my-md">
						<img src={Offerings} alt="" />
					</div>
				</div>
				<div className="text-center">
					<p className="tagLine">{handleLanguage(tagLines[3], tagLines[3])}</p>
					<h2>
						{handleLanguage(offeringsPitch.bn.title, offeringsPitch.en.title)}
					</h2>
					<ul>
						{offeringsPitch.list.map((list) => (
							<li
								key={list.id}
								className="text-xl font-[Asar] bg-[#f2fff5] my-[.75em] p-[.75em]">
								{handleLanguage(list.bn, list.en)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default OfferingBottom;

import { useContext } from "react";
import { addressSection, tagLines } from "../../Constants/ConstantData";
import { Btn } from "../Button/Btn";
import { LanguageChange } from "../../App";

const AddressSection = () => {
	const eN = addressSection.en;
	const bN = addressSection.bn;

	//? context API
	const handleLanguage = useContext(LanguageChange);

	return (
		<section>
			<div className="container">
				<p className="tagLine">{tagLines.hero}</p>
				<h2>{handleLanguage(bN.title, eN.title)}</h2>
				<h2>
					{handleLanguage(`${bN.address.street}`, `${eN.address.street}`)}
					{","}{" "}
					<span className="text-brand">
						{handleLanguage(
							`${bN.address.city} ${bN.address.district}`,
							`${eN.address.city} ${eN.address.district}`
						)}
						<br />
						{"P:O- "}
						{handleLanguage(bN.address.postNo, eN.address.postNo)}
					</span>
				</h2>
				<Btn name={handleLanguage(eN.btn.name, eN.btn.name)} />
			</div>
		</section>
	);
};

export default AddressSection;

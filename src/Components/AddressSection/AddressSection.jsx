import { useContext } from "react";
import { addressSection, tagLines } from "../../Constants/ConstantData";
import { Btn } from "../Button/Btn";
import { LanguageChange, fontContext } from "../../ContextAPI";

const AddressSection = () => {
	const eN = addressSection.en;
	const bN = addressSection.bn;

	//? context API
	const handleLanguage = useContext(LanguageChange);
	const [base, h, p] = useContext(fontContext);

	return (
		<section id="Address">
			<div className="container flex flex-col items-center text-center gap-10 tabletSm:gap-lg border-y-[1px]  border-black border-opacity-10 py-lg">
				<p className="tagLine m-0 -mb-3">{tagLines.hero}</p>
				<div className="mb-5 tabletSm:mb-0">
					<h2 className={`${h} text-2xl mb-1`}>
						{handleLanguage(bN.title, eN.title)}
					</h2>
					<h2 className={`${h} text-[2em]`}>
						{handleLanguage(`${bN.address.street}`, `${eN.address.street}`)}
						{","}{" "}
						<span className="text-brand">
							{handleLanguage(
								`${bN.address.city}, ${bN.address.district}`,
								`${eN.address.city}, ${eN.address.district}`
							)}
						</span>
					</h2>
					<p className={`${p} font-bold mt-sm leading-5`}>
						{`" ${handleLanguage(`${bN.note}`, `${eN.note}`)} "`}
					</p>
				</div>
				<Btn
					className={`${h} text-[1.5em]`}
					name={handleLanguage(
						addressSection.btn.bn.name,
						addressSection.btn.en.name
					)}
					link={addressSection.btn.mapLink}
				/>
			</div>
		</section>
	);
};

export default AddressSection;

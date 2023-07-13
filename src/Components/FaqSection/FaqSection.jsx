import { useContext } from "react";
import { Faqs, tagLines } from "../../Constants/ConstantData";
import { LanguageChange, fontContext } from "../../App";
import FaqCard from "../FaqCard/FaqCard";

const FaqSection = () => {
	const handleLanguage = useContext(LanguageChange);
	const [base, h, p] = useContext(fontContext);
	return (
		<section>
			<div className="container">
				{/* //? text content */}
				<div className="text-center">
					<p>{tagLines[3]}</p>
					<h2 className={`${h} text-[2em]`}>
						{handleLanguage(Faqs.bn.title, Faqs.en.title)}
					</h2>
				</div>

				{/* //? divider */}
				<hr className="border-[1.8px] border-brand my-sm max-w-md mx-auto" />

				{/* //? Faq Cards */}
				<div className="faq_card flex flex-col tabletSm:flex-row gap-5 flex-wrap justify-center">
					<FaqCard />
				</div>
			</div>
		</section>
	);
};

export default FaqSection;

import { useContext } from "react";
import { CtaContent } from "../../Constants/ConstantData";
import { LanguageChange } from "../../App";
import CtaCard from "./CtaCard";
import { mailIco, phoneIco } from "../../assets/Images/Img";

const CtaSection = () => {
	const handleLanguage = useContext(LanguageChange);
	return (
		<section>
			<div className="container">
				{/* //? Text Content area */}
				<div className="text-center">
					<h2>
						{handleLanguage(CtaContent.bn.titleTop, CtaContent.en.titleTop)}
					</h2>
					<p className="text-justify">
						{handleLanguage(CtaContent.bn.pitch, CtaContent.en.pitch)}
					</p>
					<h2>
						{handleLanguage(
							CtaContent.bn.titleBottom,
							CtaContent.en.titleBottom
						)}
					</h2>
				</div>

				{/* //? contact area  */}
				<div className="flex flex-col gap-xs">
					<CtaCard
						icon={phoneIco}
						content={CtaContent.en.phone[1].num}
						type="number"
					/>
					<CtaCard icon={mailIco} content={CtaContent.en.email} type="mail" />
				</div>
			</div>
		</section>
	);
};

export default CtaSection;

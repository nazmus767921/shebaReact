import { useContext } from "react";
import { CtaContent } from "../../Constants/ConstantData";
import { LanguageChange } from "../../App";
import CtaCard from "./CtaCard";
import { mailIco, phoneIco } from "../../assets/Images/Img";

const CtaSection = () => {
	const handleLanguage = useContext(LanguageChange);
	return (
		<section>
			<div className="container flex flex-col gap-lg items-center">
				{/* //? Text Content area */}
				<div className="text-center flex flex-col gap-xs">
					<h2>
						{handleLanguage(CtaContent.bn.titleTop, CtaContent.en.titleTop)}
					</h2>
					<p className="text-justify tabletLg:text-center desktopMd:w-[70%] desktopXl:w-1/2 desktopSm:mx-auto underline underline-offset-[10px]">
						{handleLanguage(CtaContent.bn.pitch, CtaContent.en.pitch)}
					</p>
					<h2 className="text-brand">
						{handleLanguage(
							CtaContent.bn.titleBottom,
							CtaContent.en.titleBottom
						)}
					</h2>
				</div>

				{/* //? contact area  */}
				<div className="flex flex-col gap-md tabletSm:items-center tabletLg:flex-row tabletLg:justify-center w-full">
					<div className="flex flex-col gap-xs tabletSm:items-center">
						<h3 className="text-brand mx-auto">Call us</h3>
						<CtaCard
							icon={phoneIco}
							content={CtaContent.en.phone[1].num}
							type="number"
						/>
					</div>
					<div className="flex flex-col gap-xs tabletSm:items-center">
						<h3 className="text-brand mx-auto">Mail at</h3>
						<CtaCard icon={mailIco} content={CtaContent.en.email} type="mail" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;

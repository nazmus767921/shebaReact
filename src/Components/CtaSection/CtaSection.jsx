import { useContext, useState } from "react";
import { CtaContent } from "../../Constants/ConstantData";
import { LanguageChange, fontContext } from "../../ContextAPI";
import CtaCard from "./CtaCard";
import { mailIco, phoneIco } from "../../assets/Images/Img";
import { CtaTelPopUp } from "./CtaTelPopUp/CtaTelPopUp";
import { CtaTelPopUpContext } from "../../ContextAPI";

const CtaSection = () => {
	//? popup related
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow((prev) => !prev);
	};

	//? Language changing contexts
	const handleLanguage = useContext(LanguageChange);
	const [, h, p] = useContext(fontContext);
	return (
		<section id="ctaSection" className="pt-xl tabletLg:pt-xl">
			<div className="container flex flex-col gap-lg items-center">
				{/* //? Text Content area */}
				<div className="text-center flex flex-col gap-xs">
					<h2 className={`${h}`}>
						{handleLanguage(CtaContent.bn.titleTop, CtaContent.en.titleTop)}
					</h2>
					<p
						className={`${p} text-justify tabletLg:text-center desktopMd:w-[70%] desktopXl:w-1/2 desktopSm:mx-auto underline underline-offset-[10px]`}
					>
						{handleLanguage(CtaContent.bn.pitch, CtaContent.en.pitch)}
					</p>
					<h2 className={`${h} text-brand`}>
						{handleLanguage(
							CtaContent.bn.titleBottom,
							CtaContent.en.titleBottom
						)}
					</h2>
				</div>

				{/* //? contact area  */}
				<div className="flex flex-col gap-md tabletSm:items-center tabletLg:flex-row tabletLg:justify-center w-full">
					<div className="flex flex-col gap-xs tabletSm:items-center">
						<h3 className={`${h} text-brand mx-auto`}>
							{handleLanguage("কল দিন", "Call us")}
						</h3>
						<div className="relative">
							<CtaTelPopUpContext.Provider value={handleShow}>
								<CtaCard
									icon={phoneIco}
									content={CtaContent.en.phone[1].num}
									type="number"
								/>
								<div className="absolute top-0 right-0 left-0">
									{show && <CtaTelPopUp />}
								</div>
							</CtaTelPopUpContext.Provider>
						</div>
					</div>
					<div className="flex flex-col gap-xs tabletSm:items-center">
						<h3 className={`${h} text-brand mx-auto`}>
							{handleLanguage("মেইল করুন", "Mail at")}
						</h3>
						<CtaCard icon={mailIco} content={CtaContent.en.email} type="mail" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;

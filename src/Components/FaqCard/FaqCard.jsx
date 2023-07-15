/* eslint-disable react/prop-types */
import { useContext } from "react";
import { LanguageChange, fontContext } from "../../App";
import { Faqs } from "../../Constants/ConstantData";

const FaqCardComponet = ({ id, question, answer }) => {
	//? contexts
	const [base, h, p] = useContext(fontContext);

	return (
		<div
			key={id}
			className="group border-2 rounded-md text-center p-xs flex flex-col justify-center items-center min-h-[20em] flex-initial desktopXs:basis-[30%] tabletSm:basis-[45%]">
			<h2 className={`${h} text-[1.8em]`}>{question}</h2>
			<div className="overflow-hidden desktopXs:max-h-0 desktopXs:opacity-0 desktopXs:group-hover:max-h-[200em] desktopXs:group-hover:opacity-100 transition-all ease-out-expo duration-500">
				<p className={`${p} mt-xs`}>{answer}</p>
			</div>
		</div>
	);
};

const FaqCard = () => {
	const handleLanguage = useContext(LanguageChange);
	const faqContent = handleLanguage(Faqs.bn.faq, Faqs.en.faq);
	return faqContent.map((faqData) => {
		const { question, answer, id } = faqData;
		return (
			<FaqCardComponet key={id} id={id} question={question} answer={answer} />
		);
	});
};

export default FaqCard;

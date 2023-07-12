/* eslint-disable react/prop-types */
import { Faqs } from "../../Constants/ConstantData";

const FaqCardComponet = (props) => {
	const { key, question, answer } = props;
	return (
		<div
			key={key}
			className="group border-2 rounded-md text-center p-xs flex flex-col justify-center items-center min-h-[20em] flex-initial desktopXs:basis-[30%] tabletSm:basis-[45%]">
			<h2 className="text-xl">{question}</h2>
			<div className="overflow-hidden desktopXs:max-h-0 desktopXs:opacity-0 desktopXs:group-hover:max-h-[200em] desktopXs:group-hover:opacity-100 transition-all ease-out-expo duration-500">
				<p className="mt-xs">{answer}</p>
			</div>
		</div>
	);
};

const faqContent = Faqs.en.faq;
const FaqCard = () => {
	return faqContent.map((faqData) => {
		const { question, answer, id } = faqData;
		return <FaqCardComponet key={id} question={question} answer={answer} />;
	});
};

export default FaqCard;

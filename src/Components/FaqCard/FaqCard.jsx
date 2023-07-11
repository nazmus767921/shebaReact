/* eslint-disable react/prop-types */
import { Faqs } from "../../Constants/ConstantData";

const FaqCardComponet = (props) => {
	const { key, question, answer } = props;
	return (
		<div
			key={key}
			className="group border-2 rounded-md text-center p-xs flex flex-col justify-center items-center min-h-[20em]">
			<h2 className="text-[2em]">{question}</h2>
			<div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[200em] group-hover:opacity-100 transition-all">
				<p className="mt-xs">{answer}</p>
			</div>
		</div>
	);
};

const faqContent = Faqs.en.faq;
const FaqCard = faqContent.map((faqData) => {
	const { question, answer, id } = faqData;
	return <FaqCardComponet key={id} question={question} answer={answer} />;
});

export default FaqCard;

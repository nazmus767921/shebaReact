/* eslint-disable react/prop-types */
import { heroSection, tagLines } from "../../Constants/Constant";
import { heroLeaf } from "../../assets/Images/Img";
import { Btn } from "../Button/Btn";

const Hero = (props) => {
	const { isBangla } = props;

	const handleTranslate = (bangla, english) => {
		return isBangla ? bangla : english;
	};
	return (
		<>
			<div className="hero_section">
				<div className="container">
					<div className="hero_content text-center my-xl">
						<div className="hero_decoration absolute top-[15%] left-0 w-[30%]">
							<img
								src={heroLeaf}
								alt="best treatment method to get well naturally"
							/>
						</div>
						<p className="tagLine">{tagLines.hero}</p>
						<h1 className="mb-4">
							{handleTranslate(
								heroSection.heroContent.bn.title.seg3,
								heroSection.heroContent.en.title.seg1
							)}
							<br />
							{handleTranslate(
								heroSection.heroContent.bn.title.seg1,
								heroSection.heroContent.en.title.seg2
							)}
							<br />
							<span className="text-brand">
								{handleTranslate(
									heroSection.heroContent.bn.title.seg2,
									heroSection.heroContent.en.title.seg3
								)}
							</span>
						</h1>
						<p>
							{handleTranslate(
								heroSection.heroContent.bn.description,
								heroSection.heroContent.en.description
							)}
						</p>
						<Btn className="text-xl my-8" name="Contact" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

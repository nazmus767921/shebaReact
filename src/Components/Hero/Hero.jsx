/* eslint-disable react/prop-types */
//! Imports
import { heroSection, tagLines } from "../../Constants/ConstantData";
import { heroLeaf } from "../../assets/Images/Img";
import { Btn } from "../Button/Btn";

//! Default Function
const Hero = (props) => {
	//! Props destructuring
	const { handleLanguage } = props;

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
							{handleLanguage(
								heroSection.heroContent.bn.title,
								heroSection.heroContent.en.title
							)}
						</h1>
						<p>
							{handleLanguage(
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

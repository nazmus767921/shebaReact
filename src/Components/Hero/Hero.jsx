import { heroSection, tagLines } from "../../Constants/Constant";

const Hero = () => {
	return (
		<>
			<div className="hero_wrapper max-h-[80vh] flex items-center bg-[url('./assets/Images/hero_image-jpeg2x.jpeg')] bg-no-repeat bg-right bg-contain">
				<div className="container">
					<div className="hero_content--wrapper flex">
						<div className="hero_content flex flex-col basis-[65%]">
							<h6 className="slogans">{tagLines.hero}</h6>
							<h1 className="mt-1 mb-3">
								{heroSection.heroContent.title.seg1}
								<br />
								{heroSection.heroContent.title.seg2}
								<br />
								<span className="text-green-700">
									{heroSection.heroContent.title.seg3}
								</span>
							</h1>
							<p>{heroSection.heroContent.description}</p>
							<button className="btn w-fit text-2xl my-12">Get Started</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

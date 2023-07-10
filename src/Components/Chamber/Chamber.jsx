/* eslint-disable react/prop-types */
//! Imports
//? content imports
import { chamberInfo } from "../../Constants/Constant";

//? Images Imports
import {
	chamberBottom,
	chamberMiddle,
	chamberTop,
} from "../../assets/Images/Img";

//? Function Imports
import { ReadMore } from "../Readmore/Readmore";

//! Default Function
const Chamber = (props) => {
	const { handleLanguage } = props;
	return (
		<>
			<div className="section">
				<div className="container w-full flex flex-col desktopXs:flex-row desktopXs:items-center">
					{/* IMAGE */}
					<div className="w-full desktopXs:mx-md desktopXs:flex-shrink desktopXs:-ml-[100px]">
						<div className="chamber_img_wrapper relative w-[43%] tabletLg: mx-auto my-2xl">
							<div className="rounded-bl-[10vw] desktopXs:rounded-bl-[6vw] overflow-hidden">
								<img src={chamberMiddle} alt="Sheba Homeo Hall" />
							</div>
							<div className="absolute w-[68.43%] rounded-[100vw] overflow-hidden -top-[38%] -left-[40%]">
								<img src={chamberTop} alt="Sheba Homeo Hall" />
							</div>
							<div className="absolute w-[88.97%] rounded-br-[10vw] desktopXs:rounded-br-[6vw] overflow-hidden -bottom-[39%] -right-[59%]">
								<img src={chamberBottom} alt="Sheba Homeo Hall" />
							</div>
						</div>
					</div>

					{/* Text Content */}
					<div className="chamber_content flex flex-col desktopSm:basis-1/2 flex-shrink-0">
						<p className="tagLine tracking-[.75em] text-brand text-sm flex w-fit mx-auto">
							{handleLanguage(chamberInfo.bn.tag, chamberInfo.en.tag)}
						</p>
						<h2>
							{handleLanguage(chamberInfo.bn.title, chamberInfo.en.title)}
						</h2>
						<div className="horizontal_line w-1/3 my-xsm"></div>
						<ReadMore
							content={handleLanguage(
								chamberInfo.bn.description,
								chamberInfo.en.description
							)}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Chamber;

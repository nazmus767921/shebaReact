/* eslint-disable react/prop-types */
import { chamberInfo } from "../../Constants/Constant";
import {
	chamberBottom,
	chamberMiddle,
	chamberTop,
} from "../../assets/Images/Img";
import { Btn } from "../Button/Btn";

const Chamber = (props) => {
	const { handleLanguage } = props;
	return (
		<>
			<div className="section">
				<div className="container">
					{/* IMAGE */}
					<div className="chamber_img_wrapper relative w-fit mx-auto my-2xl">
						<div className="w-[34.2144vw] rounded-bl-[10vw] overflow-hidden">
							<img src={chamberMiddle} alt="Sheba Homeo Hall" />
						</div>
						<div className="absolute w-[68.43%] rounded-[100vw] overflow-hidden -top-[38%] -left-[40]">
							<img src={chamberTop} alt="Sheba Homeo Hall" />
						</div>
						<div className="absolute w-[88.97%] rounded-br-[10vw] overflow-hidden -bottom-[39%] -right-[59%]">
							<img src={chamberBottom} alt="Sheba Homeo Hall" />
						</div>
					</div>

					{/* Text Content */}
					<div className="chamber_content flex-col">
						<p className="tagLine tracking-[.75em] text-brand text-sm flex w-fit mx-auto">
							{handleLanguage(chamberInfo.bn.tag, chamberInfo.en.tag)}
						</p>
						<h2>
							{handleLanguage(chamberInfo.bn.title, chamberInfo.en.title)}
						</h2>
						<div className="horizontal_line w-1/3 my-xsm"></div>
						<p>
							{handleLanguage(
								chamberInfo.bn.description,
								chamberInfo.en.description
							)}{" "}
							{/*! need richtext field */}
						</p>

						<div className="w-full flex justify-center">
							<Btn
								className="text-md px-8 my-10"
								name="Get Chamber Location on Map"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Chamber;

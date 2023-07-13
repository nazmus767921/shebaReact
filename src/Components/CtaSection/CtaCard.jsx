/* eslint-disable react/prop-types */

import { useContext } from "react";
import { fontContext } from "../../App";

const CtaCard = (props) => {
	const [base, h, p] = useContext(fontContext);
	const { icon, content, type } = props;
	return (
		<div
			className={`cta_card ${
				type === "number"
					? "flex-row py-4"
					: "flex-col desktopXs:flex-row text-center gap-xs py-xs"
			} flex gap-7 justify-between items-center px-xs bg-white shadow-[2px_-2px_30px_0_rgba(145,145,145,.15)] rounded-md transition-all`}>
			{/* //? Text area */}
			<div className="">
				<h2
					className={`${
						type === "number"
							? "flex-row"
							: "flex-col-reverse desktopXs:flex-row-reverse"
					} flex flex-wrap text-[1.7em]`}>
					<span className="text-brand">
						{type === "number" ? "+88" : " @gmail.com"}
					</span>
					{content}
				</h2>
			</div>

			{/* //? Icon area */}
			<div className="cta_card--btn">
				<a
					href={`${type === "number" ? "tel:" : "mailto:"}${content}${
						type === "number" ? "" : "@gmail.com"
					}`}>
					<div className="w-[3.5em] hover:scale-125 transition-transform ease-out-expo duration-500">
						<img src={icon} alt="sheba-homeo-hall-call" />
					</div>
				</a>
			</div>
		</div>
	);
};

export default CtaCard;

//!!! ----Calling syntax----
{
	//! <CtaCard icon='icon url or location here' content='Phone No / Mail address here' type='number/ mail'/> */
}

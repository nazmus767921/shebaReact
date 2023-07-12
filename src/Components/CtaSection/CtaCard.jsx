/* eslint-disable react/prop-types */

const CtaCard = (props) => {
	const { icon, content, type } = props;
	return (
		<div
			className={`${
				type === "number"
					? "flex-row py-4"
					: "flex-col text-center gap-xs py-xs"
			} flex justify-between items-center px-xs bg-white shadow-xl rounded-md border-[0.5px] border-brand`}>
			<div className="">
				<h2
					className={`${
						type === "number" ? "flex-row" : "flex-col-reverse"
					} flex flex-wrap text-[1.7em]`}>
					<span className="text-brand">
						{type === "number" ? "+88" : " @gmail.com"}
					</span>
					{content}
				</h2>
			</div>
			<div className="">
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

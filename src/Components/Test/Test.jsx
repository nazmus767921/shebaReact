import { useState } from "react";
import { treatmentCenterInfo } from "../../Constants/Constant";

const Test = () => {
	const [Lang, setLang] = useState(false);

	return (
		//! Title of the page
		<div className="flex flex-col gap-10 justify-center h-screen items-center">
			<h2 className="text-3xl font-['FreeSans_Bold']">
				<span className="text-brand">Causion:</span> Testing is on!
			</h2>

			{/* //! content Language change function test */}
			<div className={Lang ? "bn" : "en"}>
				<h2 className="text-2xl capitalize font-bold text-blue-700">
					{Lang === false
						? `${treatmentCenterInfo.en.title}`
						: `${treatmentCenterInfo.bn.title}`}
				</h2>
			</div>

			{/* //? Set the button content according to the state */}
			<button
				onClick={() => setLang((prev) => !prev)}
				className="px-7 py-2 border-2 rounded-md">
				{`Change to ${Lang === false ? "Bangla" : "English"}`}
			</button>
		</div>
	);
};

export default Test;

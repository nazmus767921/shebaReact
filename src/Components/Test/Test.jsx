import { useState } from "react";
import { chamberInfo } from "../../Constants/Constant";
import { ReadMore } from "../Readmore/Readmore";

const Test = () => {
	const [Lang, setLang] = useState(false);

	return (
		//! Title of the page
		<div className="flex flex-col gap-10 justify-center h-screen items-center">
			<h2 className="text-2xl font-['FreeSans_Bold'] text-center">
				<span className="text-brand">Causion:</span> Testing{" "}
				<br className="flex tabetSm:hidden" />
				is on!
			</h2>

			{/* //! content Language change function test */}
			{/* <div className={Lang ? "bn" : "en"}>
				<h2 className="text-2xl capitalize font-bold text-blue-700">
					{Lang === false
						? `${chamberInfo.en.title}`
						: `${chamberInfo.bn.title}`}
				</h2>
			</div> */}

			{/* //? Set the button content according to the state */}
			{/* <button
				onClick={() => setLang((prev) => !prev)}
				className="px-7 py-2 border-2 rounded-md">
				{`Change to ${Lang === false ? "Bangla" : "English"}`}
			</button> */}

			{/* //* readMore function */}

			<div className="px-10 line-clamp-none">
				<ReadMore content={chamberInfo.en.description} />
			</div>
		</div>
	);
};

export default Test;

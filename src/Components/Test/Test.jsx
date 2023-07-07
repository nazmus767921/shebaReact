import { useState } from "react";
import { article } from "./Content";

const Test = () => {
	const [Lang, setLang] = useState(false);
	return (
		//! Title of the page
		<div className="flex flex-col gap-10 justify-center h-screen items-center">
			<h2 className="text-6xl font-['FreeSans_Bold']">
				<span className="text-red-500">Causion:</span> Testing is on!
			</h2>

			{/* //! content Language change function test */}
			<h2 className="text-2xl capitalize font-bold text-blue-700">
				{Lang === false ? `${article[0].en}` : `${article[0].bn}`}
			</h2>

			{/* //? Set the button content according to the state */}
			<button
				onClick={() => setLang((prev) => !prev)}
				className="px-7 py-2 border-2 rounded-md">
				{Lang === false ? "Change to Bangla" : "Change to English"}
			</button>
		</div>
	);
};

export default Test;

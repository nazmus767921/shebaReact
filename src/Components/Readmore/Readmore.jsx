/* eslint-disable react/prop-types */
//! USING ONLY REACT

//! Imports
import { useState } from "react";

//* Readmore function
export const ReadMore = (props) => {
	//* props Destructuring
	const { content } = props;

	//* Default function
	const [Read, setRead] = useState(true);
	const handleReadmore = () => {
		setRead((prev) => !prev);
	};
	return (
		<>
			<p className={Read && content.length > 200 ? "line-clamp-4" : ""}>
				{content}
			</p>
			<button
				onClick={() => handleReadmore()}
				className={
					content.length > 200
						? "flex btn py-1 px-2 text-xl my-6 rounded-md"
						: "hidden"
				}>
				{Read ? "Read more" : "Read less"}
			</button>
		</>
	);
};

/* eslint-disable react/prop-types */
//! USING ONLY REACT

//! Imports
import { useContext, useState } from "react";
import { LanguageChange } from "../../ContextAPI";

//* Readmore function
export const ReadMore = (props) => {
	//* props Destructuring
	const { content, className } = props;
	const handleLanguage = useContext(LanguageChange);

	//* Default function
	const [Read, setRead] = useState(true);
	const handleReadmore = () => {
		setRead((prev) => !prev);
	};
	return (
		<>
			<p
				className={`${
					Read && content.length > 200 ? "line-clamp-4" : ""
				} ${className}`}>
				{content}
			</p>
			<button
				onClick={() => handleReadmore()}
				className={
					content.length > 200
						? "flex btn py-1 px-2 text-xl my-6 rounded-md hover:ring-2 hover:ring-black"
						: "hidden"
				}>
				{Read
					? `${handleLanguage("আরও পড়ুন", "Read more")}`
					: `${handleLanguage("বন্ধ করুন", "Read less")}`}
			</button>
		</>
	);
};

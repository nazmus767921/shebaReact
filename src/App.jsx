//! Imports
import { useState } from "react";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import Chamber from "./Components/Chamber/Chamber";
import Test from "./Components/Test/Test";

//! default function
function App() {
	//! WebPage content's Language change
	const [isBangla, setBangla] = useState(false);
	//! This helps to define bangla and english content in jsx And keeps the code clean.
	const handleLanguage = (bangla, english) => {
		return isBangla ? bangla : english;
	};
	//! Readmore function
	const [Read, setRead] = useState("line-clamp-4");
	const handleReadmore = () => {
		if (Read === "line-clamp-4") {
			setRead("line-clamp-0");
		} else if (Read === "line-clamp-0") {
			setRead("line-clamp-4");
		}
	};
	return (
		<>
			{/* <Nav setBangla={setBangla} isBangla={isBangla} />
			<Hero handleLanguage={handleLanguage} />
			<Chamber
				Read={Read}
				handleReadmore={handleReadmore}
				handleLanguage={handleLanguage} 
			/>*/}{" "}
			{/* for now its using props to pass isBangla to the component,
			but rewrite the code and use contextAPI instead */}
			<Test />
		</>
	);
}

export default App;

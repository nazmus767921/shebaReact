//! Imports
import { useState } from "react";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import Chamber from "./Components/Chamber/Chamber";
// import Test from "./Components/Test/Test";

//! default function
function App() {
	//! WebPage content's Language change
	const [isBangla, setBangla] = useState(false);
	//! This helps to define bangla and english content in jsx And keeps the code clean.
	const handleLanguage = (bangla, english) => {
		return isBangla ? bangla : english;
	};
	return (
		<>
			<Nav setBangla={setBangla} isBangla={isBangla} />
			<Hero handleLanguage={handleLanguage} />
			<Chamber handleLanguage={handleLanguage} />{" "}
			{/* for now its using props to pass isBangla to the component,
			but rewrite the code and use contextAPI instead */}
			{/* <Test /> */}
		</>
	);
}

export default App;

//! Imports
import { createContext, useState } from "react";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import Chamber from "./Components/Chamber/Chamber";
import Offering from "./Components/OfferingSection/Offering";
// import Test from "./Components/Test/Test";

//! context API
export const LanguageChange = createContext();

//! default function
function App() {
	//! WebPage content's Language change
	const [isBangla, setBangla] = useState(false);
	//! This helps to define bangla and english content in jsx And keeps the code clean.
	const handleLanguage = (bangla, english) => {
		return isBangla ? bangla : english;
	};
	return (
		<LanguageChange.Provider value={handleLanguage}>
			<Nav setBangla={setBangla} isBangla={isBangla} />
			<Hero />
			<Chamber />{" "}
			{/* for now its using props to pass isBangla to the component,
			but rewrite the code and use contextAPI instead */}
			{/* <Test /> */}
			<Offering />
		</LanguageChange.Provider>
	);
}

export default App;

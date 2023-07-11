//! Imports
import { createContext, useState } from "react";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import Chamber from "./Components/Chamber/Chamber";
import OfferingSection from "./Components/OfferingSection/OfferingSection";
import DoctorInfo from "./Components/DoctorInfo/DoctorInfo";
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
			<div className="pb-xl desktopXs:pb-[10em]">
				<Nav setBangla={setBangla} isBangla={isBangla} />
			</div>
			<Hero />
			<Chamber />
			{/* <Test /> */}
			<OfferingSection />
			<DoctorInfo />
		</LanguageChange.Provider>
	);
}

export default App;

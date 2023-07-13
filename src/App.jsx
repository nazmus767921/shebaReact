//! Imports
import { createContext, useState } from "react";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import Chamber from "./Components/Chamber/Chamber";
import OfferingSection from "./Components/OfferingSection/OfferingSection";
import DoctorInfo from "./Components/DoctorInfo/DoctorInfo";
import FaqSection from "./Components/FaqSection/FaqSection";
import CtaSection from "./Components/CtaSection/CtaSection";
import AddressSection from "./Components/AddressSection/AddressSection";
import Footer from "./Components/Footer/Footer";

//! context API
export const LanguageChange = createContext();
export const fontContext = createContext();

//! default function
function App() {
	//! font setting
	//? change the font setting here
	const changeFont = {
		en: {
			base: "font-['FreeSans_Medium']",
			h: "font-['FreeSans_Bold']",
			p: "font-['Asar'] text-xl",
		},
		bn: {
			base: "font-['sutonnyomj']",
			h: "font-['sutonnyomj']",
			p: "font-['sutonnyomj'] text-[1.7em]",
		},
	};

	//? font setting function here
	const [Font, setFont] = useState([changeFont.en]);
	const base = Font.map((font) => font.base);
	const h = Font.map((font) => font.h);
	const p = Font.map((font) => font.p);

	const handleFont = () => {
		isBangla ? setFont([changeFont.en]) : setFont([changeFont.bn]);
	};

	//! WebPage content's Language change
	const [isBangla, setBangla] = useState(false);
	//! This helps to define bangla and english content in jsx And keeps the code clean.
	const handleLanguage = (bangla, english) => {
		return isBangla ? bangla : english;
	};

	return (
		<LanguageChange.Provider value={handleLanguage}>
			<div className={base}>
				<div className="pb-xl desktopXs:pb-[10em]">
					<Nav
						setBangla={setBangla}
						isBangla={isBangla}
						setFont={setFont}
						handleFont={handleFont}
					/>
				</div>
				<fontContext.Provider value={[base, h, p]}>
					<Hero />
					<Chamber />
					<OfferingSection />
					<DoctorInfo />
					<FaqSection />
					<CtaSection />
					<AddressSection />
					<Footer />
				</fontContext.Provider>
			</div>
		</LanguageChange.Provider>
	);
}

export default App;

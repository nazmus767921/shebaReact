//! Imports
import { useState } from "react";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import Test from "./Components/Test/test";

//! default function
function App() {
	const [isBangla, setBangla] = useState(false);
	return (
		<>
			<Nav setBangla={setBangla} />
			<Hero isBangla={isBangla} />{" "}
			{/* for now its using props to pass isBangla to the component,
			but rewrite the code and use contextAPI instead */}
			{/* <Test /> */}
		</>
	);
}

export default App;

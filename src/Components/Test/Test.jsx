const Test = () => {
	return (
		//! Testing Tailwind breakpoints
		<div className="flex flex-col gap-10 justify-center h-screen items-center">
			<h2 className="text-6xl font-['FreeSans_Bold']">
				<span className="text-red-500">Causion:</span> Testing is on!
			</h2>

			<div className="box w-10 h-10 bg-blue-400 hidden sm:flex"></div>
		</div>
	);
};

export default Test;

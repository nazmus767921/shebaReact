const Card = ({ children, className }) => {
	return (
		<div className={`rounded-lg bg-white drop-shadow-xl p-8 flex justify-center items-start ${className}`}>
			{children}
		</div>
	);
};

export default Card;

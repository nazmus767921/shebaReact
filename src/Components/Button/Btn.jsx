/* eslint-disable react/prop-types */
export const Btn = ({ className, name, link }) => {
	return (
		<a href={link}>
			<button className={`btn ${className}`}>{name}</button>
		</a>
	);
};

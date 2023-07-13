/* eslint-disable react/prop-types */
export const Btn = (props) => {
	const { className, name, link } = props;
	return (
		<a href={link}>
			<button className={`btn ${className}`}>{name}</button>
		</a>
	);
};

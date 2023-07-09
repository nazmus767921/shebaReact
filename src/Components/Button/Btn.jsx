/* eslint-disable react/prop-types */
export const Btn = (props) => {
	const { className, name } = props;
	return <button className={`btn ${className}`}>{name}</button>;
};

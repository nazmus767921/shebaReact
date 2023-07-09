import { chamberInfo, tagLines } from "../../Constants/Constant";

const Chamber = (props) => {
	const { handleLanguage } = props;
	return (
		<>
			<div className="section">
				<div className="chamber_img_wrapper"></div>
				<div className="chamber_content">
					<p>{handleLanguage(chamberInfo.bn.tag, chamberInfo.en.tag)}</p>
					<h2>{handleLanguage(chamberInfo.bn.title, chamberInfo.en.title)}</h2>
					<p></p>
				</div>
			</div>
		</>
	);
};

export default Chamber;

import { useContext } from "react";
import { Times } from "../../../assets/Images/Img";
import Card from "../Card";
import { CtaTelPopUpContext } from "../../../ContextAPI";

const PopUpCard = ({ children, className }) => {
	const handleShow = useContext(CtaTelPopUpContext);

	return (
		<Card className={className}>
			<div className="flex flex-col">
				<button onClick={handleShow} className="mb-4 self-end">
					<div className="w-6">
						<img src={Times} alt="Close button" />
					</div>
				</button>
				{children}
			</div>
		</Card>
	);
};

export default PopUpCard;

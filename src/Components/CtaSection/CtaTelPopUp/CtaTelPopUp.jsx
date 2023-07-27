import { CtaContent } from "../../../Constants/ConstantData";
import Card from "../../../Universal/Card/Card";
import PopUpCard from "../../../Universal/Card/popUp/PopUpCard";
import { phoneIco } from "../../../assets/Images/Img";

function CtaTelPopUp() {
	return (
		<PopUpCard className="text-sm desktopXs:text-base">
			<Card className="my-8 px-4">
				<div className="flex flex-row items-center justify-between gap-6">
					<h3>{CtaContent.en.phone[0].num}</h3>
					<a href={`tel:${CtaContent.en.phone[0].num}`}>
						<div className="w-15">
							<img src={phoneIco} alt="Call Now Button" />
						</div>
					</a>
				</div>
			</Card>
			<Card className="my-8 px-4">
				<div className="flex flex-row items-center justify-between gap-6">
					<h3>{CtaContent.en.phone[1].num}</h3>
					<a href={`tel:${CtaContent.en.phone[1].num}`}>
						<div className="w-15">
							<img src={phoneIco} alt="Call Now Button" />
						</div>
					</a>
				</div>
			</Card>
		</PopUpCard>
	);
}

export { CtaTelPopUp };

/* eslint-disable react/prop-types */

//! Imports Here
import { useContext } from "react";
import { LanguageChange } from "../../App";
import { doctorProfileImg, ratingStar } from "../../assets/Images/Img";
import { doctorInfo } from "../../Constants/ConstantData";

//! Custom Componetn Functions
//* floatingCard Component
const FloatingCard = (props) => {
	const { className, content } = props;
	return (
		<div
			className={`max-w-[8em] tabletSm:text-xl text-md text-center font-[Asar] p-2 ${className}`}>
			{content}
		</div>
	);
};

//* Rating Card component
const RatingCard = (props) => {
	const { className } = props;
	return (
		<div
			className={`flex justify-around items-center w-[10em] tabletSm:w-[13em] desktopSm:w-[12em] bg-white rounded-md px-4 tabletSm:py-6 shadow-md ${className}`}>
			<div className="">
				<img src={ratingStar} alt="" />
			</div>
			<div className="">
				<img src={ratingStar} alt="" />
			</div>
			<div className="">
				<img src={ratingStar} alt="" />
			</div>
			<div className="">
				<img src={ratingStar} alt="" />
			</div>
			<div className="">
				<img src={ratingStar} alt="" />
			</div>
		</div>
	);
};

//! Deafult Function
const DoctorInfo = () => {
	const handleLanguage = useContext(LanguageChange);

	return (
		<section>
			<div className="container flex flex-col desktopSm:flex-row-reverse desktopSm:items-center">
				{/* //? Doctor Images */}
				<div className="relative w-fit mx-auto my-2xl mt-md desktopSm:mr-[2%]">
					<RatingCard className="absolute z-10 -top-[10%] -right-[22%] tabletSm:-right-[50%] desktopSm:-right-[35%]" />
					<FloatingCard
						className="bg-[#f2fbff] rounded-full absolute -top-[2%] -left-[25%] py-5"
						content={handleLanguage(
							doctorInfo.bn.shortInfo[1],
							doctorInfo.en.shortInfo[1]
						)}
					/>
					<FloatingCard
						className="bg-[#fff6ec] rounded-md absolute -right-[22%] -bottom-[12%] py-4 px-1.5"
						content={handleLanguage(
							doctorInfo.bn.shortInfo[2],
							doctorInfo.en.shortInfo[2]
						)}
					/>
					{/* //! Profile Image */}
					<div className="flex w-[62vw] tabletSm:w-[40vw] desktopSm:w-[22vw] justify-center items-center">
						<img src={doctorProfileImg} alt="" />
					</div>
				</div>

				{/* //? content  */}
				<div className="text-center desktopSm:text-left desktopSm:basis-1/2 grow-0">
					<h2 className="my-xs">
						{handleLanguage(doctorInfo.bn.title, doctorInfo.en.title)}
					</h2>
					<p className="text-justify">
						{handleLanguage(
							doctorInfo.bn.description,
							doctorInfo.en.description
						)}
					</p>

					{/* //? Contact Info */}
					<div className="flex items-center justify-between mt-md desktopSm:flex-row-reverse desktopSm:justify-end desktopSm:gap-8">
						{/* //? Phone Info */}
						<div className="flex justify-center items-center">
							<div className="mr-xs flex justify-center items-center desktopSm:overflow-hidden desktopSm:w-[3.6em] desktopSm:rounded-full desktopSm:border-[4px] border-white desktopSm:shadow">
								<img src={doctorInfo.en.phone.icon} alt="" />
							</div>
							<div className="">
								<h3 className="font-bold">
									{handleLanguage(
										doctorInfo.bn.phone.number,
										doctorInfo.en.phone.number
									)}
								</h3>
							</div>
						</div>

						<div className="desktopSm:flex hidden border-r-2 border-brand h-[2em]"></div>
						{/* //? whatsapp */}
						<div className="">
							<a href={doctorInfo.links.link}>
								<img
									src={doctorInfo.links.icon}
									alt="sheba-homoeo-hall-Whatsapp"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DoctorInfo;

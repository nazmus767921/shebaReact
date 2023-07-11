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
			className={`max-w-[8em] text-md text-center font-[Asar] p-2 ${className}`}>
			{content}
		</div>
	);
};

//* Rating Card component
const RatingCard = (props) => {
	const { className } = props;
	return (
		<div
			className={`flex gap-2 justify-center items-center w-[10em] bg-white rounded-md px-[1em] py-[1em] shadow-md ${className}`}>
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
			<div className="container">
				{/* //? Doctor Images */}
				<div className="relative w-fit mx-auto my-2xl mt-md">
					<RatingCard className="absolute z-10 -top-[10%] -right-[22%]" />
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
					<div className="flex w-[62vw] justify-center items-center">
						<img src={doctorProfileImg} alt="" />
					</div>
				</div>

				{/* //? content  */}
				<div className="text-center">
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
					<div className="flex items-center justify-between mt-md">
						{/* //? Phone Info */}
						<div className="flex justify-center items-center">
							<div className="mr-xs">
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

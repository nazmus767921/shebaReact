/* eslint-disable react/prop-types */

//! Imports Here
import { useContext } from "react";
import { LanguageChange } from "../../App";
import { doctorProfileImg } from "../../assets/Images/Img";
import { doctorInfo } from "../../Constants/ConstantData";

//! Custom Componetn Functions
//? floatingCard Component
function FloatingCard(props) {
	const { className, content } = props;
	return (
		<div className={`w-2xl text-md text-center px-[1em] py-xs ${className}`}>
			{content}
		</div>
	);
}

//! Deafult Function
const DoctorInfo = () => {
	const handleLanguage = useContext(LanguageChange);

	return (
		<section>
			<div className="container">
				{/* //? Doctor Images */}
				<div className="">
					<FloatingCard
						className="bg-[#f2fbff] rounded-full"
						content={handleLanguage(
							doctorInfo.bn.shortInfo[1],
							doctorInfo.en.shortInfo[1]
						)}
					/>
					{/* //! Profile Image */}
					<div className="flex justify-center items-center">
						<img src={doctorProfileImg} alt="" />
					</div>

					<FloatingCard
						className="bg-[#fff6ec] rounded-md"
						content={handleLanguage(
							doctorInfo.bn.shortInfo[2],
							doctorInfo.en.shortInfo[2]
						)}
					/>
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

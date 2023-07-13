/* eslint-disable react-refresh/only-export-components */
//!imports
import { whatsapp, phoneIco } from "../assets/Images/Img";

//! Navigation
const navLinks = [
	{
		id: 1,
		linkText: "Home",
		link: "#",
	},
	{
		id: 2,
		linkText: "About us",
		link: "#",
	},
	{
		id: 3,
		linkText: "Faqs",
		link: "#",
	},
	{
		id: 4,
		linkText: "Our Address",
		link: "#",
	},
];

//! Taglines
const tagLines = {
	hero: "#1 Homeopathic and Naturopathic treatment center for you.",
	2: "Best treatment and medicines for better health",
	3: "Homeopathy & Naturopathy",
};

//! Hero Section
const heroSection = {
	heroContent: {
		en: {
			title: (
				<>
					Restore Your Health And <br />
					MindNaturally With <br />
					<span className="text-brand">Homeopathy & Naturopathy</span>{" "}
					{/*//? this line will be in green color.*/}
				</>
			),
			description:
				"Welcome to Sheba Homeo Hall, Your destination for effortless, reliable, and natural healthcare.",
		},
		bn: {
			title: (
				<>
					<span className="text-brand">হোমিওপ্যাথি ও ন্যাচারোপ্যাথির</span>{" "}
					<br />
					{/*//? this line will be in green color.*/}
					মাধ্যমে প্রাকৃতিকভাবে আপনার <br />
					স্বাস্থ্য, মন এবং শরীর ফিরে পান <br />
				</>
			),
			description:
				"সেবা হোমিও হলে আপনাকে স্বাগতম, আপনার স্বাস্থ্যসেবার নির্ভরযোগ্য এবং প্রাকৃতিক গন্তব্য।",
		},
	},
};

//! Treatment Center Info
const chamberInfo = {
	en: {
		tag: "TREATMENT CENTER",
		title: (
			<>
				Your <span className=" text-brand text-xl">only</span>{" "}
				<br className="inline desktopXs:hidden" />
				reliable treatment center to recover fully
			</>
		),
		description:
			"Welcome to Sheba Homeo Hall, your destination for effortless, reliable, and natural healthcare.Whether you're dealing with acute or chronic conditions, trust Sheba Homeo Hall for optimal health and well-being. Say goodbye to chronic diseases, allergies, skin problems, and mental disorders with our holistic approach to healing. We have fame for curing a variety of patients like you with complex and chronic diseases with a success rate of 97% all over the country and abroad.we believe in the power of homeopathy to restore your well-being naturally.",
	},
	bn: {
		tag: "TREATMENT CENTER",
		title: (
			<>
				সুস্থ্য হয়ে ওঠার জন্য আপনার{" "}
				<span className=" text-brand text-xl">নির্ভরযোগ্য</span> প্রতিষ্ঠান
				<br className="inline desktopXs:hidden" />
			</>
		),
		description:
			"সেবা হোমিও হলে আপনাকে স্বাগতম, আপনার স্বাস্থ্যসেবার নির্ভরযোগ্য এবং প্রাকৃতিক গন্তব্য। জটিল বা দীর্ঘস্থায়ী, যেকোনো ধরনের শারীরিক সমস্যা নিরাময় ও সুস্বাস্থ্যের জন্য সেবা হোমিও হল আপনার সেবায় সর্বদা নিয়োজিত। আমাদের আধুনিক প্রাকৃতিক চিকিৎসার মাধ্যমে অ্যালার্জি, চর্ম, যৌন, মানসিক ব্যাধি, জটিল এবং দীর্ঘস্থায়ী রোগগুলোে বিদায় জানান। সারা দেশে এবং বিদেশে আপনার মতো বিভিন্ন জটিল এবং দীর্ঘস্থায়ী রোগের রোগীদের নিরাময় করার জন্য ( ৯৭% সাফল্যের হার ) সেবা হোমিও হলের খ্যাতি রয়েছে। আমরা প্রাকৃতিকভাবে সুস্থ্যতা লাভে বিশ্বাস করি। প্রাকৃতিক চিকিৎসায় সুস্থ্য জীবন।",
	},
};

//! Offerings Section
const offeringsMedicine = {
	en: {
		title: (
			<>
				We give you best possible treatment and provide you
				<span className="text-brand">
					{" "}
					<br />
					<span className="text-[1.75em]">100%</span>
					<br className="tabletSm:hidden inline" /> Authentic medicine
				</span>{" "}
				originated from Germany.
			</>
		),
		description:
			"We also have the best medicines from Switzerland, India, and Pakistan. And Sometimes we use our domestic [Made in Bangladesh medicines] and local best medicines according to your demand. We deliver only the best to you and your health.",
	},
	bn: {
		title: (
			<>
				আপনার সর্বোত্তম চিকিৎসা নিশ্চিত করতে,
				<span className="text-brand">
					{" "}
					<br />
					<span className="text-[1.75em] tabletSm:text-[1.4em]">
						আমরা জার্মানি উৎপাদিত <br className="desktopMd::hidden" /> ১০০% আসল
					</span>
					<br className="tabletSm:hidden" />
				</span>{" "}
				ওষুধ সরবরাহ করি।
			</>
		),
		description:
			"আমাদের কাছে সুইজারল্যান্ড, ইন্ডিয়া, এবং পাকিস্তানের সেরা ঔষধ গুলোও পাওয়া যায়। তাছাড়াও, আমরা রোগীদের চাহিদা অনুযায়ী দেশীয় ঔষধ গুলোও ব্যবহার করে থাকি। আপনার সুস্বাস্থ্যের জন্য আমরা শুধুমাত্র সেরাটাই সর্বরাহ করার চেষ্টা করি।",
	},
};

const offeringsPitch = {
	en: {
		title: (
			<>
				5 reasons why
				<br />
				<span className="text-brand">Sheba Homeo Hall</span>
				<br /> is the best choice for you?
			</>
		),
	},
	bn: {
		title: (
			<>
				৫টি কারনে চিকিৎসার জন্য
				<br />
				<span className="text-brand">সেবা হোমিও হল</span>
				<br /> হতে পারে আপনার প্রথম পছন্দ
			</>
		),
	},
	list: [
		{
			id: 1,
			en: "You will receive the best treatment from here than all other places.",
			bn: "আপনি এখান থেকে অন্য সব জায়গার চেয়ে সেরা চিকিৎসা পাবেন।",
		},
		{
			id: 2,
			en: "We Cured more than 25 thousand patients like you.",
			bn: "আপনার মত 25 হাজারেরও বেশি রোগী আমাদের চিকিৎসায় সুস্থ হয়েছে।",
		},
		{
			id: 3,
			en: "We handled 8600+ rare cases like cancer, kidney, liver, and heart problem.",
			bn: "আমরা 8600+ এর বেশী ক্যান্সার, কিডনি, লিভার এবং হার্টের সমস্যার মতো জটিল ও দীর্ঘস্থায়ী কেস পরিচালনা করেছি এবং সুস্থ্য হয়েছে।",
		},
		{
			id: 4,
			en: "We have 22 years of experience in healing and a success rate of 97%.",
			bn: "নিরাময়ে আমাদের 22 বছরের অভিজ্ঞতা এবং শতকরা ৯৭% সাফল্যের হার রয়েছে।",
		},
		{
			id: 5,
			en: "You will save a large amount of money and time.",
			bn: "আমদের চিকিৎসায়, অন্যান্য চিকিৎসা ব্যবস্থার চেয়ে প্রচুর অর্থ এবং সময় বাঁচবে আপনার।",
		},
	],
};

//! Doctor Info

const doctorInfo = {
	en: {
		title: (
			<>
				<span className="text-brand text-[1.1em] font-extrabold font-[Asar]">
					The friendly Doctor
				</span>
				<br /> you need to solve all your health problems
			</>
		),
		description:
			"Dr. Zohirul Islam is a highly skilled, qualified doctor from BHMC (Bangladesh Homeopathic Medical College). He has an experience in Naturopathic and Homeopathy treatment of 22 years and Cured 25000+ patients and counting.",
		shortInfo: {
			1: "Cured 25000 + patients",
			2: "22 years of experience",
		},
		phone: {
			icon: phoneIco,
			number: "01712 85 80 71",
		},
	},
	bn: {
		title: (
			<>
				<span className="text-brand text-[1.4em]">
					একজন বন্ধুত্বসুলভ ডাক্তার
				</span>
				<br /> যে আপনার সমস্ত স্বাস্থ্য সম্পর্কিত সমস্যা শুনবে এবং সমাধান করবে
			</>
		),
		description:
			"ডাঃ জহিরুল ইসলাম, বিএইচএমসি (বাংলাদেশ হোমিওপ্যাথিক মেডিকেল কলেজ) এর থেকে সনদপ্রাপ্ত একজন অত্যন্ত দক্ষ এবং অভিজ্ঞ ডাক্তার। প্রায় ২৫ হাজার+ রোগী তার সেবা নিয়ে সুস্থ্য হয়েছেন। এই সেবায় তার ২২ বছরের অভিজ্ঞতা আপনার সর্বোচ্চ চিকিৎসা সেবা নিশ্চিত করবে।",
		shortInfo: {
			1: "২৫ হাজার+ রোগী সুস্থ হয়েছে",
			2: "২২ বছরের অভিজ্ঞতা সম্পন্ন",
		},
		phone: {
			number: "০১৭১২- ৮৫ ৮০ ৭১",
		},
	},
	links: {
		icon: whatsapp,
		link: "https://wa.me/8801712858071",
	},
};

//! FAQs
const Faqs = {
	en: {
		title: "What our patients are asking us?",
		faq: [
			{
				id: "1",
				question: "Is homeopathy safe during pregnanancy?",
				answer:
					"We can assure you that Homeopathy is completely safe. We use natural and safe sustances. So, it has no major side effects like other medicines.",
			},
			{
				id: "2",
				question: "Is homeopathy safe for babies?",
				answer:
					"Of course babies are safe from Homeopathic treatment. As, We stated before. We use natural and safe sustances. So, it has no major side effects like other medicines not even for babies.",
			},
			{
				id: "3",
				question: "Can homeopathy cure ED permanently?",
				answer:
					"Erectile dysfunction or difficulty in getting a firm erection or an erection during sexual activities can be cured by Homeopathy and has no side effects.That's why people are more moving towards it. Many patients come to us and get rid of ED and other sexual problems.",
			},
			{
				id: "4",
				question: "Does homeopathy increase symptoms?",
				answer:
					"Sometimes patient gets confused when they see that the symptoms are increased. But it also is a part of the process. But it is very rare.",
			},
			{
				id: "5",
				question: "why homeopathy works slow?",
				answer:
					"Great things takes time. Homeopathy focuses to cure you and give back your health fully. So, it is normal to take time. You have to give yourself time to get back your sound health.",
			},
		],
	},
	bn: {
		title: "সর্বাধিক জিজ্ঞাসিত প্রশ্ন, আপনাদের প্রশ্নোত্তর",
	},
};

//! CTA Section
const CtaContent = {
	en: {
		titleTop: "Don't delay any more",
		titleBottom: "Get an appointment",
		pitch:
			"Call at any of the numbers below to talk directly with the doctor and to get appointment. Or E-mail us writing about your problem and questions. We will go through your messages and call you.",
		endTag: "We will ensure that you receive the best care.",
		phone: [
			{
				num: "01912-74 00 68",
			},
			{
				num: "01731-67 29 67",
			},
		],
		email: "shebahomoeohallkps", //? dont include @gmail.com at the end.it will add it automatically
	},
	bn: {
		titleTop: "তবে দেরী কেন?",
		titleBottom: "আজই যোগাযোগ করুন",
		pitch:
			"ডাক্তারের সাথে সরাসরি কথা বলার জন্য অথবা অন্যান্য তথ্যের জন্য নিচের যেকোনো নাম্বারে কল করুন। অথবা আপনার প্রশ্ন বা সমস্যার কথা লিখে মেইল করুন। আমারা আপনার মেসেজ পড়ে আপনাকে কল করবো।",
		endTag: "আমরা নিশ্চিত করবো যাতে আপনি সর্বোত্তম সেবা পান।",
	},
};

//! Address Section
const addressSection = {
	en: {
		title: (
			<>
				Our <span className="text-brand">Address</span>
			</>
		),
		address: {
			street: "Lotapata Bazar",
			city: "Kapasia, Gazipur",
			district: "Dhaka",
		},
	},
	bn: {
		title: "আমাদের ঠিকানা",
		address: {
			street: "লতাপাতা বাজার",
			city: " কাপাসিয়া, গাজীপুর",
			district: "ঢাকা",
		},
	},
	btn: {
		en: { name: "Get Chamber location on map" },
		bn: { name: "ম্যাপে চেম্বারের লোকশন দেখুন" },
		mapLink: "https://goo.gl/maps/odKacTqLjJn36gGG9",
	},
};

//! Footer Section
const footer = {
	copyright: "Copyright © 2023 Sheba Homoe Hall. All Rights Reserved.",
	links: [
		{
			title: "Homeopathy",
			link: "https://yourLink.com",
		},
		{
			title: "Naturopathy",
			link: "https://yourLink.com",
		},
		{
			title: "Other links",
			link: "https://yourLink.com",
		},
	],
};

export {
	navLinks,
	tagLines,
	heroSection,
	chamberInfo,
	offeringsMedicine,
	offeringsPitch,
	doctorInfo,
	Faqs,
	CtaContent,
	addressSection,
	footer,
};

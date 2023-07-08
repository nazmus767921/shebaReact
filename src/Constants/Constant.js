//! Navigation
const navLinks = [
	{
		id: 1,
		name: "Home",
		link: "#",
	},
	{
		id: 2,
		name: "About us",
		link: "#",
	},
	{
		id: 3,
		name: "Faqs",
		link: "#",
	},
	{
		id: 4,
		name: "Our Address",
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
		title: {
			seg1: "Restore Your Health And",
			seg2: "Mind Naturally With",
			seg3: "Homeopathy & Naturopathy", //? will be in green color.
		},
		description:
			"Welcome to Sheba Homeo Hall, Your destination for effortless, reliable, and natural healthcare.",
	},
};

//! Treatment Center Info
const treatmentCenterInfo = {
	en: {
		tag: "TREATMENT CENTER",
		title: "Your only reliable treatment center to recover fully",
		description:
			"Welcome to Sheba Homeo Hall, your destination for effortless, reliable, and natural healthcare.Whether you're dealing with acute or chronic conditions, trust Sheba Homeo Hall for optimal health and well-being. Say goodbye to chronic diseases, allergies, skin problems, and mental disorders with our holistic approach to healing. We have fame for curing a variety of patients like you with complex and chronic diseases with a success rate of 97% all over the country and abroad.we believe in the power of homeopathy to restore your well-being naturally.",
	},
	bn: {
		tag: "TREATMENT CENTER",
		title: "সুস্থ্য হয়ে ওঠার জন্য আপনার নির্ভরযোগ্য প্রতিষ্ঠান",
		description:
			"সেবা হোমিও হলে আপনাকে স্বাগতম, আপনার স্বাস্থ্যসেবার নির্ভরযোগ্য এবং প্রাকৃতিক গন্তব্য। জটিল বা দীর্ঘস্থায়ী, যেকোনো ধরনের শারীরিক সমস্যা নিরাময় ও সুস্বাস্থ্যের জন্য সেবা হোমিও হল আপনার সেবায় সর্বদা নিয়োজিত। আমাদের আধুনিক প্রাকৃতিক চিকিৎসার মাধ্যমে অ্যালার্জি, চর্ম, যৌন, মানসিক ব্যাধি, জটিল এবং দীর্ঘস্থায়ী রোগগুলোে বিদায় জানান। সারা দেশে এবং বিদেশে আপনার মতো বিভিন্ন জটিল এবং দীর্ঘস্থায়ী রোগের রোগীদের নিরাময় করার জন্য ( ৯৭% সাফল্যের হার ) সেবা হোমিও হলের খ্যাতি রয়েছে। আমরা প্রাকৃতিকভাবে সুস্থ্যতা লাভে বিশ্বাস করি। প্রাকৃতিক চিকিৎসায় সুস্থ্য জীবন।",
	},
};

//! Offerings Section
const offeringsMedicine = {
	en: {
		title:
			"We give you best possible treatment and provide you 100% Authentic medicine originated from Germany.",
		description:
			"We also have the best medicines from Switzerland, India, and Pakistan. And Sometimes we use our domestic [made in Bangladesh medicines] and local best medicines according to your demand. We deliver only the best to you and your health.",
	},
	bn: {
		title:
			"আপনার সর্বোত্তম চিকিৎসা নিশ্চিত করতে, আমরা জার্মানি উৎপাদিত ১০০% আসল ওষুধ সরবরাহ করি।",
		description:
			"আমাদের কাছে সুইজারল্যান্ড, ইন্ডিয়া, এবং পাকিস্তানের সেরা ঔষধ গুলোও পাওয়া যায়। তাছাড়াও, আমরা রোগীদের চাহিদা অনুযায়ী দেশীয় ঔষধ গুলোও ব্যবহার করে থাকি। আপনার সুস্বাস্থ্যের জন্য আমরা শুধুমাত্র সেরাটাই সর্বরাহ করার চেষ্টা করি।",
	},
};

const offeringsPitch = {
	en: {
		title: "5 reasons why Sheba Homeo Hall is the best choice for you?",
		list: {
			1: "You will receive the best treatment from here than all other places.",
			2: "We Cured more than 25 thousand patients like you.",
			3: "We handled 8600+ rare cases like cancer, kidney, liver, and heart problem.",
			4: "We have 22 years of experience in healing and a success rate of 97%.",
			5: "You will save a large amount of money and time.",
		},
	},
	bn: {
		title: "৫টি কারনে চিকিৎসার জন্য সেবা হোমিও হল হতে পারে আপনার প্রথম পছন্দ",
		list: {
			1: "আপনি এখান থেকে অন্য সব জায়গার চেয়ে সেরা চিকিৎসা পাবেন।",
			2: "আপনার মত 25 হাজারেরও বেশি রোগী আমাদের চিকিৎসায় সুস্থ হয়েছে।",
			3: "আমরা 8600+ এর বেশী ক্যান্সার, কিডনি, লিভার এবং হার্টের সমস্যার মতো জটিল ও দীর্ঘস্থায়ী কেস পরিচালনা করেছি এবং সুস্থ্য হয়েছে।",
			4: "নিরাময়ে আমাদের 22 বছরের অভিজ্ঞতা এবং শতকরা ৯৭% সাফল্যের হার রয়েছে।",
			5: "আমদের চিকিৎসায়, অন্যান্য চিকিৎসা ব্যবস্থার চেয়ে প্রচুর অর্থ এবং সময় বাঁচবে আপনার।",
		},
	},
};

//! Doctor Info

const doctorInfo = {
	en: {
		title: "The friendly Doctor you need to solve all your health problems",
		description:
			"Dr. Zohirul Islam is a highly skilled, qualified doctor from BHMC (Bangladesh Homeopathic Medical College). He has an experience in Naturopathic and Homeopathy treatment of 22 years and Cured 25000+ patients and counting.",
		shortInfo: {
			1: "Cured 25000 + patients",
			2: "22 years of experience",
		},
	},
	bn: {
		title:
			"একজন বন্ধুত্বসুলভ ডাক্তার যে আপনার সমস্ত স্বাস্থ্য সম্পর্কিত সমস্যা শুনবে এবং সমাধান করবে",
		description:
			"ডাঃ জহিরুল ইসলাম, বিএইচএমসি (বাংলাদেশ হোমিওপ্যাথিক মেডিকেল কলেজ) এর থেকে সনদপ্রাপ্ত একজন অত্যন্ত দক্ষ এবং অভিজ্ঞ ডাক্তার। প্রায় ২৫ হাজার+ রোগী তার সেবা নিয়ে সুস্থ্য হয়েছেন। এই সেবায় তার ২২ বছরের অভিজ্ঞতা আপনার সর্বোচ্চ চিকিৎসা সেবা নিশ্চিত করবে।",
		shortInfo: {
			1: "২৫ হাজার+ রোগী সুস্থ হয়েছে",
			2: "২২ বছরের অভিজ্ঞতা সম্পন্ন",
		},
	},
};

export {
	navLinks,
	tagLines,
	heroSection,
	treatmentCenterInfo,
	offeringsMedicine,
	offeringsPitch,
	doctorInfo,
};

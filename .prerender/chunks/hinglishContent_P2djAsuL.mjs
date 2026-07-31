//#region src/utils/hinglishContent.ts
function shouldShowHinglish(country) {
	if (!country) return false;
	const normalized = country.toLowerCase();
	return [
		"india",
		"pakistan",
		"bangladesh"
	].includes(normalized);
}
var HINGLISH_PHRASES = {
	get_started: "Shuru Karein — free consultation ke liye contact karein",
	learn_more: "Aur jante hain is service ke baare mein",
	contact_us: "Hamare experts se baat karein",
	our_services: "Hamaari services dekhein",
	business_problems: "Business ki sabse badi problems",
	recommended_solutions: "Hamari recommended solutions",
	faqs: "Aksar puche jane wale sawal (FAQs)",
	local_market: "Local market ka overview",
	compliance: "Local compliance aur rules",
	nearby_locations: "Aas paas ki locations",
	free_consultation: "Free consultation book karein",
	phone_email: "Phone, email ya form ke jariye",
	success_story: "Kaise bani inki success story",
	grow_business: "Apne business ko tezi se aage badhayein",
	trusted_by: "Hazaro businesses ka bharosa",
	digital_marketing: "Digital marketing se sales badhayein",
	web_design: "Apne business ke liye ek badiya website banwayein",
	sms_marketing: "Bulk SMS marketing se customers tak pahuchein",
	whatsapp_api: "WhatsApp API se direct connect karein",
	seo_services: "Google par apni rank upar laayein",
	crm_setup: "Naya CRM setup karein aur leads manage karein",
	support: "Support team se judein",
	pricing: "Plans aur pricing dekhein",
	book_demo: "Live demo book karein",
	chat_now: "Abhi chat shuru karein",
	read_blog: "Hamare naye articles padhein",
	case_studies: "Case studies padhein",
	why_choose_us: "Humein kyu chune?",
	features: "Kya features milenge",
	testimonials: "Hamare clients kya kehte hain",
	about_us: "Hamari company ke baare mein",
	terms: "Niyam aur shartein",
	privacy_policy: "Privacy policy padhein",
	disclaimer: "Zaroori suchna",
	loading: "Load ho raha hai..."
};
function getHinglishPhrase(key) {
	return HINGLISH_PHRASES[key] || key;
}
//#endregion
export { shouldShowHinglish as n, getHinglishPhrase as t };

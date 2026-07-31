//#region src/utils/locationTier.ts
var T2_ALLOWED = /* @__PURE__ */ new Set([
	"mobile-business-communication/sms",
	"mobile-business-communication/whatsapp",
	"mobile-business-communication/rcs",
	"ai-solutions/chatbots",
	"ai-solutions/agents-automation",
	"business-management-solutions/crm",
	"business-management-solutions/marketing-automation",
	"digital-marketing/lead-generation",
	"search-growth/seo-services",
	"development-solutions/website-development"
]);
var T3_ALLOWED = /* @__PURE__ */ new Set(["mobile-business-communication/sms", "mobile-business-communication/whatsapp"]);
/**
* Classifies a location into T1/T2/T3 based on population and AI readiness.
* Called at build time in getStaticPaths — zero runtime cost.
*/
function getLocationTier(population, aiReadiness = "") {
	const ai = aiReadiness.toLowerCase();
	const isUltraHigh = ai.includes("ultra-high") || ai.includes("ultra high");
	const isHigh = ai.includes("very high") || ai.includes("high");
	if (population >= 1e6) return "T1";
	if (population >= 5e5 && isUltraHigh) return "T1";
	if (population >= 1e5) return "T2";
	if (population >= 5e4 && isHigh) return "T2";
	return "T3";
}
/**
* Returns true if a given service should generate a page for this location tier.
*/
function isServiceAllowedForTier(categoryId, serviceId, tier) {
	if (tier === "T1") return true;
	const key = `${categoryId}/${serviceId}`;
	if (tier === "T2") return T2_ALLOWED.has(key);
	return T3_ALLOWED.has(key);
}
/**
* Returns the tier label for display / debugging.
*/
var TIER_LABELS = {
	T1: "Mega-Metro Hub",
	T2: "Mid-Tier Hub",
	T3: "Anchor Node"
};
//#endregion
export { getLocationTier as n, isServiceAllowedForTier as r, TIER_LABELS as t };

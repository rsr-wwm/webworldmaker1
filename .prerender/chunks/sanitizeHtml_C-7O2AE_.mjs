import { n as GLOSSARY } from "./database_B-P2-jd3.mjs";
import DOMPurify from "isomorphic-dompurify";
//#region src/utils/autoLinker.ts
var AUTO_LINK_MAP = {
	"whatsapp business api": "/mobile-business-communication/whatsapp",
	"whatsapp api": "/mobile-business-communication/whatsapp",
	"bulk sms gateway": "/mobile-business-communication/sms",
	"bulk sms": "/mobile-business-communication/sms",
	"rcs messaging": "/mobile-business-communication/rcs",
	"rcs business messaging": "/mobile-business-communication/rcs",
	"cloud ivr": "/mobile-business-communication/voice-ivr",
	"bulk voice calls": "/mobile-business-communication/voice-ivr",
	"voice calls": "/mobile-business-communication/voice-ivr",
	"white-label reseller platform": "/product/white-label-reseller",
	"white label reseller platform": "/product/white-label-reseller",
	"white label reseller": "/product/white-label-reseller",
	"white-label reseller": "/product/white-label-reseller",
	"sms gateway panel": "/product/sms-gateway-admin-panel",
	"crm": "/business-management-solutions/crm",
	"erp": "/business-management-solutions/erp",
	"hrms": "/business-management-solutions/hrms",
	"lms": "/business-management-solutions/lms",
	"seo services": "/search-growth/seo-services",
	"advanced seo": "/search-growth/seo-services",
	"search engine optimization": "/search-growth/seo-services",
	"web development": "/development-solutions/website-development",
	"mobile app development": "/development-solutions/mobile-app-development",
	"careers": "/company/careers",
	"about us": "/company/about"
};
var WIKIDATA_MAP = {
	"/mobile-business-communication/whatsapp": "https://www.wikidata.org/wiki/Q50247",
	"/mobile-business-communication/sms": "https://www.wikidata.org/wiki/Q148756",
	"/mobile-business-communication/rcs": "https://www.wikidata.org/wiki/Q1417537",
	"/mobile-business-communication/voice-ivr": "https://www.wikidata.org/wiki/Q1143896",
	"/mobile-business-communication/voice-calls": "https://www.wikidata.org/wiki/Q18342777",
	"/search-growth/seo-services": "https://www.wikidata.org/wiki/Q180711",
	"/development-solutions/website-development": "https://www.wikidata.org/wiki/Q11434",
	"/development-solutions/mobile-app-development": "https://www.wikidata.org/wiki/Q5440781",
	"/business-management-solutions/crm": "https://www.wikidata.org/wiki/Q485816",
	"/business-management-solutions/erp": "https://www.wikidata.org/wiki/Q283307",
	"/business-management-solutions/hrms": "https://www.wikidata.org/wiki/Q4118337",
	"/business-management-solutions/lms": "https://www.wikidata.org/wiki/Q290483",
	"/company/about": "https://www.wikidata.org/wiki/Q1048607"
};
var rules = [];
for (const [kw, url] of Object.entries(AUTO_LINK_MAP)) rules.push({
	term: kw,
	type: "link",
	value: url
});
for (const g of GLOSSARY) if (!Object.keys(AUTO_LINK_MAP).some((kw) => kw.toLowerCase() === g.term.toLowerCase())) rules.push({
	term: g.term,
	type: "glossary",
	value: g.term
});
rules.sort((a, b) => b.term.length - a.term.length);
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function escapeHtml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function escapeAttribute(value) {
	return escapeHtml(value).replace(/`/g, "&#96;");
}
var pattern = rules.map((r) => `\\b${escapeRegExp(r.term)}\\b`).join("|");
var regex = new RegExp(pattern, "gi");
function autoLinkText(htmlOrText) {
	if (!htmlOrText) return "";
	const parts = htmlOrText.split(/(<\/?[a-zA-Z0-9]+[^>]*>)/);
	let insideLink = false;
	let result = parts.map((part) => {
		if (part.startsWith("<")) {
			const lowerPart = part.toLowerCase();
			if (lowerPart.startsWith("<a")) insideLink = true;
			else if (lowerPart.startsWith("</a")) insideLink = false;
			return part;
		}
		if (insideLink) return part;
		return part.replace(regex, (match) => {
			const rule = rules.find((r) => r.term.toLowerCase() === match.toLowerCase());
			if (!rule) return match;
			if (rule.type === "link") return `__AUTOLINKSTART__${rule.value}__AUTOLINKTEXT__${match}__AUTOLINKEND__`;
			else return `__GLOSSARYSTART__${rule.value}__GLOSSARYTEXT__${match}__GLOSSARYEND__`;
		});
	}).join("");
	result = result.replace(/__AUTOLINKSTART__(.*?)__AUTOLINKTEXT__(.*?)__AUTOLINKEND__/g, (match, url, text) => {
		const wikidata = WIKIDATA_MAP[url];
		const safeUrl = escapeAttribute(url);
		const safeText = escapeHtml(text);
		return `<a href="${safeUrl}"${wikidata ? ` rel="about" data-wikidata="${escapeAttribute(wikidata)}"` : ""} class="semantic-autolink font-bold text-indigo-600 hover:underline" style="color: #6366f1; font-weight: bold;">${safeText}</a>`;
	});
	result = result.replace(/__GLOSSARYSTART__(.*?)__GLOSSARYTEXT__(.*?)__GLOSSARYEND__/g, (match, term, text) => {
		return `<span class="glossary-term cursor-help border-b border-dashed border-indigo-500 font-semibold" data-term="${escapeAttribute(term)}">${escapeHtml(text)}</span>`;
	});
	return result;
}
//#endregion
//#region src/utils/sanitizeHtml.ts
var sanitizeHtml = (html) => {
	return DOMPurify.sanitize(html, {
		USE_PROFILES: { html: true },
		ADD_ATTR: ["target"]
	});
};
//#endregion
export { autoLinkText as n, sanitizeHtml as t };

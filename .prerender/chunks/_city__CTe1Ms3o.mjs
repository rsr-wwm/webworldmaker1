import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, g as addAttribute, i as Fragment, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { o as getServiceCategories } from "./contentService_D8jqS7-T.mjs";
import { n as autoLinkText, t as sanitizeHtml } from "./sanitizeHtml_C-7O2AE_.mjs";
import { t as FaqAccordion } from "./FaqAccordion_CwjStDZR.mjs";
import { t as ServiceSidebarForm } from "./ServiceSidebarForm_Clb2Dkd0.mjs";
import { t as getComplianceCitation } from "./complianceCitations_DziIlxrs.mjs";
import { n as getLocationTier, r as isServiceAllowedForTier } from "./locationTier_DKf_6i13.mjs";
import fs from "node:fs";
import path from "node:path";
//#region src/pages/[categoryId]/[serviceId]/[state]/[city].astro
var _city__exports = /* @__PURE__ */ __exportAll({
	default: () => $$City,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
async function getStaticPaths() {
	const categories = getServiceCategories();
	const locationsDir = path.join(process.cwd(), "public", "locations");
	if (!fs.existsSync(locationsDir)) return [];
	const locationMeta = fs.readdirSync(locationsDir).filter((f) => f.endsWith(".json") && f !== "locations-index.json").map((f) => {
		const raw = JSON.parse(fs.readFileSync(path.join(locationsDir, f), "utf-8"));
		return {
			state: raw.stateSlug || raw.id.split("-")[0],
			city: raw.citySlug || raw.id.split("-").slice(1).join("-"),
			population: raw.population || 0,
			aiReadiness: raw.aiReadiness || ""
		};
	});
	const paths = [];
	const STATIC_ROUTE_COLLISIONS = /* @__PURE__ */ new Set(["partners/partner-program"]);
	for (const cat of categories) for (const item of cat.items) {
		if (STATIC_ROUTE_COLLISIONS.has(`${cat.id}/${item.id}`)) continue;
		for (const loc of locationMeta) {
			const tier = getLocationTier(loc.population, loc.aiReadiness);
			if (!isServiceAllowedForTier(cat.id, item.id, tier)) continue;
			paths.push({ params: {
				categoryId: cat.id,
				serviceId: item.id,
				state: loc.state,
				city: loc.city
			} });
		}
	}
	return paths;
}
var $$City = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$City;
	const { categoryId, serviceId, state, city } = Astro.params;
	const category = getServiceCategories().find((c) => c.id === categoryId);
	const service = category?.items.find((i) => i.id === serviceId);
	const categoryTitle = category?.title || categoryId;
	if (!service) throw new Error(`Service not found: ${categoryId}/${serviceId}`);
	const locationsDir = path.join(process.cwd(), "public", "locations");
	const fileName = `${state}-${city}.json`;
	const { city: cityName, state: stateName, population, mobilePenetration, industryFocus, dominantB2BPainPoint, aiReadiness, carriers, localComplianceRequirement, nearbyLocations = [] } = JSON.parse(fs.readFileSync(path.join(locationsDir, fileName), "utf-8"));
	const validNearbyLocations = nearbyLocations.filter((loc) => {
		try {
			const locFileName = `${loc.stateSlug}-${loc.citySlug}.json`;
			const locRaw = JSON.parse(fs.readFileSync(path.join(locationsDir, locFileName), "utf-8"));
			const tier = getLocationTier(locRaw.population || 0, locRaw.aiReadiness || "");
			return isServiceAllowedForTier(categoryId, serviceId, tier);
		} catch {
			return false;
		}
	});
	const complianceCitation = getComplianceCitation(localComplianceRequirement);
	const siteOrigin = Astro.site?.origin ?? "https://webworldmaker.com";
	const canonicalUrl = `${siteOrigin}/${categoryId}/${serviceId}/${state}/${city}`;
	const pageTitle = `Elite ${service.title} in ${cityName}, ${stateName} | WebWorldMaker`;
	const metaDesc = `Plan enterprise ${service.title} for ${cityName} ${industryFocus} teams with remote implementation, compliance-aware setup guidance for ${localComplianceRequirement}, and measurable rollout support.`;
	const schemaData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": ["Service", "ProfessionalService"],
				"name": `${service.title} in ${cityName}`,
				"description": metaDesc,
				"provider": {
					"@type": "Organization",
					"name": "WebWorldMaker",
					"url": "https://webworldmaker.com"
				},
				"areaServed": [{
					"@type": "City",
					"name": cityName,
					"containedInPlace": {
						"@type": "AdministrativeArea",
						"name": stateName
					}
				}, ...validNearbyLocations.map((loc) => ({
					"@type": "City",
					"name": loc.city,
					"url": `${siteOrigin}/${categoryId}/${serviceId}/${loc.stateSlug}/${loc.citySlug}`
				}))],
				"url": canonicalUrl
			},
			{
				"@type": "WebPage",
				"@id": canonicalUrl,
				"speakable": {
					"@type": "SpeakableSpecification",
					"cssSelector": ["[data-answer-target=\"true\"]"]
				}
			},
			{
				"@type": "FAQPage",
				"mainEntity": service.faqs?.map((faq) => ({
					"@type": "Question",
					"name": faq.question,
					"acceptedAnswer": {
						"@type": "Answer",
						"text": faq.answer
					}
				})) || []
			},
			{
				"@type": "HowTo",
				"@id": `${canonicalUrl}#howto`,
				"name": `How to Deploy ${service.title} for Your ${cityName} Business`,
				"description": `Step-by-step guide to implementing ${service.title} in ${cityName}, ${stateName} — from setup to go-live.`,
				"totalTime": "PT48H",
				"supply": [{
					"@type": "HowToSupply",
					"name": `${localComplianceRequirement} Registration`
				}, {
					"@type": "HowToSupply",
					"name": "Business Mobile Number or API Account"
				}],
				"tool": [{
					"@type": "HowToTool",
					"name": `${carriers[0] || "Local Carrier"} SMS Gateway`
				}, {
					"@type": "HowToTool",
					"name": "WebWorldMaker Control Panel"
				}],
				"step": [
					{
						"@type": "HowToStep",
						"position": 1,
						"name": "Book a Free Consultation",
						"text": `Contact our team to review your ${dominantB2BPainPoint} challenges and get a tailored proposal for ${cityName}.`,
						"url": `${canonicalUrl}#consultation`
					},
					{
						"@type": "HowToStep",
						"position": 2,
						"name": `${localComplianceRequirement} Compliance Setup`,
						"text": `We help review the relevant ${localComplianceRequirement} setup steps before launch.`,
						"url": `${canonicalUrl}#compliance`
					},
					{
						"@type": "HowToStep",
						"position": 3,
						"name": "API Integration & Testing",
						"text": `Connect your existing systems, test message flows, and confirm operational readiness for ${cityName} campaigns.`,
						"url": `${canonicalUrl}#integration`
					},
					{
						"@type": "HowToStep",
						"position": 4,
						"name": `Go Live in ${cityName}`,
						"text": `Launch your ${service.title} campaign and monitor delivery analytics during ramp-up.`,
						"url": `${canonicalUrl}#golive`
					}
				]
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${canonicalUrl}#breadcrumb`,
				"itemListElement": [
					{
						"@type": "ListItem",
						"position": 1,
						"name": "Home",
						"item": siteOrigin
					},
					{
						"@type": "ListItem",
						"position": 2,
						"name": category?.title || categoryId,
						"item": `${siteOrigin}/${categoryId}`
					},
					{
						"@type": "ListItem",
						"position": 3,
						"name": service.title,
						"item": `${siteOrigin}/${categoryId}/${serviceId}`
					},
					{
						"@type": "ListItem",
						"position": 4,
						"name": cityName,
						"item": canonicalUrl
					}
				]
			}
		]
	};
	const locationTier = getLocationTier(population, aiReadiness);
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": pageTitle,
		"metaDescription": metaDesc,
		"canonicalUrl": canonicalUrl,
		"extraSchema": schemaData["@graph"],
		"isSearchable": locationTier !== "T3"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen"><div class="bg-slate-950 text-white py-24 relative overflow-hidden"><div class="absolute inset-0 bg-[url('/patterns/cubes.png')] opacity-10"></div><div class="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div><div class="container mx-auto px-4 relative z-10"><!-- Breadcrumbs --><nav class="flex items-center text-sm font-medium text-indigo-100 mb-8 overflow-x-auto whitespace-nowrap pb-2"><a href="/" class="hover:text-white transition-colors">Home</a><span class="mx-2">/</span><a href="/services" class="hover:text-white transition-colors capitalize">${categoryTitle}</a><span class="mx-2">/</span><a${addAttribute(`/${categoryId}/${serviceId}`, "href")} class="hover:text-white transition-colors">${service.title}</a><span class="mx-2">/</span><span class="text-indigo-100">${stateName}</span><span class="mx-2">/</span><span class="text-white">${cityName}</span></nav><!-- Radical Transparency Badge --><div class="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6 border border-indigo-500/30">☁️ 100% Cloud-Delivered to ${cityName} • Zero Local Hardware Required</div><h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter uppercase leading-tight max-w-4xl">Elite <span class="text-indigo-400">${service.title}</span> for <span class="border-b-4 border-indigo-500">${cityName}</span> Businesses</h1><p class="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-medium tracking-tight">Overcome the specific <span class="text-white">${dominantB2BPainPoint}</span> challenges in ${cityName}'s ${industryFocus} sector with our localized ${service.title} platform.</p></div></div><div class="container mx-auto px-4 py-12"><div class="grid lg:grid-cols-3 gap-12"><article class="lg:col-span-2"><div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8"><div data-answer-target="true" class="mb-10 p-8 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-cyan-50/40 to-slate-50 border border-indigo-100 shadow-md relative overflow-hidden"><h3 class="text-xs font-black text-indigo-500 uppercase tracking-widest mb-4 flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>${cityName} Market Intelligence</h3><div class="space-y-6"><div><h4 class="text-base font-extrabold text-indigo-950 mb-2">Why deploy ${service.title} in ${cityName}?</h4><div class="text-slate-800 leading-relaxed text-sm font-medium"><p data-answer-target="true">With a local population of <strong>${population.toLocaleString()}</strong> and a <strong>${mobilePenetration}% mobile adoption rate</strong>, generic communication strategies fail in ${cityName}. By integrating our ${service.title} network directly through ${carriers[0]} and ${carriers[1] || "local"} towers, your <dfn data-trust-signal="high">${industryFocus}</dfn> business achieves near-instant delivery latencies. We ensure total compliance with <cite data-trust-signal="high">${localComplianceRequirement}</cite>, shielding your campaigns from regional carrier blocks.</p></div></div><div class="border-t border-slate-200/80 pt-4"><h4 class="text-base font-extrabold text-indigo-950 mb-2">Leveraging the ${aiReadiness} Local Economy</h4><div class="text-slate-800 leading-relaxed text-sm font-medium"><p data-answer-target="true">Because ${cityName} has an AI readiness rating of "${aiReadiness}", customers expect immediate, hyper-personalized engagement. ${service.title} bridges this gap, allowing you to capture market share and bypass the common ${cityName} hurdle of ${dominantB2BPainPoint}.</p></div></div></div></div><!-- Virtual Integration Setup Block (AEO / Answer Engine Optimization) --><div data-answer-target="true" class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8 mt-6"><h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center"><svg class="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>Virtual Integration Timeline for ${cityName}</h3><p data-answer-target="true" class="text-slate-600 mb-4 text-sm">Because WebWorldMaker operates purely through a cloud infrastructure, businesses in ${cityName} can deploy ${service.title} entirely remotely:</p><ul class="space-y-3"><li class="flex items-start"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">1</span><div><strong class="text-slate-900 block text-sm">Virtual API Handshake</strong><span class="text-xs text-slate-500">Secure connection established to our global gateway from your ${cityName} systems.</span></div></li><li class="flex items-start"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">2</span><div><strong class="text-slate-900 block text-sm">Regulatory Validation</strong><span class="text-xs text-slate-500">Verification of <cite>${localComplianceRequirement}</cite> standards for the region${complianceCitation && renderTemplate`<a${addAttribute(complianceCitation.url, "href")} target="_blank" rel="external nofollow noopener noreferrer" itemprop="citation" class="inline-flex items-center ml-1 text-indigo-500 hover:text-indigo-400 font-medium"${addAttribute(`Official ${complianceCitation.authorityName} Portal`, "title")}>(Verify Source <svg class="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>)</a>`}.</span></div></li><li class="flex items-start"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">3</span><div><strong class="text-slate-900 block text-sm">Cloud Go-Live</strong><span class="text-xs text-slate-500">Full ${service.title} deployment active across ${cityName}.</span></div></li></ul></div><h2 class="text-2xl font-bold text-slate-900 mb-6 font-serif">Service Overview</h2><p class="text-slate-600 leading-relaxed text-lg mb-8">${unescapeHTML(autoLinkText(sanitizeHtml(service.fullDescription)))}</p>${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": `${service.title} in ${cityName}`,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}<h2 class="text-2xl font-bold text-slate-900 mb-6 mt-10">Platform Features</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">${service.features?.map((feature) => renderTemplate`<div class="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-indigo-200 transition-all duration-300"><h3 class="font-bold text-slate-900 mb-2">${feature.title}</h3><p class="text-slate-600 text-sm leading-relaxed mb-3">${feature.description}</p><div class="bg-white p-2 rounded border border-slate-100 text-xs font-semibold text-indigo-700"><span class="text-slate-500 uppercase text-[10px] mr-1 tracking-wider">Benefit:</span> ${feature.benefit}</div></div>`)}</div>${service.pricing && service.pricing.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2 class="text-2xl font-bold text-slate-900 mb-6">Pricing Plans</h2><div class="grid md:grid-cols-3 gap-4 mb-12">${service.pricing.map((plan) => renderTemplate`<div class="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:border-indigo-500 transition-colors"><h4 class="font-bold text-lg text-slate-900 mb-1">${plan.title}</h4><div class="text-2xl font-extrabold text-indigo-600 mb-4">${plan.price}</div><ul class="text-xs text-slate-500 space-y-2">${plan.features.map((f) => renderTemplate`<li class="flex items-center gap-1"><span class="text-green-500">✓</span> ${f}</li>`)}</ul></div>`)}</div>` })}`}<h2 class="text-2xl font-bold text-slate-900 mb-6 mt-12">Frequently Asked Questions</h2><div class="space-y-4" style="content-visibility: auto; contain-intrinsic-size: 800px;">${service.faqs?.map((faq) => renderTemplate`${renderComponent($$result, "FaqAccordion", FaqAccordion, {
		"client:visible": true,
		"question": faq.question,
		"answer": faq.answer,
		"client:component-hydration": "visible",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/FaqAccordion.tsx",
		"client:component-export": "FaqAccordion"
	})}`)}</div></div></article><div class="lg:col-span-1">${renderComponent($$result, "ServiceSidebarForm", ServiceSidebarForm, {
		"client:load": true,
		"serviceTitle": `${service.title} (${cityName})`,
		"client:component-hydration": "load",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/ServiceSidebarForm.tsx",
		"client:component-export": "ServiceSidebarForm"
	})}</div></div>${validNearbyLocations.length > 0 && renderTemplate`<div class="mt-16 pt-16 border-t border-slate-200" style="content-visibility: auto; contain-intrinsic-size: 500px;"><div class="flex items-center justify-between mb-8"><h2 class="text-2xl font-bold text-slate-900">Nearby ${service.title} Availability</h2><span class="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">${cityName} Regional Network</span></div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">${validNearbyLocations.map((loc) => renderTemplate`<a${addAttribute(`/${categoryId}/${serviceId}/${loc.stateSlug}/${loc.citySlug}`, "href")} class="block p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all group"><h4 class="font-bold text-slate-800 group-hover:text-indigo-600 mb-1 truncate"${addAttribute(`${service.title} in ${loc.city}`, "title")}>${loc.city}</h4><div class="flex items-center text-xs text-slate-500"><svg class="w-3 h-3 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>${Math.round(loc.distance)} km away</div></a>`)}</div></div>`}</div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/[categoryId]/[serviceId]/[state]/[city].astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/[categoryId]/[serviceId]/[state]/[city].astro";
var $$url = "/[categoryId]/[serviceId]/[state]/[city]";
//#endregion
//#region \0virtual:astro:page:src/pages/[categoryId]/[serviceId]/[state]/[city]@_@astro
var page = () => _city__exports;
//#endregion
export { page };

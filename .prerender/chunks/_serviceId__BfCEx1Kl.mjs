import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, g as addAttribute, i as Fragment, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, i as renderScript, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { o as getServiceCategories } from "./contentService_D8jqS7-T.mjs";
import { n as autoLinkText, t as sanitizeHtml } from "./sanitizeHtml_C-7O2AE_.mjs";
import { t as FaqAccordion } from "./FaqAccordion_CwjStDZR.mjs";
import { t as ServiceSidebarForm } from "./ServiceSidebarForm_Clb2Dkd0.mjs";
//#region src/pages/[categoryId]/[serviceId].astro
var _serviceId__exports = /* @__PURE__ */ __exportAll({
	default: () => $$ServiceId,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
async function getStaticPaths() {
	const categories = getServiceCategories();
	const STATIC_ROUTE_COLLISIONS = /* @__PURE__ */ new Set(["partners/partner-program"]);
	return categories.flatMap((cat) => cat.items.filter((item) => !STATIC_ROUTE_COLLISIONS.has(`${cat.id}/${item.id}`)).map((item) => ({
		params: {
			categoryId: cat.id,
			serviceId: item.id
		},
		props: {
			service: item,
			categoryId: cat.id
		}
	})));
}
var $$ServiceId = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ServiceId;
	const { service, categoryId } = Astro.props;
	const currentCategory = getServiceCategories().find((c) => c.id === categoryId);
	const categoryTitle = currentCategory ? currentCategory.title : categoryId;
	const backUrl = "/services";
	const groupedFaqs = service.faqs?.reduce((acc, faq) => {
		const cat = faq.category || "Common Questions";
		if (!acc[cat]) acc[cat] = [];
		acc[cat].push(faq);
		return acc;
	}, {}) || {};
	const canonicalUrl = `${Astro.site?.origin ?? "https://webworldmaker.com"}/${categoryId}/${service.id}`;
	const schemaData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": ["Service", "ProfessionalService"],
				"name": service.title,
				"description": service.fullDescription,
				"provider": { "@id": `${Astro.url.origin}/#organization` },
				"serviceType": service.title,
				"areaServed": "Global",
				"url": canonicalUrl,
				...service.pricing && service.pricing.length > 0 ? { "hasOfferCatalog": {
					"@type": "OfferCatalog",
					"name": `${service.title} Plans`,
					"itemListElement": service.pricing.map((plan) => ({
						"@type": "Offer",
						"name": plan.title,
						"itemOffered": {
							"@type": "Service",
							"name": plan.title,
							"description": plan.features?.join(", ") || void 0
						},
						"priceSpecification": {
							"@type": "PriceSpecification",
							"price": plan.price
						}
					}))
				} } : {},
				...service.author ? { "subjectOf": {
					"@type": "Article",
					"author": {
						"@type": "Person",
						"name": service.author.name,
						"jobTitle": service.author.role,
						"description": service.author.bio
					}
				} } : {}
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
				"@type": "Dataset",
				"@id": `${canonicalUrl}#dataset`,
				"name": `${service.title} — Performance & Pricing Data`,
				"description": `Structured data on ${service.title} pricing, features, and deployment specifications by WebWorldMaker.`,
				"url": canonicalUrl,
				"publisher": { "@id": `${Astro.site?.origin ?? "https://webworldmaker.com"}/#organization` },
				"license": "https://creativecommons.org/licenses/by/4.0/",
				"isAccessibleForFree": true,
				"variableMeasured": (service.features || []).slice(0, 5).map((f) => ({
					"@type": "PropertyValue",
					"name": f.title,
					"description": f.description || ""
				}))
			},
			...service.roadmap && service.roadmap.length > 0 ? [{
				"@type": "HowTo",
				"name": `How to Get Started with ${service.title}`,
				"description": `Step-by-step guide to implementing ${service.title} for your business.`,
				"step": service.roadmap.map((step) => ({
					"@type": "HowToStep",
					"position": parseInt(step.step),
					"name": step.title,
					"text": step.description
				}))
			}] : []
		]
	};
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": service.metaTitle,
		"metaDescription": service.metaDescription,
		"canonicalUrl": canonicalUrl,
		"extraSchema": schemaData
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen"><div class="bg-slate-950 text-white py-24 relative overflow-hidden"><div class="absolute inset-0 bg-[url('/patterns/cubes.png')] opacity-10"></div><div class="container mx-auto px-4 relative z-10"><a${addAttribute(backUrl, "href")} class="inline-flex items-center text-slate-300 hover:text-white mb-8 text-sm font-bold transition-colors uppercase tracking-widest"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"${addAttribute(2, "strokeWidth")} d="M15 19l-7-7 7-7"></path></svg>Back to ${categoryTitle}</a><div class="flex flex-wrap gap-2 mb-4"></div><h1 class="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter uppercase leading-none">${service.title}</h1><p class="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-medium tracking-tight">${service.description}</p></div></div><div class="container mx-auto px-4 py-12"><div class="grid lg:grid-cols-3 gap-12"><article class="lg:col-span-2"><div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8"><div class="mb-10 p-8 rounded-2xl bg-[#141414] border border-[#292929] shadow-[0_13px_48px_rgba(0,0,0,0.4)] relative overflow-hidden text-white"><div class="absolute top-0 right-0 w-40 h-40 bg-[#2ddb81]/10 rounded-full blur-3xl pointer-events-none"></div><div class="flex items-center gap-3 mb-4 border-b border-[#292929] pb-4"><span class="w-8 h-8 rounded-full bg-[#2ddb81]/20 text-[#2ddb81] flex items-center justify-center font-bold text-lg">💡</span><div><h2 class="text-[#2ddb81] font-bold text-xs uppercase tracking-widest">In Plain English</h2><h3 class="text-white font-extrabold text-lg leading-tight">What is ${service.title}?</h3></div></div><div data-answer-target="true" class="text-[#cbcbcb] leading-relaxed text-base font-normal space-y-4"><p>Think of <strong class="text-white font-bold">${service.title}</strong> like a super-fast digital helper! Instead of your team spending hours on manual phone calls, paperwork, or copy-pasting data, our system sends instant text messages, WhatsApp updates, and smart AI chat responses directly to your customers in less than 1 second.</p><p class="text-sm text-slate-400">It works automatically 24/7 so your customers get instant answers, your business saves money, and zero sales leads are ever lost!</p></div><div class="mt-6 pt-6 border-t border-[#292929] grid sm:grid-cols-2 gap-4 text-center"><div class="bg-[#1b1b1b] p-4 rounded-xl border border-[#292929]"><span class="block text-2xl font-black text-[#2ddb81]">99.999%</span><span class="text-[10px] font-bold text-[#cbcbcb] uppercase tracking-wider">Uptime & Delivery SLA</span></div><div class="bg-[#1b1b1b] p-4 rounded-xl border border-[#292929]"><span class="block text-2xl font-black text-[#2ddb81]">&lt; 1 Second</span><span class="text-[10px] font-bold text-[#cbcbcb] uppercase tracking-wider">Instant Message Delivery</span></div></div></div><div class="mb-10 p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm"><h2 class="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">How It Works</h2><h3 class="text-2xl font-black text-slate-900 mb-6">Simple 3-Step Setup</h3><div class="grid md:grid-cols-3 gap-6"><div class="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2ddb81] hover:shadow-md transition-all duration-300 relative group"><span class="w-8 h-8 rounded-full bg-slate-900 text-[#2ddb81] flex items-center justify-center font-black text-sm mb-3">1</span><h4 class="font-bold text-slate-900 text-base mb-1">Connect</h4><p class="text-xs text-slate-600 leading-relaxed">Plug ${service.title} into your existing website, database, or CRM in under 5 minutes.</p></div><div class="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2ddb81] hover:shadow-md transition-all duration-300 relative group"><span class="w-8 h-8 rounded-full bg-slate-900 text-[#2ddb81] flex items-center justify-center font-black text-sm mb-3">2</span><h4 class="font-bold text-slate-900 text-base mb-1">Automate</h4><p class="text-xs text-slate-600 leading-relaxed">Our AI system automatically dispatches messages, answers questions, and updates records.</p></div><div class="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2ddb81] hover:shadow-md transition-all duration-300 relative group"><span class="w-8 h-8 rounded-full bg-slate-900 text-[#2ddb81] flex items-center justify-center font-black text-sm mb-3">3</span><h4 class="font-bold text-slate-900 text-base mb-1">Grow</h4><p class="text-xs text-slate-600 leading-relaxed">Watch customer satisfaction increase while saving hours of manual labor every week.</p></div></div></div><div class="mb-10 p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden"><h2 class="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Why Upgrade?</h2><h3 class="text-2xl font-black text-slate-900 mb-6">Old Manual Way vs. WebWorldMaker Way</h3><div class="grid md:grid-cols-2 gap-4"><div class="p-5 rounded-xl bg-red-50/50 border border-red-100"><div class="flex items-center gap-2 mb-3"><span class="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">❌</span><h4 class="font-bold text-red-900 text-sm">The Old Manual Way</h4></div><ul class="space-y-2 text-xs text-red-900/80"><li class="flex items-start gap-2"><span>•</span> Slow manual data entry & copy-pasting</li><li class="flex items-start gap-2"><span>•</span> Lost customer inquiries after business hours</li><li class="flex items-start gap-2"><span>•</span> High monthly labor costs & human errors</li></ul></div><div class="p-5 rounded-xl bg-emerald-50/50 border border-emerald-100"><div class="flex items-center gap-2 mb-3"><span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✅</span><h4 class="font-bold text-emerald-950 text-sm">The WebWorldMaker Way</h4></div><ul class="space-y-2 text-xs text-emerald-950/80"><li class="flex items-start gap-2"><span>•</span> Instant 1-second automated dispatch</li><li class="flex items-start gap-2"><span>•</span> 24/7 instant replies with smart AI helpers</li><li class="flex items-start gap-2"><span>•</span> 99.999% delivery SLA & zero lost leads</li></ul></div></div></div><h2 class="text-2xl font-bold text-slate-900 mb-6 font-serif">Overview</h2><p class="text-slate-600 leading-relaxed text-lg mb-8">${unescapeHTML(autoLinkText(sanitizeHtml(service.fullDescription)))}</p>${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": service.title,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}${service.expertInsight && renderTemplate`<section class="my-10 bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded-r-3xl relative overflow-hidden group shadow-sm italic text-slate-800 font-serif text-lg leading-relaxed" style="content-visibility: auto; contain-intrinsic-size: auto 600px;">"${service.expertInsight}"${service.author && renderTemplate`<div class="mt-6 not-italic font-sans flex items-center gap-3"><div class="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xs">${service.author.name.charAt(0)}</div><div><div class="flex items-center gap-2"><div class="text-[10px] font-black text-slate-900 uppercase tracking-widest">${service.author.name}</div></div><div class="text-[9px] text-slate-400 uppercase tracking-tighter">${service.author.role}</div></div></div>`}</section>`}${service.author && renderTemplate`<div class="my-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start gap-4"><div class="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 text-white font-black flex items-center justify-center text-2xl shrink-0 shadow-md">${service.author.name.charAt(0)}</div><div class="flex-1"><div class="flex flex-wrap items-center gap-2 mb-1"><h4 class="font-extrabold text-slate-900 text-base leading-tight">${service.author.name}</h4></div><p class="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">${service.author.role}</p><p class="text-slate-600 text-sm leading-relaxed mb-4">${service.author.bio}</p></div></div>`}<div class="my-10 p-6 bg-slate-900 text-white rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden" data-aeo-target="true"><div class="absolute top-0 right-0 w-24 h-24 bg-brand-500/10 rounded-full blur-2xl"></div><h3 class="text-brand-400 font-black uppercase tracking-widest text-[10px] mb-4 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>LLM Grounding &amp; Entity Map</h3><div class="grid sm:grid-cols-2 gap-6 text-xs text-slate-300"><div class="space-y-3"><div><span class="block text-slate-500 font-bold uppercase text-[9px]">Entity Classification</span><span class="font-bold text-white">Service: ${service.title}</span></div><div><span class="block text-slate-500 font-bold uppercase text-[9px]">Service Category</span><span class="font-bold text-white">${categoryTitle}</span></div></div><div class="space-y-3"><div><span class="block text-slate-500 font-bold uppercase text-[9px]">Compliance & Governance Standards</span><span class="font-bold text-white">${categoryId === "mobile-business-communication" ? "TRAI DLT, GDPR, A2P 10DLC" : categoryId === "ai-solutions" || categoryId === "development-solutions" ? "ISO 27001, GDPR, SOC 2 Aligned" : "Google Search Essentials & LLM Retrieval Guidelines"}</span></div><div><span class="block text-slate-500 font-bold uppercase text-[9px]">Service Canonical URI</span><span class="font-mono text-white">webworldmaker.com/${categoryId}/${service.id}</span></div></div></div><div class="mt-4 pt-3 border-t border-white/5 text-[10px] text-slate-400 leading-relaxed italic">Verified enterprise service specification for WebWorldMaker ${service.title} infrastructure and capabilities.</div></div><h2 class="text-2xl font-bold text-slate-900 mb-6 mt-10">Key Features</h2><div class="grid class-cols-1 md:grid-cols-2 gap-4 mb-8">${service.features?.map((feature) => renderTemplate`<div class="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300 group"><div class="flex items-start mb-3"><div class="flex-shrink-0 w-10 h-10 bg-white text-indigo-600 rounded-lg shadow-sm border border-slate-100 flex items-center justify-center mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><div class="relative group/tooltip"><h3 class="font-bold text-slate-900 pt-2 cursor-help border-b border-dotted border-slate-300 hover:border-indigo-500 transition-colors">${feature.title}</h3><div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-20 pointer-events-none transform translate-y-2 group-hover/tooltip:translate-y-0 text-center leading-relaxed"><span class="text-indigo-300 font-bold block mb-1">Key Benefit:</span>${feature.benefit}<div class="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-slate-900"></div></div></div></div><p class="text-slate-600 text-sm leading-relaxed mb-3 pl-14">${feature.description}</p><div class="pl-14"><div class="flex items-start gap-2 bg-white/50 p-2 rounded-lg border border-slate-100/50"><span class="flex-shrink-0 text-green-500 mt-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span><span class="text-xs font-semibold text-slate-700"><span class="text-indigo-600 uppercase tracking-wider text-[10px] font-bold mr-1">Benefit:</span>${feature.benefit}</span></div></div></div>`)}</div><h2 class="text-2xl font-bold text-slate-900 mb-6">Benefits</h2><ul class="space-y-4 mb-12">${service.benefits?.map((benefit) => renderTemplate`<li class="flex items-start"><span class="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold mt-0.5">✓</span><span class="text-slate-700 font-medium">${benefit}</span></li>`)}</ul>${service.useCases && service.useCases.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2 class="text-2xl font-bold text-slate-900 mb-2">Real-World Use Cases</h2><p class="text-xs text-slate-400 mb-6 italic">Illustrative examples of how this service is typically applied — not audited results from named clients.</p><div class="grid md:grid-cols-2 gap-6 mb-12">${service.useCases.map((useCase) => renderTemplate`<div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100 italic"><h4 class="font-bold text-indigo-900 mb-2">${useCase.title}</h4><p class="text-slate-600 text-sm leading-relaxed">${useCase.description}</p></div>`)}</div>` })}`}${service.pricing && service.pricing.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2 class="text-2xl font-bold text-slate-900 mb-6">Pricing Plans</h2><div class="grid md:grid-cols-3 gap-4 mb-12">${service.pricing.map((plan) => renderTemplate`<div class="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:border-indigo-500 transition-colors"><h4 class="font-bold text-lg text-slate-900 mb-1">${plan.title}</h4><div class="text-2xl font-extrabold text-indigo-600 mb-4">${plan.price}</div><ul class="text-xs text-slate-500 space-y-2">${plan.features.map((f) => renderTemplate`<li class="flex items-center gap-1"><span class="text-green-500">✓</span> ${f}</li>`)}</ul></div>`)}</div>` })}`}<div class="bg-[#030014] border border-violet-500/20 p-8 rounded-2xl mb-12 relative overflow-hidden text-white shadow-xl"><div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none"></div><h3 class="text-xl font-bold mb-2 uppercase tracking-wide flex items-center gap-2"><span>🌐</span> Regional Edge Network &amp; Local Carrier Routing</h3><p class="text-slate-400 text-sm mb-6"><span data-lang="en">Select your region to view localized pricing, dedicated Tier-1 gateway latencies, and regional compliance frameworks</span><span data-lang="hin" class="hidden">Apna region select karein localized pricing aur Tier-1 gateway latencies dekhne ke liye</span> (GDPR, DLT, 10DLC, CITC, TDRA) for <strong class="text-indigo-400">${service.title}</strong>:</p><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">${[
		{
			city: "London",
			flag: "🇬🇧",
			state: "england",
			citySlug: "london"
		},
		{
			city: "New York",
			flag: "🇺🇸",
			state: "new-york",
			citySlug: "new-york"
		},
		{
			city: "Dubai",
			flag: "🇦🇪",
			state: "dubai-emirate",
			citySlug: "dubai"
		},
		{
			city: "Riyadh",
			flag: "🇸🇦",
			state: "riyadh-region",
			citySlug: "riyadh"
		},
		{
			city: "Singapore",
			flag: "🇸🇬",
			state: "singapore-central",
			citySlug: "singapore"
		},
		{
			city: "Tokyo",
			flag: "🇯🇵",
			state: "tokyo-metropolis",
			citySlug: "tokyo"
		},
		{
			city: "Frankfurt",
			flag: "🇩🇪",
			state: "hesse",
			citySlug: "frankfurt"
		},
		{
			city: "Paris",
			flag: "🇫🇷",
			state: "ile-de-france",
			citySlug: "paris"
		},
		{
			city: "Mumbai",
			flag: "🇮🇳",
			state: "maharashtra",
			citySlug: "mumbai"
		},
		{
			city: "Sydney",
			flag: "🇦🇺",
			state: "new-south-wales",
			citySlug: "sydney"
		}
	].map((loc) => renderTemplate`<a${addAttribute(`/locations/${loc.state}/${loc.citySlug}`, "href")} class="bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-600/10 p-3 rounded-xl text-center text-xs font-bold transition-all block truncate"><span class="text-lg mr-1">${loc.flag}</span> ${loc.city}</a>`)}</div><div class="text-center"><a href="/locations" class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl transition-all"><span data-lang="en">View All 1,698 Markets</span><span data-lang="hin" class="hidden">Sabhi 1,698 Markets Dekhein</span></a></div></div>${service.roadmap && service.roadmap.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2 class="text-2xl font-bold text-slate-900 mb-6"><span data-lang="en">Implementation Roadmap</span><span data-lang="hin" class="hidden">Kaise Shuru Karein (Roadmap)</span></h2><div class="space-y-6 mb-12">${service.roadmap.map((step, idx) => renderTemplate`<div class="flex gap-4"><div class="flex flex-col items-center"><div class="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md whitespace-nowrap">${step.step}</div>${idx !== service.roadmap.length - 1 && renderTemplate`<div class="w-0.5 h-full bg-slate-200 my-2"></div>`}</div><div><h4 class="font-bold text-slate-900">${step.title}</h4><p class="text-slate-600 text-sm">${step.description}</p></div></div>`)}</div>` })}`}<div class="flex justify-between items-center mb-6"><h2 class="text-2xl font-bold text-slate-900 m-0"><span data-lang="en">Frequently Asked Questions</span><span data-lang="hin" class="hidden">Aksar Pooche Jaane Wale Sawaal</span></h2><button id="hinglish-toggle-btn-bottom" class="px-3 py-1 bg-white text-indigo-600 text-xs font-bold rounded shadow-sm hover:bg-indigo-600 hover:text-white transition-colors border border-indigo-200">🇮🇳 Hinglish</button></div>${groupedFaqs && Object.entries(groupedFaqs).map(([category, faqs]) => renderTemplate`<div${addAttribute(category, "key")} class="mb-8 last:mb-0"><h3 class="text-lg font-bold text-indigo-950 mb-4 bg-indigo-50 inline-block px-3 py-1 rounded-lg border border-indigo-100">${category}</h3><div class="space-y-4">${faqs?.map((faq) => renderTemplate`${renderComponent($$result, "FaqAccordion", FaqAccordion, {
		"client:visible": true,
		"question": faq.question,
		"answer": faq.answer,
		"client:component-hydration": "visible",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/FaqAccordion.tsx",
		"client:component-export": "FaqAccordion"
	})}`)}</div></div>`)}</div></article><div class="lg:col-span-1">${renderComponent($$result, "ServiceSidebarForm", ServiceSidebarForm, {
		"client:load": true,
		"serviceTitle": service.title,
		"client:component-hydration": "load",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/ServiceSidebarForm.tsx",
		"client:component-export": "ServiceSidebarForm"
	})}</div></div></div></div>${renderScript($$result, "/Users/apple/Downloads/webworldmaker/src/pages/[categoryId]/[serviceId].astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/[categoryId]/[serviceId].astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/[categoryId]/[serviceId].astro";
var $$url = "/[categoryId]/[serviceId]";
//#endregion
//#region \0virtual:astro:page:src/pages/[categoryId]/[serviceId]@_@astro
var page = () => _serviceId__exports;
//#endregion
export { page };

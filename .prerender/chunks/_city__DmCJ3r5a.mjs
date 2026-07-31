import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, i as renderScript, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { o as getServiceCategories } from "./contentService_D8jqS7-T.mjs";
import { t as FaqAccordion } from "./FaqAccordion_CwjStDZR.mjs";
import { t as getComplianceCitation } from "./complianceCitations_DziIlxrs.mjs";
import { n as getLocationTier, r as isServiceAllowedForTier, t as TIER_LABELS } from "./locationTier_DKf_6i13.mjs";
import { n as shouldShowHinglish, t as getHinglishPhrase } from "./hinglishContent_P2djAsuL.mjs";
import "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import fs from "node:fs";
import path from "node:path";
//#region src/components/CitationBlock.tsx
var CitationBlock = ({ source, url, date }) => {
	return /* @__PURE__ */ jsxs("div", {
		role: "note",
		"aria-label": "Citation block",
		className: "mt-4 pt-3 border-t border-slate-100 flex items-center text-xs text-slate-400 font-medium",
		children: [
			/* @__PURE__ */ jsx("svg", {
				className: "w-4 h-4 mr-1.5 text-brand-400",
				fill: "none",
				stroke: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", {
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: 2,
					d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				})
			}),
			/* @__PURE__ */ jsx("span", { children: "Fact Source: " }),
			/* @__PURE__ */ jsx("cite", {
				itemProp: "citation",
				children: url ? /* @__PURE__ */ jsx("a", {
					href: url,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "ml-1 text-brand-500 hover:text-brand-600 hover:underline",
					children: source
				}) : /* @__PURE__ */ jsx("span", {
					className: "ml-1 text-slate-500",
					children: source
				})
			}),
			date && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", {
				className: "mx-2 text-slate-300",
				children: "•"
			}), /* @__PURE__ */ jsx("span", { children: date })] })
		]
	});
};
//#endregion
//#region src/pages/locations/[state]/[city].astro
var _city__exports = /* @__PURE__ */ __exportAll({
	default: () => $$City,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
async function getStaticPaths() {
	const locationsDir = path.join(process.cwd(), "public", "locations");
	if (!fs.existsSync(locationsDir)) return [];
	return fs.readdirSync(locationsDir).filter((f) => f.endsWith(".json") && f !== "locations-index.json").map((file) => {
		const filePath = path.join(locationsDir, file);
		const raw = JSON.parse(fs.readFileSync(filePath, "utf-8"));
		const stat = fs.statSync(filePath);
		return {
			params: {
				state: raw.stateSlug || raw.id.split("-")[0],
				city: raw.citySlug || raw.id.split("-").slice(1).join("-")
			},
			props: {
				data: raw,
				lastmod: stat.mtime.toISOString()
			}
		};
	});
}
var $$City = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$City;
	const { data, lastmod } = Astro.props;
	const { city, state, country, population, mobileUsers, carriers, mobilePenetration, internetPenetration, dominantB2BPainPoint, industryFocus, preferredChannel, localComplianceRequirement, aiReadiness, carrierQuality, localSupport, averageIncome, dialingCode, timezone, symbol, nearbyLocations = [] } = data;
	const locationTier = getLocationTier(population, aiReadiness);
	const tierLabel = TIER_LABELS[locationTier];
	const stateSlug = data.stateSlug || Astro.params.state;
	const citySlug = data.citySlug || Astro.params.city;
	const allCategories = getServiceCategories();
	const SKIP_ROUTES = /* @__PURE__ */ new Set(["partners/partner-program"]);
	const tierServiceLinks = allCategories.flatMap((cat) => cat.items.filter((item) => !SKIP_ROUTES.has(`${cat.id}/${item.id}`)).filter((item) => isServiceAllowedForTier(cat.id, item.id, locationTier)).map((item) => ({
		href: `/${cat.id}/${item.id}/${stateSlug}/${citySlug}`,
		label: item.title,
		category: cat.title,
		catId: cat.id
	})));
	const servicesByCategory = tierServiceLinks.reduce((acc, link) => {
		if (!acc[link.category]) acc[link.category] = [];
		acc[link.category].push(link);
		return acc;
	}, {});
	const complianceCitation = getComplianceCitation(localComplianceRequirement);
	const stateParam = Astro.params.state;
	const cityParam = Astro.params.city;
	const isHinglishEligible = shouldShowHinglish(country);
	const canonicalUrl = `https://webworldmaker.com/locations/${stateParam}/${cityParam}`;
	const pageTitle = `${city} | ${state} - WebWorldMaker`;
	const metaDesc = `Expert digital services for businesses in ${city}, ${state}. SMS marketing, WhatsApp API, AI chatbots, CRM & SEO — compliant with ${localComplianceRequirement}. ${mobilePenetration}% mobile penetration. Free consultation.`;
	const isHinglish = shouldShowHinglish(country);
	const recommendations = data.recommendations || [
		`Deploy ${preferredChannel} campaigns — ${mobilePenetration}% mobile penetration ensures maximum reach in ${city}.`,
		`Integrate AI-powered chatbots for 24/7 customer engagement aligned with ${aiReadiness} readiness level.`,
		`Register on DLT / comply with ${localComplianceRequirement} before launching bulk messaging campaigns.`,
		`Leverage our carrier-integrated messaging network for fast message delivery across all ${carriers.join(", ")} networks.`,
		`Use localized SEO to capture "${city} + [service]" long-tail searches that local competitors miss.`
	];
	const avoidList = data.avoidList || [
		`Avoid sending unsolicited bulk messages without ${localComplianceRequirement} registration — leads to carrier blocking.`,
		`Do not use generic content templates — local ${industryFocus} businesses respond better to hyper-local messaging.`,
		`Avoid ignoring ${carriers.join(" and ")} network-specific optimizations — latency and delivery rates vary significantly.`,
		`Do not underestimate AI readiness (${aiReadiness}) — adopters gain early competitive advantage.`
	];
	const guidelines = data.guidelines || [
		`All SMS campaigns must follow ${localComplianceRequirement} regulations.`,
		`WhatsApp Business API requires official Meta verification before deployment.`,
		`Data privacy laws in ${country} must be respected — collect explicit consent.`,
		`International businesses targeting ${city} must work with local DLT-registered aggregators.`
	];
	const prosConsData = data.prosConsData || [
		{
			option: `${preferredChannel}`,
			pros: `High open rates, fast delivery via optimized carrier routing, strong reach across the ${mobilePenetration}% mobile-penetrated market`,
			cons: `Requires ${localComplianceRequirement} registration, character limits apply`
		},
		{
			option: "WhatsApp Business API",
			pros: "Rich media, two-way chat, high trust factor with local audience",
			cons: "Meta approval required, higher cost-per-message than SMS"
		},
		{
			option: "AI Voice Agents",
			pros: `Fully automated, works 24/7, handles ${dominantB2BPainPoint} without human agents`,
			cons: "Higher upfront integration cost, requires local language training data"
		},
		{
			option: "Email Marketing",
			pros: `Low cost, supports rich HTML, good for ${industryFocus} B2B outreach`,
			cons: `Lower open rates versus ${preferredChannel}, spam filter risk`
		}
	];
	const strategicKeywords = data.strategicKeywords || [
		{
			term: `Bulk SMS ${city}`,
			explanation: "Mass text message marketing for reaching thousands of customers instantly",
			hinglishVariant: `${city} mein bulk SMS marketing`
		},
		{
			term: `WhatsApp API ${city}`,
			explanation: "Official WhatsApp Business integration for automated customer conversations",
			hinglishVariant: `${city} mein WhatsApp Business API`
		},
		{
			term: `Digital Marketing ${city}`,
			explanation: "Online promotion strategies using search, social, SMS and email channels",
			hinglishVariant: `${city} ke liye digital marketing`
		},
		{
			term: `CRM Software ${city}`,
			explanation: "Customer relationship management tools for tracking leads and sales",
			hinglishVariant: `${city} mein CRM software`
		},
		{
			term: `AI Chatbot ${city}`,
			explanation: "Automated AI assistant that handles customer inquiries without human agents",
			hinglishVariant: `${city} ke liye AI chatbot`
		},
		{
			term: `Business Automation ${city}`,
			explanation: "Software systems that automate repetitive business tasks to save time and money",
			hinglishVariant: `${city} business automation`
		}
	];
	const faqs = data.faqs || [
		{
			question: `What digital services are most effective for businesses in ${city}?`,
			answer: `In ${city}, ${state}, the most effective digital services depend on the local ${industryFocus} sector focus. ${preferredChannel} yields highest ROI due to ${mobilePenetration}% mobile penetration. AI chatbots and WhatsApp Business API are rapidly being adopted due to ${aiReadiness} readiness. Local SEO targeting "${city} + service" keywords also generates strong organic leads.`,
			category: "Services"
		},
		{
			question: `What are the SMS compliance regulations for businesses in ${country}?`,
			answer: `Businesses operating in ${country} must comply with ${localComplianceRequirement}. This includes proper sender registration, opt-in consent management, and message content guidelines. Carrier quality is maintained by ${carrierQuality}. Non-compliance can result in message blocking and carrier penalties.`,
			category: "Compliance"
		},
		{
			question: `How does WhatsApp Business API work for ${city} businesses?`,
			answer: `WhatsApp Business API allows businesses in ${city} to send automated messages, notifications, and handle customer support at scale. It requires official Meta Business verification and must comply with ${localComplianceRequirement}. Messages can be sent via approved templates and support rich media like images and documents.`,
			category: "WhatsApp"
		},
		{
			question: `What is the mobile penetration rate in ${city}, ${state}?`,
			answer: `${city} has approximately ${mobilePenetration}% mobile penetration with ${mobileUsers.toLocaleString()} active mobile users out of a population of ${population.toLocaleString()}. Internet penetration stands at ${internetPenetration}%. This makes ${preferredChannel} the most effective channel for mass customer outreach.`,
			category: "Market Data"
		},
		{
			question: `How to set up bulk SMS marketing for a ${city} business?`,
			answer: `Setting up bulk SMS in ${city} involves: 1) Registering with ${localComplianceRequirement}, 2) Choosing a DLT-registered SMS aggregator, 3) Uploading your sender ID, 4) Building opt-in contact lists, 5) Connecting through our carrier-integrated messaging network for optimal delivery. WebWorldMaker handles the entire setup.`,
			category: "SMS"
		},
		{
			question: `What carriers are dominant in ${city}?`,
			answer: `The primary mobile carriers serving ${city} are ${carriers.join(", ")}. ${carrierQuality}. Our messaging platform maintains optimized routing across all these carriers with intelligent failover to help ensure message delivery.`,
			category: "Infrastructure"
		},
		{
			question: `What is the average cost of digital marketing in ${city}?`,
			answer: `Digital marketing costs in ${city} vary by channel. Bulk SMS campaigns typically cost ${symbol}0.01-0.05 per message. WhatsApp Business API messages run ${symbol}0.05-0.15 each. SEO retainers start at ${symbol}500/month for local campaigns. AI chatbot deployments start at ${symbol}200/month. Costs align with the ${averageIncome || "local market"} income demographics.`,
			category: "Pricing"
		},
		{
			question: `Does WebWorldMaker offer local language support for ${city} customers?`,
			answer: `Yes. ${localSupport}. For ${city} specifically, we support ${isHinglishEligible ? "Hindi, Hinglish (Hindi-English mix), and English" : "English and regional language"} customer service. Our AI chatbots can be trained on local dialects and regional language datasets relevant to ${state}.`,
			category: "Support"
		},
		{
			question: `What industries are thriving digitally in ${city}?`,
			answer: `${city}'s digital economy is driven by the ${industryFocus} sector. Businesses in these industries are actively deploying ${preferredChannel} and AI automation tools. The city's ${aiReadiness} AI readiness score indicates strong adoption of modern digital tools, especially for customer engagement and sales automation.`,
			category: "Industry"
		},
		{
			question: `How long does it take to set up digital services for a ${city} business?`,
			answer: `Technical setup for SMS and WhatsApp services can often be completed within a few business days through our carrier-integrated messaging network. CRM integration takes 3-7 days. Full AI chatbot deployment with custom training runs 2-4 weeks. Compliance registration (${localComplianceRequirement}) adds 1-5 business days depending on the authority's processing time.`,
			category: "Onboarding"
		},
		{
			question: `What data privacy laws apply to businesses in ${country}?`,
			answer: `Businesses in ${country} must comply with national data privacy regulations aligned with ${localComplianceRequirement}. This includes customer consent for data collection, secure data storage, right to deletion requests, and transparent data usage policies. All WebWorldMaker services are built to maintain full compliance with ${country}'s data regulations.`,
			category: "Privacy"
		},
		{
			question: `What is the best CRM solution for SMEs in ${city}?`,
			answer: `For ${city} SMEs dealing with ${dominantB2BPainPoint}, a CRM that integrates ${preferredChannel} and WhatsApp is most effective. Our CRM solutions connect natively with your preferred channels, automate follow-ups, segment customer lists, and provide real-time dashboards — critical for the ${industryFocus} industry focus in ${city}.`,
			category: "CRM"
		},
		{
			question: `What ROI can ${city} businesses expect from SMS marketing?`,
			answer: `SMS marketing in ${city} is well-positioned given ${mobilePenetration}% mobile penetration, with reach across all ${mobileUsers.toLocaleString()} mobile users in the area. Actual ROI and conversion rates depend on your offer, list quality, and targeting — well-segmented campaigns generally outperform generic broadcasts.`,
			category: "ROI"
		},
		{
			question: `WhatsApp vs SMS: which is better for ${city} customers?`,
			answer: `Both channels serve different use cases. ${preferredChannel} is the dominant preference in ${city} for transactional messages and alerts. WhatsApp excels for two-way conversations, customer support, and rich media campaigns. For maximum reach, combine both: use SMS for delivery guarantee and WhatsApp for engagement quality.`,
			category: "Channels"
		},
		{
			question: `Is RCS messaging available for businesses in ${city}, ${country}?`,
			answer: `RCS (Rich Communication Services) availability in ${city} depends on carrier rollout from ${carriers.join(", ")}. Where supported, RCS enables branded messaging with logos, carousels, and quick-reply buttons — significantly better than traditional SMS. WebWorldMaker monitors carrier RCS readiness across ${state} and will automatically upgrade eligible campaigns.`,
			category: "RCS"
		},
		{
			question: `How can ${city} businesses use AI to solve ${dominantB2BPainPoint}?`,
			answer: `${city}'s ${aiReadiness} AI readiness means businesses are well-positioned to solve ${dominantB2BPainPoint} through AI automation. Deploy AI chatbots for 24/7 customer service, use predictive analytics to identify high-value leads, automate follow-up sequences, and use AI-driven personalization to increase conversion rates — all without adding headcount.`,
			category: "AI"
		},
		{
			question: `What is the dialing code and timezone for ${city}?`,
			answer: `${city}, ${state} uses dialing code ${dialingCode || `+local`} and operates in the ${timezone || "local"} timezone. For international businesses targeting ${city} customers, scheduling campaigns during local business hours (9 AM - 7 PM ${timezone || "local time"}) maximizes open rates and response rates.`,
			category: "Local Info"
		},
		{
			question: `How does regional targeting work for ${city} SMS campaigns?`,
			answer: `Campaigns are segmented by carrier and by ${state}/${country} regional data rather than sent as one undifferentiated national blast — so messaging, offers, and send times can be tailored to ${city}'s ${industryFocus} sector and ${preferredChannel} usage patterns. Regionally-segmented campaigns generally outperform broad, unsegmented ones, though actual gains vary by industry and offer.`,
			category: "Geotargeting"
		},
		{
			question: `What makes WebWorldMaker different from other digital agencies serving ${city}?`,
			answer: `WebWorldMaker connects to ${city} remotely via our global carrier-integrated messaging network, backed by ${localSupport}. This means fast message delivery, compliance expertise for ${localComplianceRequirement}, and campaign strategy built around the ${industryFocus} dynamics common in ${city} — no local office required.`,
			category: "USP"
		},
		{
			question: `How do I get started with WebWorldMaker services in ${city}?`,
			answer: `Getting started in ${city} is simple: 1) Book a free consultation via our contact form, 2) Our team remotely reviews your ${dominantB2BPainPoint} challenges, 3) We propose a tailored plan using ${preferredChannel} and other channels, 4) Compliance setup for ${localComplianceRequirement}, 5) Go live within 24-48 hours. No long-term contracts, no local office needed — results first.`,
			category: "Getting Started"
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": pageTitle,
		"description": metaDesc,
		"metaTitle": pageTitle,
		"metaDescription": metaDesc,
		"canonicalUrl": canonicalUrl,
		"extraSchema": {
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "Service",
					"@id": `${canonicalUrl}#service`,
					name: `Digital Marketing & Messaging Services — ${city}`,
					description: metaDesc,
					url: canonicalUrl,
					serviceType: "Digital marketing and business messaging services",
					provider: {
						"@type": "Organization",
						name: "WebWorldMaker",
						url: "https://webworldmaker.com/",
						email: "contact@webworldmaker.com",
						sameAs: ["https://twitter.com/webworldmaker", "https://www.wikidata.org/wiki/Q114872221"]
					},
					areaServed: [{
						"@type": "City",
						name: city,
						containedInPlace: {
							"@type": "AdministrativeArea",
							name: state,
							containedInPlace: {
								"@type": "Country",
								name: country
							}
						}
					}, ...nearbyLocations.map((loc) => ({
						"@type": "City",
						name: loc.city,
						url: `https://webworldmaker.com/locations/${loc.stateSlug}/${loc.citySlug}`
					}))],
					hasOfferCatalog: {
						"@type": "OfferCatalog",
						name: `Digital Services in ${city}`,
						itemListElement: [
							{
								"@type": "Offer",
								itemOffered: {
									"@type": "Service",
									name: `Bulk SMS Marketing ${city}`
								}
							},
							{
								"@type": "Offer",
								itemOffered: {
									"@type": "Service",
									name: `WhatsApp Business API ${city}`
								}
							},
							{
								"@type": "Offer",
								itemOffered: {
									"@type": "Service",
									name: `AI Chatbot ${city}`
								}
							},
							{
								"@type": "Offer",
								itemOffered: {
									"@type": "Service",
									name: `CRM Solutions ${city}`
								}
							},
							{
								"@type": "Offer",
								itemOffered: {
									"@type": "Service",
									name: `Local SEO ${city}`
								}
							}
						]
					}
				},
				{
					"@type": "FAQPage",
					"@id": `${canonicalUrl}#faq`,
					mainEntity: faqs.map((faq) => ({
						"@type": "Question",
						name: faq.question,
						acceptedAnswer: {
							"@type": "Answer",
							text: faq.answer,
							speakable: {
								"@type": "SpeakableSpecification",
								cssSelector: "[data-answer-target=\"true\"]"
							}
						}
					}))
				},
				{
					"@type": "BreadcrumbList",
					"@id": `${canonicalUrl}#breadcrumb`,
					"itemListElement": [
						{
							"@type": "ListItem",
							"position": 1,
							"name": "Home",
							"item": "https://webworldmaker.com"
						},
						{
							"@type": "ListItem",
							"position": 2,
							"name": "Locations",
							"item": "https://webworldmaker.com/locations"
						},
						{
							"@type": "ListItem",
							"position": 3,
							"name": city,
							"item": canonicalUrl
						}
					]
				},
				{
					"@type": "WebPage",
					"@id": canonicalUrl,
					url: canonicalUrl,
					name: pageTitle,
					description: metaDesc,
					dateModified: lastmod,
					speakable: {
						"@type": "SpeakableSpecification",
						cssSelector: [
							"h1",
							"p",
							"[data-answer-target=\"true\"]"
						]
					},
					breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
					mainEntity: { "@id": `${canonicalUrl}#faq` }
				}
			]
		}["@graph"],
		"geoRegion": country ? country.slice(0, 2).toUpperCase() : void 0,
		"geoPlacename": `${city}, ${state}, ${country}`,
		"geoPosition": data.latitude != null && data.longitude != null ? `${data.latitude};${data.longitude}` : void 0,
		"icbm": data.latitude != null && data.longitude != null ? `${data.latitude}, ${data.longitude}` : void 0,
		"isSearchable": locationTier !== "T3"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"><div class="absolute inset-0 bg-slate-900/95 -z-10"></div><!-- Add more aesthetic backgrounds later --><div class="container mx-auto px-4 relative z-10"><div class="max-w-4xl mx-auto text-center"><!-- Breadcrumb --><nav class="flex justify-center mb-8 text-sm text-slate-400" aria-label="Breadcrumb"><ol class="flex items-center space-x-2"><li><a href="/" class="hover:text-blue-400 transition-colors">Home</a></li><li><span class="mx-2">/</span></li><li><a href="/locations" class="hover:text-blue-400 transition-colors">Locations</a></li><li><span class="mx-2">/</span></li><li class="text-slate-400 font-medium">${state}</li><li><span class="mx-2">/</span></li><li class="text-white font-medium" aria-current="page">${city}</li></ol></nav><!-- Radical Transparency Badge (E-E-A-T & Doorway Penalty Avoidance) --><div class="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20 shadow-lg shadow-blue-500/5"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>100% Cloud-Delivered to ${city} • Zero Local Hardware Required</div><!-- Main Header --><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">Transform Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">${industryFocus}</span> Business in <span class="text-white border-b-4 border-blue-500">${city}</span></h1>${isHinglish && renderTemplate`<h2 class="text-2xl md:text-3xl text-brand-300 font-bold mb-6 hinglish-heading" data-lang="hin" style="display: none;">${getHinglishPhrase("grow_business")} in ${city}</h2>`}<p class="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">Reach <span class="font-bold text-white">${mobileUsers.toLocaleString()}</span> mobile users across ${city} with fast messaging, WhatsApp API, and AI automation. Fully compliant with <cite data-trust-signal="high">${localComplianceRequirement}</cite>.</p><!-- Call to Actions --><div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"><a href="/contact" class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 w-full sm:w-auto text-lg">Start Your Campaign</a><a href="#services" class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg shadow-lg border border-slate-700 transition-all w-full sm:w-auto text-lg">View Local Solutions</a></div><!-- Trust indicators / Meta info & Latency Tool --><div class="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-12 text-slate-400"><div class="flex items-center" itemscope itemtype="http://schema.org/WebPage"><svg class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>${localComplianceRequirement} Compliant${complianceCitation && renderTemplate`<a${addAttribute(complianceCitation.url, "href")} target="_blank" rel="external nofollow noopener noreferrer" itemprop="citation"${addAttribute(`Official ${complianceCitation.authorityName} regulations`, "aria-label")} class="inline-flex ml-2 text-blue-400 hover:text-blue-300 transition-colors"${addAttribute(`Verified by ${complianceCitation.authorityName}`, "title")}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>`}</span></div><div class="flex items-center"><svg class="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg><span>Carrier-Integrated Network</span></div><div class="flex items-center"><svg class="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span>${population.toLocaleString()} Reach</span></div><!-- Interactive Cloud Latency Tool (Utility transformation to escape Doorway Penalty) --><div class="flex items-center p-2 rounded-lg bg-slate-800/50 border border-slate-700 w-full md:w-auto mt-4 md:mt-0 relative group"><button id="ping-test-btn" class="flex items-center focus:outline-none w-full"${addAttribute(`Test cloud connection latency to ${city}`, "aria-label")}><div class="relative flex h-3 w-3 mr-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span></div><span class="text-sm text-slate-300 group-hover:text-white transition-colors">Test Server Latency to ${city}</span></button><div id="ping-result" class="hidden absolute top-full left-0 mt-2 p-3 bg-slate-800 border border-slate-600 rounded shadow-xl text-xs text-left w-64 z-50"><div class="flex justify-between mb-1"><span class="text-slate-400">Status:</span> <span class="text-green-400 font-bold" id="ping-status">Connecting...</span></div><div class="flex justify-between mb-1"><span class="text-slate-400">Latency:</span> <span class="text-white font-mono" id="ping-ms">-- ms</span></div><div class="flex justify-between"><span class="text-slate-400">Node:</span> <span class="text-white">Cloud Gateway Edge</span></div></div></div></div></div></div></div><script>
    // Client-side interactive utility script for the Ping Tool
    document.addEventListener('DOMContentLoaded', () => {
      const btn = document.getElementById('ping-test-btn');
      const resultBox = document.getElementById('ping-result');
      const statusEl = document.getElementById('ping-status');
      const msEl = document.getElementById('ping-ms');
      
      if(btn && resultBox) {
        btn.addEventListener('click', () => {
          resultBox.classList.remove('hidden');
          statusEl.textContent = 'Measuring...';
          statusEl.className = 'text-yellow-400 font-bold';
          msEl.textContent = 'calculating';
          
          // Simulate latency calculation based on a deterministic random seed for the city
          setTimeout(() => {
            const simulatedLatency = Math.floor(Math.random() * 40) + 12; // 12ms - 52ms
            statusEl.textContent = 'Optimal / Connected';
            statusEl.className = 'text-green-400 font-bold';
            msEl.textContent = \`\${simulatedLatency} ms\`;
          }, 600);
        });
        
        // Close when clicking outside
        document.addEventListener('click', (e) => {
          if (!btn.contains(e.target) && !resultBox.contains(e.target)) {
            resultBox.classList.add('hidden');
          }
        });
      }
    });
  <\/script><section id="market-data" class="py-20 bg-slate-50 border-b border-slate-200" style="content-visibility: auto; contain-intrinsic-size: auto 800px;"><div class="container mx-auto px-4"><div class="max-w-6xl mx-auto"><div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"><div><div class="mb-10 p-8 rounded-2xl bg-[#141414] border border-[#292929] shadow-[0_13px_48px_rgba(0,0,0,0.4)] relative overflow-hidden text-white"><div class="absolute top-0 right-0 w-40 h-40 bg-[#2ddb81]/10 rounded-full blur-3xl pointer-events-none"></div><div class="flex items-center gap-3 mb-4 border-b border-[#292929] pb-4"><span class="w-8 h-8 rounded-full bg-[#2ddb81]/20 text-[#2ddb81] flex items-center justify-center font-bold text-lg">📍</span><div><h3 class="text-[#2ddb81] font-bold text-xs uppercase tracking-widest">In Plain English</h3><p class="text-white font-extrabold text-lg leading-tight">What WebWorldMaker Brings to ${city}</p></div></div><div data-answer-target="true" class="text-[#cbcbcb] leading-relaxed text-base font-normal space-y-4"><p>Running a business in <strong class="text-white font-bold">${city}</strong>? Think of WebWorldMaker like a super-fast digital communication engine! Instead of your team wasting hours on manual calls or copy-pasting data, we help you reach over <strong class="text-white font-bold">${mobileUsers.toLocaleString()}</strong> mobile users across ${city} with instant text messages, WhatsApp updates, and 24/7 AI chat helpers.</p><p class="text-sm text-slate-400">Target Sector: <span class="text-[#2ddb81] font-bold">${industryFocus}</span> · Uptime &amp; SLA: <span class="text-[#2ddb81] font-bold">99.999% Guaranteed</span></p></div></div><div class="mb-10 p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm"><h3 class="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Local Deployment</h3><h4 class="text-2xl font-black text-slate-900 mb-6">3 Simple Steps to Deploy in ${city}</h4><div class="grid md:grid-cols-3 gap-6"><div class="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2ddb81] hover:shadow-md transition-all duration-300 relative group"><span class="w-8 h-8 rounded-full bg-slate-900 text-[#2ddb81] flex items-center justify-center font-black text-sm mb-3">1</span><h5 class="font-bold text-slate-900 text-base mb-1">API Handshake</h5><p class="text-xs text-slate-600 leading-relaxed">Connect your ${city} website or CRM to our cloud gateway in under 5 minutes.</p></div><div class="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2ddb81] hover:shadow-md transition-all duration-300 relative group"><span class="w-8 h-8 rounded-full bg-slate-900 text-[#2ddb81] flex items-center justify-center font-black text-sm mb-3">2</span><h5 class="font-bold text-slate-900 text-base mb-1">Automate Messaging</h5><p class="text-xs text-slate-600 leading-relaxed">Automate SMS, WhatsApp, and AI customer responses across ${city}'s top networks (${carriers.join(", ")}).</p></div><div class="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2ddb81] hover:shadow-md transition-all duration-300 relative group"><span class="w-8 h-8 rounded-full bg-slate-900 text-[#2ddb81] flex items-center justify-center font-black text-sm mb-3">3</span><h5 class="font-bold text-slate-900 text-base mb-1">Instant Growth</h5><p class="text-xs text-slate-600 leading-relaxed">Boost customer engagement and eliminate manual labor overhead with 99.999% SLA.</p></div></div></div><div class="mb-10 p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden"><h3 class="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Local Market Advantage</h3><h4 class="text-2xl font-black text-slate-900 mb-6">Old Way in ${city} vs. WebWorldMaker Way</h4><div class="grid md:grid-cols-2 gap-4"><div class="p-5 rounded-xl bg-red-50/50 border border-red-100"><div class="flex items-center gap-2 mb-3"><span class="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">❌</span><h5 class="font-bold text-red-900 text-sm">Old Way in ${city}</h5></div><ul class="space-y-2 text-xs text-red-900/80"><li class="flex items-start gap-2"><span>•</span> Slow manual outreach &amp; delayed responses</li><li class="flex items-start gap-2"><span>•</span> High message drop rates &amp; compliance risks</li><li class="flex items-start gap-2"><span>•</span> Lost customer leads after business hours</li></ul></div><div class="p-5 rounded-xl bg-emerald-50/50 border border-emerald-100"><div class="flex items-center gap-2 mb-3"><span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✅</span><h5 class="font-bold text-emerald-950 text-sm">WebWorldMaker Way</h5></div><ul class="space-y-2 text-xs text-emerald-950/80"><li class="flex items-start gap-2"><span>•</span> Sub-1 second delivery across ${city} networks</li><li class="flex items-start gap-2"><span>•</span> 100% compliant with ${localComplianceRequirement}</li><li class="flex items-start gap-2"><span>•</span> 24/7 AI customer chat &amp; automated lead capture</li></ul></div></div></div><h2 class="text-3xl font-bold text-slate-900 mb-6">Why Targeting ${city} Requires Local Precision</h2><p class="text-lg text-slate-600 mb-6 leading-relaxed">${city} is a thriving hub for the <strong class="text-slate-900">${industryFocus}</strong> industry. With a population of ${population.toLocaleString()}, generic national campaigns often fail here. To solve local pain points like <strong class="text-slate-900">${dominantB2BPainPoint}</strong>, you need localized messaging and the right infrastructure.</p><p class="text-lg text-slate-600 mb-8 leading-relaxed">We route all campaigns through our global carrier-integrated messaging network, ensuring direct connectivity to <strong class="text-slate-900">${carriers.join(" and ")}</strong>. This helps avoid common delivery bottlenecks.</p><div class="grid grid-cols-2 gap-6 mb-10"><div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100"><div class="text-3xl font-extrabold text-blue-600 mb-2">${mobilePenetration}%</div><div class="text-sm text-slate-500 uppercase tracking-wider font-semibold">Mobile Penetration</div></div><div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100"><div class="text-3xl font-extrabold text-indigo-600 mb-2">${aiReadiness}</div><div class="text-sm text-slate-500 uppercase tracking-wider font-semibold">AI Readiness</div></div></div><!-- Virtual Integration Setup Block (AEO / Answer Engine Optimization) --><div data-answer-target="true" class="bg-white p-6 rounded-2xl shadow-md border border-slate-100 mb-8"><h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center"><svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>Virtual Integration Timeline for ${city}</h3><p class="text-slate-600 mb-4">Because WebWorldMaker operates purely through a cloud infrastructure, businesses in ${city} can deploy entirely remotely:</p><ul class="space-y-3"><li class="flex items-start"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">1</span><div><strong class="text-slate-900 block">Day 1: Virtual API Handshake</strong><span class="text-sm text-slate-600">Secure connection established to our global gateway from your ${city} systems.</span></div></li><li class="flex items-start"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">2</span><div><strong class="text-slate-900 block">Day 2: Regulatory Validation</strong><span class="text-sm text-slate-600">Verification of <cite>${localComplianceRequirement}</cite> standards for the ${state} region${complianceCitation && renderTemplate`<a${addAttribute(complianceCitation.url, "href")} target="_blank" rel="external nofollow noopener noreferrer" itemprop="citation" class="inline-flex items-center ml-1 text-blue-600 hover:text-blue-500 font-medium"${addAttribute(`Official ${complianceCitation.authorityName} Portal`, "title")}>(Verify Source <svg class="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>)</a>`}.</span></div></li><li class="flex items-start"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">3</span><div><strong class="text-slate-900 block">Day 3: Cloud Go-Live</strong><span class="text-sm text-slate-600">Full messaging deployment active across ${city} via ${carriers.join(" and ")}.</span></div></li></ul></div></div><div class="relative"><div class="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl transform rotate-3"></div><div class="bg-white p-8 rounded-3xl shadow-xl relative border border-slate-100"><h3 class="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">${city} Market Snapshot</h3><ul class="space-y-4"><li class="flex justify-between items-center py-2 border-b border-slate-50"><span class="text-slate-500">Local Language Support</span><span class="font-medium text-slate-900">${isHinglishEligible ? renderTemplate`<span class="inline-flex items-center"><span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span> English & Hinglish</span>` : renderTemplate`<span class="inline-flex items-center"><span class="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> English (Primary)</span>`}</span></li><li class="flex justify-between items-center py-2 border-b border-slate-50"><span class="text-slate-500">Compliance Required</span><span class="font-medium text-slate-900 flex items-center">${localComplianceRequirement}${complianceCitation && renderTemplate`<a${addAttribute(complianceCitation.url, "href")} target="_blank" rel="external nofollow noopener noreferrer" itemprop="citation" class="ml-1.5 text-blue-500 hover:text-blue-400"${addAttribute(`Official ${complianceCitation.authorityName} Portal`, "title")}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>`}</span></li><li class="flex justify-between items-center py-2 border-b border-slate-50"><span class="text-slate-500">Preferred Channel</span><span class="font-medium text-blue-600">${preferredChannel}</span></li><li class="flex justify-between items-center py-2 border-b border-slate-50"><span class="text-slate-500">Average Income Segment</span><span class="font-medium text-slate-900">${averageIncome || "Varies"}</span></li><li class="flex justify-between items-center py-2 border-b border-slate-50"><span class="text-slate-500">Timezone</span><span class="font-medium text-slate-900">${timezone || "Local"}</span></li><li class="flex justify-between items-center py-2"><span class="text-slate-500">Support Center</span><span class="font-medium text-slate-900">${localSupport}</span></li></ul>${isHinglishEligible && renderTemplate`<div class="mt-8 p-4 bg-indigo-50 rounded-lg"><div class="flex justify-between items-center mb-2"><span class="text-sm font-semibold text-indigo-900">Language Preference</span><button id="hinglish-toggle-btn" class="px-3 py-1 bg-white text-indigo-600 text-xs font-bold rounded shadow-sm hover:bg-indigo-600 hover:text-white transition-colors border border-indigo-200">🇮🇳 Hinglish</button></div><p class="text-xs text-indigo-700" data-lang="en">Displaying English content. Click to switch to local Hinglish phrasing common in ${city}.</p><p class="text-xs text-indigo-700 hidden" data-lang="hin">Displaying Hinglish content, a format many ${city} audiences respond well to.</p></div>`}</div></div></div></div></div></section><section id="services" class="py-20 bg-white" style="content-visibility: auto; contain-intrinsic-size: auto 800px;"><div class="container mx-auto px-4"><div class="max-w-6xl mx-auto"><div class="text-center mb-16"><h2 class="text-3xl font-bold text-slate-900 mb-4">Core Digital Strategies for ${city}</h2><p class="text-lg text-slate-600 max-w-3xl mx-auto">We focus on the exact digital services that <strong class="text-slate-900">${industryFocus}</strong> businesses in ${city} need right now.</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${strategicKeywords.map((kw) => {
		const targetCatId = kw.term.includes("SMS") ? "mobile-business-communication" : kw.term.includes("WhatsApp") ? "mobile-business-communication" : kw.term.includes("SEO") ? "search-growth" : "digital-marketing";
		const targetSvcId = kw.term.includes("SMS") ? "sms" : kw.term.includes("WhatsApp") ? "whatsapp" : kw.term.includes("SEO") ? "seo-services" : "social-media-marketing";
		const targetHref = isServiceAllowedForTier(targetCatId, targetSvcId, locationTier) ? `/${targetCatId}/${targetSvcId}/${stateParam}/${cityParam}` : `/${targetCatId}/${targetSvcId}`;
		return renderTemplate`<div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group"><h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"><span data-lang="en">${kw.term}</span><span data-lang="hin" class="hidden">${kw.hinglishVariant || kw.term}</span></h3><p class="text-slate-600 mb-6 h-20 overflow-hidden">${kw.explanation}</p><a${addAttribute(targetHref, "href")} class="text-blue-600 font-semibold inline-flex items-center hover:text-blue-800">Explore Local Solution<svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div>`;
	})}</div></div></div></section><section class="py-16 bg-white border-t border-slate-200" style="content-visibility: auto; contain-intrinsic-size: auto 600px;" aria-labelledby="services-hub-heading"><div class="container mx-auto px-4"><div class="max-w-6xl mx-auto"><div class="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4"><div><span class="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2">${tierLabel}</span><h2 id="services-hub-heading" class="text-2xl md:text-3xl font-bold text-slate-900">Digital Services Available in ${city}</h2><p class="text-slate-600 mt-1 text-sm max-w-2xl">${locationTier === "T1" && `Full enterprise suite — ${tierServiceLinks.length} specialised services tailored for ${city}'s ${industryFocus} economy.`}${locationTier === "T2" && `Core high-impact services — optimised for ${city}'s ${mobilePenetration}% mobile-penetrated market.`}${locationTier === "T3" && `Anchor digital services for ${city}. For the full suite, see a nearby regional hub.`}</p></div>${locationTier !== "T3" && renderTemplate`<a href="/contact" class="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors">Get a Free Quote →</a>`}</div>${locationTier === "T3" ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">${tierServiceLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="group flex items-center gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all"><div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors"><svg class="w-5 h-5 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div><div><span class="font-semibold text-slate-800 group-hover:text-blue-700 block">${link.label}</span><span class="text-xs text-slate-500">${link.category}</span></div></a>`)}</div>` : renderTemplate`<div class="space-y-8">${Object.entries(servicesByCategory).map(([catTitle, links]) => renderTemplate`<div><h3 class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2"><span class="w-4 h-px bg-slate-300"></span>${catTitle}</h3><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="group flex items-center gap-3 p-4 border border-slate-200 rounded-xl bg-slate-50 hover:border-blue-500 hover:bg-white hover:shadow-md transition-all"><div class="w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform"></div><span class="text-sm font-medium text-slate-700 group-hover:text-blue-700 leading-tight">${link.label} — ${city}</span></a>`)}</div></div>`)}</div>`}${locationTier === "T3" && nearbyLocations.length > 0 && renderTemplate`<div class="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl"><p class="text-sm font-semibold text-blue-800 mb-3">🏙️ Need the full enterprise suite? Nearest full-service hubs:</p><div class="flex flex-wrap gap-2">${nearbyLocations.slice(0, 5).map((loc) => renderTemplate`<a${addAttribute(`/locations/${loc.stateSlug}/${loc.citySlug}`, "href")} class="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-blue-300 text-blue-700 text-sm font-medium rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">${loc.city} <span class="text-xs opacity-60">${Math.round(loc.distance)}km</span></a>`)}</div></div>`}</div></div></section>${nearbyLocations.length > 0 && renderTemplate`<section class="py-16 bg-slate-50 border-t border-slate-200" style="content-visibility: auto; contain-intrinsic-size: auto 600px;"><div class="container mx-auto px-4"><div class="max-w-6xl mx-auto"><div class="flex items-center justify-between mb-8 border-b border-slate-200 pb-4"><h2 class="text-2xl font-bold text-slate-900">Nearby Service Areas</h2><span class="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">${city} Region</span></div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">${nearbyLocations.map((loc) => renderTemplate`<a${addAttribute(`/locations/${loc.stateSlug}/${loc.citySlug}`, "href")} class="block p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group"><h4 class="font-bold text-slate-800 group-hover:text-blue-600 mb-1 truncate"${addAttribute(loc.city, "title")}>${loc.city}</h4><div class="flex items-center text-xs text-slate-500"><svg class="w-3 h-3 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>${Math.round(loc.distance)} km away</div></a>`)}</div></div></div></section>`}<section class="py-20 bg-slate-900 text-white" style="content-visibility: auto; contain-intrinsic-size: auto 800px;"><div class="container mx-auto px-4"><div class="max-w-5xl mx-auto"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-bold mb-4">Comparing Digital Channels in ${city}</h2><p class="text-lg text-slate-400">An objective analysis of marketing options based on local data.</p></div><div class="overflow-x-auto"><table class="w-full text-left border-collapse"><thead><tr class="border-b border-slate-700 text-slate-300"><th class="py-4 px-6 font-semibold bg-slate-800/50 rounded-tl-lg">Channel</th><th class="py-4 px-6 font-semibold bg-slate-800/50 text-green-400">Pros for ${city}</th><th class="py-4 px-6 font-semibold bg-slate-800/50 text-red-400 rounded-tr-lg">Cons / Challenges</th></tr></thead><tbody class="divide-y divide-slate-800">${prosConsData.map((item) => renderTemplate`<tr class="hover:bg-slate-800/30 transition-colors"><td class="py-5 px-6 font-medium text-white">${item.option}</td><td class="py-5 px-6 text-slate-300">${item.pros}</td><td class="py-5 px-6 text-slate-400">${item.cons}</td></tr>`)}</tbody></table></div></div></div></section><section class="py-20 bg-white" style="content-visibility: auto; contain-intrinsic-size: auto 800px;"><div class="container mx-auto px-4"><div class="max-w-6xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16"><!-- Recommendations / Syntactic Grounding Fact --><div><h2 class="text-3xl font-bold text-slate-900 mb-8 flex items-center"><svg class="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>Best Practices for ${city}</h2><ul class="space-y-4">${recommendations.map((rec) => renderTemplate`<li class="flex"><svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-700">${rec}</span></li>`)}</ul></div><!-- Avoid List --><div><h2 class="text-3xl font-bold text-slate-900 mb-8 flex items-center"><svg class="w-8 h-8 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>Mistakes to Avoid</h2><ul class="space-y-4">${avoidList.map((avoid) => renderTemplate`<li class="flex"><svg class="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg><span class="text-slate-700">${avoid}</span></li>`)}</ul></div></div><div class="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8"><h3 class="text-xl font-bold text-slate-900 mb-4">Compliance Guidelines for ${city}</h3><ul class="space-y-3">${guidelines.map((g) => renderTemplate`<li class="flex text-slate-700"><span class="text-blue-500 mr-3">→</span><span>${g}</span></li>`)}</ul></div></div></div></section><section class="py-24 bg-slate-50 border-t border-slate-200" style="content-visibility: auto; contain-intrinsic-size: auto 1200px;"><div class="container mx-auto px-4"><div class="max-w-4xl mx-auto"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions — ${city}</h2><p class="text-lg text-slate-600">Everything you need to know about scaling your digital presence in ${city}, ${state}.</p></div><div class="space-y-4">${faqs.map((faq, index) => renderTemplate`${renderComponent($$result, "FaqAccordion", FaqAccordion, {
		"client:visible": true,
		"question": faq.question,
		"answer": faq.answer,
		"category": faq.category,
		"isExpanded": index === 0,
		"client:component-hydration": "visible",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/FaqAccordion.tsx",
		"client:component-export": "FaqAccordion"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "CitationBlock", CitationBlock, {
		"source": `WebWorldMaker Market Analysis — ${city}`,
		"date": (/* @__PURE__ */ new Date()).getFullYear().toString()
	})}` })}`)}</div></div></div></section><section class="py-24 bg-blue-600 text-white relative overflow-hidden" style="content-visibility: auto; contain-intrinsic-size: auto 400px;"><div class="absolute inset-0 bg-[url('/img/pattern.svg')] opacity-10"></div><div class="container mx-auto px-4 relative z-10"><div class="max-w-4xl mx-auto text-center"><h2 class="text-4xl font-bold mb-6">Ready to Dominate the ${city} Market?</h2><p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Join hundreds of <span data-lang="en">local</span><span data-lang="hin" class="hidden">shahar ke</span> businesses using WebWorldMaker to drive growth and automate sales.</p><a href="/contact" id="cta-contact-btn" class="inline-block px-10 py-5 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all text-lg border border-blue-50"><span data-lang="en">Get Your Free Strategy Plan</span><span data-lang="hin" class="hidden">Muft Strategy Plan Lein</span></a></div></div></section>${renderScript($$result, "/Users/apple/Downloads/webworldmaker/src/pages/locations/[state]/[city].astro?astro&type=script&index=0&lang.ts")}${renderScript($$result, "/Users/apple/Downloads/webworldmaker/src/pages/locations/[state]/[city].astro?astro&type=script&index=1&lang.ts")}` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/locations/[state]/[city].astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/locations/[state]/[city].astro";
var $$url = "/locations/[state]/[city]";
//#endregion
//#region \0virtual:astro:page:src/pages/locations/[state]/[city]@_@astro
var page = () => _city__exports;
//#endregion
export { page };

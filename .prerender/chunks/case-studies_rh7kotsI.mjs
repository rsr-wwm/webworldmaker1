import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/case-studies.astro
var case_studies_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CaseStudies,
	file: () => $$file,
	url: () => $$url
});
var $$CaseStudies = createComponent(($$result, $$props, $$slots) => {
	const studies = [
		{
			id: "fintech-growth",
			client: "PayFast Global",
			industry: "FinTech",
			title: "Scaling OTP Delivery to 50M/Month",
			challenge: "PayFast was experiencing a 15% failure rate in OTP delivery using standard routes, causing user churn during sign-up.",
			solution: "We implemented our SecureGate 2FA infrastructure with direct carrier connections and intelligent fallback to WhatsApp.",
			results: [
				"99.99% Delivery Rate achieved",
				"30% Reduction in SMS costs via fraud blocking",
				"12% Increase in User Activation"
			]
		},
		{
			id: "retail-engagement",
			client: "StyleHub Fashion",
			industry: "E-commerce",
			title: "Recovering $1.2M in Abandoned Carts",
			challenge: "Email open rates for cart recovery dropped below 10%. Customers were ignoring reminders.",
			solution: "Deployed an omnichannel strategy using WhatsApp Business API and RCS to send rich-media cart reminders with instant checkout buttons.",
			results: [
				"45% Recovery Rate on WhatsApp",
				"$1.2M Additional Revenue in Q4",
				"25x ROI on messaging spend"
			]
		},
		{
			id: "logistics-automation",
			client: "SwiftCargo",
			industry: "Logistics",
			title: "Automating Customer Support with AI",
			challenge: "Support team was overwhelmed with \"Where is my order?\" calls, leading to 45-minute wait times.",
			solution: "Integrated a Gemini-powered Voice Bot and WhatsApp Chatbot connected directly to their tracking ERP.",
			results: [
				"80% of queries resolved without humans",
				"0 minute wait time for status checks",
				"Support staff reallocated to sales"
			]
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "Case Studies & Success Stories",
		"metaDescription": "See how WebWorldMaker helps businesses scale. Real results from FinTech, Retail, and Logistics clients."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen text-slate-800"><div class="bg-slate-900 text-white py-20"><div class="container mx-auto px-4 text-center"><h1 class="text-4xl font-black mb-4 text-white">Client Success Stories</h1><p class="text-xl text-slate-300 max-w-2xl mx-auto font-medium">Real problems. Real solutions. Real results.</p></div></div><div class="container mx-auto px-4 py-16"><div class="grid gap-12">${studies.map((study, idx) => renderTemplate`<div${addAttribute(study.id, "key")}${addAttribute(`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300`, "class")}><div class="lg:w-[38%] relative h-64 lg:h-auto min-h-[280px]">${study.id === "fintech-growth" && renderTemplate`<div class="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-50/60 to-purple-50/60 flex items-center justify-center p-6"><svg viewBox="0 0 400 300" class="w-full h-full"${addAttribute(study.title, "aria-label")}><defs><linearGradient id="fintech-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4f46e5"></stop><stop offset="100%" stop-color="#7c3aed"></stop></linearGradient></defs><g stroke="#4f46e5" stroke-opacity="0.08" stroke-width="1"><line x1="0" y1="50" x2="400" y2="50"></line><line x1="0" y1="100" x2="400" y2="100"></line><line x1="0" y1="150" x2="400" y2="150"></line><line x1="0" y1="200" x2="400" y2="200"></line><line x1="0" y1="250" x2="400" y2="250"></line><line x1="50" y1="0" x2="50" y2="300"></line><line x1="100" y1="0" x2="100" y2="300"></line><line x1="150" y1="0" x2="150" y2="300"></line><line x1="200" y1="0" x2="200" y2="300"></line><line x1="250" y1="0" x2="250" y2="300"></line><line x1="300" y1="0" x2="300" y2="300"></line><line x1="350" y1="0" x2="350" y2="300"></line></g><circle cx="200" cy="150" r="85" fill="none" stroke="url(#fintech-grad)" stroke-width="1.5" stroke-dasharray="6,6"></circle><circle cx="200" cy="150" r="95" fill="none" stroke="url(#fintech-grad)" stroke-width="1" stroke-opacity="0.3"></circle><g transform="translate(155, 88)" stroke="url(#fintech-grad)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="5" width="50" height="95" rx="8" stroke-width="3" fill="white"></rect><line x1="40" y1="90" x2="50" y2="90" stroke-width="3"></line><path d="M45,28 L62,34 L62,54 C62,64 54,72 45,75 C36,72 28,64 28,54 L28,34 Z" fill="white" stroke-width="3"></path><path d="M37,52 L42,57 L53,45" stroke="#10b981" stroke-width="3"></path></g></svg></div>`}${study.id === "retail-engagement" && renderTemplate`<div class="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-50/60 to-indigo-50/60 flex items-center justify-center p-6"><svg viewBox="0 0 400 300" class="w-full h-full"${addAttribute(study.title, "aria-label")}><defs><linearGradient id="retail-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#059669"></stop><stop offset="100%" stop-color="#4f46e5"></stop></linearGradient></defs><g stroke="#059669" stroke-opacity="0.08" stroke-width="1"><line x1="0" y1="50" x2="400" y2="50"></line><line x1="0" y1="100" x2="400" y2="100"></line><line x1="0" y1="150" x2="400" y2="150"></line><line x1="0" y1="200" x2="400" y2="200"></line><line x1="0" y1="250" x2="400" y2="250"></line><line x1="50" y1="0" x2="50" y2="300"></line><line x1="100" y1="0" x2="100" y2="300"></line><line x1="150" y1="0" x2="150" y2="300"></line><line x1="200" y1="0" x2="200" y2="300"></line><line x1="250" y1="0" x2="250" y2="300"></line><line x1="300" y1="0" x2="300" y2="300"></line><line x1="350" y1="0" x2="350" y2="300"></line></g><circle cx="200" cy="150" r="85" fill="none" stroke="url(#retail-grad)" stroke-width="1.5" stroke-dasharray="6,6"></circle><circle cx="200" cy="150" r="95" fill="none" stroke="url(#retail-grad)" stroke-width="1" stroke-opacity="0.3"></circle><g transform="translate(145, 90)" stroke="url(#retail-grad)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="25" cy="80" r="6" fill="white" stroke-width="3"></circle><circle cx="75" cy="80" r="6" fill="white" stroke-width="3"></circle><path d="M0,10 L15,10 L32,58 L85,58 L95,20 L25,20" fill="white" stroke-width="3"></path><path d="M38,45 L58,25 L80,25" stroke="#10b981" stroke-width="3"></path><path d="M72,17 L80,25 L72,33" stroke="#10b981" stroke-width="3"></path></g></svg></div>`}${study.id === "logistics-automation" && renderTemplate`<div class="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-50/60 to-blue-50/60 flex items-center justify-center p-6"><svg viewBox="0 0 400 300" class="w-full h-full"${addAttribute(study.title, "aria-label")}><defs><linearGradient id="logistics-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0891b2"></stop><stop offset="100%" stop-color="#2563eb"></stop></linearGradient></defs><g stroke="#0891b2" stroke-opacity="0.08" stroke-width="1"><line x1="0" y1="50" x2="400" y2="50"></line><line x1="0" y1="100" x2="400" y2="100"></line><line x1="0" y1="150" x2="400" y2="150"></line><line x1="0" y1="200" x2="400" y2="200"></line><line x1="0" y1="250" x2="400" y2="250"></line><line x1="50" y1="0" x2="50" y2="300"></line><line x1="100" y1="0" x2="100" y2="300"></line><line x1="150" y1="0" x2="150" y2="300"></line><line x1="200" y1="0" x2="200" y2="300"></line><line x1="250" y1="0" x2="250" y2="300"></line><line x1="300" y1="0" x2="300" y2="300"></line><line x1="350" y1="0" x2="350" y2="300"></line></g><circle cx="200" cy="150" r="85" fill="none" stroke="url(#logistics-grad)" stroke-width="1.5" stroke-dasharray="6,6"></circle><circle cx="200" cy="150" r="95" fill="none" stroke="url(#logistics-grad)" stroke-width="1" stroke-opacity="0.3"></circle><g transform="translate(142, 90)" stroke="url(#logistics-grad)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10,10 L105,10 A8,8 0 0 1 113,18 L113,54 A8,8 0 0 1 105,62 L35,62 L15,76 L15,62 A8,8 0 0 1 7,54 L7,18 A8,8 0 0 1 15,10 Z" fill="white" stroke-width="3"></path><circle cx="60" cy="36" r="10" stroke-width="3" fill="white"></circle><line x1="24" y1="36" x2="50" y2="36" stroke-width="3"></line><line x1="70" y1="36" x2="96" y2="36" stroke-width="3"></line><circle cx="24" cy="36" r="5" fill="#0891b2" stroke-width="2"></circle><circle cx="96" cy="36" r="5" fill="#2563eb" stroke-width="2"></circle></g></svg></div>`}<div class="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-900 z-20">${study.industry}</div></div><div class="lg:w-[62%] p-8 lg:p-12 flex flex-col justify-center"><div class="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wide mb-2"><span class="w-2 h-2 bg-indigo-500 rounded-full"></span>Client: ${study.client}</div><h2 class="text-3xl font-bold text-slate-900 mb-6">${study.title}</h2><div class="space-y-6 mb-8"><div><h4 class="font-bold text-red-500 mb-1 flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>Challenge</h4><p class="text-slate-600 text-sm leading-relaxed">${study.challenge}</p></div><div><h4 class="font-bold text-green-600 mb-1 flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Solution</h4><p class="text-slate-600 text-sm leading-relaxed">${study.solution}</p></div></div><div class="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-6"><h4 class="font-bold text-slate-900 mb-4 text-sm uppercase">Key Results</h4><ul class="space-y-2">${study.results.map((res, i) => renderTemplate`<li${addAttribute(i, "key")} class="flex items-center text-slate-700 font-medium"><span class="text-indigo-500 mr-2">➜</span> ${res}</li>`)}</ul></div></div></div>`)}</div><div class="mt-20 text-center bg-indigo-900 rounded-3xl p-12 text-white"><h2 class="text-3xl font-bold mb-4">Ready to be our next success story?</h2><p class="text-indigo-200 mb-8">Let\\'s analyze your current infrastructure and find opportunities for growth.</p><a href="/contact" class="inline-block bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition-colors shadow-lg">Schedule a Consultation</a></div><div class="mt-12 max-w-4xl mx-auto">${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": "WebWorldMaker Case Studies",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/case-studies.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/case-studies.astro";
var $$url = "/case-studies";
//#endregion
//#region \0virtual:astro:page:src/pages/case-studies@_@astro
var page = () => case_studies_exports;
//#endregion
export { page };

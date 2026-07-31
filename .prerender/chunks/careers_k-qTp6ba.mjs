import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/company/careers.astro
var careers_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Careers,
	file: () => $$file,
	url: () => $$url
});
var $$Careers = createComponent(($$result, $$props, $$slots) => {
	const jobs = [
		{
			id: "senior-frontend-dev",
			title: "Senior Frontend Engineer",
			department: "Engineering",
			location: "Remote / Hybrid",
			type: "Full-time",
			description: "We are looking for a React expert to lead our dashboard development team. Experience with WebSockets and Real-time data is a plus."
		},
		{
			id: "ai-solutions-architect",
			title: "AI Solutions Architect",
			department: "AI Labs",
			location: "Chandigarh, Punjab, India",
			type: "Full-time",
			description: "Design custom LLM workflows for enterprise clients. Must have experience with Python, TensorFlow, and Gemini/OpenAI APIs."
		},
		{
			id: "sales-development-rep",
			title: "Sales Development Rep",
			department: "Sales",
			location: "Remote",
			type: "Full-time",
			description: "Drive growth by identifying and qualifying leads for our Enterprise Messaging solutions. High commission structure."
		}
	];
	const buildDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
	const validThroughDate = new Date(Date.now() + 2160 * 60 * 60 * 1e3).toISOString().split("T")[0];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "Careers & Jobs",
		"metaDescription": "Join the team building the future of digital communication. View open positions at WebWorldMaker.",
		"orgSchema": {
			"@context": "https://schema.org",
			"@type": "ItemList",
			"itemListElement": jobs.map((job) => ({
				"@type": "JobPosting",
				"title": job.title,
				"description": job.description,
				"datePosted": buildDate,
				"validThrough": validThroughDate,
				"employmentType": "FULL_TIME",
				"hiringOrganization": {
					"@type": "Organization",
					"name": "WebWorldMaker",
					"sameAs": ["https://twitter.com/webworldmaker", "https://www.wikidata.org/wiki/Q114872221"]
				},
				"jobLocation": {
					"@type": "Place",
					"address": {
						"@type": "PostalAddress",
						"addressLocality": job.location === "Remote" ? "Remote" : "Chandigarh, Punjab, India",
						"addressCountry": "IN"
					}
				}
			}))
		}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen"><div class="bg-slate-950 text-white py-24 relative overflow-hidden"><div class="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div><div class="container mx-auto px-4 relative z-10 text-center"><h1 class="text-5xl font-black mb-6 text-white tracking-tighter">Build The Future With Us</h1><p class="text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium">We are solving complex problems in messaging, AI, and cloud infrastructure. If you love a challenge, you belong here.</p><a href="#positions" class="bg-white text-slate-950 font-black py-4 px-10 rounded-xl hover:bg-slate-50 transition-all shadow-xl active:scale-95 inline-block uppercase tracking-wide">View Openings</a></div></div><div class="container mx-auto px-4 py-16"><div class="grid md:grid-cols-3 gap-8 mb-20"><div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"><div class="text-4xl mb-4">🚀</div><h3 class="font-bold text-slate-900 text-lg mb-2">High Impact</h3><p class="text-slate-600 text-sm">Your code will be used by millions of users globally via our enterprise clients.</p></div><div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"><div class="text-4xl mb-4">🏝️</div><h3 class="font-bold text-slate-900 text-lg mb-2">Remote First</h3><p class="text-slate-600 text-sm">Work from anywhere. We care about output, not hours in a chair.</p></div><div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"><div class="text-4xl mb-4">🎓</div><h3 class="font-bold text-slate-900 text-lg mb-2">Continuous Learning</h3><p class="text-slate-600 text-sm">Annual budget for courses, conferences, and certifications.</p></div></div><div id="positions" class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold text-slate-900 mb-8 text-center">Open Positions</h2><div class="space-y-4">${jobs.map((job) => renderTemplate`<div${addAttribute(job.id, "key")} class="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center"><div class="mb-4 md:mb-0"><h3 class="text-xl font-bold text-slate-900">${job.title}</h3><div class="flex gap-4 text-sm text-slate-500 mt-2"><span class="flex items-center"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>${job.department}</span><span class="flex items-center"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>${job.location}</span></div><p class="text-slate-600 mt-3 text-sm max-w-xl">${job.description}</p></div><a${addAttribute(`/contact?service=Careers&buttonName=${encodeURIComponent("Apply Now: " + job.title)}`, "href")} class="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap">Apply Now</a></div>`)}</div></div><div class="mt-16 max-w-4xl mx-auto text-center bg-slate-100 rounded-2xl p-8"><h3 class="font-bold text-slate-900 mb-2">Don't see a fit?</h3><p class="text-slate-600 mb-6">We are always looking for talent. Send your resume to sales@webworldmaker.com</p>${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": "Careers at WebWorldMaker",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/company/careers.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/company/careers.astro";
var $$url = "/company/careers";
//#endregion
//#region \0virtual:astro:page:src/pages/company/careers@_@astro
var page = () => careers_exports;
//#endregion
export { page };

import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { c as getUnifiedContentById, r as getIndustries } from "./contentService_D8jqS7-T.mjs";
//#region src/pages/industry-solutions/index.astro
var industry_solutions_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const industries = getIndustries();
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "Industries We Serve - Vertical Solutions",
		"metaDescription": "Tailored digital transformation solutions for Fintech, Healthcare, Retail, Logistics, and more."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen"><div class="bg-indigo-900 text-white py-20 relative overflow-hidden"><div class="absolute inset-0 bg-[url('/patterns/cubes.png')] opacity-10"></div><div class="container mx-auto px-4 text-center relative z-10"><h1 class="text-4xl md:text-5xl font-extrabold mb-6">Industries We Empower</h1><p class="text-xl text-indigo-200 max-w-2xl mx-auto">Specialized infrastructure and automation tools designed for your specific sector's compliance and operational needs.</p></div></div><div class="container mx-auto px-4 py-16"><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">${industries.map((ind) => renderTemplate`<div${addAttribute(ind.id, "key")} class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-200 transition-all group flex flex-col h-full text-left relative"><div class="flex items-center justify-between mb-6"><div class="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">${ind.icon}</div><div class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M9 5l7 7-7 7"></path></svg></div></div><h2 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors"><a${addAttribute(`/industry-solutions/${ind.id}`, "href")} class="hover:underline after:absolute after:inset-0 after:z-10">${ind.title}</a></h2><p class="text-slate-600 mb-6 flex-grow">${ind.description}</p><div class="pt-6 border-t border-slate-50 relative z-20"><span class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">Relevant Solutions</span><div class="flex flex-wrap gap-2">${ind.solutions.slice(0, 3).map((solId) => {
		const content = getUnifiedContentById(solId);
		if (!content) return null;
		return renderTemplate`<a${addAttribute(solId, "key")}${addAttribute(content.link, "href")} class="bg-slate-50 text-indigo-600 text-[10px] uppercase font-bold px-2 py-1 rounded border border-slate-100 hover:bg-indigo-600 hover:text-white transition-colors relative z-30">${content.data.title}</a>`;
	})}</div></div></div>`)}</div><div class="mt-20 text-center bg-white p-12 rounded-3xl border border-slate-200 shadow-sm"><h2 class="text-2xl font-bold text-slate-900 mb-4">Don't see your industry?</h2><p class="text-slate-600 mb-8 max-w-xl mx-auto">Our core technologies (Messaging, AI, Cloud) are agnostic. We build custom solutions for Agriculture, Energy, Government, and more.</p><a href="/contact?buttonName=Contact for Custom Solutions" class="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors">Contact for Custom Solutions</a></div><div class="mt-12 max-w-4xl mx-auto">${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": "Industries Served - WebWorldMaker",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/industry-solutions/index.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/industry-solutions/index.astro";
var $$url = "/industry-solutions";
//#endregion
//#region \0virtual:astro:page:src/pages/industry-solutions/index@_@astro
var page = () => industry_solutions_exports;
//#endregion
export { page };

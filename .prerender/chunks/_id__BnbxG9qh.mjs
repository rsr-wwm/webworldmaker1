import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { i as getProblems, o as getServiceCategories } from "./contentService_D8jqS7-T.mjs";
import { t as FaqAccordion } from "./FaqAccordion_CwjStDZR.mjs";
import { n as SolutionSection, r as ProsConsTable, t as HinglishContent } from "./HinglishContent_CUv6TG3y.mjs";
//#region src/pages/problem/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
async function getStaticPaths() {
	return getProblems().map((item) => ({
		params: { id: item.id },
		props: { problem: item }
	}));
}
var $$Id = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { problem } = Astro.props;
	const groupedFaqs = problem.faqs?.reduce((acc, faq) => {
		const cat = faq.category || "Common Questions";
		if (!acc[cat]) acc[cat] = [];
		acc[cat].push(faq);
		return acc;
	}, {}) || {};
	const relatedServices = getServiceCategories().flatMap((cat) => (cat.items || []).map((item) => ({
		...item,
		categoryId: cat.id
	}))).filter((item) => problem.relatedServices.includes(item.id));
	const shareUrl = `${Astro.url.origin}/problem/${problem.id}`;
	const schemaData = {
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "Article",
			"headline": problem.title,
			"description": problem.metaDescription,
			"author": problem.author ? {
				"@type": "Person",
				"name": problem.author.name,
				"jobTitle": problem.author.role
			} : {
				"@type": "Organization",
				"name": "WebWorldMaker",
				"url": Astro.url.origin,
				"sameAs": ["https://twitter.com/webworldmaker", "https://www.wikidata.org/wiki/Q114872221"]
			}
		}]
	};
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": problem.metaTitle,
		"metaDescription": problem.metaDescription,
		"extraSchema": schemaData["@graph"],
		"faqs": problem.faqs
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen"><div class="bg-white border-b border-slate-200 pt-20 pb-16"><div class="container mx-auto px-4"><a href="/problems" class="inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 text-sm font-semibold transition-colors"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M15 19l-7-7 7-7"></path></svg>Back to Challenges</a><div class="flex flex-col lg:flex-row gap-12 items-start"><div class="flex-1"><div class="flex flex-wrap gap-2 mb-6"><div class="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-bold uppercase"><span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>The Challenge</div></div><h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">${problem.title}</h1>${problem.hinglishContent && renderTemplate`<section class="mb-10 text-left" data-answer-target="true">${renderComponent($$result, "HinglishContent", HinglishContent, {
		"client:visible": true,
		"content": problem.hinglishContent,
		"client:component-hydration": "visible",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/HinglishContent.tsx",
		"client:component-export": "HinglishContent"
	})}</section>`}${problem.solutionSection && renderTemplate`<section class="mb-10 text-left">${renderComponent($$result, "SolutionSection", SolutionSection, {
		"client:visible": true,
		"solution": problem.solutionSection,
		"client:component-hydration": "visible",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SolutionSection.tsx",
		"client:component-export": "SolutionSection"
	})}</section>`}${problem.prosConsAnalysis && renderTemplate`<section class="mb-10 text-left">${renderComponent($$result, "ProsConsTable", ProsConsTable, {
		"client:visible": true,
		"analysis": problem.prosConsAnalysis,
		"client:component-hydration": "visible",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/ProsConsTable.tsx",
		"client:component-export": "ProsConsTable"
	})}</section>`}<p class="text-lg text-slate-600 leading-relaxed">${problem.fullDescription}</p></div><aside class="w-full lg:w-1/3 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm" aria-label="Diagnostic Symptoms"><h3 class="text-lg font-bold text-slate-900 mb-6 flex items-center border-b border-slate-200 pb-4"><span class="text-2xl mr-3">⚠️</span> Common Symptoms</h3><ul class="space-y-4">${problem.symptoms.map((symptom) => renderTemplate`<li class="flex items-start text-sm text-slate-700"><svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>${symptom}</li>`)}</ul></aside></div></div></div><div class="container mx-auto px-4 py-16"><div class="grid lg:grid-cols-3 gap-12"><article class="lg:col-span-2"><section class="mb-16" style="content-visibility: auto; contain-intrinsic-size: auto 600px;"><h2 class="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3"><span class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-lg">🛠️</span>How We Solve It</h2>${problem.expertInsight && renderTemplate`<div class="bg-slate-950 text-white p-10 md:p-14 rounded-[2.5rem] mb-12 shadow-2xl relative overflow-hidden group border border-white/10"><div class="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform"><svg class="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M11 9H9V2H7V9H5V2H3V9C3 11.12 4.66 12.84 6.75 12.97V22H9.25V12.97C11.34 12.84 13 11.12 13 9V2H11V9ZM16 6V14H18.5V22H21V2H18.5C17.12 2 16 3.12 16 4.5V6Z"></path></svg></div><div class="relative z-10"><h4 class="text-brand-400 font-black uppercase tracking-widest text-xs mb-6">Diagnostic Insight</h4><p class="text-xl md:text-2xl font-black italic mb-10 leading-tight tracking-tighter text-white">"${problem.expertInsight}"</p>${problem.author && renderTemplate`<div class="flex items-center gap-4 border-t border-white/10 pt-8"><div class="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center font-black text-lg shadow-lg">${problem.author.name.charAt(0)}</div><div><div class="text-sm font-black text-white uppercase tracking-tight">${problem.author.name}</div><div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">${problem.author.role}</div></div></div>`}</div></div>`}<div class="prose prose-lg prose-indigo text-slate-600 leading-relaxed bg-white p-8 rounded-2xl border border-slate-100 shadow-sm mb-12"><p>${problem.ourSolution}</p></div>${problem.roadmap && renderTemplate`<div class="mb-12"><h3 class="text-xl font-bold text-slate-900 mb-6 font-serif">Resolution Roadmap</h3><div class="grid md:grid-cols-4 gap-4">${problem.roadmap.map((step) => renderTemplate`<div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><div class="text-2xl font-black text-indigo-100 mb-1 leading-none">${step.step}</div><h4 class="font-bold text-slate-900 text-xs mb-1">${step.title}</h4><p class="text-slate-500 text-[10px] leading-relaxed">${step.description}</p></div>`)}</div></div>`}${problem.useCases && renderTemplate`<div class="mb-12"><h3 class="text-xl font-bold text-slate-900 mb-2 font-serif">Success Scenarios</h3><p class="text-xs text-slate-400 mb-6 italic">Illustrative examples of how this is typically resolved — not audited results from named clients.</p><div class="grid md:grid-cols-2 gap-4">${problem.useCases.map((uc) => renderTemplate`<div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 italic relative overflow-hidden group"><div class="absolute top-0 right-0 p-2 opacity-5 scale-150 group-hover:scale-110 transition-transform"><svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 14.691 16.708 12 20.017 12L20.017 12L20.017 21L14.017 21ZM4.017 21L4.017 18C4.017 14.691 6.708 12 10.017 12L10.017 12L10.017 21L4.017 21Z"></path></svg></div><h4 class="font-bold text-indigo-900 mb-1 text-sm relative z-10">${uc.title}</h4><p class="text-slate-700 text-xs text-opacity-80 relative z-10 leading-relaxed">"${uc.description}"</p></div>`)}</div></div>`}${problem.pricing && renderTemplate`<div class="mb-12"><h3 class="text-xl font-bold text-slate-900 mb-6 font-serif">Solutions & Pricing</h3><div class="grid md:grid-cols-2 gap-4">${problem.pricing.map((p) => renderTemplate`<div class="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-all shadow-sm"><h4 class="font-bold text-indigo-900 mb-1">${p.title}</h4><div class="text-xl font-black text-slate-800 mb-4">${p.price}</div><ul class="space-y-2">${p.features.map((f) => renderTemplate`<li class="flex items-center text-xs text-slate-600"><svg class="w-3 h-3 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M5 13l4 4L19 7"></path></svg>${f}</li>`)}</ul></div>`)}</div></div>`}</section><section class="mb-16" style="content-visibility: auto; contain-intrinsic-size: auto 600px;"><h3 class="text-2xl font-bold text-slate-900 mb-8">Recommended Services</h3><div class="grid md:grid-cols-2 gap-6">${relatedServices.map((service) => renderTemplate`<a${addAttribute(`/${service.categoryId}/${service.id}`, "href")} class="group block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all duration-300"><div class="flex justify-between items-start mb-4"><h4 class="font-bold text-indigo-900 text-lg group-hover:text-indigo-600 transition-colors">${service.title}</h4><svg class="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></div><p class="text-sm text-slate-600 line-clamp-2">${service.description}</p></a>`)}</div></section><section class="mb-12" style="content-visibility: auto; contain-intrinsic-size: auto 600px;"><h3 class="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>${groupedFaqs && Object.entries(groupedFaqs).map(([category, faqs]) => renderTemplate`<div${addAttribute(category, "key")} class="mb-8 last:mb-0"><h4 class="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 inline-block px-3 py-1 rounded-lg border border-indigo-100">${category}</h4><div class="space-y-4">${faqs?.map((faq) => renderTemplate`${renderComponent($$result, "FaqAccordion", FaqAccordion, {
		"client:visible": true,
		"question": faq.question,
		"answer": faq.answer,
		"client:component-hydration": "visible",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/FaqAccordion.tsx",
		"client:component-export": "FaqAccordion"
	})}`)}</div></div>`)}</section>${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"url": shareUrl,
		"title": `Solution for: ${problem.title}`,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</article><div class="lg:col-span-1"><div class="bg-slate-950 text-white p-8 rounded-[2rem] shadow-2xl sticky top-24 overflow-hidden relative border border-white/10"><div class="absolute top-0 right-0 w-32 h-32 bg-brand-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div><h3 class="text-2xl font-black mb-4 relative z-10 text-white tracking-tight uppercase">Eliminate This Bottleneck</h3><p class="text-slate-300 mb-8 relative z-10 text-sm font-medium leading-relaxed">Don't let "${problem.title}" hold your business back. Our experts have solved this for hundreds of clients spanning multiple continents.</p><div class="space-y-4 relative z-10"><a${addAttribute(`/contact?service=${encodeURIComponent(problem.title)}&buttonName=${encodeURIComponent("Ready to get started")}`, "href")} class="block w-full bg-white text-slate-950 text-center font-black py-4 rounded-xl hover:bg-slate-50 transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm hover:text-slate-900">Ready to get started</a><a href="/mobile-business-communication" class="block w-full bg-transparent border border-white/20 text-white text-center font-bold py-3 rounded-xl hover:bg-white/10 transition-colors uppercase tracking-widest text-xs">Browse All Services</a></div><div class="mt-8 pt-6 border-t border-white/10 relative z-10"><div class="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest"><span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>Available for Free Consultation</div></div></div></div></div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/problem/[id].astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/problem/[id].astro";
var $$url = "/problem/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/problem/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };

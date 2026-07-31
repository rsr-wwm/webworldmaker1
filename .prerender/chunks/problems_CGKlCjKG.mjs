import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { i as getProblems } from "./contentService_D8jqS7-T.mjs";
//#region src/pages/problems.astro
var problems_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Problems,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
var $$Problems = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Problems;
	const problems = getProblems();
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "Common Business Problems We Solve",
		"metaDescription": "Identify your business challenges. From low engagement to data loss, find the right solution with WebWorldMaker.",
		"orgSchema": {
			"@context": "https://schema.org",
			"@type": "ItemList",
			"itemListElement": problems.map((problem, index) => ({
				"@type": "ListItem",
				"position": index + 1,
				"name": problem.title,
				"description": problem.shortDescription,
				"url": `${Astro.url.origin}/problem/${problem.id}`
			}))
		}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen pb-20"><!-- Hero --><div class="bg-slate-900 text-white py-20"><div class="container mx-auto px-4 text-center"><h1 class="text-4xl font-bold mb-4">Challenges We Solve</h1><p class="text-xl text-slate-400 max-w-2xl mx-auto mb-8">Find the right solution for your specific business pain points.</p><!-- Problem Categories --><div class="flex flex-wrap justify-center gap-3">${[
		"Engagement",
		"Security",
		"Operations",
		"Sales"
	].map((cat) => renderTemplate`<button${addAttribute(cat, "key")} class="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all">${cat}</button>`)}</div></div></div><div class="container mx-auto px-4 py-16"><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">${problems.map((problem) => renderTemplate`<div${addAttribute(problem.id, "key")} class="bg-white rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-lg transition-all duration-300 flex flex-col group hover:border-red-100"><div class="mb-4"><div class="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center text-xl mb-4 group-hover:bg-red-100 transition-colors">⚠️</div><h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-900 transition-colors">${problem.title}</h3><p class="text-slate-600 text-sm line-clamp-3">${problem.shortDescription}</p></div><div class="mt-auto border-t border-slate-50 pt-4"><a${addAttribute(`/problem/${problem.id}`, "href")} class="text-indigo-600 font-bold text-sm flex items-center group-hover:text-indigo-800">See The Solution<svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></div></div>`)}</div><div class="mt-16 max-w-4xl mx-auto">${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": "Challenges We Solve - WebWorldMaker",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/problems.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/problems.astro";
var $$url = "/problems";
//#endregion
//#region \0virtual:astro:page:src/pages/problems@_@astro
var page = () => problems_exports;
//#endregion
export { page };

import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { t as getComparisons } from "./contentService_D8jqS7-T.mjs";
//#region src/pages/compare/index.astro
var compare_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const comparisons = getComparisons();
	const metaTitle = "Enterprise Platform Comparisons & Audits | WebWorldMaker";
	const metaDescription = "Compare WebWorldMaker features, latency, carrier throughput, and ROI against leading CPaaS and digital ecosystem providers.";
	const canonicalUrl = new URL("/compare", Astro.site).href;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": metaTitle,
		"metaDescription": metaDescription,
		"canonicalUrl": canonicalUrl,
		"extraSchema": {
			"@type": "ItemList",
			"name": "Enterprise Platform Comparisons",
			"numberOfItems": comparisons.length,
			"itemListElement": comparisons.map((comp, index) => ({
				"@type": "ListItem",
				"position": index + 1,
				"name": comp.title,
				"url": `${Astro.site?.origin || "https://webworldmaker.com"}/compare/${comp.id}`
			}))
		}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-950 text-slate-100 min-h-screen py-16"><div class="container mx-auto px-4 max-w-6xl"><div class="text-center max-w-3xl mx-auto mb-16"><span class="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-brand-500/20">Architectural Benchmarks</span><h1 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight font-outfit">Enterprise Platform Comparisons</h1><p class="text-slate-400 text-lg leading-relaxed font-medium">In-depth technical evaluations comparing WebWorldMaker throughput, latency, pricing structures, and AI capabilities against legacy providers.</p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">${comparisons.map((comp) => renderTemplate`<a${addAttribute(`/compare/${comp.id}`, "href")} class="group bg-slate-900/60 border border-white/10 hover:border-brand-500/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-brand-500/10 flex flex-col justify-between"><div><div class="flex items-center justify-between mb-4"><span class="text-[10px] font-black uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">Audit Verified</span><span class="text-xs text-slate-500 font-medium">${comp.lastUpdated}</span></div><h2 class="text-2xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors font-outfit">${comp.title}</h2><p class="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-6">${comp.subtitle || comp.intro}</p></div><div class="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-brand-400 group-hover:text-brand-300"><span>View Full Evaluation</span><span class="transform group-hover:translate-x-1 transition-transform">→</span></div></a>`)}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/compare/index.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/compare/index.astro";
var $$url = "/compare";
//#endregion
//#region \0virtual:astro:page:src/pages/compare/index@_@astro
var page = () => compare_exports;
//#endregion
export { page };

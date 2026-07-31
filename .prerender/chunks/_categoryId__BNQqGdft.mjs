import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { o as getServiceCategories } from "./contentService_D8jqS7-T.mjs";
//#region src/pages/[categoryId].astro
var _categoryId__exports = /* @__PURE__ */ __exportAll({
	default: () => $$CategoryId,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
async function getStaticPaths() {
	const categories = getServiceCategories();
	const STATIC_CATEGORY_COLLISIONS = /* @__PURE__ */ new Set(["partners"]);
	return categories.filter((cat) => !STATIC_CATEGORY_COLLISIONS.has(cat.id)).map((cat) => ({
		params: { categoryId: cat.id },
		props: { category: cat }
	}));
}
var $$CategoryId = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CategoryId;
	const { category } = Astro.props;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": `${category.title} - WebWorldMaker`,
		"metaDescription": category.description || `Explore top enterprise solutions and services under ${category.title} by WebWorldMaker.`
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-950 text-white min-h-screen py-16"><div class="container mx-auto px-4 max-w-6xl"><div class="mb-12 border-b border-white/10 pb-8"><a href="/services" class="text-brand-500 font-bold text-xs uppercase tracking-widest hover:underline mb-4 inline-block">← All Service Ecosystems</a><h1 class="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">${category.title}</h1><p class="text-slate-400 text-lg max-w-3xl leading-relaxed">${category.description}</p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">${category.items.map((item) => renderTemplate`<div${addAttribute(item.id, "key")} class="bg-[#0B0F19] rounded-2xl p-8 border border-white/10 hover:border-brand-500/50 transition-all flex flex-col justify-between group"><div><h3 class="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">${item.title}</h3><p class="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">${item.description}</p>${item.features && item.features.length > 0 && renderTemplate`<div class="space-y-2 mb-6 bg-slate-900/50 p-4 rounded-xl border border-white/5">${item.features.slice(0, 3).map((f, i) => renderTemplate`<div${addAttribute(i, "key")} class="text-xs text-slate-300 font-medium flex items-center"><span class="text-brand-500 mr-2">✓</span>${typeof f === "string" ? f : f.title}</div>`)}</div>`}</div><a${addAttribute(`/${category.id}/${item.id}`, "href")} class="inline-flex items-center justify-between w-full bg-brand-500/10 hover:bg-brand-500 text-brand-400 hover:text-slate-950 px-4 py-3 rounded-xl font-bold text-xs transition-all uppercase tracking-wider">Explore Capability<span>→</span></a></div>`)}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/[categoryId].astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/[categoryId].astro";
var $$url = "/[categoryId]";
//#endregion
//#region \0virtual:astro:page:src/pages/[categoryId]@_@astro
var page = () => _categoryId__exports;
//#endregion
export { page };

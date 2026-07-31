import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, r as glossarySlug, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { n as getGlossary } from "./contentService_D8jqS7-T.mjs";
//#region src/pages/glossary/index.astro
var glossary_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const terms = getGlossary().sort((a, b) => a.term.localeCompare(b.term));
	const metaTitle = "Tech Glossary - 80+ Enterprise Digital & Telecom Definitions";
	const metaDescription = "Explore our comprehensive tech glossary of APIs, AI, CPaaS, SMS, Cloud Computing, and Enterprise Software terms.";
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": metaTitle,
		"metaDescription": metaDescription,
		"orgSchema": {
			"@context": "https://schema.org",
			"@type": "DefinedTermSet",
			"name": "WebWorldMaker Tech Glossary",
			"url": "https://webworldmaker.com/glossary",
			"description": metaDescription,
			"hasDefinedTerm": terms.map((t) => ({
				"@type": "DefinedTerm",
				"name": t.term,
				"description": t.definition,
				"url": `https://webworldmaker.com/glossary/${glossarySlug(t.term)}`
			}))
		}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-950 text-white min-h-screen py-16"><div class="container mx-auto px-4 max-w-6xl"><div class="text-center mb-16"><span class="text-brand-500 font-bold text-xs uppercase tracking-widest bg-brand-500/10 px-4 py-1.5 rounded-full border border-brand-500/20 inline-block mb-4">Tech Dictionary & Entity Index</span><h1 class="text-4xl md:text-6xl font-black tracking-tight text-white mb-4 uppercase">Tech Glossary</h1><p class="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">Demystifying enterprise messaging, CPaaS protocols, AI architectures, and software engineering terms.</p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${terms.map((item) => {
		const slug = glossarySlug(item.term);
		return renderTemplate`<article class="bg-slate-900/60 border border-white/10 hover:border-brand-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"><div><div class="flex justify-between items-center mb-3"><span class="text-[10px] font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-md border border-brand-500/20">${item.category}</span></div><h2 class="text-xl font-black text-white mb-2"><a${addAttribute(`/glossary/${slug}`, "href")} class="hover:text-brand-400 transition-colors">${item.term}</a></h2><p class="text-slate-400 text-sm leading-relaxed mb-4">${item.definition}</p></div><a${addAttribute(`/glossary/${slug}`, "href")} class="text-xs font-bold text-brand-500 hover:text-brand-400 inline-flex items-center">Read Full Definition →</a></article>`;
	})}</div><div class="mt-16 pt-8 border-t border-white/10 text-center">${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": "WebWorldMaker Tech Glossary",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/glossary/index.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/glossary/index.astro";
var $$url = "/glossary";
//#endregion
//#region \0virtual:astro:page:src/pages/glossary/index@_@astro
var page = () => glossary_exports;
//#endregion
export { page };

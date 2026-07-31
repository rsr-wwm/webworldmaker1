import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, r as glossarySlug, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { n as getGlossary } from "./contentService_D8jqS7-T.mjs";
//#region src/pages/glossary/[term].astro
var _term__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Term,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
async function getStaticPaths() {
	return getGlossary().map((item) => {
		return {
			params: { term: glossarySlug(item.term) },
			props: { item }
		};
	});
}
var $$Term = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Term;
	const { item } = Astro.props;
	const termSchema = {
		"@context": "https://schema.org",
		"@type": "DefinedTerm",
		"name": item.term,
		"description": item.definition,
		"inDefinedTermSet": "https://webworldmaker.com/glossary"
	};
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": `${item.term} - Tech Definition`,
		"metaDescription": `What is ${item.term}? Definition and explanation for ${item.term} in the context of ${item.category}.`,
		"orgSchema": termSchema
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen text-slate-800"><div class="bg-white border-b border-slate-200 py-16"><div class="container mx-auto px-4 max-w-3xl text-center"><a href="/glossary" class="text-indigo-600 font-bold text-sm mb-4 inline-block hover:underline">← Back to Glossary</a><h1 class="text-5xl font-extrabold text-slate-900 mb-6">${item.term}</h1><span class="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">${item.category}</span></div></div><div class="container mx-auto px-4 py-16 max-w-3xl"><div class="mb-10 p-8 rounded-2xl bg-[#141414] border border-[#292929] shadow-[0_13px_48px_rgba(0,0,0,0.4)] relative overflow-hidden text-white"><div class="absolute top-0 right-0 w-40 h-40 bg-[#2ddb81]/10 rounded-full blur-3xl pointer-events-none"></div><div class="flex items-center gap-3 mb-4 border-b border-[#292929] pb-4"><span class="w-8 h-8 rounded-full bg-[#2ddb81]/20 text-[#2ddb81] flex items-center justify-center font-bold text-lg">📖</span><div><h3 class="text-[#2ddb81] font-bold text-xs uppercase tracking-widest">In Plain English</h3><p class="text-white font-extrabold text-lg leading-tight">What is ${item.term}?</p></div></div><div data-answer-target="true" class="text-[#cbcbcb] leading-relaxed text-lg font-normal space-y-4"><p><dfn class="not-italic font-bold text-white">${item.term}</dfn> is defined as: ${item.definition}</p></div></div><div class="text-center"><h3 class="text-lg font-bold text-slate-900 mb-6">Explore More Terms</h3><div class="flex flex-wrap justify-center gap-4"><a href="/glossary/api" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">API</a><a href="/glossary/cloud-computing" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">Cloud Computing</a><a href="/glossary/llm" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">LLM</a></div></div><div class="mt-12 pt-8 border-t border-slate-200 text-center">${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": `Definition of ${item.term}`,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/glossary/[term].astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/glossary/[term].astro";
var $$url = "/glossary/[term]";
//#endregion
//#region \0virtual:astro:page:src/pages/glossary/[term]@_@astro
var page = () => _term__exports;
//#endregion
export { page };

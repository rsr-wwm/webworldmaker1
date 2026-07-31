import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { t as getComparisons } from "./contentService_D8jqS7-T.mjs";
//#region src/pages/compare/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
async function getStaticPaths() {
	const list = getComparisons();
	return list.map((item) => {
		return {
			params: { id: item.id },
			props: {
				item,
				otherComparisons: list.filter((c) => c.id !== item.id)
			}
		};
	});
}
var $$Id = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { item, otherComparisons } = Astro.props;
	const metaTitle = item.metaTitle;
	const metaDescription = item.metaDescription;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": metaTitle,
		"metaDescription": metaDescription,
		"faqs": item.faqs || []
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen text-slate-800"><div class="bg-white border-b border-slate-200 py-16"><div class="container mx-auto px-4 max-w-4xl text-center"><span class="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4 inline-block">Enterprise Review</span><h1 class="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-outfit leading-tight">${item.title}</h1><p class="text-slate-500 text-lg max-w-2xl mx-auto font-medium font-outfit">${item.subtitle}</p><div class="mt-6 text-xs text-slate-400 font-medium">Last Updated: <strong>${item.lastUpdated}</strong> · Expert Reviewed</div></div></div><div class="container mx-auto px-4 py-16 max-w-6xl"><div class="grid lg:grid-cols-12 gap-12 items-start"><div class="lg:col-span-8 space-y-12"><div class="p-8 rounded-3xl bg-[#141414] border border-[#292929] shadow-[0_13px_48px_rgba(0,0,0,0.4)] relative overflow-hidden text-white"><div class="absolute top-0 right-0 w-40 h-40 bg-[#2ddb81]/10 rounded-full blur-3xl pointer-events-none"></div><div class="flex items-center gap-3 mb-4 border-b border-[#292929] pb-4"><span class="w-8 h-8 rounded-full bg-[#2ddb81]/20 text-[#2ddb81] flex items-center justify-center font-bold text-lg">⚖️</span><div><h3 class="text-[#2ddb81] font-bold text-xs uppercase tracking-widest">In Plain English</h3><p class="text-white font-extrabold text-lg leading-tight">Comparison Breakdown: ${item.title}</p></div></div><div data-answer-target="true" class="text-[#cbcbcb] leading-relaxed text-base font-normal space-y-4"><p>Comparing options for <strong class="text-white font-bold">${item.title}</strong>? Here is the simple truth: ${item.subtitle}</p><p class="text-sm text-slate-400">Architect Verdict: <span class="text-[#2ddb81] font-bold">${item.verdict}</span></p></div></div><div class="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"><h3 class="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Audit Process</h3><h4 class="text-2xl font-black text-slate-900 mb-6">How We Compare &amp; Migrate</h4><div class="grid md:grid-cols-3 gap-6"><div class="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2ddb81] hover:shadow-md transition-all duration-300 relative group"><span class="w-8 h-8 rounded-full bg-slate-900 text-[#2ddb81] flex items-center justify-center font-black text-sm mb-3">1</span><h5 class="font-bold text-slate-900 text-base mb-1">Compare Features</h5><p class="text-xs text-slate-600 leading-relaxed">Map uptime guarantees, API latency, carrier binds, and hidden vendor fees.</p></div><div class="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2ddb81] hover:shadow-md transition-all duration-300 relative group"><span class="w-8 h-8 rounded-full bg-slate-900 text-[#2ddb81] flex items-center justify-center font-black text-sm mb-3">2</span><h5 class="font-bold text-slate-900 text-base mb-1">Calculate Savings</h5><p class="text-xs text-slate-600 leading-relaxed">See how much time and monthly budget your team saves by automating tasks.</p></div><div class="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2ddb81] hover:shadow-md transition-all duration-300 relative group"><span class="w-8 h-8 rounded-full bg-slate-900 text-[#2ddb81] flex items-center justify-center font-black text-sm mb-3">3</span><h5 class="font-bold text-slate-900 text-base mb-1">Zero-Downtime Swap</h5><p class="text-xs text-slate-600 leading-relaxed">Switch to WebWorldMaker with 100% data preservation and zero downtime.</p></div></div></div>${item.tableHeaders && item.tableRows && renderTemplate`<div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"><div class="bg-slate-50 px-8 py-4 border-b border-slate-100"><h3 class="font-bold text-slate-700 uppercase text-xs tracking-wider">Direct Parameter Mapping</h3></div><div class="overflow-x-auto"><table class="w-full text-left border-collapse min-w-[500px]"><thead><tr class="border-b border-slate-100 bg-slate-50/50">${item.tableHeaders.map((head, i) => renderTemplate`<th${addAttribute(i, "key")} class="p-4 font-bold text-slate-700 text-xs uppercase tracking-wider">${head}</th>`)}</tr></thead><tbody class="divide-y divide-slate-100">${item.tableRows.map((row, idx) => renderTemplate`<tr${addAttribute(idx, "key")} class="hover:bg-slate-50/30 transition-colors">${row.map((cell, cIdx) => renderTemplate`<td${addAttribute(cIdx, "key")}${addAttribute(`p-4 text-sm font-medium ${cIdx === 0 ? "text-slate-900 font-bold" : "text-slate-600"}`, "class")}>${cell}</td>`)}</tr>`)}</tbody></table></div></div>`}<div class="space-y-8">${item.sections.map((sect, idx) => renderTemplate`<div${addAttribute(idx, "key")} class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm leading-relaxed"><h3 class="text-xl font-bold text-slate-900 mb-3 font-outfit">${sect.title}</h3><p class="text-slate-600 text-sm">${sect.content}</p></div>`)}</div><div class="bg-indigo-50 border border-indigo-100 p-8 rounded-3xl leading-relaxed relative overflow-hidden"><div class="absolute -right-6 -bottom-6 text-9xl opacity-5 pointer-events-none select-none">🏆</div><h3 class="text-indigo-900 font-bold text-lg mb-2 font-outfit flex items-center gap-2"><span>💡</span> WebWorldMaker Architect Verdict</h3><p class="text-indigo-800 text-sm font-medium">${item.verdict}</p></div>${item.faqs && item.faqs.length > 0 && renderTemplate`<div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-8"><h3 class="font-bold text-slate-900 text-xl mb-6 font-outfit">Frequently Asked Questions</h3><div class="space-y-4">${item.faqs.map((faq, fIdx) => renderTemplate`<details${addAttribute(fIdx, "key")} class="group border-b border-slate-100 pb-4 last:border-0 last:pb-0"><summary class="flex justify-between items-center font-bold text-slate-900 text-sm cursor-pointer list-none select-none"><span>${faq.question}</span><span class="text-slate-400 group-open:rotate-180 transition-transform">▼</span></summary><p class="mt-2 text-slate-600 text-xs leading-relaxed pl-2 border-l-2 border-indigo-500 bg-slate-50/50 p-3 rounded">${faq.answer}</p></details>`)}</div></div>`}</div><div class="lg:col-span-4 space-y-8">${renderComponent($$result, "ComparisonFormIsland", null, {
		"client:only": "react",
		"comparisonTitle": item.title,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/ComparisonFormIsland.tsx",
		"client:component-export": "ComparisonFormIsland"
	})}${otherComparisons.length > 0 && renderTemplate`<div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"><h3 class="font-bold text-slate-900 mb-4 font-outfit text-lg">Alternative Audits</h3><div class="space-y-3">${otherComparisons.map((c) => renderTemplate`<a${addAttribute(`/compare/${c.id}`, "href")} class="block p-3 rounded-xl border border-slate-50 hover:border-indigo-100 hover:bg-indigo-50/20 transition-all text-xs font-bold text-slate-800">${c.title}</a>`)}</div></div>`}</div></div><div class="mt-12 max-w-4xl mx-auto text-center border-t border-slate-200 pt-8">${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": item.title,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/compare/[id].astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/compare/[id].astro";
var $$url = "/compare/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/compare/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };

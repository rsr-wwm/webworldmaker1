import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/corrections.astro
var corrections_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Corrections,
	file: () => $$file,
	url: () => $$url
});
var $$Corrections = createComponent(($$result, $$props, $$slots) => {
	const metaTitle = "Corrections Policy";
	const metaDescription = "Our commitment to accuracy. How we correct factual errors in our content.";
	const lastUpdated = "July 20, 2026";
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": metaTitle,
		"metaDescription": metaDescription
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen py-16"><div class="container mx-auto px-4 max-w-4xl"><div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 md:p-16 text-slate-800"><h1 class="text-4xl font-bold text-slate-900 mb-2">${metaTitle}</h1><p class="text-slate-500 mb-10 text-sm">Last Updated: ${lastUpdated}</p><div class="prose prose-slate max-w-none"><p class="mb-4">WebWorldMaker is committed to the accuracy of our content. If you find a factual error on any page, we want to know about it and correct it promptly.</p><h3 class="text-xl font-bold text-slate-900 mt-6 mb-2">Our Commitment</h3><ul class="list-disc pl-6 mb-4 space-y-2"><li>We review and update content regularly, with each page showing its last-reviewed date.</li><li>All factual claims about our services, capabilities, and regional availability are verified before publication.</li><li>When errors are identified, we correct them within 48 hours and update the page's modified date.</li><li>We do not remove content that is factually correct but may be inconvenient.</li></ul><h3 class="text-xl font-bold text-slate-900 mt-6 mb-2">How to Report an Error</h3><p class="mb-2">Email <strong class="text-slate-900">corrections@webworldmaker.com</strong> with:</p><ul class="list-disc pl-6 mb-4 space-y-2"><li>The URL of the page containing the error</li><li>The specific text that is incorrect</li><li>The correct information (with a source, if possible)</li></ul><h3 class="text-xl font-bold text-slate-900 mt-6 mb-2">Content Standards</h3><p class="mb-4">We avoid superlatives and claims we cannot verify. Where service availability depends on third-party infrastructure (carriers, local regulations), we state that explicitly rather than making absolute claims. Our location pages note that actual availability depends on carrier approvals.</p><h3 class="text-xl font-bold text-slate-900 mt-6 mb-2">Editorial Process</h3><p class="mb-4">Service descriptions, technical specifications, and compliance information are reviewed by subject-matter experts before publication. Blog posts include author attribution with credentials. We clearly distinguish between verified capabilities and designed-for specifications.</p></div><div class="mt-12 pt-8 border-t border-slate-100">${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": `${metaTitle} - WebWorldMaker`,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/corrections.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/corrections.astro";
var $$url = "/corrections";
//#endregion
//#region \0virtual:astro:page:src/pages/corrections@_@astro
var page = () => corrections_exports;
//#endregion
export { page };

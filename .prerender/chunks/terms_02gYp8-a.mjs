import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/terms.astro
var terms_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Terms,
	file: () => $$file,
	url: () => $$url
});
var $$Terms = createComponent(($$result, $$props, $$slots) => {
	const metaTitle = "Terms of Service";
	const metaDescription = "Read our Terms of Service regarding the use of WebWorldMaker services and products.";
	const lastUpdated = "October 24, 2023";
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": metaTitle,
		"metaDescription": metaDescription
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen py-16"><div class="container mx-auto px-4 max-w-4xl"><div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 md:p-16 text-slate-800"><h1 class="text-4xl font-bold text-slate-900 mb-2">${metaTitle}</h1><p class="text-slate-500 mb-10 text-sm">Last Updated: ${lastUpdated}</p><div class="prose prose-slate max-w-none"><p>These Terms of Service ("Terms") govern your use of the WebWorldMaker website and services. By accessing or using the Service, you agree to be bound by these Terms.</p><h3 class="text-xl font-bold text-slate-900 mt-6 mb-2">1. Acceptance of Terms</h3><p class="mb-4">By accessing or using our Services, you confirm that you can form a binding contract with WebWorldMaker, that you accept these Terms and that you agree to comply with them.</p><h3 class="text-xl font-bold text-slate-900 mt-6 mb-2">2. Changes to Terms</h3><p class="mb-4">We reserve the right to modify these Terms at any time. We will always post the most current version on our website. By continuing to use the Services after the changes become effective, you agree to the revised Terms.</p><h3 class="text-xl font-bold text-slate-900 mt-6 mb-2">3. Access and Use of the Services</h3><p class="mb-4">You may use the Services only in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations.</p><h3 class="text-xl font-bold text-slate-900 mt-6 mb-2">4. Intellectual Property</h3><p class="mb-4">The Service and its original content, features, and functionality are and will remain the exclusive property of WebWorldMaker and its licensors.</p></div><div class="mt-12 pt-8 border-t border-slate-100">${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": `${metaTitle} - WebWorldMaker`,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/terms.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/terms.astro";
var $$url = "/terms";
//#endregion
//#region \0virtual:astro:page:src/pages/terms@_@astro
var page = () => terms_exports;
//#endregion
export { page };

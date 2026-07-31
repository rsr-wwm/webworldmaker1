import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/pricing.astro
var pricing_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Pricing,
	file: () => $$file,
	url: () => $$url
});
var $$Pricing = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "Pricing - Transparent & Scalable",
		"metaDescription": "View pricing for WebWorldMaker services. SaaS subscriptions for software, and pay-as-you-go rates for SMS, WhatsApp, and AI usage."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen"><div class="bg-slate-950 text-white py-24 relative overflow-hidden"><div class="absolute inset-0 bg-[url('/patterns/cubes.png')] opacity-10"></div><div class="container mx-auto px-4 text-center relative z-10"><h1 class="text-4xl md:text-5xl font-black mb-6 text-white tracking-tighter">Simple, Transparent Pricing</h1><p class="text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-6">Choose a plan that fits your stage of growth. No hidden fees.</p><div class="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-4 text-xs md:text-sm text-slate-300 font-semibold leading-relaxed">⚠️ <span class="text-white font-bold">Important Notice:</span> Custom engineering engagements and unified B2B digital ecosystems start at a minimum investment of <span class="text-indigo-400 font-black">₹2 Lakh ($2,500 USD)</span>, subject to our suitability screening. The rates listed below apply to self-serve utility APIs, standard SaaS plans, and custom module licensing.</div></div></div>${renderComponent($$result, "PricingCalculatorIsland", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/PricingCalculatorIsland.tsx",
		"client:component-export": "PricingCalculatorIsland"
	})}<div class="container mx-auto px-4 pb-16"><div class="mt-12 max-w-4xl mx-auto">${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": "WebWorldMaker Pricing Plans",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/pricing.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/pricing.astro";
var $$url = "/pricing";
//#endregion
//#region \0virtual:astro:page:src/pages/pricing@_@astro
var page = () => pricing_exports;
//#endregion
export { page };

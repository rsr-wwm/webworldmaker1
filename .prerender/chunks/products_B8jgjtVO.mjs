import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { a as getProducts } from "./contentService_D8jqS7-T.mjs";
//#region src/pages/products.astro
var products_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Products,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
var $$Products = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Products;
	const products = getProducts();
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "Products & Platforms - White Label & SaaS",
		"metaDescription": "Explore our ready-to-use platforms including White Label Reseller programs, Campaign Manager Pro, and VoiceBot Studio.",
		"orgSchema": {
			"@context": "https://schema.org",
			"@type": "ItemList",
			"itemListElement": products.map((product, index) => ({
				"@type": "ListItem",
				"position": index + 1,
				"item": {
					"@type": "Product",
					"name": product.title,
					"description": product.description,
					"url": `${Astro.url.origin}/product/${product.id}`,
					"brand": {
						"@type": "Brand",
						"name": "WebWorldMaker"
					},
					"offers": {
						"@type": "Offer",
						"price": "0.00",
						"priceCurrency": "USD",
						"availability": "https://schema.org/InStock"
					}
				}
			}))
		}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen pb-20"><div class="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white"><div class="container mx-auto px-4 text-center"><h1 class="text-4xl md:text-5xl font-bold mb-6">Empowerment Hub</h1><p class="text-xl text-indigo-200 max-w-3xl mx-auto mb-8">White Label Platforms & Reseller Programs. Start your own digital agency with our infrastructure.</p><!-- Product Categories --><div class="flex flex-wrap justify-center gap-3">${[
		"White Label",
		"AI Tools",
		"APIs",
		"SaaS"
	].map((cat) => renderTemplate`<button${addAttribute(cat, "key")} class="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-indigo-900 transition-all">${cat}</button>`)}</div></div></div><div class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold text-slate-900 mb-12 text-center">Our Product Platforms</h2><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">${products.map((product) => renderTemplate`<div${addAttribute(product.id, "key")} class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col overflow-hidden group"><div class="h-3 bg-gradient-to-r from-indigo-500 to-purple-500"></div><div class="p-8 flex-grow"><div class="mb-4"><span class="bg-indigo-50 text-indigo-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">${product.pricingModel}</span></div><h3 class="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">${product.title}</h3><p class="text-sm font-semibold text-slate-500 mb-4">${product.tagline}</p><p class="text-slate-600 mb-6 line-clamp-3">${product.description}</p><div class="space-y-2 mb-6">${product.features.slice(0, 3).map((feat) => renderTemplate`<div class="flex items-center text-sm text-slate-500"><svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M5 13l4 4L19 7"></path></svg>${feat.title}</div>`)}</div></div><div class="p-6 bg-slate-50 border-t border-slate-100 mt-auto"><a${addAttribute(`/product/${product.id}`, "href")} class="block w-full text-center bg-white border border-slate-300 text-slate-700 font-bold py-3 rounded-lg hover:bg-indigo-600 hover:text-white hover:border-transparent transition-all">View Details</a></div></div>`)}</div><!-- Comparison Table --><div class="mt-20"><h2 class="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose Our Platforms vs Building Your Own?</h2><div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden max-w-4xl mx-auto"><div class="overflow-x-auto"><table class="w-full text-sm text-left"><thead class="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200"><tr><th class="px-6 py-4 font-bold">Feature</th><th class="px-6 py-4 font-bold text-indigo-600">WebWorldMaker White Label</th><th class="px-6 py-4 font-bold text-slate-400">Building from Scratch</th></tr></thead><tbody><tr class="bg-white border-b border-slate-100"><td class="px-6 py-4 font-medium text-slate-900">Time to Market</td><td class="px-6 py-4 text-green-600 font-bold">24 - 48 Hours</td><td class="px-6 py-4 text-slate-500">6 - 12 Months</td></tr><tr class="bg-slate-50/50 border-b border-slate-100"><td class="px-6 py-4 font-medium text-slate-900">Initial Investment</td><td class="px-6 py-4 text-green-600 font-bold">Low (Setup Fee)</td><td class="px-6 py-4 text-slate-500">High ($50k+ Development)</td></tr><tr class="bg-white border-b border-slate-100"><td class="px-6 py-4 font-medium text-slate-900">Maintenance</td><td class="px-6 py-4 text-green-600 font-bold">Included 24/7</td><td class="px-6 py-4 text-slate-500">Self-Managed (Expensive)</td></tr><tr class="bg-slate-50/50 border-b border-slate-100"><td class="px-6 py-4 font-medium text-slate-900">Carrier Connections</td><td class="px-6 py-4 text-green-600 font-bold">Pre-integrated Tier-1 Routes</td><td class="px-6 py-4 text-slate-500">Negotiate Individually</td></tr><tr class="bg-white"><td class="px-6 py-4 font-medium text-slate-900">Infrastructure</td><td class="px-6 py-4 text-green-600 font-bold">Enterprise Cloud (AWS)</td><td class="px-6 py-4 text-slate-500">Your Own Servers</td></tr></tbody></table></div></div></div><!-- Security & Infrastructure Section --><div class="mt-20"><h2 class="text-3xl font-bold text-slate-900 text-center mb-10">Enterprise-Grade Infrastructure</h2><div class="bg-slate-900 text-white rounded-3xl p-10 shadow-2xl"><div class="grid md:grid-cols-3 gap-8"><div class="flex flex-col items-center text-center"><div class="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 text-2xl">🔒</div><h3 class="font-bold text-lg mb-2">Data Encryption</h3><p class="text-slate-400 text-sm">All data at rest and in transit is encrypted using AES-256 standards. We prioritize your privacy.</p></div><div class="flex flex-col items-center text-center"><div class="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 text-2xl">⚡</div><h3 class="font-bold text-lg mb-2">99.9% Uptime</h3><p class="text-slate-400 text-sm">Hosted on redundant AWS & GCP clusters to ensure your services never go offline during critical campaigns.</p></div><div class="flex flex-col items-center text-center"><div class="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 text-2xl">📜</div><h3 class="font-bold text-lg mb-2">Compliance</h3><p class="text-slate-400 text-sm">Fully compliant with GDPR, CCPA, and telecom regulations like TCPA for messaging.</p></div></div></div></div><!-- Reseller Highlight --><div class="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"><div class="grid md:grid-cols-2"><div class="p-10 md:p-16 flex flex-col justify-center"><h2 class="text-3xl font-bold text-slate-900 mb-6">Partner with Us</h2><p class="text-slate-600 mb-8 text-lg">Not looking for a product? Join our partner ecosystem. We offer referral bonuses and technical partnerships for system integrators.</p><a href="/contact?buttonName=Contact Partnership Team" class="self-start bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">Contact Partnership Team</a></div><div class="bg-slate-100 min-h-[300px] relative"><img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" alt="Strategic Partnership" loading="lazy" decoding="async"${addAttribute(800, "width")}${addAttribute(600, "height")} class="absolute inset-0 w-full h-full object-cover opacity-90"><div class="absolute inset-0 bg-indigo-900/10"></div></div></div></div><div class="mt-12 max-w-4xl mx-auto">${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": "Products & Platforms - WebWorldMaker",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/products.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/products.astro";
var $$url = "/products";
//#endregion
//#region \0virtual:astro:page:src/pages/products@_@astro
var page = () => products_exports;
//#endregion
export { page };

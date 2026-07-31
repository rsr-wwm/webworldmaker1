import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/partners/partner-program.astro
var partner_program_exports = /* @__PURE__ */ __exportAll({
	default: () => $$PartnerProgram,
	file: () => $$file,
	url: () => $$url
});
var $$PartnerProgram = createComponent(($$result, $$props, $$slots) => {
	const partnerTypes = [
		{
			id: "technology",
			icon: "💻",
			title: "Technology Partners",
			description: "Integrate WebWorldMaker's APIs (SMS, RCS, AI) into your own software platforms. Ideal for CRM, ERP, and SaaS providers.",
			benefits: [
				"API Sandbox Access",
				"Co-marketing opportunities",
				"Dedicated Integration Support"
			]
		},
		{
			id: "reseller",
			icon: "🏷️",
			title: "Reseller & White Label",
			description: "Start your own digital agency using our infrastructure. Rebrand our portal and sell to your local market.",
			benefits: [
				"Wholesale Pricing",
				"White-label Dashboard",
				"100% Profit Retention"
			]
		},
		{
			id: "referral",
			icon: "🤝",
			title: "Referral Partners",
			description: "Consultants and agencies who refer clients to us. Earn recurring commissions for every deal closed.",
			benefits: [
				"20% Recurring Commission",
				"Partner Portal",
				"Sales Collateral"
			]
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "Partners - Grow With Us",
		"metaDescription": "Join the WebWorldMaker Partner Ecosystem. Technology partnerships, white-label reseller programs, and referral opportunities."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen"><div class="bg-slate-950 text-white py-24 relative overflow-hidden"><div class="absolute inset-0 bg-[url('/patterns/cubes.png')] opacity-10"></div><div class="container mx-auto px-4 relative z-10 text-center"><span class="inline-block bg-brand-500/20 border border-brand-400/30 rounded-full px-6 py-2 text-sm font-black uppercase tracking-widest mb-8 text-brand-300">Partner Ecosystem</span><h1 class="text-5xl md:text-6xl font-black mb-6 text-white tracking-tighter">Grow Faster, Together.</h1><p class="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-medium">Join hundreds of technology companies, agencies, and consultants leveraging WebWorldMaker's infrastructure to scale their business.</p><a href="#programs" class="bg-white text-slate-950 font-black py-4 px-12 rounded-xl hover:bg-slate-50 transition-all shadow-2xl active:scale-95 inline-block uppercase tracking-widest">View Programs</a></div></div><div class="container mx-auto px-4 py-20"><div id="programs" class="grid md:grid-cols-3 gap-8 mb-24">${partnerTypes.map((program) => renderTemplate`<div${addAttribute(program.id, "key")} class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1"><div class="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-3xl mb-6">${program.icon}</div><h3 class="text-2xl font-bold text-slate-900 mb-3">${program.title}</h3><p class="text-slate-600 mb-6 leading-relaxed h-24">${program.description}</p><ul class="space-y-3 mb-8">${program.benefits.map((benefit, i) => renderTemplate`<li${addAttribute(i, "key")} class="flex items-center text-sm text-slate-700 font-medium"><svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linecap="round"${addAttribute(2, "stroke-width")} d="M5 13l4 4L19 7"></path></svg>${benefit}</li>`)}</ul><a${addAttribute(`/contact?service=Partner Program: ${program.title}&buttonName=${encodeURIComponent("Apply Now")}`, "href")} class="block w-full text-center bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-indigo-600 transition-colors">Apply Now</a></div>`)}</div><div class="bg-white rounded-3xl p-10 md:p-16 border border-slate-100 mb-20 relative overflow-hidden"><div class="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2"></div><div class="relative z-10"><div class="text-center mb-12"><h2 class="text-3xl font-bold text-slate-900 mb-4">Why Partner With Us?</h2><p class="text-slate-600 max-w-2xl mx-auto">We provide the tools, support, and infrastructure you need to succeed.</p></div><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"><div class="text-center"><div class="text-4xl font-bold text-indigo-600 mb-2">Tier-1</div><div class="text-sm font-bold text-slate-900 uppercase">Infrastructure</div><p class="text-xs text-slate-500 mt-2">Direct carrier connections ensuring 99.9% uptime.</p></div><div class="text-center"><div class="text-4xl font-bold text-indigo-600 mb-2">24/7</div><div class="text-sm font-bold text-slate-900 uppercase">Priority Support</div><p class="text-xs text-slate-500 mt-2">Dedicated partner success managers.</p></div><div class="text-center"><div class="text-4xl font-bold text-indigo-600 mb-2">API</div><div class="text-sm font-bold text-slate-900 uppercase">First Platform</div><p class="text-xs text-slate-500 mt-2">Documentation built for developers, by developers.</p></div><div class="text-center"><div class="text-4xl font-bold text-indigo-600 mb-2">Global</div><div class="text-sm font-bold text-slate-900 uppercase">Reach</div><p class="text-xs text-slate-500 mt-2">Send messages to 200+ countries instantly.</p></div></div></div></div><div class="text-center mb-20"><h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by Technology Leaders</h3><div class="flex flex-wrap justify-center gap-12 grayscale opacity-50"><span class="text-2xl font-bold text-slate-600">Google Cloud</span><span class="text-2xl font-bold text-slate-600">AWS Partner</span><span class="text-2xl font-bold text-slate-600">Meta Business</span><span class="text-2xl font-bold text-slate-600">Shopify Plus</span><span class="text-2xl font-bold text-slate-600">HubSpot</span></div></div><div class="bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl border border-white/10"><div class="absolute inset-0 bg-[url('/patterns/stardust.png')] opacity-20"></div><div class="relative z-10"><h2 class="text-4xl font-black mb-6 text-white tracking-tighter">READY TO EXPAND YOUR BUSINESS?</h2><p class="text-slate-300 mb-10 max-w-2xl mx-auto text-lg font-medium">Whether you want to resell our services or integrate our API, we have a program tailored for your growth.</p><a${addAttribute(`/contact?buttonName=${encodeURIComponent("Become a Partner")}`, "href")} class="inline-block bg-white text-slate-950 font-black py-4 px-12 rounded-xl hover:bg-slate-50 transition-all shadow-2xl active:scale-95 uppercase tracking-widest">Become a Partner</a></div></div><div class="mt-12 max-w-4xl mx-auto">${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": "WebWorldMaker Partner Program",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/partners/partner-program.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/partners/partner-program.astro";
var $$url = "/partners/partner-program";
//#endregion
//#region \0virtual:astro:page:src/pages/partners/partner-program@_@astro
var page = () => partner_program_exports;
//#endregion
export { page };

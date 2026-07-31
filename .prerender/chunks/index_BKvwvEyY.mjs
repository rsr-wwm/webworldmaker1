import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/company/index.astro
var company_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const metaTitle = "Company & Executive Headquarters | WebWorldMaker";
	const metaDescription = "Explore WebWorldMaker's mission, executive team, career opportunities, strategic partnerships, and global operations.";
	const navCards = [
		{
			title: "About Us",
			href: "/company/about",
			description: "Discover our 15+ year history, core principles, and global infrastructure vision.",
			icon: "🏛️"
		},
		{
			title: "Partnership Program",
			href: "/partners/partner-program",
			description: "Join our enterprise reseller, wholesaler, and API integration partner network.",
			icon: "🤝"
		},
		{
			title: "Case Studies",
			href: "/case-studies",
			description: "Read how leading fintech, retail, and healthcare brands scale with WebWorldMaker.",
			icon: "📊"
		},
		{
			title: "Careers & Culture",
			href: "/company/careers",
			description: "Build high-throughput systems and AI solutions with our global engineering team.",
			icon: "🚀"
		},
		{
			title: "Social Connectivity",
			href: "/social-media",
			description: "Connect with our official channels and developer community updates.",
			icon: "🌐"
		},
		{
			title: "Contact Operations",
			href: "/contact",
			description: "Reach our 24/7 technical support, sales engineering, and compliance offices.",
			icon: "📞"
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": metaTitle,
		"metaDescription": metaDescription
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-950 text-white min-h-screen py-20"><div class="container mx-auto px-4 max-w-5xl"><div class="text-center mb-16"><span class="text-brand-500 font-bold text-xs uppercase tracking-widest bg-brand-500/10 px-4 py-1.5 rounded-full border border-brand-500/20 inline-block mb-4">Corporate Overview</span><h1 class="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase">WebWorldMaker Directory</h1><p class="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">Pioneering cloud communications, enterprise software engineering, and AI generative engine optimization.</p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${navCards.map((card) => renderTemplate`<a${addAttribute(card.href, "href")} class="group bg-slate-900/60 border border-white/10 hover:border-brand-500/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 flex flex-col justify-between"><div><div class="text-3xl mb-4 p-3 bg-slate-800/80 rounded-xl w-fit group-hover:scale-110 transition-transform">${card.icon}</div><h2 class="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">${card.title}</h2><p class="text-sm text-slate-400 leading-relaxed">${card.description}</p></div><div class="mt-6 flex items-center text-xs font-bold text-brand-500 group-hover:translate-x-1 transition-transform">Explore Section →</div></a>`)}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/company/index.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/company/index.astro";
var $$url = "/company";
//#endregion
//#region \0virtual:astro:page:src/pages/company/index@_@astro
var page = () => company_exports;
//#endregion
export { page };

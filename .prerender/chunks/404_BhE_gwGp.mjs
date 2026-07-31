import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "404 - Page Not Found | WebWorldMaker",
		"metaDescription": "The page you are looking for does not exist or has been moved.",
		"noIndex": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-[80vh] flex items-center justify-center bg-[#0a0a0a] px-4 text-white relative overflow-hidden"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2ddb81]/5 rounded-full blur-[120px] pointer-events-none"></div><div class="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div><div class="text-center relative z-10 p-12 rounded-3xl bg-[#141414]/80 backdrop-blur-xl border border-[#292929] shadow-[0_20px_60px_rgba(0,0,0,0.6)] max-w-2xl w-full"><div class="text-[150px] md:text-[200px] font-black leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-br from-[#2ddb81] to-emerald-900 tracking-tighter mix-blend-screen opacity-90 filter drop-shadow-[0_0_30px_rgba(45,219,129,0.3)]">404</div><h1 class="text-3xl md:text-5xl font-extrabold text-white mb-6">System <span class="text-[#2ddb81]">Not Found</span></h1><p class="text-[#cbcbcb] text-lg md:text-xl mb-10 max-w-lg mx-auto font-light">The digital node you are looking for has been disconnected or doesn't exist in our network matrix.</p><div class="flex flex-col sm:flex-row gap-4 justify-center items-center"><a href="/" class="group relative px-8 py-4 bg-[#2ddb81] text-slate-950 rounded-xl font-bold text-lg hover:bg-[#25b86d] transition-all duration-300 shadow-[0_0_20px_rgba(45,219,129,0.3)] hover:shadow-[0_0_30px_rgba(45,219,129,0.5)] flex items-center gap-2 overflow-hidden w-full sm:w-auto justify-center"><span class="relative z-10 flex items-center gap-2"><svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>Reboot to Home</span><div class="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full z-0"></div></a><a href="/contact?buttonName=404%20Page%20Contact" class="px-8 py-4 bg-[#1a1a1a] text-[#cbcbcb] hover:text-white rounded-xl font-bold border border-[#333] hover:border-[#555] transition-all duration-300 w-full sm:w-auto text-center">Contact Support</a></div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/404.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };

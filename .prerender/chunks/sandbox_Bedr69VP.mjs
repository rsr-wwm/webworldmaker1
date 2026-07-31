import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/sandbox.astro
var sandbox_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Sandbox,
	file: () => $$file,
	url: () => $$url
});
var $$Sandbox = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "Developer API Sandbox",
		"metaDescription": "Experience the power of WebWorldMaker CPaaS APIs. Send mock requests, view SDK code generators, and watch real-time messages render inside our virtual device."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-950 text-white min-h-screen relative overflow-hidden font-sans pb-24"><div class="absolute inset-0 mesh-bg-animated opacity-25 pointer-events-none z-0"></div><div class="absolute inset-0 bg-pattern-grid opacity-[0.05] pointer-events-none z-0"></div><div class="container mx-auto px-4 py-16 relative z-10"><nav class="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-6"><a href="/" class="hover:text-white transition-colors">Home</a><span>/</span><a href="/services" class="hover:text-white transition-colors">Services</a><span>/</span><span class="text-indigo-400">Developer Sandbox</span></nav><div class="max-w-4xl mb-12"><span class="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs font-black text-indigo-400 uppercase tracking-widest inline-flex items-center gap-2 mb-4"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>Omnichannel API Simulator</span><h1 class="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase leading-none bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">Developer API Playground</h1><p class="text-slate-400 text-base md:text-lg leading-relaxed font-medium">Run realistic connectivity tests, view dynamically generated request structures in real-time, and see how text payloads format across SMS, WhatsApp Business, and RCS network nodes.</p></div>${renderComponent($$result, "SandboxIsland", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SandboxIsland.tsx",
		"client:component-export": "SandboxIsland"
	})}<div class="grid md:grid-cols-3 gap-6 mt-16"><div class="bg-slate-900/40 border border-white/5 p-6 rounded-2xl hover:border-indigo-500/30 transition-all group"><span class="text-2xl mb-3 block group-hover:scale-110 transition-transform">⚡</span><h3 class="font-bold text-white text-sm uppercase mb-1">Persistent SMPP Binds</h3><p class="text-xs text-slate-400 leading-relaxed font-medium">Achieve millisecond latencies using persistent transmitter, receiver, or transceiver binds to global carrier nodes.</p></div><div class="bg-slate-900/40 border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-all group"><span class="text-2xl mb-3 block group-hover:scale-110 transition-transform">🔒</span><h3 class="font-bold text-white text-sm uppercase mb-1">DMARC & DKIM Alignment</h3><p class="text-xs text-slate-400 leading-relaxed font-medium">Sandbox simulates delivery status notification headers. Complete SPF alignments dynamically before production warmup.</p></div><div class="bg-slate-900/40 border border-white/5 p-6 rounded-2xl hover:border-pink-500/30 transition-all group"><span class="text-2xl mb-3 block group-hover:scale-110 transition-transform">🤖</span><h3 class="font-bold text-white text-sm uppercase mb-1">AI Agent & MCP Tooling</h3><p class="text-xs text-slate-400 leading-relaxed font-medium">Integrate communication tools directly inside LLM runtime contexts using Model Context Protocol (MCP) server links.</p></div></div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/sandbox.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/sandbox.astro";
var $$url = "/sandbox";
//#endregion
//#region \0virtual:astro:page:src/pages/sandbox@_@astro
var page = () => sandbox_exports;
//#endregion
export { page };

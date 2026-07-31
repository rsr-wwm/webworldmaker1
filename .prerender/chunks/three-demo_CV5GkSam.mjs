import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/three-demo.astro
var three_demo_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ThreeDemo,
	file: () => $$file,
	url: () => $$url
});
var $$ThreeDemo = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "3D Interactive Demo",
		"metaDescription": "Experience our interactive 3D WebGL rotating mesh simulation built using React Three Fiber and OrbitControls."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-screen bg-slate-950 text-white flex flex-col justify-center py-16 relative overflow-hidden"><div class="absolute inset-0 bg-pattern-grid opacity-[0.05] pointer-events-none"></div><div class="container mx-auto px-4 text-center max-w-3xl relative z-10"><h1 class="text-4xl font-black mb-4 uppercase tracking-tighter bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">3D Interactive Demo</h1><p class="text-slate-400 text-sm mb-12 max-w-xl mx-auto">A real-time WebGL rotation demo showcasing clean hardware acceleration. Drag to rotate or scroll to zoom on the box mesh.</p><div class="bg-slate-900/60 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">${renderComponent($$result, "ThreeDemoIsland", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/ThreeDemoIsland.tsx",
		"client:component-export": "ThreeDemoIsland"
	})}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/three-demo.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/three-demo.astro";
var $$url = "/three-demo";
//#endregion
//#region \0virtual:astro:page:src/pages/three-demo@_@astro
var page = () => three_demo_exports;
//#endregion
export { page };

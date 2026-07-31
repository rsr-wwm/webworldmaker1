import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { o as getServiceCategories } from "./contentService_D8jqS7-T.mjs";
import fs from "fs";
import path from "path";
//#region src/pages/locations.astro
var locations_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Locations,
	file: () => $$file,
	url: () => $$url
});
var $$Locations = createComponent(($$result, $$props, $$slots) => {
	const filePath = path.join(process.cwd(), "public", "locations-index.json");
	let locations = [];
	try {
		const fileContent = fs.readFileSync(filePath, "utf-8");
		locations = JSON.parse(fileContent);
	} catch (e) {
		console.error("Failed to parse locations index in build:", e);
	}
	const services = getServiceCategories().flatMap((cat) => (cat.items || []).map((item) => ({
		...item,
		categoryId: cat.id
	})));
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "Global Reach & Local Carrier Networks | WebWorldMaker",
		"metaDescription": "Connect instantly with global local carrier integrations. Trace carrier latency, local compliance, and direct SMPP binds across 1,000+ cities globally.",
		"extraSchema": {
			"@context": "https://schema.org",
			"@type": "ItemList",
			"@id": "https://webworldmaker.com/locations/#itemlist",
			"name": "WebWorldMaker Global Service Locations",
			"description": "Complete directory of cities and regions served by WebWorldMaker digital solutions.",
			"numberOfItems": locations?.length || 1698,
			"itemListElement": (locations || []).slice(0, 50).map((loc, i) => ({
				"@type": "ListItem",
				"position": i + 1,
				"name": `${loc.city}, ${loc.state}`,
				"url": `https://webworldmaker.com/locations/${loc.stateSlug}/${loc.citySlug}`
			}))
		}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-[#030014] text-white min-h-screen py-16 relative overflow-hidden"><div class="absolute inset-0 mesh-bg-animated opacity-30 pointer-events-none"></div><div class="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div><div class="container mx-auto px-4 relative z-10 max-w-7xl"><div class="text-center mb-16 max-w-3xl mx-auto"><div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6"><span class="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span><span class="text-cyan-400 text-xs font-black uppercase tracking-widest leading-none mt-0.5">WWM Global Node Grid</span></div><h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">Global Networks <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">Local Connectivity</span></h1><p class="text-slate-400 text-lg leading-relaxed font-medium">WebWorldMaker integrates direct T1 connections across ${locations.length || 1698} cities worldwide. Explore localized gateways, carrier latency charts, and regional compliance frameworks.</p></div><div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">${[
		{
			value: (locations.length || 1698).toLocaleString(),
			label: "Active Hubs",
			color: "border-violet-500/20"
		},
		{
			value: "14 Channels",
			label: "Omnichannel Routing",
			color: "border-indigo-500/20"
		},
		{
			value: "99.999%",
			label: "Gateway SLA Uptime",
			color: "border-cyan-500/20"
		},
		{
			value: "<1.2s",
			label: "Global Latency SLA",
			color: "border-pink-500/20"
		}
	].map((stat, idx) => renderTemplate`<div${addAttribute(idx, "key")}${addAttribute(`bg-white/[0.02] backdrop-blur-xl border ${stat.color} p-6 rounded-2xl text-center shadow-lg`, "class")}><div class="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">${stat.value}</div><div class="text-xs font-bold text-slate-400 uppercase tracking-wider">${stat.label}</div></div>`)}</div><div class="bg-white/[0.02] border border-white/5 rounded-3xl p-8 mb-16 shadow-2xl relative overflow-hidden"><div class="absolute top-0 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none"></div><div class="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"></div><div class="text-center py-12"><div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 border border-white/10 animate-bounce">🌐</div><h3 class="text-xl font-bold mb-2 uppercase tracking-wide">Dynamic Routing Infrastructure</h3><p class="text-slate-400 text-sm max-w-lg mx-auto mb-6">Our automated outbound dialers and SMPP gateway channels route traffic dynamically across Tier-1 carriers using localized edge points for ultra-low latency.</p><div class="flex flex-wrap justify-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400"><span class="bg-white/5 px-4 py-2 rounded-lg border border-white/5 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> US 10DLC</span><span class="bg-white/5 px-4 py-2 rounded-lg border border-white/5 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> EU GDPR</span><span class="bg-white/5 px-4 py-2 rounded-lg border border-white/5 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> IN DLT / TRAI</span><span class="bg-white/5 px-4 py-2 rounded-lg border border-white/5 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> SG PDPA</span></div></div></div>${renderComponent($$result, "LocationsDirectoryIsland", null, {
		"client:only": "react",
		"locations": locations,
		"services": services,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/LocationsDirectoryIsland.tsx",
		"client:component-export": "LocationsDirectoryIsland"
	})}</div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/locations.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/locations.astro";
var $$url = "/locations";
//#endregion
//#region \0virtual:astro:page:src/pages/locations@_@astro
var page = () => locations_exports;
//#endregion
export { page };

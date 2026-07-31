import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/developer/api-reference.astro
var api_reference_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ApiReference,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
var $$ApiReference = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ApiReference;
	const metaTitle = "API Reference | WebWorldMaker Developer Hub";
	const metaDescription = "Complete API reference for WebWorldMaker's enterprise messaging and AI integration gateways. Learn how to authenticate, send SMS/WhatsApp messages, and use our MCP servers.";
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": metaTitle,
		"metaDescription": metaDescription,
		"extraSchema": {
			"@context": "https://schema.org",
			"@type": "TechArticle",
			"headline": "WebWorldMaker API Reference",
			"description": metaDescription,
			"inLanguage": "en",
			"publisher": { "@id": `${Astro.url.origin}/#organization` }
		}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="pt-32 pb-20 bg-slate-50 min-h-screen text-slate-800"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="mb-12"><h1 class="text-4xl font-extrabold text-slate-900 mb-4">API Reference</h1><p class="text-xl text-slate-600">Integrate WebWorldMaker's powerful messaging and AI infrastructure into your applications.</p></div><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><!-- Sidebar --><div class="md:col-span-1"><nav class="sticky top-32 space-y-2"><a href="#authentication" class="block px-4 py-2 text-indigo-700 bg-indigo-50 rounded-lg font-semibold">Authentication</a><a href="#endpoints" class="block px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">REST Endpoints</a><a href="#mcp" class="block px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">MCP Servers</a><a href="#rate-limits" class="block px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">Rate Limits</a></nav></div><!-- Content --><div class="md:col-span-3 space-y-12"><section id="authentication" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"><h2 class="text-2xl font-bold mb-4">Authentication</h2><p class="mb-4">All API requests require a Bearer token in the Authorization header.</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-xl overflow-x-auto"><code>Authorization: Bearer YOUR_API_KEY</code></pre></section><section id="endpoints" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"><h2 class="text-2xl font-bold mb-6">Core REST Endpoints</h2><div class="mb-8"><h3 class="text-xl font-semibold mb-2 flex items-center"><span class="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-mono mr-3">POST</span>/v1/messages/send</h3><p class="mb-4 text-slate-600">Send an SMS or WhatsApp message.</p><h4 class="font-semibold mb-2">Request Body (JSON)</h4><pre class="bg-slate-900 text-slate-300 p-4 rounded-xl overflow-x-auto mb-4"><code>${`{
  "to": "+1234567890",
  "channel": "whatsapp",
  "type": "text",
  "content": {
    "text": "Hello from WebWorldMaker!"
  }
}`}</code></pre></div></section><section id="mcp" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"><h2 class="text-2xl font-bold mb-4">Model Context Protocol (MCP)</h2><p class="mb-4">We provide a public MCP server for agents to query your analytics and messaging logs securely.</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-xl overflow-x-auto"><code>npx @webworldmaker/mcp-server --api-key=YOUR_API_KEY</code></pre></section></div></div></div></main>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/developer/api-reference.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/developer/api-reference.astro";
var $$url = "/developer/api-reference";
//#endregion
//#region \0virtual:astro:page:src/pages/developer/api-reference@_@astro
var page = () => api_reference_exports;
//#endregion
export { page };

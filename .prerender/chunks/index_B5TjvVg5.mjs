import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, i as renderScript, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { t as getPosts } from "./blogService_Dxh_4cj5.mjs";
import "./contentService_D8jqS7-T.mjs";
//#region src/pages/resources/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const posts = getPosts();
	const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category))).sort()];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "News & Insights",
		"metaDescription": "Explore the latest trends in AI, Enterprise Messaging, and Digital Strategy. Expert articles by WebWorldMaker.",
		"orgSchema": {
			"@context": "https://schema.org",
			"@type": "Blog",
			"name": "WebWorldMaker Insights",
			"description": "Latest trends in AI, Messaging, and Digital Transformation.",
			"url": Astro.url.href,
			"publisher": {
				"@type": "Organization",
				"name": "WebWorldMaker",
				"logo": {
					"@type": "ImageObject",
					"url": `${Astro.url.origin}/logo.png`
				},
				"sameAs": ["https://twitter.com/webworldmaker", "https://www.wikidata.org/wiki/Q114872221"]
			},
			"blogPost": posts.map((post) => ({
				"@type": "BlogPosting",
				"headline": post.title,
				"description": post.excerpt,
				"image": post.imageUrl,
				"datePublished": post.date,
				"author": {
					"@type": "Person",
					"name": post.author
				},
				"url": `${Astro.url.origin}/resources/blog/${post.id}`
			}))
		}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen"><div class="bg-slate-950 text-white py-24 relative overflow-hidden"><div class="absolute inset-0 bg-[url('/patterns/cubes.png')] opacity-10"></div><div class="container mx-auto px-4 text-center relative z-10"><h1 class="text-4xl font-black mb-4 text-white tracking-tighter">News & Insights</h1><p class="text-slate-300 max-w-2xl mx-auto font-medium">Deep dives into AI, Messaging, company events, and the future of Digital Enterprise.</p></div></div><div class="container mx-auto px-4 py-12"><!-- Category Filter Buttons --><div class="flex flex-wrap justify-center gap-2 mb-12">${categories.map((cat) => renderTemplate`<button${addAttribute(cat, "data-category-filter")}${addAttribute(`px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${cat === "All" ? "bg-indigo-600 text-white font-bold" : "bg-white text-slate-700 hover:text-indigo-700"}`, "class")}>${cat}</button>`)}</div><!-- Posts Grid --><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-grid">${posts.map((post) => renderTemplate`<div${addAttribute(post.category, "data-post-category")} class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col h-full group"><div class="h-48 overflow-hidden relative"><img${addAttribute(post.imageUrl || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", "src")}${addAttribute(post.title, "alt")} loading="lazy" decoding="async"${addAttribute(400, "width")}${addAttribute(192, "height")} class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"><div class="absolute top-4 left-4"><span class="bg-white/90 backdrop-blur-sm text-indigo-700 text-xs px-2 py-1 rounded font-bold shadow-sm">${post.category}</span></div></div><div class="p-6 flex flex-col flex-grow"><div class="flex items-center justify-between mb-3 text-xs text-slate-400"><span>${post.date}</span><span>5 min read</span></div><h2 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight"><a${addAttribute(`/resources/blog/${post.id}`, "href")}>${post.title}</a></h2><p class="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">${post.excerpt}</p><div class="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto"><span class="text-xs font-bold text-slate-700 flex items-center"><span class="w-6 h-6 bg-slate-200 rounded-full mr-2 flex items-center justify-center text-[10px] text-slate-500">${post.author.charAt(0)}</span>${post.author}</span><a${addAttribute(`/resources/blog/${post.id}`, "href")} class="text-indigo-600 text-sm font-semibold hover:text-indigo-800 flex items-center">Read <span class="ml-1 transition-transform group-hover:translate-x-1">→</span></a></div></div></div>`)}</div><!-- No Posts Found State --><div id="no-posts-alert" class="hidden text-center py-20 text-slate-500"><p class="text-xl">No posts found in this category.</p><button id="reset-filter-btn" class="mt-4 text-indigo-600 font-bold underline">View all posts</button></div><div class="mt-16 max-w-4xl mx-auto">${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": "News & Insights - WebWorldMaker",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div>${renderScript($$result, "/Users/apple/Downloads/webworldmaker/src/pages/resources/blog/index.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/resources/blog/index.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/resources/blog/index.astro";
var $$url = "/resources/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/resources/blog/index@_@astro
var page = () => blog_exports;
//#endregion
export { page };

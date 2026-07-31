import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { t as getPosts } from "./blogService_Dxh_4cj5.mjs";
import { n as autoLinkText, t as sanitizeHtml } from "./sanitizeHtml_C-7O2AE_.mjs";
import { t as getSemanticRelatedItems } from "./semanticLinker_DAxgnpeA.mjs";
import { t as AUTHOR_PROFILES } from "./authorService_CMLvq4Dh.mjs";
//#region src/pages/resources/blog/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
async function getStaticPaths() {
	return getPosts().map((post) => ({
		params: { id: post.id },
		props: { post }
	}));
}
var $$Id = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { post } = Astro.props;
	const relatedPosts = getSemanticRelatedItems(post, getPosts(), 3);
	const plainTextContent = post.content.replace(/<[^>]+>/g, "");
	const authorSlug = post.author.toLowerCase().replace(/\s+/g, "-");
	const authorProfile = AUTHOR_PROFILES[authorSlug];
	const blogPostSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"headline": post.title,
		"image": post.imageUrl,
		"editor": post.author,
		"genre": post.category,
		"keywords": `${post.category} business digital strategy`,
		"wordcount": plainTextContent.split(/\s+/).length,
		"publisher": {
			"@type": "Organization",
			"@id": `${Astro.url.origin}/#organization`,
			"name": "WebWorldMaker",
			"logo": {
				"@type": "ImageObject",
				"url": `${Astro.url.origin}/logo.png`
			},
			"sameAs": ["https://twitter.com/webworldmaker", "https://www.wikidata.org/wiki/Q114872221"]
		},
		"url": Astro.url.href,
		"datePublished": post.date,
		"dateCreated": post.date,
		"dateModified": post.date,
		"description": post.excerpt,
		"articleBody": plainTextContent,
		"author": {
			"@type": "Person",
			"name": post.author,
			"jobTitle": post.authorDetails?.role,
			"description": post.authorDetails?.bio,
			...authorProfile?.education ? { "alumniOf": authorProfile.education } : {},
			...authorProfile?.skills?.length ? { "knowsAbout": authorProfile.skills } : {},
			...authorProfile ? { "url": `${Astro.url.origin}/team/${authorSlug}` } : {}
		},
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": Astro.url.href
		},
		...post.citations && post.citations.length > 0 ? { "citation": post.citations } : {}
	};
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": post.title,
		"metaDescription": post.excerpt,
		"orgSchema": blogPostSchema
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-white min-h-screen"><div class="relative h-[500px] w-full overflow-hidden"><img${addAttribute(post.imageUrl || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80", "src")}${addAttribute(post.title, "alt")} loading="eager" fetchpriority="high" width="1200" height="500" class="w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div><div class="absolute bottom-0 left-0 w-full p-8 md:p-16"><div class="container mx-auto max-w-4xl"><div class="flex flex-wrap items-center gap-4 mb-6"><span class="bg-brand-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-xl">${post.category}</span>${post.readingTime && renderTemplate`<span class="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-white/20">⏱️ ${post.readingTime} read</span>`}</div><h1 class="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] drop-shadow-2xl tracking-tighter">${post.title}</h1><div class="flex items-center text-slate-200 text-sm gap-8"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-brand-500 rounded-2xl flex items-center justify-center font-black text-white shadow-lg shadow-brand-500/20">${post.author.charAt(0)}</div><div><div class="flex flex-wrap items-center gap-2"><p class="font-black text-white text-xs uppercase tracking-widest">${post.author}</p></div><p class="text-[10px] text-slate-400 font-bold uppercase tracking-tight">${post.authorDetails?.role}</p></div></div></div></div></div></div><div class="container mx-auto px-4 py-20"><div class="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto"><div class="hidden lg:block lg:w-1/6"><div class="sticky top-24"><a href="/resources/blog" class="inline-flex items-center text-slate-400 hover:text-brand-600 mb-12 transition-all font-black text-[10px] uppercase tracking-widest group"><span class="mr-3 transform group-hover:-translate-x-1 transition-transform bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center">←</span> Back to Hub</a><div class="border-l-2 border-slate-100 pl-6 py-2"><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Share</p>${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": post.title,
		"hideLabel": true,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div></div><div class="lg:w-2/3"><a href="/resources/blog" class="lg:hidden inline-flex items-center text-slate-400 hover:text-brand-600 mb-8 transition-colors text-[10px] font-black uppercase tracking-widest">← Back to Blog Hub</a>${post.keyTakeaways && post.keyTakeaways.length > 0 && renderTemplate`<div class="bg-slate-50 border border-slate-100 p-8 rounded-3xl mb-12 relative overflow-hidden"><div class="absolute top-0 right-0 p-4 opacity-10"><svg class="w-20 h-20" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg></div><h2 class="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-brand-600 rounded-full"></span>Executive Summary</h2><ul class="space-y-4">${post.keyTakeaways.map((item) => renderTemplate`<li class="flex items-start gap-3"><span class="text-brand-600 mt-1 font-bold">🎯</span><span class="text-slate-700 font-bold text-sm tracking-tight">${item}</span></li>`)}</ul></div>`}<article class="prose prose-slate prose-lg max-w-none 
                prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-950
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
                prose-strong:text-slate-900 prose-strong:font-black
                prose-blockquote:border-brand-600 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:rounded-r-xl prose-blockquote:font-black prose-blockquote:text-slate-900 prose-blockquote:not-italic"><div>${unescapeHTML(autoLinkText(sanitizeHtml(post.content)))}</div></article>${post.authorDetails && renderTemplate`<div class="mt-20 p-10 bg-slate-950 rounded-[2.5rem] text-white relative overflow-hidden"><div class="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div><div class="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left"><div class="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center text-4xl border border-white/10 font-black shrink-0">${post.author.charAt(0)}</div><div><div class="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4"><h3 class="text-2xl font-black tracking-tight">${post.author}</h3></div><p class="text-lg font-bold text-slate-300 mb-4 tracking-tight leading-snug">${post.authorDetails.role}</p><p class="text-slate-400 text-sm leading-relaxed mb-6 font-medium italic">"${post.authorDetails.bio}"</p><div class="p-5 bg-white/5 rounded-2xl border border-white/5 inline-block w-full"><p class="text-[10px] font-black uppercase tracking-[0.2em] text-brand-400 mb-2">Subject Expertise</p><p class="text-xs text-white/80 font-bold leading-relaxed">${post.authorDetails.experience}</p></div></div></div></div>`}${relatedPosts.length > 0 && renderTemplate`<div class="mt-20 pt-12 border-t border-slate-100"><h3 class="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-brand-600 rounded-full"></span>Semantically Related Intel</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-6">${relatedPosts.map((related) => renderTemplate`<a${addAttribute(`/resources/blog/${related.id}`, "href")} class="group flex flex-col bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200/80 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50"><span class="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-3 block">${related.category}</span><h4 class="text-slate-900 group-hover:text-brand-600 font-black text-base tracking-tight mb-3 leading-snug line-clamp-2 transition-colors">${related.title}</h4><p class="text-xs text-slate-500 font-bold tracking-tight leading-relaxed line-clamp-3 mb-4 mt-auto">${related.excerpt}</p><span class="text-[10px] font-black text-slate-400 group-hover:text-slate-900 uppercase tracking-widest flex items-center gap-1.5 mt-auto transition-colors">Read Article <span class="transform group-hover:translate-x-1 transition-transform">→</span></span></a>`)}</div></div>`}<div class="mt-16 pt-12 border-t border-slate-100"><h3 class="font-black text-slate-950 mb-6 uppercase tracking-widest text-xs">Spread the intelligence</h3>${renderComponent($$result, "SocialShare", null, {
		"client:only": "react",
		"title": post.title,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SocialShare.tsx",
		"client:component-export": "SocialShare"
	})}</div></div><div class="lg:w-1/4"><div class="bg-white p-8 rounded-3xl border border-slate-100 sticky top-24 shadow-2xl shadow-slate-200/50 group"><div class="w-14 h-14 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500">🚀</div><h3 class="font-black text-slate-950 mb-3 text-xl tracking-tighter">Scale ${post.category}?</h3><p class="text-sm text-slate-500 mb-8 leading-relaxed font-bold tracking-tight">WebWorldMaker engineered the communication infrastructure used in this report. Let's discuss your evolution.</p><a${addAttribute(`/contact?buttonName=Blog Global CTA&pageContext=${encodeURIComponent(Astro.url.pathname)}`, "href")} class="block text-center bg-slate-950 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-brand-600 transition-all shadow-xl shadow-slate-900/10 transform hover:-translate-y-1">Request Strategy Audit</a></div></div></div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/resources/blog/[id].astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/resources/blog/[id].astro";
var $$url = "/resources/blog/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/resources/blog/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };

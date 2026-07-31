import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { t as getPosts } from "./blogService_Dxh_4cj5.mjs";
import { o as getServiceCategories } from "./contentService_D8jqS7-T.mjs";
import { t as AUTHOR_PROFILES } from "./authorService_CMLvq4Dh.mjs";
//#region src/pages/team/[name].astro
var _name__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Name,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://webworldmaker.com");
async function getStaticPaths() {
	return Object.keys(AUTHOR_PROFILES).map((name) => {
		return {
			params: { name },
			props: { profile: AUTHOR_PROFILES[name] }
		};
	});
}
var $$Name = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Name;
	const { profile } = Astro.props;
	const allCats = getServiceCategories();
	const authoredServices = [];
	allCats.forEach((cat) => {
		cat.items.forEach((svc) => {
			if (svc.author?.name.toLowerCase() === profile.name.toLowerCase()) authoredServices.push({
				...svc,
				categoryId: cat.id
			});
		});
	});
	const authoredBlogs = getPosts().filter((b) => b.author.toLowerCase() === profile.name.toLowerCase());
	const getAlmaMaterEntity = (education) => {
		const edu = education.toLowerCase();
		if (edu.includes("stanford")) return "https://www.wikidata.org/wiki/Q41506";
		if (edu.includes("berkeley") || edu.includes("california")) return "https://www.wikidata.org/wiki/Q168756";
		if (edu.includes("mit") || edu.includes("massachusetts")) return "https://www.wikidata.org/wiki/Q49108";
		if (edu.includes("iim") || edu.includes("indian institute of management")) return "https://www.wikidata.org/wiki/Q1143896";
		if (edu.includes("milano") || edu.includes("politecnico")) return "https://www.wikidata.org/wiki/Q576390";
		if (edu.includes("london") || edu.includes("royal holloway")) return "https://www.wikidata.org/wiki/Q1262070";
		return "";
	};
	const almaMaterEntity = getAlmaMaterEntity(profile.education);
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: profile.name,
		jobTitle: profile.role,
		worksFor: {
			"@type": "Organization",
			"@id": "https://webworldmaker.com/#organization",
			name: "WebWorldMaker"
		},
		alumniOf: {
			"@type": "EducationalOrganization",
			name: profile.education,
			"sameAs": almaMaterEntity || void 0
		},
		description: profile.bio,
		image: profile.avatar,
		knowsAbout: profile.skills,
		sameAs: [profile.linkedin, almaMaterEntity].filter(Boolean)
	};
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": `${profile.name} - ${profile.role}`,
		"metaDescription": `${profile.name} is a ${profile.role} at WebWorldMaker. Read their professional bio, skills, and publications.`,
		"orgSchema": personSchema
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-slate-50 min-h-screen pb-20 text-slate-800"><div class="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden"><div class="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div><div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3"></div><div class="container mx-auto px-4 max-w-5xl relative z-10"><div class="flex flex-col md:flex-row items-center gap-8"><img${addAttribute(profile.avatar, "src")}${addAttribute(profile.name, "alt")}${addAttribute(160, "width")}${addAttribute(160, "height")} class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-indigo-500 shadow-2xl"><div class="text-center md:text-left space-y-4"><div class="flex flex-wrap items-center justify-center md:justify-start gap-3"></div><h1 class="text-4xl md:text-5xl font-black font-outfit">${profile.name}</h1><p class="text-xl text-slate-300 font-medium font-outfit">${profile.role}</p><p class="text-slate-400 text-sm font-light">Education: <strong class="text-slate-300 font-semibold">${profile.education}</strong></p></div></div></div></div><div class="container mx-auto px-4 mt-12 max-w-5xl"><div class="grid md:grid-cols-12 gap-8"><div class="md:col-span-8 space-y-8"><div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm leading-relaxed text-slate-700"><h2 class="text-2xl font-bold text-slate-900 mb-4 font-outfit">Professional Background</h2><div data-answer-target="true" class="prose max-w-none text-slate-600"><p class="text-lg leading-relaxed">${profile.bio}</p></div></div></div><div class="md:col-span-4 space-y-8"><div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"><h3 class="font-bold text-slate-900 mb-4 font-outfit text-lg">Specializations</h3><div class="flex flex-wrap gap-2">${profile.skills.map((skill) => renderTemplate`<span class="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">${skill}</span>`)}</div></div>${authoredServices.length > 0 && renderTemplate`<div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"><h3 class="font-bold text-slate-900 mb-4 font-outfit text-lg">Solutions Designed</h3><div class="space-y-3">${authoredServices.map((svc) => renderTemplate`<a${addAttribute(`/${svc.categoryId}/${svc.id}`, "href")} class="block p-3 rounded-xl border border-slate-50 hover:border-indigo-100 hover:bg-indigo-50/20 transition-all text-xs font-bold text-slate-800">${svc.title}</a>`)}</div></div>`}${authoredBlogs.length > 0 && renderTemplate`<div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"><h3 class="font-bold text-slate-900 mb-4 font-outfit text-lg">Recent Publications</h3><div class="space-y-4">${authoredBlogs.map((post) => renderTemplate`<a${addAttribute(`/resources/blog/${post.id}`, "href")} class="block group"><h4 class="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-2">${post.title}</h4><span class="text-[10px] text-slate-400 font-medium">${post.date}</span></a>`)}</div></div>`}</div></div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/team/[name].astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/team/[name].astro";
var $$url = "/team/[name]";
//#endregion
//#region \0virtual:astro:page:src/pages/team/[name]@_@astro
var page = () => _name__exports;
//#endregion
export { page };

import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { t as getPosts } from "./blogService_Dxh_4cj5.mjs";
import { a as getProducts, i as getProblems, o as getServiceCategories, r as getIndustries, s as getSolutions } from "./contentService_D8jqS7-T.mjs";
import { r as NAV_ITEMS } from "./constants_DUCmtVsI.mjs";
//#region src/pages/sitemap.astro
var sitemap_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Sitemap,
	file: () => $$file,
	url: () => $$url
});
var $$Sitemap = createComponent(($$result, $$props, $$slots) => {
	const metaTitle = "Sitemap - Navigate WebWorldMaker";
	const metaDescription = "Explore the complete architectural layout of the WebWorldMaker CPaaS platform. View sitemap routes in list, grid, or hierarchical mind map modes.";
	const blogPosts = getPosts();
	const categories = getServiceCategories();
	const solutionsList = getSolutions();
	const productsList = getProducts();
	const problemsList = getProblems();
	const industriesList = getIndustries();
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": metaTitle,
		"metaDescription": metaDescription
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "SitemapIsland", null, {
		"navItems": NAV_ITEMS,
		"blogPosts": blogPosts,
		"categories": categories,
		"solutionsList": solutionsList,
		"productsList": productsList,
		"problemsList": problemsList,
		"industriesList": industriesList,
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/SitemapIsland.tsx",
		"client:component-export": "SitemapIsland"
	})}` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/sitemap.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/sitemap.astro";
var $$url = "/sitemap";
//#endregion
//#region \0virtual:astro:page:src/pages/sitemap@_@astro
var page = () => sitemap_exports;
//#endregion
export { page };

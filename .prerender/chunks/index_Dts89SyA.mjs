import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/admin/index.astro
var admin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "CMS Administration Control Panel",
		"metaDescription": "Control content databases, manage outbound lead records, check search analytics and reset seeds in the secure WebWorldMaker administration dashboard.",
		"noIndex": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminDashboardIsland", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/AdminDashboardIsland.tsx",
		"client:component-export": "AdminDashboardIsland"
	})}` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/admin/index.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/admin/index.astro";
var $$url = "/admin";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/index@_@astro
var page = () => admin_exports;
//#endregion
export { page };

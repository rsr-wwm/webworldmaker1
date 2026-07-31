import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/technology-consultancy.astro
var technology_consultancy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TechnologyConsultancy,
	file: () => $$file,
	url: () => $$url
});
var $$TechnologyConsultancy = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "Enterprise Technology Consultancy | WebWorldMaker",
		"metaDescription": "Optimize your system infrastructure. Run our interactive Business Genome Audit to analyze digital pipelines, API capacities, and routing security."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "TechnologyConsultancyPage", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/TechnologyConsultancy.tsx",
		"client:component-export": "default"
	})}` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/technology-consultancy.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/technology-consultancy.astro";
var $$url = "/technology-consultancy";
//#endregion
//#region \0virtual:astro:page:src/pages/technology-consultancy@_@astro
var page = () => technology_consultancy_exports;
//#endregion
export { page };

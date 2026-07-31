import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { o as getServiceCategories } from "./contentService_D8jqS7-T.mjs";
//#region src/pages/resources/faqs.astro
var faqs_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Faqs,
	file: () => $$file,
	url: () => $$url
});
var $$Faqs = createComponent(($$result, $$props, $$slots) => {
	const categories = getServiceCategories();
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "FAQ Hub - Enterprise Communications & AI Insights",
		"metaDescription": "Find answers to all your questions about Bulk SMS, RCS, WhatsApp Business API, Custom Software Development, and Private AI Solutions.",
		"orgSchema": {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: categories.flatMap((cat) => cat.items.flatMap((item) => item.faqs.map((faq) => ({
				question: faq.question,
				answer: faq.answer
			})))).slice(0, 40).map((faq) => ({
				"@type": "Question",
				name: faq.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: faq.answer
				}
			}))
		}
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "FaqHubIsland", null, {
		"client:only": "react",
		"categories": categories,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/FaqHubIsland.tsx",
		"client:component-export": "FaqHubIsland"
	})}` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/resources/faqs.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/resources/faqs.astro";
var $$url = "/resources/faqs";
//#endregion
//#region \0virtual:astro:page:src/pages/resources/faqs@_@astro
var page = () => faqs_exports;
//#endregion
export { page };

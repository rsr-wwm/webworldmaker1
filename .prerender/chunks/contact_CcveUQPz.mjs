import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { m as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	const contactFaqs = [
		{
			question: "What is your typical response time?",
			answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent support, please use our dedicated support line available to premium clients."
		},
		{
			question: "Do you offer custom SLAs?",
			answer: "Yes, for enterprise clients we offer tailored Service Level Agreements including 24/7 support availability, dedicated account managers, and guaranteed uptime."
		},
		{
			question: "Where are your offices located?",
			answer: "Our headquarters are in Chandigarh, Punjab, India, but we operate as a remote-first company with teams globally distributed to support all time zones."
		},
		{
			question: "Do you work with startups?",
			answer: "Absolutely. We have specific packages designed to help startups scale their infrastructure cost-effectively without compromising on quality."
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "Contact Us - Sales & Support",
		"metaDescription": "Get in touch with WebWorldMaker for inquiries about Bulk SMS, AI Solutions, or Web Development. We are ready to help you scale.",
		"orgSchema": {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": contactFaqs.map((faq) => ({
				"@type": "Question",
				"name": faq.question,
				"acceptedAnswer": {
					"@type": "Answer",
					"text": faq.answer
				}
			}))
		}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="bg-white py-16"><div class="container mx-auto px-4"><div class="text-center mb-16"><h1 class="text-4xl font-black text-slate-950 mb-4">Let's Talk Business</h1><p class="text-slate-800 text-lg font-medium">Ready to scale? Fill out the form below and we'll get back to you.</p></div>${renderComponent($$result, "ContactFormIsland", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/ContactFormIsland.tsx",
		"client:component-export": "ContactFormIsland"
	})}<div class="max-w-4xl mx-auto mb-20 text-slate-900"><h2 class="text-2xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2><div class="space-y-4">${contactFaqs.map((faq) => renderTemplate`<details class="bg-slate-50 border border-slate-200 rounded-xl p-5 group cursor-pointer"><summary class="font-bold text-slate-900 flex justify-between items-center text-lg list-none"><span>${faq.question}</span><span class="text-slate-400 group-open:rotate-180 transition-transform">▼</span></summary><p class="text-slate-700 mt-3 leading-relaxed text-sm">${faq.answer}</p></details>`)}</div></div><div class="max-w-4xl mx-auto border-t-4 border-slate-900 pt-20"><h2 class="text-3xl font-black text-slate-950 text-center mb-12 uppercase tracking-tighter">What Happens Next?</h2><div class="grid md:grid-cols-3 gap-10"><div class="text-center group p-6 rounded-2xl hover:bg-slate-50 transition-colors"><div class="w-20 h-20 bg-slate-950 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-black text-3xl shadow-xl group-hover:scale-110 transition-transform">1</div><h3 class="font-black text-slate-950 text-xl mb-3">Initial Review</h3><p class="text-slate-800 text-sm font-bold leading-relaxed">Our team reviews your inquiry within 24 hours to understand your basic requirements.</p></div><div class="text-center group p-6 rounded-2xl hover:bg-slate-50 transition-colors"><div class="w-20 h-20 bg-slate-950 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-black text-3xl shadow-xl group-hover:scale-110 transition-transform">2</div><h3 class="font-black text-slate-950 text-xl mb-3">Discovery Call</h3><p class="text-slate-800 text-sm font-bold leading-relaxed">We schedule a brief 15-min call to discuss your goals and how our solutions align.</p></div><div class="text-center group p-6 rounded-2xl hover:bg-slate-50 transition-colors"><div class="w-20 h-20 bg-slate-950 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-black text-3xl shadow-xl group-hover:scale-110 transition-transform">3</div><h3 class="font-black text-slate-950 text-xl mb-3">Proposal & Launch</h3><p class="text-slate-800 text-sm font-bold leading-relaxed">We provide a tailored proposal. Once approved, we begin the onboarding process immediately.</p></div></div></div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/contact.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };

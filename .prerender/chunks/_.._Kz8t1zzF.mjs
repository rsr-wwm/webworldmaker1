import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as PRODUCTS, i as PROBLEMS, o as SERVICE_CATEGORIES, r as INDUSTRIES, s as SOLUTIONS } from "./database_B-P2-jd3.mjs";
//#region src/pages/ai/[...slug].ts
var ____slug__exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	getStaticPaths: () => getStaticPaths
});
function stripHtml(html) {
	if (!html) return "";
	return html.replace(/<li[^>]*>/gi, "\n- ").replace(/<\/(?:p|h[1-6]|ul|ol|li|blockquote|table|tr|div)>/gi, "\n").replace(/<(?:br|hr)\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#0?39;/g, "'").replace(/&apos;/g, "'").replace(/&nbsp;/g, " ").split("\n").map((line) => line.replace(/\s+/g, " ").trim()).join("\n").replace(/\n{3,}/g, "\n\n").trim();
}
function inline(text) {
	return stripHtml(text).replace(/\s+/g, " ").trim();
}
function featureBullets(label, features) {
	if (!features?.length) return [];
	return [`${label}:\n${features.map((f) => {
		const detail = [f.description, f.benefit].filter(Boolean).map(inline).join(" ");
		return `- ${inline(f.title)}${detail ? `: ${detail}` : ""}`;
	}).join("\n")}`];
}
function stringBullets(label, entries) {
	if (!entries?.length) return [];
	return [`${label}:\n${entries.map((e) => `- ${inline(e)}`).join("\n")}`];
}
function faqBlock(faqs) {
	if (!faqs?.length) return [];
	return [`FAQs:\n\n${faqs.map((f) => `Q: ${inline(f.question)}\nA: ${inline(f.answer)}`).join("\n\n")}`];
}
function joinBlocks(blocks) {
	return blocks.filter((b) => Boolean(b && b.trim())).join("\n\n");
}
async function getStaticPaths() {
	const paths = [];
	for (const cat of SERVICE_CATEGORIES) for (const item of cat.items) {
		const markdown = joinBlocks([
			`# ${inline(item.title)}`,
			`Category: ${inline(cat.title)}`,
			inline(item.description),
			stripHtml(item.fullDescription),
			...featureBullets("Key features", item.features),
			...faqBlock(item.faqs)
		]);
		paths.push({
			params: { slug: `services/${cat.id}/${item.id}` },
			props: { markdown }
		});
	}
	for (const sol of SOLUTIONS) {
		const markdown = joinBlocks([
			`# ${inline(sol.title)}`,
			sol.focus ? `Focus: ${inline(sol.focus)}` : "",
			sol.outcome ? `Outcome: ${inline(sol.outcome)}` : "",
			inline(sol.description),
			stripHtml(sol.fullDescription),
			...featureBullets("Key features", sol.features),
			...stringBullets("Benefits", sol.benefits),
			...faqBlock(sol.faqs)
		]);
		paths.push({
			params: { slug: `solutions/${sol.id}` },
			props: { markdown }
		});
	}
	for (const prod of PRODUCTS) {
		const markdown = joinBlocks([
			`# ${inline(prod.title)}`,
			prod.tagline ? `Tagline: ${inline(prod.tagline)}` : "",
			inline(prod.description),
			stripHtml(prod.fullDescription),
			...featureBullets("Key features", prod.features),
			...stringBullets("Benefits", prod.benefits),
			...faqBlock(prod.faqs)
		]);
		paths.push({
			params: { slug: `products/${prod.id}` },
			props: { markdown }
		});
	}
	for (const ind of INDUSTRIES) {
		const markdown = joinBlocks([
			`# ${inline(ind.title)}`,
			inline(ind.description),
			stripHtml(ind.fullDescription),
			...stringBullets("How WebWorldMaker helps", ind.solutions),
			...faqBlock(ind.faqs)
		]);
		paths.push({
			params: { slug: `industry-solutions/${ind.id}` },
			props: { markdown }
		});
	}
	for (const prob of PROBLEMS) {
		const markdown = joinBlocks([
			`# ${inline(prob.title)}`,
			inline(prob.shortDescription),
			stripHtml(prob.fullDescription),
			...stringBullets("Symptoms", prob.symptoms),
			prob.ourSolution ? `Our solution: ${stripHtml(prob.ourSolution)}` : "",
			...faqBlock(prob.faqs)
		]);
		paths.push({
			params: { slug: `problem/${prob.id}` },
			props: { markdown }
		});
	}
	return paths;
}
var GET = async ({ props }) => {
	return new Response(props.markdown, { headers: {
		"Content-Type": "text/markdown; charset=utf-8",
		"Cache-Control": "public, max-age=31536000, immutable"
	} });
};
//#endregion
//#region \0virtual:astro:page:src/pages/ai/[...slug]@_@ts
var page = () => ____slug__exports;
//#endregion
export { page };

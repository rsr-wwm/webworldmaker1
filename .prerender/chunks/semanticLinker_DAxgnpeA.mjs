//#region src/utils/semanticLinker.ts
var STOP_WORDS = /* @__PURE__ */ new Set([
	"a",
	"about",
	"above",
	"after",
	"again",
	"against",
	"all",
	"am",
	"an",
	"and",
	"any",
	"are",
	"arent",
	"as",
	"at",
	"be",
	"because",
	"been",
	"before",
	"being",
	"below",
	"between",
	"both",
	"but",
	"by",
	"cant",
	"cannot",
	"could",
	"did",
	"do",
	"does",
	"doing",
	"dont",
	"down",
	"during",
	"each",
	"few",
	"for",
	"from",
	"further",
	"had",
	"has",
	"have",
	"having",
	"he",
	"her",
	"here",
	"hers",
	"herself",
	"him",
	"himself",
	"his",
	"how",
	"i",
	"if",
	"in",
	"into",
	"is",
	"it",
	"its",
	"itself",
	"more",
	"most",
	"my",
	"myself",
	"no",
	"nor",
	"not",
	"of",
	"off",
	"on",
	"once",
	"only",
	"or",
	"other",
	"our",
	"ours",
	"ourselves",
	"out",
	"over",
	"own",
	"same",
	"she",
	"should",
	"so",
	"some",
	"such",
	"than",
	"that",
	"the",
	"their",
	"theirs",
	"them",
	"themselves",
	"then",
	"there",
	"these",
	"they",
	"this",
	"those",
	"through",
	"to",
	"too",
	"under",
	"until",
	"up",
	"very",
	"was",
	"we",
	"were",
	"what",
	"when",
	"where",
	"which",
	"while",
	"who",
	"whom",
	"why",
	"with",
	"would",
	"you",
	"your",
	"yours",
	"yourself",
	"yourselves"
]);
function tokenize(text) {
	return text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, " ").split(/\s+/).filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}
function calculateCosineSimilarity(vecA, vecB) {
	let dotProduct = 0;
	let normA = 0;
	let normB = 0;
	for (const key in vecA) if (vecA[key]) {
		dotProduct += vecA[key] * (vecB[key] || 0);
		normA += vecA[key] * vecA[key];
	}
	for (const key in vecB) if (vecB[key]) normB += vecB[key] * vecB[key];
	if (normA === 0 || normB === 0) return 0;
	return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}
function getWordVector(tokens) {
	const vec = {};
	tokens.forEach((token) => {
		vec[token] = (vec[token] || 0) + 1;
	});
	return vec;
}
function getSemanticRelatedItems(currentItem, allItems, limit = 3) {
	const currentVector = getWordVector(tokenize(currentItem.title + " " + (currentItem.description || currentItem.excerpt || "") + " " + (currentItem.tags?.join(" ") || "")));
	const scoredItems = allItems.filter((item) => item.id !== currentItem.id).map((item) => {
		const vector = getWordVector(tokenize(item.title + " " + (item.description || item.excerpt || "") + " " + (item.tags?.join(" ") || "")));
		return {
			item,
			score: calculateCosineSimilarity(currentVector, vector)
		};
	});
	scoredItems.sort((a, b) => b.score - a.score);
	return scoredItems.slice(0, limit).map((entry) => entry.item);
}
//#endregion
export { getSemanticRelatedItems as t };

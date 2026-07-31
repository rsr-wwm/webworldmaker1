import { a as PRODUCTS, i as PROBLEMS, n as GLOSSARY, o as SERVICE_CATEGORIES, r as INDUSTRIES, s as SOLUTIONS, t as COMPARISONS } from "./database_B-P2-jd3.mjs";
//#region src/services/contentService.ts
var PRODUCTS_KEY = "wwm_products";
var SOLUTIONS_KEY = "wwm_solutions";
var SERVICES_KEY = "wwm_services";
var PROBLEMS_KEY = "wwm_problems";
var INDUSTRIES_KEY = "wwm_industries";
var GLOSSARY_KEY = "wwm_glossary";
var COMPARISONS_KEY = "wwm_comparisons";
var syncData = (key, constants) => {
	if (typeof window === "undefined") return;
	try {
		const storedJson = localStorage.getItem(key);
		const stored = storedJson ? JSON.parse(storedJson) : [];
		const storedIds = new Set(stored.map((item) => item.id || item.term));
		let hasNewItems = false;
		constants.forEach((constItem) => {
			const itemId = constItem.id || constItem.term;
			if (!storedIds.has(itemId)) {
				stored.push(constItem);
				hasNewItems = true;
			}
		});
		if (hasNewItems) localStorage.setItem(key, JSON.stringify(stored));
	} catch (e) {
		console.error(`[Auto-Restore] Failed to sync ${key}`, e);
		if (!localStorage.getItem(key)) localStorage.setItem(key, JSON.stringify(constants));
	}
};
var initializeData = async () => {
	if (typeof window === "undefined") return;
	syncData(PRODUCTS_KEY, PRODUCTS);
	syncData(SOLUTIONS_KEY, SOLUTIONS);
	syncData(PROBLEMS_KEY, PROBLEMS);
	syncData(INDUSTRIES_KEY, INDUSTRIES);
	syncData(GLOSSARY_KEY, GLOSSARY);
	syncData(COMPARISONS_KEY, COMPARISONS);
	try {
		syncData(SERVICES_KEY, SERVICE_CATEGORIES.flatMap((cat) => cat.items.map((item) => ({
			...item,
			categoryId: cat.id,
			categoryTitle: cat.title,
			categoryDesc: cat.description
		}))));
	} catch {}
};
if (typeof window !== "undefined") initializeData();
function getItems(key, fallback) {
	if (typeof window === "undefined") return fallback;
	const data = localStorage.getItem(key);
	return data ? JSON.parse(data) : fallback;
}
var getProducts = () => getItems(PRODUCTS_KEY, PRODUCTS);
var getSolutions = () => getItems(SOLUTIONS_KEY, SOLUTIONS);
var getIndustries = () => getItems(INDUSTRIES_KEY, INDUSTRIES);
var getGlossary = () => getItems(GLOSSARY_KEY, GLOSSARY);
var getRawServices = () => {
	return getItems(SERVICES_KEY, SERVICE_CATEGORIES.flatMap((cat) => cat.items.map((item) => ({
		...item,
		categoryId: cat.id,
		categoryTitle: cat.title,
		categoryDesc: cat.description
	}))));
};
var getServiceCategories = () => {
	const flatServices = getRawServices();
	const categories = {};
	flatServices.forEach((s) => {
		if (!categories[s.categoryId]) categories[s.categoryId] = {
			id: s.categoryId,
			title: s.categoryTitle || "Other",
			description: s.categoryDesc || "",
			items: []
		};
		const { categoryId, categoryTitle, categoryDesc, ...serviceData } = s;
		categories[s.categoryId].items.push(serviceData);
	});
	const orderedIds = [
		"mobile-business-communication",
		"business-management-solutions",
		"ai-solutions",
		"search-growth",
		"digital-marketing",
		"development-solutions",
		"data-analytics",
		"partners"
	];
	return Object.values(categories).sort((a, b) => {
		return orderedIds.indexOf(a.id) - orderedIds.indexOf(b.id);
	});
};
var getProblems = () => getItems(PROBLEMS_KEY, PROBLEMS);
var getUnifiedContentById = (id) => {
	const sol = getSolutions().find((s) => s.id === id);
	if (sol) return {
		data: sol,
		type: "solution",
		link: `/solution/${id}`
	};
	const prod = getProducts().find((p) => p.id === id);
	if (prod) return {
		data: prod,
		type: "product",
		link: `/product/${id}`
	};
	const serv = getRawServices().find((s) => s.id === id);
	if (serv) return {
		data: serv,
		type: "service",
		link: `/${serv.categoryId}/${id}`
	};
	const prob = getProblems().find((p) => p.id === id);
	if (prob) return {
		data: prob,
		type: "problem",
		link: `/problem/${id}`
	};
	const ind = getIndustries().find((i) => i.id === id);
	if (ind) return {
		data: ind,
		type: "industry",
		link: `/industry-solutions/${id}`
	};
	return null;
};
var getComparisons = () => getItems(COMPARISONS_KEY, COMPARISONS);
//#endregion
export { getProducts as a, getUnifiedContentById as c, getProblems as i, getGlossary as n, getServiceCategories as o, getIndustries as r, getSolutions as s, getComparisons as t };

import "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ProsConsTable.tsx
var ProsConsTable = ({ data }) => {
	if (!data) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "bg-[#141414] border border-[#292929] rounded-xl overflow-hidden shadow-2xl mb-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "p-6 md:p-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-10",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "bg-[#1a1a1a] p-6 rounded-lg border border-[#292929]",
						children: [/* @__PURE__ */ jsxs("h3", {
							className: "text-xl font-semibold text-white mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("svg", {
								className: "w-6 h-6 text-[#2ddb81]",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ jsx("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514"
								})
							}), "Pros"]
						}), /* @__PURE__ */ jsx("ul", {
							className: "space-y-3",
							children: data.pros?.map((pro, idx) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3 text-[#cbcbcb]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[#2ddb81] mt-0.5",
									children: "•"
								}), /* @__PURE__ */ jsx("span", { children: pro })]
							}, idx))
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "bg-[#1a1a1a] p-6 rounded-lg border border-[#292929]",
						children: [/* @__PURE__ */ jsxs("h3", {
							className: "text-xl font-semibold text-white mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("svg", {
								className: "w-6 h-6 text-red-500",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ jsx("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.514"
								})
							}), "Cons"]
						}), /* @__PURE__ */ jsx("ul", {
							className: "space-y-3",
							children: data.cons?.map((con, idx) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3 text-[#cbcbcb]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-red-500 mt-0.5",
									children: "•"
								}), /* @__PURE__ */ jsx("span", { children: con })]
							}, idx))
						})]
					})]
				}),
				data.comparisonTable && data.comparisonTable.length > 0 && /* @__PURE__ */ jsxs("div", {
					className: "mb-10",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-xl font-semibold text-white mb-6",
						children: "Option Comparison"
					}), /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-left border-collapse min-w-[600px]",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "bg-[#1a1a1a]",
								children: [
									/* @__PURE__ */ jsx("th", {
										className: "p-4 border border-[#292929] text-white font-medium w-1/4",
										children: "Option"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "p-4 border border-[#292929] text-white font-medium w-1/4",
										children: "Pros"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "p-4 border border-[#292929] text-white font-medium w-1/4",
										children: "Cons"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "p-4 border border-[#292929] text-white font-medium w-1/4",
										children: "Best For"
									})
								]
							}) }), /* @__PURE__ */ jsx("tbody", {
								className: "text-[#cbcbcb]",
								children: data.comparisonTable.map((row, idx) => /* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-[#181818] transition-colors",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "p-4 border border-[#292929] font-medium text-white",
											children: row.option
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-4 border border-[#292929] text-[#2ddb81]",
											children: row.pros
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-4 border border-[#292929] text-red-400",
											children: row.cons
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-4 border border-[#292929]",
											children: row.bestFor
										})
									]
								}, idx))
							})]
						})
					})]
				}),
				data.shortTermVsLongTerm && /* @__PURE__ */ jsxs("div", {
					className: "mb-8 p-5 bg-[#1c1c1c] border-l-4 border-l-[#2ddb81] rounded-r-lg",
					children: [/* @__PURE__ */ jsx("h4", {
						className: "text-white font-medium mb-2",
						children: "Short-term vs Long-term Value"
					}), /* @__PURE__ */ jsx("p", {
						"data-answer-target": "true",
						className: "text-[#cbcbcb] leading-relaxed",
						children: data.shortTermVsLongTerm
					})]
				}),
				data.verdictSummary && /* @__PURE__ */ jsxs("div", {
					className: "p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f2118] border border-[#2ddb81]/30 rounded-lg text-center",
					children: [/* @__PURE__ */ jsx("h4", {
						className: "text-[#2ddb81] font-bold text-lg mb-2 uppercase tracking-widest text-sm",
						children: "Final Verdict"
					}), /* @__PURE__ */ jsx("p", {
						"data-answer-target": "true",
						className: "text-white font-medium text-lg leading-relaxed",
						children: data.verdictSummary
					})]
				})
			]
		})
	});
};
//#endregion
//#region src/components/SolutionSection.tsx
var SolutionSection = ({ data, solution }) => {
	const actualData = data || solution;
	if (!actualData || !actualData.steps) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-10 p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm",
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "text-xs font-black uppercase tracking-widest text-slate-500 mb-2",
				children: "How It Works"
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "text-2xl font-black text-slate-900 mb-6",
				children: actualData.title || "Simple 3-Step Setup"
			}),
			actualData.description && /* @__PURE__ */ jsx("p", {
				"data-answer-target": "true",
				className: "text-slate-600 mb-8",
				children: actualData.description
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-3 gap-6",
				children: actualData.steps.map((step, idx) => /* @__PURE__ */ jsxs("div", {
					className: "p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2ddb81] hover:shadow-md transition-all duration-300 relative group",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "w-8 h-8 rounded-full bg-slate-900 text-[#2ddb81] flex items-center justify-center font-black text-sm mb-3",
							children: idx + 1
						}),
						/* @__PURE__ */ jsx("h4", {
							className: "font-bold text-slate-900 text-base mb-1",
							children: step.title
						}),
						/* @__PURE__ */ jsx("p", {
							"data-answer-target": "true",
							className: "text-xs text-slate-600 leading-relaxed",
							children: step.description
						})
					]
				}, idx))
			})
		]
	});
};
//#endregion
//#region src/components/HinglishContent.tsx
var HinglishContent = ({ data, content }) => {
	const actualData = data || content;
	if (!actualData || !actualData.content) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-[#141414] border border-[#292929] rounded-xl overflow-hidden shadow-2xl mb-8",
		children: [/* @__PURE__ */ jsx("div", {
			className: "bg-[#1a1a1a] border-b border-[#292929] px-6 py-4",
			children: /* @__PURE__ */ jsxs("h2", {
				className: "text-white font-medium flex items-center gap-2",
				children: [/* @__PURE__ */ jsx("svg", {
					className: "w-5 h-5 text-[#2ddb81]",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
					})
				}), actualData.heading || "In Plain English"]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-6 md:p-8",
			children: [
				/* @__PURE__ */ jsx("p", {
					"data-answer-target": "true",
					className: "text-lg text-[#cbcbcb] leading-relaxed mb-6",
					children: actualData.content
				}),
				actualData.keyTakeaways && actualData.keyTakeaways.length > 0 && /* @__PURE__ */ jsx("ul", {
					className: "space-y-4 mb-6",
					children: (actualData.keyTakeaways || []).map((point, idx) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-3 text-[#cbcbcb]",
						children: [/* @__PURE__ */ jsx("svg", {
							className: "w-6 h-6 text-[#2ddb81] mt-0.5 flex-shrink-0",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							})
						}), /* @__PURE__ */ jsx("span", { children: point })]
					}, idx))
				}),
				actualData.callToAction && /* @__PURE__ */ jsx("div", {
					className: "mt-8",
					children: /* @__PURE__ */ jsx("button", {
						className: "bg-[#2ddb81] text-[#0f2118] px-6 py-3 rounded-lg font-bold hover:bg-[#25b86c] transition-colors shadow-[0_0_15px_rgba(45,219,129,0.3)]",
						children: actualData.callToAction
					})
				})
			]
		})]
	});
};
//#endregion
export { SolutionSection as n, ProsConsTable as r, HinglishContent as t };

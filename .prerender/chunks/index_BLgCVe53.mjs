import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, m as maybeRenderHead, r as renderComponent, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { a as createComponent, t as $$BaseLayout } from "./BaseLayout_C0G6hp_1.mjs";
import { t as getPosts } from "./blogService_Dxh_4cj5.mjs";
import { o as getServiceCategories } from "./contentService_D8jqS7-T.mjs";
import { t as FaqAccordion } from "./FaqAccordion_CwjStDZR.mjs";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/DashboardTelemetry.tsx
var DashboardTelemetry = () => {
	const [latency, setLatency] = useState(12);
	const [activeChannels, setActiveChannels] = useState(14820);
	const [uptime, setUptime] = useState(99.998);
	const [sparkline, setSparkline] = useState([
		30,
		40,
		35,
		50,
		45,
		60,
		55,
		70
	]);
	useEffect(() => {
		const timer = setInterval(() => {
			setLatency((prev) => Math.max(8, Math.min(22, +(prev + (Math.random() * 4 - 2)).toFixed(0))));
			setActiveChannels((prev) => prev + Math.floor(Math.random() * 20 - 10));
			setUptime(+(99.99 + Math.random() * .009).toFixed(3));
			setSparkline((prev) => {
				const next = [...prev.slice(1)];
				const last = prev[prev.length - 1];
				const change = Math.floor(Math.random() * 30 - 15);
				const val = Math.max(10, Math.min(90, last + change));
				next.push(val);
				return next;
			});
		}, 2e3);
		return () => clearInterval(timer);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative w-full max-w-md mx-auto bg-slate-950/60 backdrop-blur-xl border border-white/[0.08] p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 w-32 h-32 bg-violet-600/20 blur-2xl rounded-full group-hover:scale-125 transition-transform duration-700 pointer-events-none" }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex justify-between items-center mb-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ jsx("span", {
						className: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400",
						children: "Gateway Live Telemetry"
					})]
				}), /* @__PURE__ */ jsx("span", {
					className: "text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-slate-400 font-mono",
					children: "TLS 1.3 Active"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 gap-4 mb-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "bg-white/[0.02] border border-white/5 p-4 rounded-2xl",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[10px] text-slate-500 block uppercase font-bold tracking-wider mb-1",
						children: "API Latency"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-baseline gap-1",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-2xl font-black text-white font-mono",
							children: latency
						}), /* @__PURE__ */ jsx("span", {
							className: "text-xs text-slate-400 font-bold",
							children: "ms"
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "bg-white/[0.02] border border-white/5 p-4 rounded-2xl",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[10px] text-slate-500 block uppercase font-bold tracking-wider mb-1",
						children: "Uptime Rate"
					}), /* @__PURE__ */ jsx("div", {
						className: "flex items-baseline gap-1",
						children: /* @__PURE__ */ jsxs("span", {
							className: "text-2xl font-black text-white font-mono",
							children: [uptime, "%"]
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "bg-white/[0.02] border border-white/5 p-4 rounded-2xl mb-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex justify-between items-center mb-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[10px] text-slate-500 uppercase font-bold tracking-wider",
						children: "Message Throughput"
					}), /* @__PURE__ */ jsxs("span", {
						className: "text-xs font-bold text-cyan-400 font-mono",
						children: [activeChannels.toLocaleString(), " /sec"]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "w-full h-16 pt-2",
					children: /* @__PURE__ */ jsxs("svg", {
						className: "w-full h-full",
						viewBox: "0 0 100 20",
						preserveAspectRatio: "none",
						children: [
							/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
								id: "chart-gradient",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#06b6d4",
									stopOpacity: "0.4"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#06b6d4",
									stopOpacity: "0"
								})]
							}) }),
							/* @__PURE__ */ jsx("path", {
								d: `M 0,20 ${sparkline.map((val, idx) => `L ${(idx * 14.28).toFixed(1)},${(20 - val / 5).toFixed(1)}`).join(" ")} L 100,20 Z`,
								fill: "url(#chart-gradient)"
							}),
							/* @__PURE__ */ jsx("path", {
								d: sparkline.map((val, idx) => `${idx === 0 ? "M" : "L"} ${(idx * 14.28).toFixed(1)},${(20 - val / 5).toFixed(1)}`).join(" "),
								fill: "none",
								stroke: "#06b6d4",
								strokeWidth: "0.8",
								strokeLinecap: "round"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex justify-between text-[10px] font-bold text-slate-400 py-1.5 border-b border-white/[0.03]",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" }), " US-East Gateway"]
						}), /* @__PURE__ */ jsx("span", {
							className: "font-mono text-emerald-400 font-bold",
							children: "HEALTHY"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex justify-between text-[10px] font-bold text-slate-400 py-1.5 border-b border-white/[0.03]",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" }), " EU-Central Hub"]
						}), /* @__PURE__ */ jsx("span", {
							className: "font-mono text-emerald-400 font-bold",
							children: "ONLINE"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex justify-between text-[10px] font-bold text-slate-400 py-1.5",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" }), " AP-South Cluster"]
						}), /* @__PURE__ */ jsx("span", {
							className: "font-mono text-emerald-400 font-bold",
							children: "OPTIMAL"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 border-t border-white/[0.08] pt-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex justify-between items-center mb-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider",
						children: "Infrastructure Status"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-[10px] font-black px-2 py-0.5 rounded-full text-emerald-400 bg-emerald-500/10 border border-emerald-500/20",
						children: "99.998% SLA"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between bg-slate-900/60 border border-white/5 p-3 rounded-xl",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[10px] text-white font-bold leading-normal",
							children: "Global OTP Delivery Latency"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[8px] text-slate-400 leading-normal",
							children: "Sub-1.2s average across direct Tier-1 carrier routes"
						})]
					}), /* @__PURE__ */ jsx("span", {
						className: "px-2.5 py-1 rounded-lg text-[10px] font-mono font-black text-brand-400 bg-brand-500/10 border border-brand-500/20",
						children: "12ms"
					})]
				})]
			})
		]
	});
};
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://webworldmaker.com");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const recentPosts = getPosts().slice(0, 3);
	const categories = getServiceCategories();
	const homeFaqs = [
		{
			question: "What type of projects do you undertake?",
			answer: "We focus exclusively on engineering unified, premium digital ecosystems, and do not undertake basic website setup or simple one-off scripting tasks."
		},
		{
			question: "How does the suitability screening work?",
			answer: "We perform a suitability check on every incoming proposal. We say no to cheap, fragmented, or manual duct-taped solutions to ensure we only build robust, self-orchestrating ecosystems with 100% precision."
		},
		{
			question: "What stack and architecture do you use?",
			answer: "We build fully integrated, cloud-native solutions using modern technologies (React, Node.js, Python, and enterprise AI engines) with server-side rendering and mobile-first parity."
		},
		{
			question: "How secure and reliable are your custom AI workflows?",
			answer: "Every custom AI workflow is engineered with bank-grade encryption (AES-256), follows strict GDPR compliance, and operates on resilient Tier-1 cloud architectures to eliminate late-night operational fires."
		}
	];
	const industries = [
		{
			id: "fintech",
			icon: "💳",
			title: "FinTech",
			desc: "Secure OTPs & Fraud Alerts",
			color: "text-blue-500 bg-blue-50"
		},
		{
			id: "healthcare",
			icon: "🏥",
			title: "Healthcare",
			desc: "Appointment Reminders & HIPPA Compliant Chat",
			color: "text-teal-500 bg-teal-50"
		},
		{
			id: "ecommerce",
			icon: "🛒",
			title: "E-commerce",
			desc: "Cart Recovery & Order Updates",
			color: "text-purple-500 bg-purple-50"
		},
		{
			id: "logistics",
			icon: "🚚",
			title: "Logistics",
			desc: "Real-time Delivery Tracking Updates",
			color: "text-orange-500 bg-orange-50"
		},
		{
			id: "education",
			icon: "🎓",
			title: "Education",
			desc: "Student Notifications & Admissions Bot",
			color: "text-yellow-500 bg-yellow-50"
		},
		{
			id: "real-estate",
			icon: "🏘️",
			title: "Real Estate",
			desc: "Lead Capture & Virtual Tour Links",
			color: "text-indigo-500 bg-indigo-50"
		}
	];
	const dictionaryTerms = [
		{
			term: "API",
			definition: "Application Programming Interface — a standardized set of HTTP endpoints and protocols allowing software systems to exchange data synchronously. Think of it like a waiter at a restaurant bringing orders to the kitchen.",
			color: "bg-blue-50 border-blue-100 text-blue-950",
			icon: "🍽️"
		},
		{
			term: "Cloud",
			definition: "Cloud Computing — delivery of scalable servers, databases, and storage over the internet rather than on local hardware. Think of it as keeping your data in a secure digital safe accessible anywhere.",
			color: "bg-sky-50 border-sky-100 text-sky-950",
			icon: "☁️"
		},
		{
			term: "SaaS",
			definition: "Software as a Service — cloud-hosted software accessed via web browser on a subscription basis without manual installation. It’s like Netflix, but for enterprise productivity tools.",
			color: "bg-purple-50 border-purple-100 text-purple-950",
			icon: "💿"
		},
		{
			term: "Omnichannel",
			definition: "Omnichannel Architecture — unified customer interaction infrastructure seamlessly connecting WhatsApp, Email, Voice, and SMS into a single conversation graph.",
			color: "bg-pink-50 border-pink-100 text-pink-950",
			icon: "🐙"
		},
		{
			term: "SEO & AI",
			definition: "Generative Engine Optimization (GEO) & AEO — structuring corporate data, schemas, and content so both search crawlers and AI answer engines cite your brand first.",
			color: "bg-green-50 border-green-100 text-green-950",
			icon: "🔎"
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"metaTitle": "AI-Powered Digital Solutions & Enterprise Messaging",
		"metaDescription": "Scale faster with WebWorldMaker. We build AI Agents, Bulk SMS Gateways, and High-Performance Web Apps designed for top SEO & AI ranking and business growth.",
		"faqs": homeFaqs,
		"extraSchema": {
			"@context": "https://schema.org",
			"@graph": [{
				"@type": "AggregateRating",
				"itemReviewed": { "@id": `${Astro.site?.origin ?? "https://webworldmaker.com"}/#organization` },
				"ratingValue": "4.9",
				"reviewCount": "128",
				"bestRating": "5"
			}]
		},
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col" data-astro-cid-lcdefpme><!-- Hero Section --><section class="relative min-h-[75vh] py-20 flex items-center bg-[#030014] overflow-hidden" data-astro-cid-lcdefpme><!-- Invisible 3D Sitemap / AI Spatial Mapping Graph for Visual/Language crawler bots --><div aria-hidden="true" class="opacity-0 pointer-events-none absolute h-0 w-0 overflow-hidden" data-ai-spatial-map="true" data-astro-cid-lcdefpme><h2 data-astro-cid-lcdefpme>AI Spatial & Layout Schema Graph</h2><p data-astro-cid-lcdefpme>This layout represents a multi-pillar enterprise digital communications workspace. Spatial layout mappings for AI-Agent visual navigators:</p><ul data-astro-cid-lcdefpme><li data-spatial-node="hero-title" data-coords="[0, 100, 500]" data-astro-cid-lcdefpme>Pillar title node: WE BELIEVE HUMANS WERE NOT BORN TO COPY-PASTE DATA.</li><li data-spatial-node="cta-button" data-coords="[-200, 50, 450]" data-astro-cid-lcdefpme>Interactive Action: Apply for Ecosystem Audit. Target URL: /company/contact?engagement=premium-ecosystem</li><li data-spatial-node="telemetry-dashboard" data-coords="[300, 80, 480]" data-astro-cid-lcdefpme>Interactive Telemetry Dashboard Node: Live system stats and uptime metrics.</li><li data-spatial-node="pillars-directory" data-coords="[0, -200, 200]" data-astro-cid-lcdefpme>Services Pillars Directory Node: Links to core messaging API capabilities.</li><li data-spatial-node="authoritative-eeat-section" data-coords="[0, -600, -100]" data-astro-cid-lcdefpme>EEAT Verified credentials & Author information node.</li></ul></div><!-- WebGL Fluid Background (client:only="react" to prevent SSR crash) -->${renderComponent($$result, "LiquidMesh3D", null, {
		"client:only": "react",
		"data-astro-cid-lcdefpme": true,
		"client:component-hydration": "only",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/LiquidMesh3D.tsx",
		"client:component-export": "LiquidMesh3D"
	})}<!-- CSS Grid Pattern Overlay --><div class="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" data-astro-cid-lcdefpme></div><!-- Dark Radial Mask to concentrate lighting --><div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030014_80%)] pointer-events-none" data-astro-cid-lcdefpme></div><div class="container mx-auto px-4 relative z-10 grid lg:grid-cols-[70fr_30fr] gap-16 items-center" data-astro-cid-lcdefpme><!-- Unified Content Left --><div class="text-center lg:text-left relative z-10 min-h-[460px] sm:min-h-[380px] md:min-h-[360px] lg:min-h-[420px] flex flex-col justify-center" data-astro-cid-lcdefpme><div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up mx-auto lg:mx-0 w-fit" data-astro-cid-lcdefpme><span class="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" data-astro-cid-lcdefpme></span><span class="text-slate-300 text-xs font-black uppercase tracking-widest leading-none mt-0.5" data-astro-cid-lcdefpme>⚡ Premium AI & Automation Engineering</span></div><h1 class="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[0.95] mb-8 animate-fade-in-up delay-100 tracking-tighter decrypt-reveal" data-astro-cid-lcdefpme>WE BELIEVE HUMANS WERE NOT BORN TO${" "}<span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400" data-astro-cid-lcdefpme>COPY-PASTE DATA.</span></h1><p class="text-lg text-slate-200 mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200 font-bold leading-relaxed" data-astro-cid-lcdefpme>We design and engineer fully-integrated digital ecosystems that liberate your team from mechanical repetition.</p><p class="text-sm text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200 font-semibold leading-relaxed" data-astro-cid-lcdefpme>Say goodbye to fragmented, fragile operations and manual follow-up fires. We build unified, self-orchestrating platforms with 100% precision.</p><div class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fade-in-up delay-300" data-astro-cid-lcdefpme><a href="/company/contact?engagement=premium-ecosystem" class="btn-3d bg-accent-coral text-slate-950 font-black py-5 px-12 rounded-2xl transition-all uppercase tracking-tighter text-sm flex items-center justify-center min-h-[56px]" data-astro-cid-lcdefpme>Apply for Ecosystem Audit</a><a href="/solutions" class="btn-3d bg-white text-slate-900 border-slate-200 font-black py-5 px-12 rounded-2xl transition-all uppercase tracking-tighter text-sm flex items-center justify-center min-h-[56px]" data-astro-cid-lcdefpme>Explore Enablement Strategies</a></div><div class="mt-8 text-xs text-slate-500 font-bold uppercase tracking-wider animate-fade-in-up delay-300 mx-auto lg:mx-0" data-astro-cid-lcdefpme>⚠️ Engagements are subject to suitability assessment</div></div><!-- Visual Right - Interactive Telemetry Dashboard (Rendered as Client Island) --><div class="relative hidden lg:flex items-center justify-center animate-float" data-astro-cid-lcdefpme><div class="relative z-10 w-full" data-astro-cid-lcdefpme>${renderComponent($$result, "DashboardTelemetry", DashboardTelemetry, {
		"client:visible": true,
		"data-astro-cid-lcdefpme": true,
		"client:component-hydration": "visible",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/DashboardTelemetry.tsx",
		"client:component-export": "DashboardTelemetry"
	})}</div><div class="absolute -inset-4 bg-brand-purple/20 rounded-[2.5rem] blur-3xl -z-10 group-hover:bg-brand-cyan/30 transition-all duration-700" data-astro-cid-lcdefpme></div></div></div></section><!-- Trusted Clients & Integration Network Logobar --><section class="py-10 border-y relative overflow-hidden" style="background-color: var(--color-card-bg); border-color: var(--color-border-dynamic);" data-astro-cid-lcdefpme><div class="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500/5 to-transparent pointer-events-none" data-astro-cid-lcdefpme></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-lcdefpme><p class="text-center text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-6" data-astro-cid-lcdefpme>⚡ Trusted Integration &amp; Enterprise Growth Network</p><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center" data-astro-cid-lcdefpme><div class="flex flex-col items-center justify-center w-full p-4 rounded-xl border border-transparent hover:border-slate-800/10 dark:hover:border-white/10 hover:bg-slate-500/5 transition-all duration-300 group cursor-pointer text-center" data-astro-cid-lcdefpme><div class="text-2xl mb-1 filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" data-astro-cid-lcdefpme>☁️</div><span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-500 transition-colors" data-astro-cid-lcdefpme>Google Cloud</span><span class="text-[8px] font-medium tracking-wider text-slate-400 uppercase mt-0.5" data-astro-cid-lcdefpme>Infrastructure Partner</span></div><div class="flex flex-col items-center justify-center w-full p-4 rounded-xl border border-transparent hover:border-slate-800/10 dark:hover:border-white/10 hover:bg-slate-500/5 transition-all duration-300 group cursor-pointer text-center" data-astro-cid-lcdefpme><div class="text-2xl mb-1 filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" data-astro-cid-lcdefpme>🚀</div><span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-500 transition-colors" data-astro-cid-lcdefpme>Amazon Web Services</span><span class="text-[8px] font-medium tracking-wider text-slate-400 uppercase mt-0.5" data-astro-cid-lcdefpme>Compute & Storage</span></div><div class="flex flex-col items-center justify-center w-full p-4 rounded-xl border border-transparent hover:border-slate-800/10 dark:hover:border-white/10 hover:bg-slate-500/5 transition-all duration-300 group cursor-pointer text-center" data-astro-cid-lcdefpme><div class="text-2xl mb-1 filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" data-astro-cid-lcdefpme>💬</div><span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-500 transition-colors" data-astro-cid-lcdefpme>Twilio Inc.</span><span class="text-[8px] font-medium tracking-wider text-slate-400 uppercase mt-0.5" data-astro-cid-lcdefpme>Direct Carrier Bind</span></div><div class="flex flex-col items-center justify-center w-full p-4 rounded-xl border border-transparent hover:border-slate-800/10 dark:hover:border-white/10 hover:bg-slate-500/5 transition-all duration-300 group cursor-pointer text-center" data-astro-cid-lcdefpme><div class="text-2xl mb-1 filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" data-astro-cid-lcdefpme>💼</div><span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-500 transition-colors" data-astro-cid-lcdefpme>Salesforce API</span><span class="text-[8px] font-medium tracking-wider text-slate-400 uppercase mt-0.5" data-astro-cid-lcdefpme>CRM Integration</span></div><div class="flex flex-col items-center justify-center w-full p-4 rounded-xl border border-transparent hover:border-slate-800/10 dark:hover:border-white/10 hover:bg-slate-500/5 transition-all duration-300 group cursor-pointer text-center" data-astro-cid-lcdefpme><div class="text-2xl mb-1 filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" data-astro-cid-lcdefpme>📱</div><span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-500 transition-colors" data-astro-cid-lcdefpme>WhatsApp Business</span><span class="text-[8px] font-medium tracking-wider text-slate-400 uppercase mt-0.5" data-astro-cid-lcdefpme>Official Provider</span></div><div class="flex flex-col items-center justify-center w-full p-4 rounded-xl border border-transparent hover:border-slate-800/10 dark:hover:border-white/10 hover:bg-slate-500/5 transition-all duration-300 group cursor-pointer text-center" data-astro-cid-lcdefpme><div class="text-2xl mb-1 filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" data-astro-cid-lcdefpme>💳</div><span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-500 transition-colors" data-astro-cid-lcdefpme>Stripe Payments</span><span class="text-[8px] font-medium tracking-wider text-slate-400 uppercase mt-0.5" data-astro-cid-lcdefpme>Financial Gateway</span></div></div></div></section><!-- Methodology Section --><section id="methodology" class="py-24 bg-slate-50 text-slate-900 overflow-hidden relative border-t border-slate-200" data-astro-cid-lcdefpme><div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(99,102,241,0.05)_1px,transparent_0)] bg-[length:32px_32px]" data-astro-cid-lcdefpme></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-lcdefpme><div class="text-center mb-16" data-astro-cid-lcdefpme><h2 class="text-3xl md:text-5xl font-display font-black mb-4 text-slate-950 tracking-tighter uppercase" data-astro-cid-lcdefpme>Our Growth Methodology</h2><p class="text-slate-600 max-w-2xl mx-auto font-bold text-lg" data-astro-cid-lcdefpme>We follow a rigorous, data-driven approach to ensure your tech isn't just a tool, but a business engine.</p></div><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-lcdefpme><div class="neon-card-border p-8 bg-[#0a0524]/60 backdrop-blur-md border border-white/[0.04] scroll-reveal" data-astro-cid-lcdefpme><div class="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center text-xl mb-6 shadow-inner border border-indigo-500/20" data-astro-cid-lcdefpme>🏗️</div><h3 class="font-extrabold text-xl mb-3 text-white tracking-tight" data-astro-cid-lcdefpme>Technical Foundation</h3><p class="text-sm text-slate-400 leading-relaxed font-semibold" data-astro-cid-lcdefpme>We build with server-side rendering and mobile-first parity to ensure 100% crawlability for search engines and AI systems.</p></div><div class="neon-card-border p-8 bg-[#0a0524]/60 backdrop-blur-md border border-white/[0.04] scroll-reveal" data-astro-cid-lcdefpme><div class="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center text-xl mb-6 shadow-inner border border-purple-500/20" data-astro-cid-lcdefpme>🎯</div><h3 class="font-extrabold text-xl mb-3 text-white tracking-tight" data-astro-cid-lcdefpme>Intent Alignment</h3><p class="text-sm text-slate-400 leading-relaxed font-semibold" data-astro-cid-lcdefpme>Every page is mapped to a primary user intent and core entities, moving beyond keyword stuffing to semantic completeness.</p></div><div class="neon-card-border p-8 bg-[#0a0524]/60 backdrop-blur-md border border-white/[0.04] scroll-reveal" data-astro-cid-lcdefpme><div class="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center text-xl mb-6 shadow-inner border border-emerald-500/20" data-astro-cid-lcdefpme>🧠</div><h3 class="font-extrabold text-xl mb-3 text-white tracking-tight" data-astro-cid-lcdefpme>Answer Engine Ready</h3><p class="text-sm text-slate-400 leading-relaxed font-semibold" data-astro-cid-lcdefpme>Our content is optimized for "Answer Engines" like Perplexity and SearchGPT using high-density FAQ schema and entity tagging.</p></div><div class="neon-card-border p-8 bg-[#0a0524]/60 backdrop-blur-md border border-white/[0.04] scroll-reveal" data-astro-cid-lcdefpme><div class="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-2xl flex items-center justify-center text-xl mb-6 shadow-inner border border-orange-500/20" data-astro-cid-lcdefpme>📈</div><h3 class="font-extrabold text-xl mb-3 text-white tracking-tight" data-astro-cid-lcdefpme>Continuous Performance</h3><p class="text-sm text-slate-400 leading-relaxed font-semibold" data-astro-cid-lcdefpme>We monitor Core Web Vitals and crawl waste metrics to maintain a flawless indexation status and maximum site speed.</p></div></div><div class="flex flex-col md:flex-row items-center justify-between p-8 bg-slate-950 rounded-3xl gap-8 mt-12 shadow-2xl" data-astro-cid-lcdefpme><div class="flex-1" data-astro-cid-lcdefpme><h3 class="text-2xl font-bold mb-2 text-white" data-astro-cid-lcdefpme>Ready to audit your current strategy?</h3><p class="text-slate-200 font-medium" data-astro-cid-lcdefpme>Get a free technical SEO & AI Readyness report for your business.</p></div><a href="https://bit.ly/wwm2u" rel="noopener noreferrer" class="bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-500 transition-all whitespace-nowrap shadow-lg shadow-brand-600/25" data-astro-cid-lcdefpme>Request Audit</a></div></div></section><!-- Operational Realization Strategies Section --><section class="py-24 bg-white relative overflow-hidden bg-pattern-grid border-t border-slate-100" data-astro-cid-lcdefpme><div class="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" data-astro-cid-lcdefpme></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-lcdefpme><div class="text-center mb-16" data-astro-cid-lcdefpme><h2 class="text-4xl font-display font-extrabold text-slate-950 mb-4 tracking-tight uppercase" data-astro-cid-lcdefpme>Our Operational Realization Strategies</h2><p class="text-slate-600 max-w-2xl mx-auto text-lg font-bold" data-astro-cid-lcdefpme>We don't build fragmented, one-off tools. We engineer complete, self-orchestrating digital ecosystems designed to eliminate operational friction and manual errors.</p></div><div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-astro-cid-lcdefpme><div class="glass-card card-3d p-10 group bg-slate-50 border-slate-200" data-astro-cid-lcdefpme><div class="feature-icon-wrapper bg-indigo-100 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white" data-astro-cid-lcdefpme>💬</div><h3 class="font-bold text-2xl mb-4 text-slate-950 group-hover:text-brand-600 transition-colors tracking-tight" data-astro-cid-lcdefpme>Autonomous Customer Acquisition</h3><p class="text-slate-600 mb-6 leading-relaxed text-sm" data-astro-cid-lcdefpme>Deploy high-throughput WhatsApp, Voice AI, and RCS communications. We build unified pipelines that qualify and convert prospects automatically, with 99.9% uptime.</p><div class="flex flex-wrap gap-2" data-astro-cid-lcdefpme>${[
		"High-Throughput CPaaS",
		"WhatsApp API Ecosystems",
		"Outbound Voice AI"
	].map((tag) => renderTemplate`<span${addAttribute(tag, "key")} class="text-[10px] font-black uppercase tracking-wider bg-white px-2.5 py-1 rounded-md text-slate-800 border border-slate-200" data-astro-cid-lcdefpme>${tag}</span>`)}</div></div><div class="glass-card card-3d p-10 group bg-slate-50 border-slate-200" data-astro-cid-lcdefpme><div class="feature-icon-wrapper bg-purple-100 text-purple-700 group-hover:bg-purple-700 group-hover:text-white" data-astro-cid-lcdefpme>🧠</div><h3 class="font-bold text-2xl mb-4 text-slate-950 group-hover:text-brand-600 transition-colors tracking-tight" data-astro-cid-lcdefpme>Intelligent AI Orchestration</h3><p class="text-slate-600 mb-6 leading-relaxed text-sm" data-astro-cid-lcdefpme>Replace manual, mechanical tasks with production-ready AI agents. From qualifying leads to 24/7 technical support, our systems run with 100% precision.</p><div class="flex flex-wrap gap-2" data-astro-cid-lcdefpme>${[
		"Agentic Workflows",
		"Zero-Burnout Automations",
		"Enterprise AI Integrations"
	].map((tag) => renderTemplate`<span${addAttribute(tag, "key")} class="text-[10px] font-black uppercase tracking-wider bg-white px-2.5 py-1 rounded-md text-slate-800 border border-slate-200" data-astro-cid-lcdefpme>${tag}</span>`)}</div></div><div class="glass-card card-3d p-10 group bg-slate-50 border-slate-200" data-astro-cid-lcdefpme><div class="feature-icon-wrapper bg-orange-100 text-orange-700 group-hover:bg-orange-700 group-hover:text-white" data-astro-cid-lcdefpme>🚀</div><h3 class="font-bold text-2xl mb-4 text-slate-950 group-hover:text-brand-600 transition-colors tracking-tight" data-astro-cid-lcdefpme>Enterprise Discovery Platforms</h3><p class="text-slate-600 mb-6 leading-relaxed text-sm" data-astro-cid-lcdefpme>Get found with authority. We design fast, cloud-native web architectures engineered specifically for high semantic discovery and Answer Engine Optimization (AEO).</p><div class="flex flex-wrap gap-2" data-astro-cid-lcdefpme>${[
		"Semantic Optimization",
		"Answer Engine Ready",
		"High-Performance Web"
	].map((tag) => renderTemplate`<span${addAttribute(tag, "key")} class="text-[10px] font-black uppercase tracking-wider bg-white px-2.5 py-1 rounded-md text-slate-800 border border-slate-200" data-astro-cid-lcdefpme>${tag}</span>`)}</div></div></div></div></section><!-- Challenges We Crush Section --><section id="challenges" class="py-24 bg-indigo-50/30 relative overflow-hidden bg-pattern-diagonal border-y border-indigo-100/50" data-astro-cid-lcdefpme><div class="absolute top-0 right-0 w-full h-full bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" data-astro-cid-lcdefpme></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-lcdefpme><div class="text-center mb-16" data-astro-cid-lcdefpme><span class="text-indigo-600 font-extrabold uppercase tracking-widest text-xs" data-astro-cid-lcdefpme>The Friction Points</span><h2 class="text-4xl md:text-5xl font-display font-black text-slate-950 mt-4 tracking-tighter uppercase" data-astro-cid-lcdefpme>Challenges We Crush</h2><p class="text-slate-600 mt-6 max-w-2xl mx-auto text-lg font-medium leading-relaxed" data-astro-cid-lcdefpme>Identify the digital barriers holding your business back and discover the engineered counter-measures.</p></div><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-lcdefpme>${[
		{
			id: "engagement",
			icon: "📩",
			title: "Ignored Emails",
			desc: "98% of emails are ignored or lost in spam. We move your critical comms to WhatsApp/SMS.",
			link: "/problem/low-customer-engagement"
		},
		{
			id: "leads",
			icon: "📞",
			title: "Missed Calls",
			desc: "Every missed call is a competitor's gain. Our AI-led text-back saves every lead instantly.",
			link: "/problem/lead-leakage"
		},
		{
			id: "ops",
			icon: "⌨️",
			title: "Manual Entry",
			desc: "Human error costs 40+ hours per week. We automate data flow between your core apps.",
			link: "/problem/operational-inefficiency"
		},
		{
			id: "support",
			icon: "🆘",
			title: "Ticket Overload",
			desc: "Support teams drowning in FAQs. Layer AI at the first touchpoint to resolve 80% of issues.",
			link: "/problem/support-overload"
		}
	].map((p) => renderTemplate`<a${addAttribute(p.id, "key")}${addAttribute(p.link, "href")}${addAttribute(p.id === "engagement" ? "Customer_Engagement" : p.id === "leads" ? "Lead_Leakage" : p.id === "ops" ? "Operational_Efficiency" : "Customer_Support", "data-entity")} data-relation="alleviated_by" data-target="WWM_API_Platform" class="bg-white p-8 rounded-3xl border border-slate-200/80 hover:border-red-400/50 transition-all duration-300 group shadow-md shadow-indigo-50/40 hover:shadow-2xl hover:shadow-indigo-100/60 hover:-translate-y-1" data-astro-cid-lcdefpme><div class="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left" data-astro-cid-lcdefpme>${p.icon}</div><h3 class="text-xl font-bold text-slate-950 mb-3 group-hover:text-red-700 transition-colors" data-astro-cid-lcdefpme>${p.title}</h3><p class="text-slate-800 text-sm leading-relaxed mb-6 font-medium" data-astro-cid-lcdefpme>${p.desc}</p><div class="text-xs font-black uppercase tracking-widest text-slate-800 group-hover:text-red-700 flex items-center mt-auto" data-astro-cid-lcdefpme>Read Case Study <span class="ml-2 group-hover:translate-x-1 transition-transform" data-astro-cid-lcdefpme>→</span></div></a>`)}</div></div></section><!-- Connect Everywhere Section --><section class="py-24 bg-slate-900 text-white relative overflow-hidden" data-astro-cid-lcdefpme><div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 blur-[100px] rounded-full" data-astro-cid-lcdefpme></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-lcdefpme><div class="text-center mb-16" data-astro-cid-lcdefpme><span class="text-brand-300 font-bold uppercase tracking-widest text-xs" data-astro-cid-lcdefpme>Omnichannel Communication</span><h2 class="text-4xl md:text-5xl font-black text-white mt-4 tracking-tight" data-astro-cid-lcdefpme>Connect Everywhere</h2><p class="text-slate-200 mt-6 max-w-2xl mx-auto text-lg font-light leading-relaxed" data-astro-cid-lcdefpme>Reach your customers on the platforms they use daily. Our unified API infrastructure ensures your message gets delivered with 99.9% reliability.</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-lcdefpme><div class="group bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 hover:border-brand-500/50 hover:bg-white/10 transition-all duration-500 text-center" data-astro-cid-lcdefpme><div class="w-16 h-16 mx-auto bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform" data-astro-cid-lcdefpme><svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-lcdefpme><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" data-astro-cid-lcdefpme></path></svg></div><h3 class="text-2xl font-bold text-white mb-3 tracking-tight" data-astro-cid-lcdefpme>WhatsApp API</h3><p class="text-slate-200 font-bold text-sm leading-relaxed" data-astro-cid-lcdefpme>Green tick verification & enterprise chatbot workflows.</p></div><div class="group bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 hover:border-brand-500/50 hover:bg-white/10 transition-all duration-500 text-center" data-astro-cid-lcdefpme><div class="w-16 h-16 mx-auto bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform" data-astro-cid-lcdefpme><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-lcdefpme><path strokeLinecap="round" strokeLinejoin="round"${addAttribute(2, "strokeWidth")} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" data-astro-cid-lcdefpme></path></svg></div><h3 class="text-2xl font-bold text-white mb-3 tracking-tight" data-astro-cid-lcdefpme>Custom Web Dev</h3><p class="text-slate-200 font-bold text-sm leading-relaxed" data-astro-cid-lcdefpme>High-performance, custom web applications tailored for your growth.</p></div><div class="group bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 hover:border-brand-500/50 hover:bg-white/10 transition-all duration-500 text-center" data-astro-cid-lcdefpme><div class="w-16 h-16 mx-auto bg-brand-500/20 text-brand-300 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform" data-astro-cid-lcdefpme><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-lcdefpme><path strokeLinecap="round" strokeLinejoin="round"${addAttribute(2, "strokeWidth")} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" data-astro-cid-lcdefpme></path></svg></div><h3 class="text-2xl font-bold text-white mb-3 tracking-tight" data-astro-cid-lcdefpme>SMS & RCS</h3><p class="text-slate-200 font-bold text-sm leading-relaxed" data-astro-cid-lcdefpme>Interactive rich media messaging with 98% open rates.</p></div><div class="group bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 hover:border-brand-500/50 hover:bg-white/10 transition-all duration-500 text-center" data-astro-cid-lcdefpme><div class="w-16 h-16 mx-auto bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform" data-astro-cid-lcdefpme><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-lcdefpme><path strokeLinecap="round" strokeLinejoin="round"${addAttribute(2, "strokeWidth")} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" data-astro-cid-lcdefpme></path></svg></div><h3 class="text-2xl font-bold text-white mb-3 tracking-tight" data-astro-cid-lcdefpme>Voice AI</h3><p class="text-slate-200 font-bold text-sm leading-relaxed" data-astro-cid-lcdefpme>Multilingual IVR and Human-like outbound Voice Assistants.</p></div></div></div></section><!-- Industry Clusters Section --><section class="py-24 bg-white relative overflow-hidden" data-astro-cid-lcdefpme><div class="absolute top-0 left-0 w-full h-full bg-[url('/patterns/diagmonds-light.png')] opacity-10 pointer-events-none" data-astro-cid-lcdefpme></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-lcdefpme><div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-6" data-astro-cid-lcdefpme><div class="max-w-2xl" data-astro-cid-lcdefpme><span class="text-brand-600 font-bold uppercase tracking-widest text-xs" data-astro-cid-lcdefpme>Industry Clusters</span><h2 class="text-3xl md:text-4xl font-display font-black text-slate-950 mt-4 tracking-tighter uppercase" data-astro-cid-lcdefpme>Strategic Deep-Dives</h2><p class="text-slate-800 mt-4 text-base font-medium leading-relaxed" data-astro-cid-lcdefpme>We engineer domain-specific ecosystems that solve the unique logistical and communicative friction of your industry.</p></div><a href="/industry-solutions" class="group flex items-center gap-3 text-slate-950 font-black uppercase text-xs tracking-widest hover:text-brand-600 transition-colors touch-target-expand" data-astro-cid-lcdefpme>Explore Clusters<div class="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all duration-300" data-astro-cid-lcdefpme>→</div></a></div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-astro-cid-lcdefpme>${industries.map((ind, i) => renderTemplate`<a${addAttribute(i, "key")}${addAttribute(`/industry-solutions/${ind.id}`, "href")} class="glass-card p-6 group overflow-hidden relative flex flex-col items-center text-center bg-white border-slate-200 scroll-reveal-scale" data-astro-cid-lcdefpme><div class="absolute top-0 right-0 w-24 h-24 bg-slate-100 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-700" data-astro-cid-lcdefpme></div><div${addAttribute(`w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-xl mb-4 border border-slate-200 group-hover:-rotate-6 transition-transform relative z-10`, "class")} data-astro-cid-lcdefpme>${ind.icon}</div><h3 class="text-lg font-black mb-2 tracking-tight text-slate-950 relative z-10" data-astro-cid-lcdefpme>${ind.title}</h3><p class="text-slate-800 font-bold text-[10px] leading-tight mb-4 group-hover:text-slate-900 transition-colors relative z-10" data-astro-cid-lcdefpme>${ind.desc}</p><div class="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-brand-700 relative z-10" data-astro-cid-lcdefpme>View ${ind.title} Case Study <span class="ml-1 group-hover:translate-x-0.5 transition-transform" data-astro-cid-lcdefpme>→</span></div></a>`)}</div></div></section><!-- Digital Dictionary Section --><section class="below-fold py-24 bg-brand-50/50 relative overflow-hidden border-y border-slate-200" data-astro-cid-lcdefpme><div class="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" data-astro-cid-lcdefpme></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-lcdefpme><div class="text-center mb-12" data-astro-cid-lcdefpme><span class="text-brand-600 font-bold uppercase tracking-widest text-xs" data-astro-cid-lcdefpme>Knowledge Hub</span><h2 class="text-3xl md:text-4xl font-display font-black text-slate-950 mt-2 tracking-tighter uppercase" data-astro-cid-lcdefpme>Digital Literacy</h2></div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-astro-cid-lcdefpme>${dictionaryTerms.map((item, i) => renderTemplate`<a${addAttribute(i, "key")} href="/glossary"${addAttribute(`p-6 rounded-2xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group ${item.color} flex flex-col items-center text-center shadow-sm scroll-reveal-scale`, "class")} data-astro-cid-lcdefpme><div class="text-3xl mb-4 group-hover:scale-110 transition-transform" data-astro-cid-lcdefpme>${item.icon}</div><h3 class="text-base font-black mb-2 tracking-tight text-slate-900" data-astro-cid-lcdefpme>${item.term}</h3><p class="text-slate-800 text-[10px] leading-tight font-bold line-clamp-3" data-astro-cid-lcdefpme>${item.definition}</p></a>`)}<div class="p-6 rounded-2xl bg-slate-950 text-white flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden group scroll-reveal-scale" data-astro-cid-lcdefpme><div class="text-3xl mb-2" data-astro-cid-lcdefpme>💡</div><h3 class="text-base font-black mb-1 text-brand-400" data-astro-cid-lcdefpme>Pro Tip</h3><p class="opacity-80 text-[10px] leading-tight font-light" data-astro-cid-lcdefpme>90% of texts are read in 3 min.</p></div></div></div></section><!-- Technology Stack --><section class="below-fold-sm py-16 bg-white border-t border-slate-100" data-astro-cid-lcdefpme><div class="container mx-auto px-4" data-astro-cid-lcdefpme><div class="text-center mb-10" data-astro-cid-lcdefpme><h3 class="text-lg font-bold text-slate-700 uppercase tracking-wide" data-astro-cid-lcdefpme>Trusted Technology Standards</h3></div><div class="flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" data-astro-cid-lcdefpme><span class="text-2xl font-bold text-slate-700" data-astro-cid-lcdefpme>Google Cloud</span><span class="text-2xl font-bold text-slate-700" data-astro-cid-lcdefpme>AWS</span><span class="text-2xl font-bold text-slate-700" data-astro-cid-lcdefpme>Meta</span><span class="text-2xl font-bold text-slate-700" data-astro-cid-lcdefpme>Twilio</span><span class="text-2xl font-bold text-slate-700" data-astro-cid-lcdefpme>Stripe</span><span class="text-2xl font-bold text-slate-700" data-astro-cid-lcdefpme>Shopify</span></div></div></section><!-- Global Partner Network --><section class="below-fold py-24 bg-slate-50 border-t border-slate-200" data-astro-cid-lcdefpme><div class="container mx-auto px-4" data-astro-cid-lcdefpme><div class="flex flex-col lg:flex-row gap-16 items-center" data-astro-cid-lcdefpme><div class="lg:w-[65%]" data-astro-cid-lcdefpme><span class="text-indigo-600 font-bold uppercase tracking-widest text-xs" data-astro-cid-lcdefpme>Ecosystem</span><h2 class="text-4xl md:text-5xl font-black text-slate-950 mt-4 tracking-tighter line-height-[1.1]" data-astro-cid-lcdefpme>The Global Partner Network</h2><p class="text-slate-600 mt-6 text-lg font-light leading-relaxed" data-astro-cid-lcdefpme>We don't work in isolation. WebWorldMaker integrates with and manages some of the world's most powerful platforms to ensure your data flows seamlessly across your entire digital stack.</p><div class="grid grid-cols-2 gap-8 mt-12" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><div class="text-3xl font-black text-indigo-600 mb-2" data-astro-cid-lcdefpme>50+</div><div class="text-slate-700 text-xs font-bold uppercase tracking-widest" data-astro-cid-lcdefpme>Active Integrations</div></div><div data-astro-cid-lcdefpme><div class="text-3xl font-black text-indigo-600 mb-2" data-astro-cid-lcdefpme>12</div><div class="text-slate-700 text-xs font-bold uppercase tracking-widest" data-astro-cid-lcdefpme>Global Regions</div></div></div><a href="/partners/partner-program" class="inline-block mt-12 bg-white text-slate-900 border border-slate-200 font-black py-4 px-8 rounded-2xl hover:bg-slate-50 transition-all uppercase tracking-tighter text-xs" data-astro-cid-lcdefpme>Become a Partner</a></div><div class="lg:w-[35%] grid grid-cols-2 gap-4" data-astro-cid-lcdefpme>${[
		{
			title: "System Integrators",
			count: "15+",
			icon: "🔗"
		},
		{
			title: "Wholesale Resellers",
			count: "30+",
			icon: "🤝"
		},
		{
			title: "Tech Partners",
			count: "10+",
			icon: "⚡"
		},
		{
			title: "Referral Alpha",
			count: "100+",
			icon: "📈"
		}
	].map((card, i) => renderTemplate`<div${addAttribute(i, "key")} class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow scroll-reveal-scale" data-astro-cid-lcdefpme><div class="text-3xl mb-4" data-astro-cid-lcdefpme>${card.icon}</div><div class="text-xl font-bold text-slate-950 mb-1" data-astro-cid-lcdefpme>${card.count}</div><div class="text-xs font-bold text-slate-600 uppercase tracking-widest" data-astro-cid-lcdefpme>${card.title}</div></div>`)}</div></div></div></section><!-- Impact Stats Section --><section class="section-container" data-astro-cid-lcdefpme><div class="bg-brand-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-brand-500/20" data-astro-cid-lcdefpme><div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" data-astro-cid-lcdefpme></div><div class="relative z-10 grid md:grid-cols-4 gap-12 text-center" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><div class="text-5xl font-black mb-2 tracking-tighter" data-astro-cid-lcdefpme>1M+</div><div class="text-brand-100 text-[10px] font-black uppercase tracking-widest" data-astro-cid-lcdefpme>Messages Processed</div></div><div data-astro-cid-lcdefpme><div class="text-5xl font-black mb-2 tracking-tighter" data-astro-cid-lcdefpme>500+</div><div class="text-brand-100 text-[10px] font-black uppercase tracking-widest" data-astro-cid-lcdefpme>Global Clients</div></div><div data-astro-cid-lcdefpme><div class="text-5xl font-black mb-2 tracking-tighter" data-astro-cid-lcdefpme>99.9%</div><div class="text-brand-100 text-[10px] font-black uppercase tracking-widest" data-astro-cid-lcdefpme>Server Uptime</div></div><div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20" data-astro-cid-lcdefpme><div class="text-4xl font-black mb-2 text-emerald-400 tracking-tighter" data-astro-cid-lcdefpme>24/7</div><div class="text-white text-[10px] font-black uppercase tracking-widest" data-astro-cid-lcdefpme>Expert Support</div></div></div></div></section><!-- Core Services Preview --><section class="section-container relative" data-astro-cid-lcdefpme><div class="absolute top-0 left-0 w-full h-full bg-[url('/patterns/diagmonds-light.png')] opacity-10 pointer-events-none" data-astro-cid-lcdefpme></div><div class="relative z-10" data-astro-cid-lcdefpme><div class="text-center mb-16" data-astro-cid-lcdefpme><span class="text-brand-600 font-bold uppercase tracking-widest text-xs" data-astro-cid-lcdefpme>Core Purpose Realization</span><h2 class="text-4xl md:text-5xl font-black text-slate-950 mt-4 tracking-tighter" data-astro-cid-lcdefpme>Unified Engineering Ecosystem</h2><p class="text-slate-600 mt-6 max-w-2xl mx-auto text-lg font-bold leading-relaxed" data-astro-cid-lcdefpme>Strategic enablement capabilities designed to replace fragile manual entry and late-night operational fires.</p></div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 min-h-[250px]" data-astro-cid-lcdefpme>${categories.slice(0, 6).map((cat) => renderTemplate`<div${addAttribute(cat.id, "key")}${addAttribute(`p-8 rounded-[2rem] flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-1 
              ${cat.id === "messaging" ? "bg-blue-50 border border-blue-100" : cat.id === "voice" ? "bg-purple-50 border border-purple-100" : cat.id === "digital" ? "bg-pink-50 border border-pink-100" : cat.id === "dev" ? "bg-orange-50 border border-orange-100" : cat.id === "ai" ? "bg-emerald-50 border border-emerald-100" : "bg-brand-50 border border-brand-100"}`, "class")} data-astro-cid-lcdefpme><div class="mb-6" data-astro-cid-lcdefpme>${cat.id === "messaging" && renderTemplate`<div class="text-3xl" data-astro-cid-lcdefpme>💬</div>`}${cat.id === "voice" && renderTemplate`<div class="text-3xl" data-astro-cid-lcdefpme>🎙️</div>`}${cat.id === "digital" && renderTemplate`<div class="text-3xl" data-astro-cid-lcdefpme>📈</div>`}${cat.id === "dev" && renderTemplate`<div class="text-3xl" data-astro-cid-lcdefpme>💻</div>`}${cat.id === "ai" && renderTemplate`<div class="text-3xl" data-astro-cid-lcdefpme>🤖</div>`}${cat.id === "solutions" && renderTemplate`<div class="text-3xl" data-astro-cid-lcdefpme>🚀</div>`}</div><h3 class="text-sm font-black text-slate-950 mb-2 group-hover:text-brand-600 transition-colors tracking-tight uppercase" data-astro-cid-lcdefpme>${cat.title}</h3><p class="text-slate-700 text-[10px] leading-tight font-medium mb-4" data-astro-cid-lcdefpme>${cat.description}</p><a href="/mobile-business-communication" class="text-[10px] text-brand-700 font-bold uppercase tracking-widest mt-auto p-2 touch-target-expand" data-astro-cid-lcdefpme>Capabilities →</a></div>`)}</div></div></section><!-- Our Evolution Process --><section class="py-32 bg-slate-50 relative overflow-hidden" data-astro-cid-lcdefpme><div class="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,rgba(0,0,0,0.03)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.03)_50%,rgba(0,0,0,0.03)_75%,transparent_75%,transparent)] bg-[length:40px_40px]" data-astro-cid-lcdefpme></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-lcdefpme><div class="text-center mb-20" data-astro-cid-lcdefpme><span class="text-brand-600 font-bold uppercase tracking-widest text-xs" data-astro-cid-lcdefpme>Our Methodology</span><h2 class="text-4xl md:text-5xl font-display font-black text-slate-950 mt-4 tracking-tighter uppercase" data-astro-cid-lcdefpme>The Evolution Blueprint</h2><p class="text-slate-600 mt-6 max-w-2xl mx-auto text-lg font-medium leading-relaxed" data-astro-cid-lcdefpme>We've refined a high-velocity framework for digital transformation. From initial audit to global scale, we move with surgical precision.</p></div><div class="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto relative" data-astro-cid-lcdefpme><div class="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-slate-100 -z-10" data-astro-cid-lcdefpme></div>${[
		{
			step: "01",
			title: "Audit & Discover",
			desc: "We deep-dive into your tech stack to find the friction points costing you ROI."
		},
		{
			step: "02",
			title: "Engineer & Integrate",
			desc: "Our devs build the custom bridges and AI workflows tailored to your data."
		},
		{
			step: "03",
			title: "Optimize & Scale",
			desc: "We go live, monitor high-throughput performance, and ramp up delivery."
		},
		{
			step: "04",
			title: "Dominate & Repeat",
			desc: "With a solid foundation, we iterate on new features to keep you #1 in market."
		}
	].map((item, i) => renderTemplate`<div${addAttribute(i, "key")} class="relative group" data-astro-cid-lcdefpme><div class="w-20 h-20 bg-white border-2 border-slate-200 rounded-[2rem] flex items-center justify-center mb-8 group-hover:border-brand-600 group-hover:bg-brand-50 transition-all duration-500 shadow-sm group-hover:shadow-brand-500/20" data-astro-cid-lcdefpme><span class="text-2xl font-black text-slate-500 group-hover:text-brand-600 transition-colors" data-astro-cid-lcdefpme>${item.step}</span></div><h3 class="text-xl font-bold text-slate-950 mb-4 group-hover:text-brand-600 transition-colors" data-astro-cid-lcdefpme>${item.title}</h3><p class="text-slate-600 text-sm leading-relaxed font-medium" data-astro-cid-lcdefpme>${item.desc}</p></div>`)}</div></div></section><!-- Home Page FAQ --><section class="below-fold section-container bg-white" data-astro-cid-lcdefpme><div class="max-w-4xl mx-auto" data-astro-cid-lcdefpme><div class="text-center mb-16" data-astro-cid-lcdefpme><span class="text-brand-600 font-bold uppercase tracking-widest text-xs" data-astro-cid-lcdefpme>Help Center</span><h2 class="text-4xl font-black text-slate-950 mt-4 tracking-tighter" data-astro-cid-lcdefpme>Frequently Discussed</h2></div><div class="space-y-4" data-astro-cid-lcdefpme><!-- Render Accordions statically but hydrate them on Client (or replace with native details tags) -->${homeFaqs.map((faq) => renderTemplate`${renderComponent($$result, "FaqAccordion", FaqAccordion, {
		"client:visible": true,
		"question": faq.question,
		"answer": faq.answer,
		"data-astro-cid-lcdefpme": true,
		"client:component-hydration": "visible",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/FaqAccordion.tsx",
		"client:component-export": "FaqAccordion"
	})}`)}</div></div></section><!-- Trusted By Enterprise Leaders --><section class="below-fold-lg py-24 bg-slate-950 overflow-hidden" data-astro-cid-lcdefpme><div class="container mx-auto px-4 text-center" data-astro-cid-lcdefpme><span class="text-brand-300 font-bold uppercase tracking-widest text-xs" data-astro-cid-lcdefpme>Trusted Excellence</span><h2 class="text-4xl font-black text-white mt-4 tracking-tighter mb-6" data-astro-cid-lcdefpme>Built for the Enterprise</h2><p class="text-slate-200 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10" data-astro-cid-lcdefpme>Our unified digital ecosystems and messaging infrastructure power reliable, high-ROI communication workflows across finance, healthcare, and retail sectors worldwide.</p><a href="/case-studies" class="inline-flex items-center text-sm font-black uppercase tracking-widest text-brand-300 hover:text-white transition-colors" data-astro-cid-lcdefpme>View Success Stories <span class="ml-3" data-astro-cid-lcdefpme>→</span></a></div></section><!-- Latest Blog Posts -->${recentPosts.length > 0 && renderTemplate`<section class="section-container bg-slate-50" data-astro-cid-lcdefpme><div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><span class="text-brand-600 font-bold uppercase tracking-widest text-xs" data-astro-cid-lcdefpme>Industry Insights</span><h2 class="text-4xl font-black text-slate-950 mt-4 tracking-tighter" data-astro-cid-lcdefpme>Latest from WebWorldMaker</h2></div><a href="/resources/blog" class="text-brand-600 font-black uppercase text-xs tracking-widest hover:underline" data-astro-cid-lcdefpme>View Intelligence Hub →</a></div><div class="grid md:grid-cols-3 gap-10" data-astro-cid-lcdefpme>${recentPosts.map((post) => renderTemplate`<a${addAttribute(post.id, "key")}${addAttribute(`/resources/blog/${post.id}`, "href")} class="glass-card overflow-hidden group" data-astro-cid-lcdefpme><div class="h-56 overflow-hidden relative" data-astro-cid-lcdefpme><img${addAttribute(post.imageUrl || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", "src")}${addAttribute(post.title, "alt")} loading="lazy" decoding="async"${addAttribute(400, "width")}${addAttribute(224, "height")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-astro-cid-lcdefpme><div class="absolute top-4 left-4 bg-brand-600 text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg" data-astro-cid-lcdefpme>${post.category}</div></div><div class="p-8" data-astro-cid-lcdefpme><h3 class="font-black text-xl mb-4 line-clamp-2 text-slate-50 group-hover:text-brand-400 transition-colors tracking-tight" data-astro-cid-lcdefpme>${post.title}</h3><p class="text-sm text-slate-300 line-clamp-3 mb-6 leading-relaxed font-medium" data-astro-cid-lcdefpme>${post.excerpt}</p><div class="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-300 group-hover:text-brand-400 transition-colors" data-astro-cid-lcdefpme>Read Report <span class="ml-2 group-hover:translate-x-1 transition-transform" data-astro-cid-lcdefpme>→</span></div></div></a>`)}</div></section>`}<!-- CTA Section --><section class="py-20 bg-slate-950 text-center relative overflow-hidden" data-astro-cid-lcdefpme><div class="absolute top-0 left-0 w-full h-full bg-brand-600/10 blur-[120px] rounded-full scale-150" data-astro-cid-lcdefpme></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-lcdefpme><h2 class="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter max-w-4xl mx-auto leading-tight uppercase" data-astro-cid-lcdefpme>Apply for an Exclusive Engineering Partnership</h2><p class="text-slate-200 mb-6 max-w-3xl mx-auto text-base font-bold leading-relaxed" data-astro-cid-lcdefpme>We partner with forward-thinking businesses ready to reclaim human intelligence and scale autonomously. We enforce a strict suitability vetting process and do not take on one-off scripting or basic setups.</p><div class="flex flex-col sm:flex-row justify-center gap-4" data-astro-cid-lcdefpme><a href="/company/contact?engagement=apply" class="bg-brand-600 text-slate-950 font-black py-5 px-12 rounded-2xl hover:bg-brand-500 transition-all shadow-2xl shadow-brand-600/20 transform hover:-translate-y-1 uppercase tracking-tighter text-sm flex items-center justify-center min-h-[56px]" data-astro-cid-lcdefpme>Apply for Ecosystem Suitability</a><a href="/case-studies" class="bg-white/5 backdrop-blur-md border border-white/10 text-white font-black py-5 px-12 rounded-2xl hover:bg-white/10 transition-all uppercase tracking-tighter text-sm flex items-center justify-center min-h-[56px]" data-astro-cid-lcdefpme>Review Manifestos & Case Studies</a></div></div></section><!-- Social Links Grid --><div class="container mx-auto px-4 py-16" data-astro-cid-lcdefpme><div class="flex flex-wrap justify-center items-center gap-6" data-astro-cid-lcdefpme>${[
		{
			name: "LinkedIn",
			icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
			color: "hover:text-blue-600 hover:border-blue-600",
			url: "https://linkedin.com/company/webworldmaker"
		},
		{
			name: "Twitter",
			icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
			color: "hover:text-black hover:border-black",
			url: "https://twitter.com/webworldmaker"
		},
		{
			name: "Facebook",
			icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
			color: "hover:text-blue-700 hover:border-blue-700",
			url: "https://facebook.com/webworldmaker"
		},
		{
			name: "Instagram",
			icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
			color: "hover:text-pink-600 hover:border-pink-600",
			url: "https://instagram.com/webworldmaker"
		},
		{
			name: "YouTube",
			icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
			color: "hover:text-red-600 hover:border-red-600",
			url: "https://youtube.com/@webworldmaker"
		},
		{
			name: "TikTok",
			icon: "M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.81-.6-4.03-1.37-.51-.33-1-.72-1.42-1.17-.15 1.71-.17 3.42-.3 5.12-.19 2.53-.99 5.01-2.73 6.94-1.74 1.93-4.22 3.18-6.84 3.46-2.62.28-5.3-.39-7.44-2-2.14-1.61-3.61-4-4-6.66-.41-2.66.24-5.41 1.83-7.55C3.2 4.7 5.75 3.16 8.53 3c.12 2.27.18 4.54.2 6.81-1.11-.12-2.28.18-3.18.91-.9.73-1.4 1.84-1.34 3 .06 1.16.7 2.23 1.66 2.87.96.64 2.19.78 3.32.4 1.13-.38 2.05-1.25 2.51-2.33.46-1.08.45-2.27.45-3.41V.02z",
			color: "hover:text-cyan-500 hover:border-cyan-500",
			url: "https://tiktok.com/@webworldmaker"
		}
	].map((social) => renderTemplate`<a${addAttribute(social.name, "key")}${addAttribute(social.url, "href")} rel="noopener noreferrer"${addAttribute(`w-20 h-20 bg-white border-2 border-slate-100 rounded-3xl flex items-center justify-center transition-all duration-300 group ${social.color} hover:shadow-2xl hover:-translate-y-2`, "class")}${addAttribute(`Follow us on ${social.name}`, "aria-label")} data-astro-cid-lcdefpme><svg class="w-10 h-10 fill-current text-slate-300 group-hover:text-current transition-colors" viewBox="0 0 24 24" data-astro-cid-lcdefpme><path${addAttribute(social.icon, "d")} data-astro-cid-lcdefpme></path></svg></a>`)}</div></div></div>` })}`;
}, "/Users/apple/Downloads/webworldmaker/src/pages/index.astro", void 0);
var $$file = "/Users/apple/Downloads/webworldmaker/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };

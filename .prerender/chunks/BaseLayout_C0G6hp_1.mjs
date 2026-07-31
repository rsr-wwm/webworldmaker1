import { J as InvalidComponentArgs, R as AstroError, S as unescapeHTML, _ as createRenderInstruction, g as addAttribute, h as renderHead, i as Fragment$2, r as renderComponent, s as renderSlot, u as renderTemplate, w as createAstro } from "./server_DcTmh7p-.mjs";
import { useCallback, useEffect, useId, useMemo, useRef, useState, useTransition } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { BookOpen, FileText, Globe, Rocket, Terminal } from "lucide-react";
//#region node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
//#endregion
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region database-client-seed.ts
var GLOSSARY = [
	{
		"term": "API",
		"definition": "Application Programming Interface. A bridge that allows two software programs to communicate with each other.",
		"category": "Development",
		"sameAs": "https://www.wikidata.org/wiki/Q165194"
	},
	{
		"term": "A2P 10DLC",
		"definition": "Application-to-Person 10 Digit Long Code. A system in the US allowing businesses to send SMS via standard phone numbers.",
		"category": "Messaging"
	},
	{
		"term": "Chatbot",
		"definition": "Software that simulates human conversation through voice commands or text chats.",
		"category": "AI",
		"sameAs": "https://www.wikidata.org/wiki/Q2634484"
	},
	{
		"term": "Cloud Computing",
		"definition": "Delivery of computing services—servers, storage, databases, networking—over the Internet.",
		"category": "Infrastructure",
		"sameAs": "https://www.wikidata.org/wiki/Q483639"
	},
	{
		"term": "CRM",
		"definition": "Customer Relationship Management. Technology for managing all your company's relationships and interactions with customers.",
		"category": "Business",
		"sameAs": "https://www.wikidata.org/wiki/Q191357"
	},
	{
		"term": "Generative AI",
		"definition": "A type of artificial intelligence capable of generating text, images, or other media in response to prompts.",
		"category": "AI",
		"sameAs": "https://www.wikidata.org/wiki/Q117246174"
	},
	{
		"term": "LLM",
		"definition": "Large Language Model. A deep learning algorithm that can recognize, summarize, translate, predict, and generate text.",
		"category": "AI",
		"sameAs": "https://www.wikidata.org/wiki/Q115309130"
	},
	{
		"term": "Omnichannel",
		"definition": "A cross-channel content strategy that improves the user experience and drives better relationships across points of contact.",
		"category": "Marketing",
		"sameAs": "https://www.wikidata.org/wiki/Q17088195"
	},
	{
		"term": "OTP",
		"definition": "One-Time Password. A password that is valid for only one login session or transaction.",
		"category": "Security",
		"sameAs": "https://www.wikidata.org/wiki/Q1138243"
	},
	{
		"term": "RCS",
		"definition": "Rich Communication Services. A communication protocol between mobile telephone carriers and between phone and carrier, aiming at replacing SMS messages.",
		"category": "Messaging",
		"sameAs": "https://www.wikidata.org/wiki/Q2151745"
	},
	{
		"term": "SaaS",
		"definition": "Software as a Service. A software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted.",
		"category": "Business",
		"sameAs": "https://www.wikidata.org/wiki/Q178235"
	},
	{
		"term": "SEO & AI",
		"definition": "Search Engine Optimization and Artificial Intelligence. The process of improving the quality and quantity of website traffic and authority through data-driven AI systems and search algorithms.",
		"category": "Marketing",
		"sameAs": "https://www.wikidata.org/wiki/Q180718"
	},
	{
		"term": "SMPP",
		"definition": "Short Message Peer-to-Peer. An open, industry standard protocol used to provide a flexible data communication interface for the transfer of short message data.",
		"category": "Messaging",
		"sameAs": "https://www.wikidata.org/wiki/Q1325785"
	},
	{
		"term": "Webhook",
		"definition": "A method of augmenting or altering the behavior of a web page or web application with custom callbacks.",
		"category": "Development",
		"sameAs": "https://www.wikidata.org/wiki/Q2554440"
	},
	{
		"term": "Zero Trust",
		"definition": "A strategic initiative that helps prevent successful data breaches by eliminating the concept of trust from an organization's network architecture.",
		"category": "Security",
		"sameAs": "https://www.wikidata.org/wiki/Q85816934"
	},
	{
		"term": "VoIP",
		"definition": "Voice over Internet Protocol. A technology that allows you to make voice calls using a broadband Internet connection instead of a regular (or analog) phone line.",
		"category": "Voice",
		"sameAs": "https://www.wikidata.org/wiki/Q133246"
	},
	{
		"term": "Latency",
		"definition": "The delay before a transfer of data begins following an instruction for its transfer.",
		"category": "Infrastructure",
		"sameAs": "https://www.wikidata.org/wiki/Q1140306"
	},
	{
		"term": "SDK",
		"definition": "Software Development Kit. A collection of software development tools in one installable package.",
		"category": "Development",
		"sameAs": "https://www.wikidata.org/wiki/Q233261"
	},
	{
		"term": "Uptime",
		"definition": "The time during which a machine (such as a computer) is in operation.",
		"category": "Infrastructure",
		"sameAs": "https://www.wikidata.org/wiki/Q2748197"
	},
	{
		"term": "Lead Generation",
		"definition": "The initiation of consumer interest or inquiry into products or services of a business.",
		"category": "Marketing",
		"sameAs": "https://www.wikidata.org/wiki/Q1325492"
	},
	{
		"term": "CPaaS",
		"definition": "Communications Platform as a Service. A cloud-based platform that enables developers to add real-time communications features (voice, video, messaging) to their own applications without building backend infrastructure.",
		"category": "Messaging",
		"sameAs": "https://www.wikidata.org/wiki/Q38780709"
	},
	{
		"term": "SOC2",
		"definition": "Service Organization Control 2. A cybersecurity compliance framework developed by the AICPA to ensure service providers securely manage data to protect the privacy and interests of their clients.",
		"category": "Security",
		"sameAs": "https://www.wikidata.org/wiki/Q94998059"
	},
	{
		"term": "DLT",
		"definition": "Distributed Ledger Technology. In India, the blockchain-based registration system mandated by TRAI on which every business must register its entity, headers (sender IDs), and content templates before sending commercial SMS.",
		"category": "Compliance"
	},
	{
		"term": "Sender ID",
		"definition": "The alphanumeric or numeric identifier that appears as the 'from' field of a business SMS. In India a sender ID (also called a header) is a 6-character alphabetic code approved on the DLT platform and linked to a registered principal entity.",
		"category": "Messaging"
	},
	{
		"term": "DLR",
		"definition": "Delivery Receipt. The status confirmation returned by a mobile operator indicating whether a submitted SMS was delivered, failed, or is pending, enabling real-time delivery tracking and analytics.",
		"category": "Messaging"
	},
	{
		"term": "SMSC",
		"definition": "Short Message Service Centre. The network element in a mobile carrier's infrastructure that stores, routes, and forwards SMS messages between senders and recipients, handling retries when a handset is unreachable.",
		"category": "Messaging"
	},
	{
		"term": "Short Code",
		"definition": "A 5 to 6 digit number used to send and receive SMS at high volume, typically for OTPs, alerts, and marketing. Short codes are easier to remember than long numbers and support high throughput.",
		"category": "Messaging"
	},
	{
		"term": "Long Code",
		"definition": "A standard 10-digit virtual mobile number used for two-way business SMS and voice. Long codes support lower throughput than short codes but enable personal, conversational interactions.",
		"category": "Messaging"
	},
	{
		"term": "TPS",
		"definition": "Transactions Per Second. The rate at which a messaging platform or SMPP bind can submit messages to a carrier, a key throughput metric for high-volume campaigns and time-critical OTP delivery.",
		"category": "Messaging"
	},
	{
		"term": "DND",
		"definition": "Do Not Disturb. A subscriber preference registry (managed in India via the NCPR under TRAI) that blocks promotional communications to numbers that have opted out, while still permitting transactional and service messages.",
		"category": "Compliance"
	},
	{
		"term": "Grey Route",
		"definition": "An unofficial or non-compliant SMS delivery path that exploits pricing loopholes between operators. Grey routes are cheaper but unreliable, often filtered or blocked, and carry compliance and delivery-failure risk for businesses.",
		"category": "Messaging"
	},
	{
		"term": "SMS Pumping",
		"definition": "Also called Artificially Inflated Traffic (AIT). A fraud in which bad actors trigger large volumes of OTP or verification SMS to numbers they control, inflating a victim business's messaging bill. Rate limiting and geo-controls are common defenses.",
		"category": "Security"
	},
	{
		"term": "Principal Entity",
		"definition": "Under India's DLT framework, the registered business (the brand) that owns the sender headers and content templates used for commercial messaging, distinct from the telemarketer or aggregator that transmits on its behalf.",
		"category": "Compliance"
	},
	{
		"term": "Content Template",
		"definition": "A pre-approved message format registered on the DLT platform with fixed text and variable fields. Commercial SMS in India must match a registered template, preventing unapproved or spoofed content.",
		"category": "Compliance"
	},
	{
		"term": "Concatenated SMS",
		"definition": "A message longer than a single 160-character (or 70-character Unicode) segment, split across multiple SMS parts and reassembled on the recipient's handset to appear as one continuous message. Each segment is billed individually.",
		"category": "Messaging"
	},
	{
		"term": "Unicode SMS",
		"definition": "An SMS encoded with the UCS-2 character set to support non-Latin scripts and emoji, such as Hindi or other Indic languages. Unicode messages carry a 70-character-per-segment limit versus 160 for GSM-7 text.",
		"category": "Messaging"
	},
	{
		"term": "Flash SMS",
		"definition": "A class-0 SMS that displays immediately on the recipient's screen without being saved to the inbox by default. It is used for urgent, high-visibility alerts such as security notifications.",
		"category": "Messaging"
	},
	{
		"term": "TRAI",
		"definition": "Telecom Regulatory Authority of India. The statutory body that regulates telecommunications, including the DLT commercial-messaging framework, DND preferences, and operator conduct in India.",
		"category": "Compliance"
	},
	{
		"term": "RBM",
		"definition": "RCS Business Messaging. The business-facing layer of RCS that lets verified brands send rich, interactive, app-like messages, complete with logos, carousels, and suggested-action buttons, inside the native messaging inbox.",
		"category": "Messaging"
	},
	{
		"term": "Verified Sender",
		"definition": "A brand whose identity has been authenticated by a carrier or platform, allowing it to display a verified logo, business name, and trust indicator on channels like RCS and WhatsApp, reducing spoofing and increasing engagement.",
		"category": "Messaging"
	},
	{
		"term": "WhatsApp Business API",
		"definition": "The programmatic interface that lets medium and large businesses send notifications, run customer support, and deploy chatbots on WhatsApp at scale, billed on a conversation basis and accessed through an official Business Solution Provider.",
		"category": "Messaging"
	},
	{
		"term": "Conversation Category",
		"definition": "WhatsApp's billing classification for business messaging: marketing, utility, authentication, and service. Each category is priced differently and governs what kind of content a business may send within a conversation.",
		"category": "Messaging"
	},
	{
		"term": "Session Window",
		"definition": "The 24-hour period on WhatsApp that opens when a user messages a business, during which the business can reply with free-form (non-template) messages. Outside this window, only pre-approved template messages are allowed.",
		"category": "Messaging"
	},
	{
		"term": "Message Template",
		"definition": "A pre-approved WhatsApp message format (formerly HSM) required to initiate conversations or message users outside the 24-hour session window. Templates are reviewed by Meta to prevent spam and abuse.",
		"category": "Messaging"
	},
	{
		"term": "Green Tick",
		"definition": "The green verified badge (Meta Verified) shown next to a WhatsApp business name, confirming that Meta has authenticated the brand as a notable, genuine business. It increases recipient trust and reply rates.",
		"category": "Messaging"
	},
	{
		"term": "BSP",
		"definition": "Business Solution Provider. An official Meta partner that provides businesses access to the WhatsApp Business API, along with onboarding, template management, messaging infrastructure, and support.",
		"category": "Messaging"
	},
	{
		"term": "Opt-in",
		"definition": "The explicit, recorded consent a user gives before a business may send them messages. Opt-in is a regulatory and platform requirement across SMS, WhatsApp, RCS, and email, and is central to deliverability and trust.",
		"category": "Compliance"
	},
	{
		"term": "IVR",
		"definition": "Interactive Voice Response. An automated telephony system that interacts with callers through voice prompts and keypad (DTMF) input, routing calls or delivering information without a live agent.",
		"category": "Voice"
	},
	{
		"term": "SIP Trunking",
		"definition": "Session Initiation Protocol trunking. A method of delivering voice calls over the internet, replacing traditional physical phone lines with virtual channels that scale on demand and reduce telephony cost.",
		"category": "Voice"
	},
	{
		"term": "DTMF",
		"definition": "Dual-Tone Multi-Frequency. The tone signals generated when a caller presses phone keypad keys, used by IVR systems to capture menu selections and route calls.",
		"category": "Voice"
	},
	{
		"term": "Click-to-Call",
		"definition": "A feature that lets a user initiate a phone call to a business with a single tap or click on a website, app, or ad, often routed through cloud voice infrastructure for tracking and analytics.",
		"category": "Voice"
	},
	{
		"term": "Missed Call Service",
		"definition": "A voice solution, popular in India, where a user gives a missed call to a published number to trigger an action such as a callback, verification, or opt-in, offering a zero-cost interaction for the caller.",
		"category": "Voice"
	},
	{
		"term": "TTS",
		"definition": "Text-to-Speech. Technology that converts written text into natural-sounding spoken audio, used in IVR, voice bots, and accessibility features to deliver dynamic voice messages.",
		"category": "Voice"
	},
	{
		"term": "ASR",
		"definition": "Automatic Speech Recognition. Technology that transcribes spoken language into text, enabling voice bots and IVR systems to understand and act on what callers say rather than only keypad input.",
		"category": "Voice"
	},
	{
		"term": "SPF",
		"definition": "Sender Policy Framework. An email authentication standard that lets a domain owner specify which mail servers are permitted to send email on the domain's behalf, helping receivers detect spoofing.",
		"category": "Security"
	},
	{
		"term": "DKIM",
		"definition": "DomainKeys Identified Mail. An email authentication method that attaches a cryptographic signature to messages so receiving servers can verify the message was genuinely sent from the claimed domain and not altered in transit.",
		"category": "Security"
	},
	{
		"term": "DMARC",
		"definition": "Domain-based Message Authentication, Reporting and Conformance. An email policy layer built on SPF and DKIM that tells receivers how to handle messages that fail authentication and provides reporting on abuse.",
		"category": "Security"
	},
	{
		"term": "BIMI",
		"definition": "Brand Indicators for Message Identification. An email standard that displays a brand's verified logo next to authenticated messages in the inbox, improving recognition and trust for senders with strong DMARC enforcement.",
		"category": "Marketing"
	},
	{
		"term": "Bounce Rate",
		"definition": "The percentage of sent emails that could not be delivered. Hard bounces reflect invalid addresses while soft bounces are temporary failures; high bounce rates damage sender reputation and deliverability.",
		"category": "Marketing"
	},
	{
		"term": "RAG",
		"definition": "Retrieval-Augmented Generation. An AI technique that retrieves relevant documents from a knowledge base and supplies them to a language model at query time, grounding responses in factual, up-to-date, source-attributable content.",
		"category": "AI"
	},
	{
		"term": "AI Agent",
		"definition": "An AI system that can autonomously plan and take multi-step actions toward a goal, using tools, APIs, and memory rather than only answering a single prompt.",
		"category": "AI"
	},
	{
		"term": "Agentic AI",
		"definition": "AI designed to act with autonomy, breaking down goals into steps, calling tools, and adapting based on results, as opposed to purely reactive question-and-answer models.",
		"category": "AI"
	},
	{
		"term": "MCP",
		"definition": "Model Context Protocol. An open standard that lets AI assistants connect to external tools, data sources, and services in a consistent way, enabling agents to call functions such as sending an SMS or querying a database as native tools.",
		"category": "AI"
	},
	{
		"term": "Prompt Injection",
		"definition": "A security attack in which malicious instructions are hidden inside content an AI model processes, attempting to override its intended behavior. It is a leading risk for AI agents that read untrusted web or document data.",
		"category": "Security"
	},
	{
		"term": "Hallucination",
		"definition": "When an AI model generates confident but false or unsupported information. Grounding techniques such as RAG and source citation are used to reduce hallucination in production systems.",
		"category": "AI"
	},
	{
		"term": "Embedding",
		"definition": "A numerical vector representation of text, images, or other data that captures semantic meaning, enabling similarity search, clustering, and retrieval, and forming the backbone of RAG and semantic search.",
		"category": "AI"
	},
	{
		"term": "Fine-tuning",
		"definition": "The process of further training a pre-trained AI model on a specific dataset so it adapts to a particular domain, tone, or task, improving accuracy for specialized use cases.",
		"category": "AI"
	},
	{
		"term": "Guardrails",
		"definition": "Rules, filters, and controls placed around an AI system to keep its outputs safe, accurate, on-policy, and within scope, covering content moderation, factual grounding, and refusal of disallowed requests.",
		"category": "AI"
	},
	{
		"term": "Human-in-the-Loop",
		"definition": "A design in which humans review, approve, or correct AI outputs at key decision points, combining automation efficiency with human judgment and accountability.",
		"category": "AI"
	},
	{
		"term": "NLP",
		"definition": "Natural Language Processing. The field of AI concerned with enabling computers to understand, interpret, and generate human language, underpinning chatbots, translation, sentiment analysis, and voice assistants.",
		"category": "AI"
	},
	{
		"term": "GEO",
		"definition": "Generative Engine Optimization. The practice of optimizing content to be cited and quoted by AI answer engines such as ChatGPT, Perplexity, and Google's AI Overviews, focused on being the source rather than only ranking.",
		"category": "Marketing"
	},
	{
		"term": "AEO",
		"definition": "Answer Engine Optimization. Structuring content so it directly and concisely answers user questions, making it easy for search and AI systems to extract, feature, and cite as the answer.",
		"category": "Marketing"
	},
	{
		"term": "llms.txt",
		"definition": "A proposed plain-text standard file placed at a website's root that provides AI systems a curated, machine-readable guide to the site's most important content, improving how large language models discover and cite it.",
		"category": "Development"
	},
	{
		"term": "Schema Markup",
		"definition": "Structured data added to web pages using the Schema.org vocabulary (often as JSON-LD) that helps search engines and AI systems understand page content, enabling rich results and better retrieval.",
		"category": "Development"
	},
	{
		"term": "E-E-A-T",
		"definition": "Experience, Expertise, Authoritativeness, and Trustworthiness. Google's framework for assessing content quality, emphasizing credentialed authors, first-hand experience, and verifiable trust signals.",
		"category": "Marketing"
	},
	{
		"term": "Core Web Vitals",
		"definition": "A set of Google metrics measuring real-world page experience: Largest Contentful Paint (loading), Interaction to Next Paint (responsiveness), and Cumulative Layout Shift (visual stability). They influence search ranking.",
		"category": "Development"
	},
	{
		"term": "Canonical URL",
		"definition": "The preferred version of a web page declared via a canonical tag, telling search engines which URL to index when duplicate or similar content exists across multiple addresses.",
		"category": "Development"
	},
	{
		"term": "Hreflang",
		"definition": "An HTML attribute that tells search engines the language and regional targeting of a page, ensuring users are served the correct language or country version in search results.",
		"category": "Development"
	},
	{
		"term": "Idempotency",
		"definition": "A property of an API operation where making the same request multiple times produces the same result as making it once. It prevents duplicate charges or duplicate messages when a client safely retries a request.",
		"category": "Development"
	},
	{
		"term": "Multi-tenancy",
		"definition": "A software architecture in which a single application instance serves multiple isolated customers (tenants), each with private data and configuration, forming the foundation of scalable SaaS and white-label platforms.",
		"category": "Infrastructure"
	},
	{
		"term": "White-label",
		"definition": "A product or platform built by one company and rebranded for resale by another under its own name and branding, letting resellers offer services such as messaging or dashboards without building the underlying technology.",
		"category": "Business"
	},
	{
		"term": "DPDP Act",
		"definition": "India's Digital Personal Data Protection Act, 2023. The national data-protection law governing how organizations collect, process, store, and safeguard the personal data of individuals in India, including consent and breach obligations.",
		"category": "Compliance"
	},
	{
		"term": "Data Residency",
		"definition": "The requirement that data be stored and processed within a specific geographic or legal jurisdiction, an important consideration for enterprise and regulated buyers evaluating cloud and communications providers.",
		"category": "Compliance"
	},
	{
		"term": "Rate Limiting",
		"definition": "A control that caps how many requests a client can make to an API within a time window, protecting infrastructure from overload and abuse while ensuring fair usage across customers.",
		"category": "Development"
	}
];
var SERVICE_CATEGORIES = [
	{
		"id": "mobile-business-communication",
		"title": "Mobile Communication & Customer Engagement",
		"description": "Direct SMS, RCS, WhatsApp, and telephony gateways built on Tier-1 operator connections.",
		"items": [
			{
				"id": "sms",
				"title": "SMS Solutions",
				"navLabel": "SMS",
				"description": "Transactional, OTP, Promotional SMS, and high-speed API dispatches via direct operator binds."
			},
			{
				"id": "rcs",
				"title": "RCS Messaging Solutions",
				"navLabel": "RCS",
				"description": "Think of it as texting, but better."
			},
			{
				"id": "whatsapp",
				"title": "WhatsApp Business Solutions",
				"navLabel": "WhatsApp",
				"description": "Verified Meta Business API integration for transactional alerts, customer support, and sales automation."
			},
			{
				"id": "email",
				"title": "Email Marketing Solutions",
				"navLabel": "Email",
				"description": "High-volume transactional and marketing email."
			},
			{
				"id": "telegram",
				"title": "Telegram Marketing Solutions",
				"navLabel": "Telegram",
				"description": "Reach thousands on Telegram instantly."
			},
			{
				"id": "voice-ivr",
				"title": "Voice & IVR Solutions",
				"navLabel": "Voice & IVR",
				"description": "Outbound voice broadcasting (OBD), neural answering machine detection, and multi-level interactive voice menus."
			},
			{
				"id": "business-numbers",
				"title": "Business Number Solutions",
				"navLabel": "Numbers",
				"description": "Global 10DLC virtual numbers, premium short codes, and DLT/10DLC compliance configurations."
			}
		]
	},
	{
		"id": "business-management-solutions",
		"title": "Business Management Solutions",
		"description": "Custom-built SaaS platforms including CRM, ERP, LMS, and operations suites.",
		"items": [
			{
				"id": "crm",
				"title": "Enterprise CRM Solutions",
				"navLabel": "CRM",
				"description": "Custom-built, scalable customer relationship management systems aligned with your sales workflows."
			},
			{
				"id": "erp",
				"title": "Enterprise Resource Planning (ERP) Systems",
				"navLabel": "ERP",
				"description": "Custom ERP development integrating finance, inventory, supply chain, and operations."
			},
			{
				"id": "lms",
				"title": "Custom Learning Management Systems (LMS)",
				"navLabel": "LMS",
				"description": "Custom-built learning management platforms for enterprise training, customer education, and online academies."
			},
			{
				"id": "hrms",
				"title": "Enterprise HRMS Solutions",
				"navLabel": "HRMS",
				"description": "Custom Human Resource Management Systems covering payroll, attendance, onboarding, and performance."
			},
			{
				"id": "helpdesk",
				"title": "Custom Helpdesk & Ticketing Systems",
				"navLabel": "Helpdesk",
				"description": "Custom customer support and ticketing platforms to resolve inquiries faster across all channels."
			},
			{
				"id": "project-management",
				"title": "Custom Project & Task Management Platforms",
				"navLabel": "Projects",
				"description": "Custom internal platforms to track tasks, coordinate teams, and manage client deliverables."
			},
			{
				"id": "marketing-automation",
				"title": "Omnichannel Marketing Automation",
				"navLabel": "Automation",
				"description": "Automate lead nurturing, email newsletters, SMS reminders, and WhatsApp marketing campaigns."
			}
		]
	},
	{
		"id": "ai-solutions",
		"title": "AI Solutions",
		"description": "Autonomous AI agents, conversational chatbots, and enterprise strategy implementation.",
		"items": [
			{
				"id": "agents-automation",
				"title": "Autonomous AI Agents & Operational Automation",
				"navLabel": "Agents",
				"description": "Deploy autonomous AI agents that handle repetitive tasks, data entry, and system orchestration."
			},
			{
				"id": "chatbots",
				"title": "Enterprise AI Chatbots",
				"navLabel": "Chatbots",
				"description": "Custom conversational AI assistants for customer support, lead qualification, and internal queries."
			},
			{
				"id": "voice-agents",
				"title": "Autonomous AI Voice Agents",
				"navLabel": "Voice",
				"description": "Natural-sounding voice AI agents that handle inbound support calls and outbound lead qualifying."
			},
			{
				"id": "consulting-implementation",
				"title": "AI Strategy Consulting & Enterprise Implementation",
				"navLabel": "Consulting",
				"description": "Custom strategic consulting, tech-readiness audits, and custom model implementations for B2B brands."
			}
		]
	},
	{
		"id": "search-growth",
		"title": "Search Growth Solutions",
		"description": "Optimize organic visibility across traditional search engines and AI models.",
		"items": [
			{
				"id": "advanced-seo",
				"title": "Advanced Technical & Semantic SEO",
				"navLabel": "Advanced SEO",
				"description": "High-performance search engine optimization built on structured data, crawl audits, and semantic content relevance."
			},
			{
				"id": "geo-services",
				"title": "Generative Engine Optimization (GEO)",
				"navLabel": "GEO",
				"description": "Optimize your brand visibility across generative search engines like Perplexity, ChatGPT, and Gemini."
			},
			{
				"id": "aeo-services",
				"title": "Answer Engine Optimization (AEO)",
				"navLabel": "AEO",
				"description": "Optimize website architecture and copy to answer user questions directly on voice search and AI search systems."
			},
			{
				"id": "seo-services",
				"title": "SEO Services",
				"navLabel": "SEO",
				"description": "Exhaustive local, technical, and enterprise search growth strategies."
			}
		]
	},
	{
		"id": "digital-marketing",
		"title": "Digital Marketing",
		"description": "Paid campaigns, social automation, and landing page conversion optimization.",
		"items": [
			{
				"id": "lead-generation",
				"title": "B2B Lead Generation & Funnel Optimization",
				"navLabel": "Lead Generation",
				"description": "High-performance inbound lead acquisition engines using landing pages, paid ads, and CRM pipelines."
			},
			{
				"id": "conversion-rate-optimization",
				"title": "Conversion Rate Optimization (CRO)",
				"navLabel": "CRO Services",
				"description": "Boost your website conversion rate using A/B testing, user behavior heatmaps, and UX code optimization."
			},
			{
				"id": "ppc-google-ads",
				"title": "PPC & Google Ads",
				"navLabel": "PPC & Ads",
				"description": "High-ROI Google Search, Display, and Meta Ads managed by certified media buyers."
			},
			{
				"id": "social-media-marketing",
				"title": "Social Media Marketing",
				"navLabel": "Social Media",
				"description": "Multi-channel brand social setup, content calendars, and automated AI reply campaigns."
			},
			{
				"id": "content-marketing",
				"title": "Content Marketing",
				"navLabel": "Content",
				"description": "Pillar-and-cluster content strategy, professional copywriting, and B2B whitepapers."
			}
		]
	},
	{
		"id": "development-solutions",
		"title": "Development Solutions",
		"description": "Custom React web apps, headless e-commerce, mobile applications, and API integrations.",
		"items": [
			{
				"id": "ecommerce-development",
				"title": "Enterprise Ecommerce Development",
				"navLabel": "Ecommerce Dev",
				"description": "Custom Shopify, Magento, and Headless e-commerce development with ERP, CRM, and inventory sync."
			},
			{
				"id": "custom-software-development",
				"title": "Custom Software & Enterprise Web Applications",
				"navLabel": "Custom Software",
				"description": "Tailored software, database portals, and cloud-native applications built to solve unique business problems."
			},
			{
				"id": "website-development",
				"title": "Website Development",
				"navLabel": "Website Development",
				"description": "Fast, secure, custom React and Next.js applications optimized for Core Web Vitals."
			},
			{
				"id": "mobile-app-development",
				"title": "Mobile App Development",
				"navLabel": "Mobile App Dev",
				"description": "Native iOS Swift and cross-platform Flutter applications built for maximum device performance."
			}
		]
	},
	{
		"id": "data-analytics",
		"title": "Data & Analytics",
		"description": "Business intelligence dashboards, customer analytics databases, and predictive algorithms.",
		"items": [
			{
				"id": "marketing-analytics",
				"title": "Enterprise Marketing Analytics",
				"navLabel": "Marketing",
				"description": "Consolidate ad campaigns, website traffic, and sales metrics into a single unified analytics dashboard."
			},
			{
				"id": "customer-analytics",
				"title": "Customer Analytics & Retention Dashboards",
				"navLabel": "Customer",
				"description": "Track customer behavior, purchase habits, churn risk, and customer lifetime value in real time."
			},
			{
				"id": "predictive-analytics",
				"title": "Predictive Analytics & Forecasting Engines",
				"navLabel": "Predictive",
				"description": "Leverage AI and historical data to forecast sales, optimize inventory, and predict customer demand."
			},
			{
				"id": "business-intelligence-dashboards",
				"title": "Business Intelligence & Dashboards",
				"navLabel": "BI Dashboards",
				"description": "Interactive visual databases and live dashboards built on PowerBI, Tableau, or custom React."
			}
		]
	},
	{
		"id": "partners",
		"title": "Partner Solutions",
		"description": "White label options, reseller programs, and official partnerships.",
		"items": [
			{
				"id": "white-label",
				"title": "White Label Software Solutions",
				"navLabel": "White Label",
				"description": "Rebrand our enterprise SMS, RCS, and AI marketing tools as your own software and keep 100% of the profits."
			},
			{
				"id": "reseller",
				"title": "Enterprise Reseller Program",
				"navLabel": "Reseller Program",
				"description": "Sell WebWorldMaker solutions to your clients at a discount and keep the margin."
			},
			{
				"id": "partner-program",
				"title": "WebWorldMaker Partner Program",
				"navLabel": "Partner Program",
				"description": "Join our ecosystem as a technology integrator or referral partner and earn recurring commissions."
			}
		]
	}
];
var PRODUCTS = [
	{
		"id": "white-label-reseller",
		"title": "Run Your Own Agency",
		"navLabel": "White Label",
		"description": "Sell our SMS, Voice, and Marketing tools as your own and keep the profits."
	},
	{
		"id": "voicebot-studio",
		"title": "VoiceBot Studio",
		"navLabel": "VoiceBot",
		"description": "A simple way to create phone menus and AI voice helpers."
	},
	{
		"id": "secure-gate-2fa",
		"title": "SecureGate 2FA",
		"navLabel": "2FA",
		"description": "Fast, reliable login codes via SMS and WhatsApp."
	},
	{
		"id": "stockflow-pro",
		"title": "StockFlow Pro",
		"navLabel": "StockFlow",
		"description": "Predict what you need to buy and automate your restocking."
	},
	{
		"id": "crm-connector-hub",
		"title": "CRM Connector Hub",
		"navLabel": "CRM Hub",
		"description": "A simple way to sync systems like Salesforce and HubSpot in real-time."
	},
	{
		"id": "social-stream-auto",
		"title": "SocialStream Auto",
		"navLabel": "Social Auto",
		"description": "Create and schedule posts for LinkedIn, X, and Instagram using AI."
	},
	{
		"id": "securedocs-vault",
		"title": "SecureDocs Vault",
		"navLabel": "SecureDocs",
		"description": "Share sensitive files with investors and know exactly who opens them."
	},
	{
		"id": "meeting-ai-notetaker",
		"title": "MeetingAI Notetaker",
		"navLabel": "Meeting AI",
		"description": "An AI assistant that joins your Zoom and Teams calls to write summaries."
	}
];
var SOLUTIONS = [
	{
		"id": "customer-engagement-overhaul",
		"title": "Customer Engagement Overhaul",
		"navLabel": "Engagement",
		"description": "Swap silence for conversation on WhatsApp and SMS."
	},
	{
		"id": "digital-transformation-jumpstart",
		"title": "Getting Your Business into the Cloud",
		"navLabel": "Modernization",
		"description": "Move your old-school business onto modern cloud tech."
	},
	{
		"id": "ai-automation-workforce",
		"title": "AI That Actually Works for You",
		"navLabel": "AI Automation",
		"description": "Digital assistants that never sleep."
	},
	{
		"id": "omnichannel-marketing-suite",
		"title": "Marketing That Actually Connects",
		"navLabel": "Marketing",
		"description": "Keep your message the same, no matter where customers see it."
	},
	{
		"id": "remote-infrastructure-management",
		"title": "Watching Your Tech 24/7",
		"navLabel": "Infra Mgt",
		"description": "We keep your servers and remote teams running while you sleep."
	},
	{
		"id": "ecommerce-acceleration",
		"title": "Speeding Up Your Store",
		"navLabel": "Ecommerce",
		"description": "Make your shop faster and easier to buy from."
	},
	{
		"id": "legacy-modernization",
		"title": "Updating Your Old Systems",
		"navLabel": "Modernization",
		"description": "Rebuild your old software without losing a single file."
	},
	{
		"id": "cyber-defense-shield",
		"title": "Your Digital Bodyguard",
		"navLabel": "Cybersecurity",
		"description": "Keep your data locked down and your business safe."
	},
	{
		"id": "supply-chain-intel",
		"title": "Smarter Tracking for Your Stuff",
		"navLabel": "Logistics",
		"description": "Use sensors and AI to keep your logistics on track."
	},
	{
		"id": "fintech-compliance-vault",
		"title": "Easy Compliance for Finance",
		"navLabel": "FinTech",
		"description": "Bank-grade security rules that follow the law."
	},
	{
		"id": "digital-existence",
		"title": "Establish Online/Mobile Existence",
		"navLabel": "Presence",
		"description": "Build your business virtual infrastructure for total online visibility."
	},
	{
		"id": "business-expansion-suite",
		"title": "Business Expansion Marketing Solutions",
		"navLabel": "Expansion",
		"description": "Scale your reach with targeted multi-channel messaging and digital strategies."
	}
];
var PROBLEMS = [
	{
		"id": "low-customer-engagement",
		"title": "Nobody is Reading Your Emails",
		"description": "Your messages are landing in spam or just being ignored."
	},
	{
		"id": "lead-leakage",
		"title": "Losing Sales to Missed Calls",
		"description": "If you don't answer, they'll just call the next person."
	},
	{
		"id": "data-loss-downtime",
		"title": "The Constant Fear of Data Loss",
		"description": "What happens if your system crashes today?"
	},
	{
		"id": "cart-abandonment",
		"title": "People are Leaving Without Buying",
		"description": "70% of shoppers add items to their cart and then just... leave."
	},
	{
		"id": "operational-inefficiency",
		"title": "Way Too Much Manual Data Entry",
		"description": "Is your team wasting hours copy-pasting from Excel?"
	},
	{
		"id": "support-overload",
		"title": "Your Support Team is Drowning",
		"description": "Buried in \"Where is my order?\" tickets?"
	},
	{
		"id": "high-churn-rate",
		"title": "Your Customers are Disappearing",
		"description": "People buy once and then you never hear from them again."
	},
	{
		"id": "shadow-it-risks",
		"title": "Staff Using Random Apps for Work",
		"description": "Are your employees using their own accounts for company data?"
	},
	{
		"id": "otp-delivery-failures",
		"title": "Your OTPs Aren't Arriving in Time",
		"description": "Login and verification codes are delayed, dropped, or blocked by spam filters, costing you signups."
	},
	{
		"id": "dlt-compliance-headaches",
		"title": "Your SMS Campaigns Keep Getting Blocked",
		"description": "Messages are filtered or rejected because of India's DLT sender ID and template registration rules."
	},
	{
		"id": "whatsapp-template-rejections",
		"title": "Your WhatsApp Templates Keep Getting Rejected",
		"description": "Meta is rejecting your message templates, delaying campaigns and customer notifications."
	},
	{
		"id": "ai-chatbot-hallucination-risk",
		"title": "Your AI Chatbot Is Making Things Up",
		"description": "Your support bot confidently gives customers wrong answers about pricing, policies, or availability."
	},
	{
		"id": "sms-otp-fraud-sms-pumping",
		"title": "Your Messaging Bill Just Spiked for No Reason",
		"description": "Bad actors are triggering fake OTP requests to numbers they control, inflating your SMS costs."
	},
	{
		"id": "poor-website-performance",
		"title": "Your Website Is Too Slow to Convert",
		"description": "Pages take too long to load and visitors leave before they ever see your offer."
	},
	{
		"id": "invisible-to-ai-search",
		"title": "AI Assistants Never Mention Your Business",
		"description": "When customers ask ChatGPT or Perplexity for recommendations in your category, your competitors get cited and you don't."
	},
	{
		"id": "disconnected-marketing-channels",
		"title": "Your Marketing Channels Don't Talk to Each Other",
		"description": "Email, SMS, and WhatsApp run as separate silos, so customers get inconsistent or duplicate messages."
	},
	{
		"id": "cloud-cost-overrun",
		"title": "Your Cloud Bill Keeps Climbing With No Clear Reason",
		"description": "Infrastructure spend keeps rising faster than usage, and nobody can explain exactly why."
	},
	{
		"id": "no-mobile-presence",
		"title": "Your Customers Expect an App and You Don't Have One",
		"description": "Competitors offer a mobile app while you're mobile-web only, and customers notice the gap."
	},
	{
		"id": "manual-hr-processes",
		"title": "Your HR Team Is Buried in Spreadsheets",
		"description": "Onboarding, leave tracking, and payroll inputs are all manual, error-prone, and slow."
	},
	{
		"id": "erp-data-silos",
		"title": "Your Finance, Sales, and Inventory Systems Don't Match",
		"description": "Different departments run on different systems, so numbers never quite reconcile."
	},
	{
		"id": "no-customer-analytics",
		"title": "You Don't Know Why Customers Are Leaving",
		"description": "You can see the churn number, but not which behaviors or moments actually predict it."
	},
	{
		"id": "seo-traffic-plateau",
		"title": "Your Organic Traffic Has Stopped Growing",
		"description": "Rankings and traffic have plateaued despite continuing to publish content."
	},
	{
		"id": "inconsistent-brand-across-channels",
		"title": "Your Brand Looks Different Everywhere Customers Find You",
		"description": "Your website, social profiles, and directory listings all describe your business differently."
	},
	{
		"id": "no-partner-ecosystem",
		"title": "You're Leaving Revenue on the Table With No Partner Channel",
		"description": "Agencies and resellers who could sell on your behalf have no program to join."
	}
];
var INDUSTRIES = [
	{
		"id": "fintech",
		"title": "Finance & Banking",
		"navLabel": "FinTech",
		"description": "Banking-grade security for teams that move fast.",
		"icon": "💳"
	},
	{
		"id": "healthcare",
		"title": "Healthcare",
		"navLabel": "Healthcare",
		"description": "Better care, less paperwork. Keeping your patients connected.",
		"icon": "🏥"
	},
	{
		"id": "ecommerce",
		"title": "Stores & E-commerce",
		"navLabel": "Ecommerce",
		"description": "Turn shoppers into regulars. Sell more, automated or not.",
		"icon": "🛒"
	},
	{
		"id": "logistics",
		"title": "Logistics & Transport",
		"navLabel": "Logistics",
		"description": "Total visibility, from warehouse to doorstep.",
		"icon": "🚚"
	},
	{
		"id": "real-estate",
		"title": "Real Estate",
		"navLabel": "Real Estate",
		"description": "Don't let leads go cold. Smart scheduling for busy agents.",
		"icon": "🏘️"
	},
	{
		"id": "education",
		"title": "Education",
		"navLabel": "Education",
		"description": "Connecting campuses. Fast alerts and easier admin.",
		"icon": "🎓"
	},
	{
		"id": "retail",
		"title": "Retail & Consumer Goods",
		"navLabel": "Retail",
		"description": "Omnichannel communications and customer analytics for modern retail brands.",
		"icon": "🛍️"
	},
	{
		"id": "manufacturing",
		"title": "Manufacturing & Industry 4.0",
		"navLabel": "Manufacturing",
		"description": "Custom ERP, IoT telemetry, and supply chain automation for modern manufacturing operations.",
		"icon": "🏭"
	},
	{
		"id": "insurance",
		"title": "Insurance & InsurTech",
		"navLabel": "Insurance",
		"description": "Automated claims processing, policy management, and AI customer support for insurers.",
		"icon": "🛡️"
	},
	{
		"id": "travel",
		"title": "Travel & Hospitality",
		"navLabel": "Travel",
		"description": "Custom booking engines, automated flight/itinerary alerts, and AI travel concierge bots.",
		"icon": "✈️"
	},
	{
		"id": "government",
		"title": "Government & Public Sector",
		"navLabel": "Government",
		"description": "High-security database portals, public alert systems, and compliant document management platforms.",
		"icon": "🏛️"
	},
	{
		"id": "automotive",
		"title": "Automotive & Dealerships",
		"navLabel": "Automotive",
		"description": "Keep buyers, service customers, and fleets connected from test drive to trade-in.",
		"icon": "🚗"
	},
	{
		"id": "media-entertainment",
		"title": "Media & Entertainment",
		"navLabel": "Media",
		"description": "Reach audiences directly with release alerts, ticketing updates, and subscriber messaging.",
		"icon": "🎬"
	},
	{
		"id": "gaming",
		"title": "Gaming & Esports",
		"navLabel": "Gaming",
		"description": "Verify players, re-engage lapsed users, and notify communities at scale.",
		"icon": "🎮"
	},
	{
		"id": "hr-recruitment",
		"title": "HR & Recruitment",
		"navLabel": "HR & Staffing",
		"description": "Speed up candidate communication and reduce interview no-shows.",
		"icon": "🧑‍💼"
	},
	{
		"id": "d2c-brands",
		"title": "D2C & Consumer Brands",
		"navLabel": "D2C",
		"description": "Turn one-time buyers into repeat customers with lifecycle messaging.",
		"icon": "🛍️"
	},
	{
		"id": "restaurants-food-delivery",
		"title": "Restaurants & Food Delivery",
		"navLabel": "Food & Dining",
		"description": "Confirm orders, coordinate delivery, and bring diners back with timely messaging.",
		"icon": "🍽️"
	},
	{
		"id": "ngo-nonprofit",
		"title": "NGOs & Nonprofits",
		"navLabel": "NGOs",
		"description": "Coordinate volunteers, drive donations, and reach communities at scale.",
		"icon": "🤝"
	},
	{
		"id": "professional-services",
		"title": "Professional Services",
		"navLabel": "Professional Services",
		"description": "Automate client updates for law firms, consultancies, and accounting practices.",
		"icon": "💼"
	},
	{
		"id": "agritech",
		"title": "AgriTech & Farming",
		"navLabel": "AgriTech",
		"description": "Reach farmers and rural supply chains with SMS-first advisory and market updates.",
		"icon": "🌾"
	}
];
var BLOG_POSTS = [
	{
		"id": "future-of-rcs-messaging",
		"title": "The Future of RCS Messaging in Enterprise",
		"excerpt": "Why Rich Communication Services (RCS) is set to replace traditional SMS for business communication.",
		"category": "Messaging",
		"tags": []
	},
	{
		"id": "ai-transforming-customer-support",
		"title": "How AI is Transforming Customer Support",
		"excerpt": "Leveraging LLMs and chatbots to provide 24/7 support without losing the human touch.",
		"category": "Artificial Intelligence",
		"tags": []
	},
	{
		"id": "seo-strategies-2024",
		"title": "SEO Strategies for 2024 and Beyond",
		"excerpt": "Adapting your digital presence for Search Generative Experience (SGE) and voice search.",
		"category": "Digital Marketing",
		"tags": []
	},
	{
		"id": "api-first-development",
		"title": "Why Your Business Needs an API-First Strategy",
		"excerpt": "Decoupling your services to allow for rapid scaling and third-party integrations.",
		"category": "Web Development",
		"tags": []
	},
	{
		"id": "cybersecurity-essentials",
		"title": "Enterprise Cybersecurity: Zero Trust Architecture",
		"excerpt": "Protecting your digital assets in an era of increasing cyber threats.",
		"category": "Cybersecurity",
		"tags": []
	},
	{
		"id": "cloud-cost-optimization",
		"title": "Optimizing Cloud Infrastructure Costs",
		"excerpt": "How to scale your AWS or GCP infrastructure without breaking the bank.",
		"category": "Cloud Infrastructure",
		"tags": []
	},
	{
		"id": "low-code-revolution",
		"title": "The Low-Code Revolution: Building Apps in Days",
		"excerpt": "How citizen developers are changing the landscape of internal business tools.",
		"category": "Web Development",
		"tags": []
	},
	{
		"id": "telegram-marketing-tips",
		"title": "Mastering Telegram for Community Growth",
		"excerpt": "Strategies for engaging crypto and tech communities on Telegram.",
		"category": "Digital Marketing",
		"tags": []
	},
	{
		"id": "10dlc-compliance-guide",
		"title": "The Ultimate Guide to 10DLC Compliance",
		"excerpt": "Navigate the complex world of A2P 10DLC registration to ensure your SMS campaigns actually get delivered.",
		"category": "Compliance",
		"tags": []
	},
	{
		"id": "custom-mobile-apps",
		"title": "Why Your Business Needs a Custom Mobile App",
		"excerpt": "Beyond the website: How a dedicated mobile app drives loyalty and engagement.",
		"category": "App Development",
		"tags": []
	},
	{
		"id": "automating-hr-workflows",
		"title": "Automating HR Workflows with AI",
		"excerpt": "Reduce administrative burden and improve employee satisfaction with intelligent automation.",
		"category": "Business Automation",
		"tags": []
	},
	{
		"id": "enterprise-bulk-sms-guide-2025",
		"title": "The Ultimate Guide to Enterprise Bulk SMS: Tier-1 Routes, DLT Compliance & Pricing (2025)",
		"excerpt": "Explore how direct Tier-1 carrier routes, DLT registration, and robust gateway APIs ensure 99.9% delivery for critical business messaging.",
		"category": "Messaging",
		"tags": [
			"Bulk SMS",
			"DLT Compliance",
			"CPaaS"
		]
	},
	{
		"id": "rcs-messaging-ios18-evolution",
		"title": "RCS Messaging in 2025: Why Apple iOS 18 Just Changed Everything for Business",
		"excerpt": "Apple’s native support for RCS in iOS 18 has created a universal rich messaging standard. Discover how to leverage verified profiles and carousels.",
		"category": "Messaging",
		"tags": [
			"RCS",
			"iOS 18",
			"Mobile Marketing"
		]
	},
	{
		"id": "whatsapp-green-tick-guide",
		"title": "The Definitive Guide to Getting the WhatsApp Business API Green Tick in 2025",
		"excerpt": "A step-by-step checklist to verify your Meta Business account and secure the official Green Tick verification badge on WhatsApp.",
		"category": "Messaging",
		"tags": [
			"WhatsApp Business",
			"Verification",
			"Meta API"
		]
	},
	{
		"id": "what-is-mcp-ai-agents-comms",
		"title": "What Is MCP (Model Context Protocol)? How AI Agents Are Using Communications APIs",
		"excerpt": "Understand how the Model Context Protocol bridges the gap between Large Language Models and real-world messaging infrastructure.",
		"category": "Artificial Intelligence",
		"tags": [
			"MCP",
			"AI Agents",
			"APIs"
		]
	},
	{
		"id": "generative-engine-optimization-geo-2025",
		"title": "Generative Engine Optimization (GEO): How to Rank in ChatGPT, Perplexity & Gemini AI",
		"excerpt": "Traditional SEO is evolving into GEO. Learn how to optimize your business content to be cited by AI search engines and answer engines.",
		"category": "Digital Marketing",
		"tags": [
			"GEO",
			"SEO",
			"AI Search"
		]
	}
];
//#endregion
//#region src/utils/slugify.ts
var glossarySlug = (term) => term.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and").replace(/[^a-z0-9-]/g, "");
//#endregion
//#region src/services/searchService.ts
var textMatches = (text, q) => {
	if (!text) return false;
	const t = text.toLowerCase();
	if (t.includes(q)) return true;
	const words = q.split(/\s+/).filter((w) => w.length > 2);
	return words.length > 1 && words.every((w) => t.includes(w));
};
var searchContent = (query) => {
	if (!query || query.length < 2) return [];
	const q = query.toLowerCase().trim();
	const results = [];
	const seen = /* @__PURE__ */ new Set();
	const addResult = (r) => {
		const key = `${r.type}:${r.link}`;
		if (!seen.has(key)) {
			seen.add(key);
			results.push(r);
		}
	};
	SERVICE_CATEGORIES.forEach((cat) => {
		(cat.items || []).forEach((s) => {
			if (textMatches(s.title, q) || textMatches(s.description, q) || textMatches(s.id, q)) addResult({
				type: "Service",
				title: s.title,
				snippet: s.description,
				link: `/${cat.id}/${s.id}`
			});
		});
	});
	SOLUTIONS.forEach((s) => {
		if (textMatches(s.title, q) || textMatches(s.description, q)) addResult({
			type: "Solution",
			title: s.title,
			snippet: s.description,
			link: `/solution/${s.id}`
		});
	});
	PRODUCTS.forEach((p) => {
		if (textMatches(p.title, q) || textMatches(p.description, q)) addResult({
			type: "Product",
			title: p.title,
			snippet: p.description,
			link: `/product/${p.id}`
		});
	});
	BLOG_POSTS.forEach((b) => {
		if (textMatches(b.title, q) || textMatches(b.excerpt, q) || b.tags && b.tags.some((t) => t.toLowerCase().includes(q))) addResult({
			type: "Blog",
			title: b.title,
			snippet: b.excerpt,
			link: `/resources/blog/${b.id}`
		});
	});
	GLOSSARY.forEach((g) => {
		if (textMatches(g.term, q) || textMatches(g.definition, q)) addResult({
			type: "Glossary",
			title: g.term,
			snippet: g.definition,
			link: `/glossary/${glossarySlug(g.term)}`
		});
	});
	INDUSTRIES.forEach((i) => {
		if (textMatches(i.title, q) || textMatches(i.description, q)) addResult({
			type: "Industry",
			title: i.title,
			snippet: i.description,
			link: `/industry-solutions/${i.id}`
		});
	});
	PROBLEMS.forEach((p) => {
		if (textMatches(p.title, q) || textMatches(p.description, q)) addResult({
			type: "Problem",
			title: p.title,
			snippet: p.description,
			link: `/problem/${p.id}`
		});
	});
	return results;
};
var trackSearch = (query, resultCount) => {
	if (typeof window === "undefined") return;
	if (!query.trim()) return;
	try {
		const SEARCH_LOG_KEY = "wwm_search_log";
		const log = JSON.parse(localStorage.getItem(SEARCH_LOG_KEY) || "[]");
		log.unshift({
			q: query.trim(),
			n: resultCount,
			ts: Date.now()
		});
		localStorage.setItem(SEARCH_LOG_KEY, JSON.stringify(log.slice(0, 200)));
		if (typeof window.gtag === "function") window.gtag("event", "search", {
			search_term: query,
			results_count: resultCount
		});
	} catch {}
};
//#endregion
//#region src/components/GlobalSearch.tsx
var SUGGESTED_QUERIES = [
	{
		label: "Bulk SMS",
		icon: "📱"
	},
	{
		label: "WhatsApp Business",
		icon: "💬"
	},
	{
		label: "AI Chatbot",
		icon: "🤖"
	},
	{
		label: "SEO Services",
		icon: "📈"
	},
	{
		label: "Web Development",
		icon: "🌐"
	},
	{
		label: "White Label",
		icon: "🏷️"
	}
];
var TYPE_COLORS = {
	Service: "bg-blue-100 text-blue-700",
	Solution: "bg-purple-100 text-purple-700",
	Product: "bg-emerald-100 text-emerald-700",
	Blog: "bg-amber-100 text-amber-700",
	Glossary: "bg-slate-100 text-slate-600",
	Industry: "bg-rose-100 text-rose-700",
	Problem: "bg-orange-100 text-orange-700",
	Location: "bg-teal-100 text-teal-700",
	"Service Area": "bg-indigo-100 text-indigo-700",
	Page: "bg-slate-100 text-slate-700"
};
function determineType(url) {
	if (!url) return "Page";
	if (url.startsWith("/product/")) return "Product";
	if (url.startsWith("/solution/")) return "Solution";
	if (url.startsWith("/problem/")) return "Problem";
	if (url.startsWith("/industry-solutions/")) return "Industry";
	if (url.startsWith("/resources/blog/")) return "Blog";
	if (url.startsWith("/glossary/")) return "Glossary";
	if (url.startsWith("/locations/")) return "Location";
	const parts = url.split("/").filter(Boolean);
	if (parts.length === 4) return "Service Area";
	if (parts.length === 2) return "Service";
	return "Page";
}
var GlobalSearch = ({ isOpen, onClose }) => {
	const searchInputId = useId();
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const [isPending, startTransition] = useTransition();
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [recentSearches, setRecentSearches] = useState([]);
	const [pagefind, setPagefind] = useState(null);
	const inputRef = useRef(null);
	const resultsContainerRef = useRef(null);
	useEffect(() => {
		try {
			const stored = JSON.parse(localStorage.getItem("wwm_recent_searches") || "[]");
			setRecentSearches(stored.slice(0, 5));
		} catch {}
	}, []);
	useEffect(() => {
		async function loadPagefind() {
			if (typeof window === "undefined") return;
			try {
				if (!window.pagefind) {
					const pf = await import(
						/* @vite-ignore */
						"/pagefind/pagefind.js"
);
					await pf.init();
					window.pagefind = pf;
				}
				setPagefind(window.pagefind);
			} catch {
				console.warn("Pagefind not available. Falling back to local searchService.");
			}
		}
		loadPagefind();
	}, []);
	useEffect(() => {
		if (isOpen && inputRef.current) {
			setTimeout(() => inputRef.current?.focus(), 100);
			setSelectedIndex(-1);
		}
	}, [isOpen]);
	useEffect(() => {
		let isStale = false;
		async function performSearch() {
			if (query.length < 2) {
				setResults([]);
				return;
			}
			if (pagefind) {
				const searchData = await pagefind.search(query);
				if (isStale) return;
				const topResultsData = await Promise.all(searchData.results.slice(0, 8).map((r) => r.data()));
				if (isStale) return;
				const mappedResults = topResultsData.map((res) => ({
					type: determineType(res.url),
					title: res.meta?.title || res.url,
					snippet: res.excerpt,
					link: res.url
				}));
				setResults(mappedResults);
				setSelectedIndex(-1);
			} else startTransition(() => {
				if (isStale) return;
				const raw = searchContent(query);
				setResults(raw.slice(0, 8));
				setSelectedIndex(-1);
			});
		}
		performSearch();
		return () => {
			isStale = true;
		};
	}, [query, pagefind]);
	const handleQueryChange = (val) => {
		setQuery(val);
	};
	const saveRecentSearch = useCallback((q) => {
		if (!q.trim()) return;
		setRecentSearches((prev) => {
			const updated = [q, ...prev.filter((s) => s !== q)].slice(0, 5);
			localStorage.setItem("wwm_recent_searches", JSON.stringify(updated));
			return updated;
		});
		trackSearch(q, results.length);
	}, [results.length]);
	const handleSelect = useCallback((result) => {
		saveRecentSearch(query);
		setQuery("");
		onClose();
		window.location.href = result.link;
	}, [
		query,
		saveRecentSearch,
		onClose
	]);
	const handleSuggestionClick = (label) => {
		handleQueryChange(label);
		inputRef.current?.focus();
	};
	const handleKeyDown = (e) => {
		if (e.key === "ArrowDown") {
			e.preventDefault();
			setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			setSelectedIndex((prev) => Math.max(prev - 1, 0));
		} else if (e.key === "Enter") {
			const target = selectedIndex >= 0 ? results[selectedIndex] : results[0];
			if (target) handleSelect(target);
		} else if (e.key === "Escape") onClose();
	};
	if (!isOpen) return null;
	const showEmpty = query.length === 0;
	const showNoResults = query.length >= 2 && results.length === 0;
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-[60] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/70 backdrop-blur-sm",
		onClick: onClose,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Site search",
		children: /* @__PURE__ */ jsxs("div", {
			className: "bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] border border-slate-200 animate-in slide-in-from-top-4",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "p-4 border-b border-slate-100 flex items-center gap-3",
					children: [
						/* @__PURE__ */ jsx("svg", {
							className: "w-5 h-5 text-slate-400 flex-shrink-0",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							})
						}),
						/* @__PURE__ */ jsx("input", {
							ref: inputRef,
							id: searchInputId,
							type: "search",
							autoComplete: "off",
							placeholder: pagefind ? "Search 66,000+ pages instantly…" : "Search services, products, blogs, glossary…",
							className: `flex-grow text-base outline-none text-slate-900 placeholder-slate-400 h-9 bg-transparent transition-opacity ${isPending ? "opacity-50" : "opacity-100"}`,
							value: query,
							onChange: (e) => handleQueryChange(e.target.value),
							onKeyDown: handleKeyDown,
							"aria-label": "Search site",
							"aria-autocomplete": "list",
							"aria-controls": "search-results",
							"aria-activedescendant": selectedIndex >= 0 ? `result-${selectedIndex}` : void 0
						}),
						query && /* @__PURE__ */ jsx("button", {
							onClick: () => handleQueryChange(""),
							className: "text-slate-400 hover:text-slate-600 p-1 rounded-md",
							"aria-label": "Clear search",
							children: /* @__PURE__ */ jsx("svg", {
								className: "w-4 h-4",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ jsx("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M6 18L18 6M6 6l12 12"
								})
							})
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: onClose,
							className: "text-slate-400 hover:text-slate-600 bg-slate-100 rounded-lg px-2 py-1 text-xs font-bold uppercase flex-shrink-0",
							"aria-label": "Close search",
							children: "ESC"
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "overflow-y-auto flex-grow",
					ref: resultsContainerRef,
					children: [
						showEmpty && /* @__PURE__ */ jsxs("div", {
							className: "p-4 space-y-5",
							children: [recentSearches.length > 0 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1",
								children: "Recent"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2",
								children: recentSearches.map((s) => /* @__PURE__ */ jsxs("button", {
									onClick: () => handleSuggestionClick(s),
									className: "flex items-center gap-1.5 text-sm px-3 py-1.5 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 rounded-full transition-colors text-slate-600 border border-slate-200",
									children: [/* @__PURE__ */ jsx("svg", {
										className: "w-3 h-3",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ jsx("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										})
									}), s]
								}, s))
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1",
								children: "Popular Searches"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2",
								children: SUGGESTED_QUERIES.map(({ label, icon }) => /* @__PURE__ */ jsxs("button", {
									onClick: () => handleSuggestionClick(label),
									className: "flex items-center gap-1.5 text-sm px-3 py-1.5 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 rounded-full border border-slate-200 hover:border-indigo-300 transition-colors text-slate-700",
									children: [/* @__PURE__ */ jsx("span", { children: icon }), label]
								}, label))
							})] })]
						}),
						showNoResults && /* @__PURE__ */ jsxs("div", {
							className: "p-10 text-center",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-4xl mb-3",
									children: "🔍"
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-slate-700 font-medium",
									children: [
										"No results for \"",
										/* @__PURE__ */ jsx("span", {
											className: "text-indigo-600",
											children: query
										}),
										"\""
									]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-sm text-slate-400 mt-1",
									children: [
										"Try different keywords or browse our ",
										/* @__PURE__ */ jsx("a", {
											href: "/mobile-business-communication",
											onClick: (e) => {
												e.preventDefault();
												onClose();
												window.location.href = "/mobile-business-communication";
											},
											className: "text-indigo-500 hover:underline",
											children: "services"
										}),
										"."
									]
								})
							]
						}),
						results.length > 0 && /* @__PURE__ */ jsx("div", {
							id: "search-results",
							role: "listbox",
							className: "p-2 space-y-1",
							children: results.map((result, idx) => /* @__PURE__ */ jsxs("a", {
								id: `result-${idx}`,
								href: result.link,
								role: "option",
								"aria-selected": selectedIndex === idx,
								onClick: (e) => {
									e.preventDefault();
									handleSelect(result);
								},
								className: `block p-3 rounded-xl border transition-all group ${selectedIndex === idx ? "bg-indigo-50 border-indigo-200 shadow-sm" : "bg-white border-slate-100 hover:border-indigo-200 hover:shadow-md hover:bg-indigo-50/30"}`,
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between mb-1 gap-2",
									children: [/* @__PURE__ */ jsx("h4", {
										className: `font-semibold text-sm transition-colors truncate ${selectedIndex === idx ? "text-indigo-700" : "text-slate-900 group-hover:text-indigo-700"}`,
										children: result.title
									}), /* @__PURE__ */ jsx("span", {
										className: `text-[10px] uppercase font-bold px-2 py-0.5 rounded flex-shrink-0 ${TYPE_COLORS[result.type] || "bg-slate-100 text-slate-500"}`,
										children: result.type
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-500 line-clamp-2",
									dangerouslySetInnerHTML: { __html: result.snippet }
								})]
							}, `${result.type}-${idx}`))
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400",
					children: [results.length > 0 ? /* @__PURE__ */ jsxs("span", {
						className: "font-medium text-slate-500",
						children: [
							results.length,
							" result",
							results.length !== 1 ? "s" : "",
							" found"
						]
					}) : /* @__PURE__ */ jsx("span", { children: "Start typing to search across all content" }), /* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("kbd", {
							className: "px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold",
							children: "↑↓"
						}), " navigate"] }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("kbd", {
							className: "px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold",
							children: "↵"
						}), " open"] })]
					})]
				})
			]
		})
	});
};
//#endregion
//#region src/components/Toast.tsx
var ToastContainer = () => {
	const [toasts, setToasts] = useState([]);
	const activeTimers = useRef(/* @__PURE__ */ new Set());
	useEffect(() => {
		window.showToast = (message, type = "info") => {
			const id = Math.random().toString(36).substring(2, 9);
			setToasts((prev) => [...prev, {
				id,
				message,
				type
			}]);
			const timer = setTimeout(() => {
				setToasts((prev) => prev.filter((t) => t.id !== id));
				activeTimers.current.delete(timer);
			}, 4500);
			activeTimers.current.add(timer);
		};
		return () => {
			delete window.showToast;
			activeTimers.current.forEach(clearTimeout);
			activeTimers.current.clear();
		};
	}, []);
	const removeToast = (id) => {
		setToasts((prev) => prev.filter((t) => t.id !== id));
	};
	const getToastColors = (type) => {
		switch (type) {
			case "success": return "bg-emerald-950/95 border-emerald-500/50 text-emerald-100 shadow-emerald-950/20";
			case "error": return "bg-red-950/95 border-red-500/50 text-red-100 shadow-red-950/20";
			case "warning": return "bg-amber-950/95 border-amber-500/50 text-amber-100 shadow-amber-950/20";
			default: return "bg-indigo-950/95 border-indigo-500/50 text-indigo-100 shadow-indigo-950/20";
		}
	};
	const getToastIcon = (type) => {
		switch (type) {
			case "success": return /* @__PURE__ */ jsx("div", {
				className: "w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400",
				children: /* @__PURE__ */ jsx("svg", {
					className: "w-3.5 h-3.5",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 3,
						d: "M5 13l4 4L19 7"
					})
				})
			});
			case "error": return /* @__PURE__ */ jsx("div", {
				className: "w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 text-red-400",
				children: /* @__PURE__ */ jsx("svg", {
					className: "w-3.5 h-3.5",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 3,
						d: "M6 18L18 6M6 6l12 12"
					})
				})
			});
			case "warning": return /* @__PURE__ */ jsx("div", {
				className: "w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400",
				children: /* @__PURE__ */ jsx("svg", {
					className: "w-3.5 h-3.5",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 3,
						d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					})
				})
			});
			default: return /* @__PURE__ */ jsx("div", {
				className: "w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 text-indigo-400",
				children: /* @__PURE__ */ jsx("svg", {
					className: "w-3.5 h-3.5",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 3,
						d: "M12 9v2m0 4h.01"
					})
				})
			});
		}
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("style", { children: `
        @keyframes toastSlideIn {
          from {
            opacity: 0;
            transform: translate3d(100%, 0, 0) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        .animate-toast {
          animation: toastSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      ` }), /* @__PURE__ */ jsx("div", {
		className: "fixed top-24 right-4 z-[9999] flex flex-col gap-3 w-[calc(100vw-32px)] max-w-sm pointer-events-none",
		children: toasts.map((toast) => /* @__PURE__ */ jsxs("div", {
			className: `flex items-start gap-4 p-4 rounded-2xl border backdrop-blur-md shadow-xl pointer-events-auto animate-toast transition-all duration-300 ${getToastColors(toast.type)}`,
			role: "alert",
			children: [
				getToastIcon(toast.type),
				/* @__PURE__ */ jsx("div", {
					className: "flex-grow text-xs font-bold leading-normal pt-0.5",
					children: toast.message
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => removeToast(toast.id),
					className: "text-slate-400 hover:text-white transition-colors flex-shrink-0 mt-0.5",
					"aria-label": "Dismiss",
					children: /* @__PURE__ */ jsx("svg", {
						className: "w-4 h-4",
						fill: "none",
						stroke: "currentColor",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ jsx("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2.5,
							d: "M6 18L18 6M6 6l12 12"
						})
					})
				})
			]
		}, toast.id))
	})] });
};
//#endregion
//#region src/components/ParticleConstellation.tsx
var ParticleConstellation = () => {
	const canvasRef = useRef(null);
	const mouseRef = useRef({
		x: -1e3,
		y: -1e3,
		active: false
	});
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let animationFrameId;
		let width = canvas.width = window.innerWidth;
		let height = canvas.height = window.innerHeight;
		const particles = [];
		const particleCount = Math.min(80, Math.floor(width * height / 2e4));
		const colors = [
			"rgba(99, 102, 241, 0.5)",
			"rgba(6, 182, 212, 0.5)",
			"rgba(168, 85, 247, 0.45)",
			"rgba(236, 72, 153, 0.4)"
		];
		for (let i = 0; i < particleCount; i++) particles.push({
			x: Math.random() * width,
			y: Math.random() * height,
			vx: (Math.random() - .5) * .5,
			vy: (Math.random() - .5) * .5,
			radius: Math.random() * 2 + 1.5,
			color: colors[Math.floor(Math.random() * colors.length)]
		});
		const handleResize = () => {
			if (!canvas) return;
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		};
		const handleMouseMove = (e) => {
			mouseRef.current.x = e.clientX;
			mouseRef.current.y = e.clientY;
			mouseRef.current.active = true;
		};
		const handleMouseLeave = () => {
			mouseRef.current.active = false;
			mouseRef.current.x = -1e3;
			mouseRef.current.y = -1e3;
		};
		window.addEventListener("resize", handleResize);
		window.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseleave", handleMouseLeave);
		const draw = () => {
			ctx.clearRect(0, 0, width, height);
			particles.forEach((p) => {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < -10 || p.x > width + 10) p.vx *= -1;
				if (p.y < -10 || p.y > height + 10) p.vy *= -1;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
				ctx.fillStyle = p.color;
				ctx.fill();
			});
			const linkDistance = 110;
			const mouseDistance = 180;
			for (let i = 0; i < particles.length; i++) {
				const p1 = particles[i];
				if (mouseRef.current.active) {
					const dx = p1.x - mouseRef.current.x;
					const dy = p1.y - mouseRef.current.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < mouseDistance) {
						const alpha = (1 - dist / mouseDistance) * .35;
						ctx.beginPath();
						ctx.moveTo(p1.x, p1.y);
						ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
						ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
						ctx.lineWidth = 1;
						ctx.stroke();
					}
				}
				for (let j = i + 1; j < particles.length; j++) {
					const p2 = particles[j];
					const dx = p1.x - p2.x;
					const dy = p1.y - p2.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < linkDistance) {
						const alpha = (1 - dist / linkDistance) * .15;
						ctx.beginPath();
						ctx.moveTo(p1.x, p1.y);
						ctx.lineTo(p2.x, p2.y);
						ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
						ctx.lineWidth = .8;
						ctx.stroke();
					}
				}
			}
			animationFrameId = requestAnimationFrame(draw);
		};
		draw();
		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);
	return /* @__PURE__ */ jsx("canvas", {
		ref: canvasRef,
		className: "fixed inset-0 pointer-events-none z-[1] opacity-70"
	});
};
//#endregion
//#region src/utils/botDetection.ts
/**
* Checks if the current client is a search engine crawler, AI bot, or performance audit tool.
*/
var isSearchBotOrAuditor = () => {
	if (typeof window === "undefined" || !navigator || !navigator.userAgent) return true;
	const ua = navigator.userAgent.toLowerCase();
	return [
		"bot",
		"crawler",
		"spider",
		"googlebot",
		"bingbot",
		"yandex",
		"baidu",
		"slurp",
		"duckduckgo",
		"teoma",
		"lighthouse",
		"chrome-lighthouse",
		"pagespeed",
		"gptbot",
		"perplexity",
		"claudebot",
		"applebot",
		"headless",
		"facebookexternalhit",
		"embedly"
	].some((keyword) => ua.includes(keyword));
};
//#endregion
//#region src/utils/localLanguage.ts
var COUNTRY_META = {
	"Afghanistan": {
		flag: "🇦🇫",
		isoCode: "AF",
		langCode: "fa",
		langName: "دری",
		hreflang: "fa-AF",
		currencyCode: "AFN",
		currencySymbol: "؋",
		currencyName: "Afghan Afghani"
	},
	"Albania": {
		flag: "🇦🇱",
		isoCode: "AL",
		langCode: "sq",
		langName: "Shqip",
		hreflang: "sq-AL",
		currencyCode: "ALL",
		currencySymbol: "L",
		currencyName: "Albanian Lek"
	},
	"Algeria": {
		flag: "🇩🇿",
		isoCode: "DZ",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-DZ",
		currencyCode: "DZD",
		currencySymbol: "د.ج",
		currencyName: "Algerian Dinar"
	},
	"Andorra": {
		flag: "🇦🇩",
		isoCode: "AD",
		langCode: "ca",
		langName: "Català",
		hreflang: "ca-AD",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Angola": {
		flag: "🇦🇴",
		isoCode: "AO",
		langCode: "pt",
		langName: "Português",
		hreflang: "pt-AO",
		currencyCode: "AOA",
		currencySymbol: "Kz",
		currencyName: "Angolan Kwanza"
	},
	"Antigua and Barbuda": {
		flag: "🇦🇬",
		isoCode: "AG",
		langCode: "en",
		langName: "English",
		hreflang: "en-AG",
		currencyCode: "XCD",
		currencySymbol: "$",
		currencyName: "East Caribbean Dollar"
	},
	"Argentina": {
		flag: "🇦🇷",
		isoCode: "AR",
		langCode: "es",
		langName: "Español",
		hreflang: "es-AR",
		currencyCode: "ARS",
		currencySymbol: "$",
		currencyName: "Argentine Peso"
	},
	"Armenia": {
		flag: "🇦🇲",
		isoCode: "AM",
		langCode: "hy",
		langName: "Հայերեն",
		hreflang: "hy-AM",
		currencyCode: "AMD",
		currencySymbol: "֏",
		currencyName: "Armenian Dram"
	},
	"Australia": {
		flag: "🇦🇺",
		isoCode: "AU",
		langCode: "en",
		langName: "English",
		hreflang: "en-AU",
		currencyCode: "AUD",
		currencySymbol: "A$",
		currencyName: "Australian Dollar"
	},
	"Austria": {
		flag: "🇦🇹",
		isoCode: "AT",
		langCode: "de",
		langName: "Deutsch",
		hreflang: "de-AT",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Azerbaijan": {
		flag: "🇦🇿",
		isoCode: "AZ",
		langCode: "az",
		langName: "Azərbaycan",
		hreflang: "az-AZ",
		currencyCode: "AZN",
		currencySymbol: "₼",
		currencyName: "Azerbaijani Manat"
	},
	"Bahamas": {
		flag: "🇧🇸",
		isoCode: "BS",
		langCode: "en",
		langName: "English",
		hreflang: "en-BS",
		currencyCode: "BSD",
		currencySymbol: "$",
		currencyName: "Bahamian Dollar"
	},
	"Bahrain": {
		flag: "🇧🇭",
		isoCode: "BH",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-BH",
		currencyCode: "BHD",
		currencySymbol: ".د.ب",
		currencyName: "Bahraini Dinar"
	},
	"Bangladesh": {
		flag: "🇧🇩",
		isoCode: "BD",
		langCode: "bn",
		langName: "বাংলা",
		hreflang: "bn-BD",
		currencyCode: "BDT",
		currencySymbol: "৳",
		currencyName: "Bangladeshi Taka"
	},
	"Barbados": {
		flag: "🇧🇧",
		isoCode: "BB",
		langCode: "en",
		langName: "English",
		hreflang: "en-BB",
		currencyCode: "BBD",
		currencySymbol: "$",
		currencyName: "Barbadian Dollar"
	},
	"Belarus": {
		flag: "🇧🇾",
		isoCode: "BY",
		langCode: "be",
		langName: "Беларуская",
		hreflang: "be-BY",
		currencyCode: "BYN",
		currencySymbol: "Br",
		currencyName: "Belarusian Ruble"
	},
	"Belgium": {
		flag: "🇧🇪",
		isoCode: "BE",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-BE",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Belize": {
		flag: "🇧🇿",
		isoCode: "BZ",
		langCode: "en",
		langName: "English",
		hreflang: "en-BZ",
		currencyCode: "BZD",
		currencySymbol: "$",
		currencyName: "Belize Dollar"
	},
	"Benin": {
		flag: "🇧🇯",
		isoCode: "BJ",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-BJ",
		currencyCode: "XOF",
		currencySymbol: "CFA",
		currencyName: "West African CFA Franc"
	},
	"Bhutan": {
		flag: "🇧🇹",
		isoCode: "BT",
		langCode: "dz",
		langName: "རྫོང་ཁ",
		hreflang: "dz-BT",
		currencyCode: "BTN",
		currencySymbol: "Nu",
		currencyName: "Bhutanese Ngultrum"
	},
	"Bolivia": {
		flag: "🇧🇴",
		isoCode: "BO",
		langCode: "es",
		langName: "Español",
		hreflang: "es-BO",
		currencyCode: "BOB",
		currencySymbol: "Bs",
		currencyName: "Bolivian Boliviano"
	},
	"Bosnia & Herzegovina": {
		flag: "🇧🇦",
		isoCode: "BA",
		langCode: "bs",
		langName: "Bosanski",
		hreflang: "bs-BA",
		currencyCode: "BAM",
		currencySymbol: "KM",
		currencyName: "Bosnia-Herzegovina Convertible Mark"
	},
	"Botswana": {
		flag: "🇧🇼",
		isoCode: "BW",
		langCode: "en",
		langName: "English",
		hreflang: "en-BW",
		currencyCode: "BWP",
		currencySymbol: "P",
		currencyName: "Botswana Pula"
	},
	"Brazil": {
		flag: "🇧🇷",
		isoCode: "BR",
		langCode: "pt",
		langName: "Português",
		hreflang: "pt-BR",
		currencyCode: "BRL",
		currencySymbol: "R$",
		currencyName: "Brazilian Real"
	},
	"British Virgin Islands": {
		flag: "🇻🇬",
		isoCode: "VG",
		langCode: "en",
		langName: "English",
		hreflang: "en-VG",
		currencyCode: "USD",
		currencySymbol: "$",
		currencyName: "US Dollar"
	},
	"Brunei Darussalam": {
		flag: "🇧🇳",
		isoCode: "BN",
		langCode: "ms",
		langName: "Melayu",
		hreflang: "ms-BN",
		currencyCode: "BND",
		currencySymbol: "$",
		currencyName: "Brunei Dollar"
	},
	"Bulgaria": {
		flag: "🇧🇬",
		isoCode: "BG",
		langCode: "bg",
		langName: "Български",
		hreflang: "bg-BG",
		currencyCode: "BGN",
		currencySymbol: "лв",
		currencyName: "Bulgarian Lev"
	},
	"Burkina Faso": {
		flag: "🇧🇫",
		isoCode: "BF",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-BF",
		currencyCode: "XOF",
		currencySymbol: "CFA",
		currencyName: "West African CFA Franc"
	},
	"Burundi": {
		flag: "🇧🇮",
		isoCode: "BI",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-BI",
		currencyCode: "BIF",
		currencySymbol: "Fr",
		currencyName: "Burundian Franc"
	},
	"Cabo Verde": {
		flag: "🇨🇻",
		isoCode: "CV",
		langCode: "pt",
		langName: "Português",
		hreflang: "pt-CV",
		currencyCode: "CVE",
		currencySymbol: "$",
		currencyName: "Cape Verdean Escudo"
	},
	"Cambodia": {
		flag: "🇰🇭",
		isoCode: "KH",
		langCode: "km",
		langName: "ខ្មែរ",
		hreflang: "km-KH",
		currencyCode: "KHR",
		currencySymbol: "៛",
		currencyName: "Cambodian Riel"
	},
	"Cameroon": {
		flag: "🇨🇲",
		isoCode: "CM",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-CM",
		currencyCode: "XAF",
		currencySymbol: "CFA",
		currencyName: "Central African CFA Franc"
	},
	"Canada": {
		flag: "🇨🇦",
		isoCode: "CA",
		langCode: "en",
		langName: "English",
		hreflang: "en-CA",
		currencyCode: "CAD",
		currencySymbol: "C$",
		currencyName: "Canadian Dollar"
	},
	"Cayman Islands": {
		flag: "🇰🇾",
		isoCode: "KY",
		langCode: "en",
		langName: "English",
		hreflang: "en-KY",
		currencyCode: "KYD",
		currencySymbol: "$",
		currencyName: "Cayman Islands Dollar"
	},
	"Central African Republic": {
		flag: "🇨🇫",
		isoCode: "CF",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-CF",
		currencyCode: "XAF",
		currencySymbol: "CFA",
		currencyName: "Central African CFA Franc"
	},
	"Chad": {
		flag: "🇹🇩",
		isoCode: "TD",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-TD",
		currencyCode: "XAF",
		currencySymbol: "CFA",
		currencyName: "Central African CFA Franc"
	},
	"Chile": {
		flag: "🇨🇱",
		isoCode: "CL",
		langCode: "es",
		langName: "Español",
		hreflang: "es-CL",
		currencyCode: "CLP",
		currencySymbol: "$",
		currencyName: "Chilean Peso"
	},
	"China": {
		flag: "🇨🇳",
		isoCode: "CN",
		langCode: "zh",
		langName: "简体中文",
		hreflang: "zh-CN",
		currencyCode: "CNY",
		currencySymbol: "¥",
		currencyName: "Chinese Yuan"
	},
	"Christmas Island": {
		flag: "🇨🇽",
		isoCode: "CX",
		langCode: "en",
		langName: "English",
		hreflang: "en-CX",
		currencyCode: "AUD",
		currencySymbol: "A$",
		currencyName: "Australian Dollar"
	},
	"Colombia": {
		flag: "🇨🇴",
		isoCode: "CO",
		langCode: "es",
		langName: "Español",
		hreflang: "es-CO",
		currencyCode: "COP",
		currencySymbol: "$",
		currencyName: "Colombian Peso"
	},
	"Comoros": {
		flag: "🇰🇲",
		isoCode: "KM",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-KM",
		currencyCode: "KMF",
		currencySymbol: "Fr",
		currencyName: "Comorian Franc"
	},
	"Cook Islands": {
		flag: "🇨🇰",
		isoCode: "CK",
		langCode: "en",
		langName: "English",
		hreflang: "en-CK",
		currencyCode: "NZD",
		currencySymbol: "$",
		currencyName: "New Zealand Dollar"
	},
	"Costa Rica": {
		flag: "🇨🇷",
		isoCode: "CR",
		langCode: "es",
		langName: "Español",
		hreflang: "es-CR",
		currencyCode: "CRC",
		currencySymbol: "₡",
		currencyName: "Costa Rican Colón"
	},
	"Croatia": {
		flag: "🇭🇷",
		isoCode: "HR",
		langCode: "hr",
		langName: "Hrvatski",
		hreflang: "hr-HR",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Cuba": {
		flag: "🇨🇺",
		isoCode: "CU",
		langCode: "es",
		langName: "Español",
		hreflang: "es-CU",
		currencyCode: "CUP",
		currencySymbol: "$",
		currencyName: "Cuban Peso"
	},
	"Curacao": {
		flag: "🇨🇼",
		isoCode: "CW",
		langCode: "nl",
		langName: "Nederlands",
		hreflang: "nl-CW",
		currencyCode: "ANG",
		currencySymbol: "ƒ",
		currencyName: "Netherlands Antillean Guilder"
	},
	"Cyprus": {
		flag: "🇨🇾",
		isoCode: "CY",
		langCode: "el",
		langName: "Ελληνικά",
		hreflang: "el-CY",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Czechia": {
		flag: "🇨🇿",
		isoCode: "CZ",
		langCode: "cs",
		langName: "Čeština",
		hreflang: "cs-CZ",
		currencyCode: "CZK",
		currencySymbol: "Kč",
		currencyName: "Czech Koruna"
	},
	"Democratic Republic of the Congo": {
		flag: "🇨🇩",
		isoCode: "CD",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-CD",
		currencyCode: "CDF",
		currencySymbol: "Fr",
		currencyName: "Congolese Franc"
	},
	"Denmark": {
		flag: "🇩🇰",
		isoCode: "DK",
		langCode: "da",
		langName: "Dansk",
		hreflang: "da-DK",
		currencyCode: "DKK",
		currencySymbol: "kr",
		currencyName: "Danish Krone"
	},
	"Djibouti": {
		flag: "🇩🇯",
		isoCode: "DJ",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-DJ",
		currencyCode: "DJF",
		currencySymbol: "Fr",
		currencyName: "Djiboutian Franc"
	},
	"Dominican Republic": {
		flag: "🇩🇴",
		isoCode: "DO",
		langCode: "es",
		langName: "Español",
		hreflang: "es-DO",
		currencyCode: "DOP",
		currencySymbol: "$",
		currencyName: "Dominican Peso"
	},
	"Ecuador": {
		flag: "🇪🇨",
		isoCode: "EC",
		langCode: "es",
		langName: "Español",
		hreflang: "es-EC",
		currencyCode: "USD",
		currencySymbol: "$",
		currencyName: "US Dollar"
	},
	"Egypt": {
		flag: "🇪🇬",
		isoCode: "EG",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-EG",
		currencyCode: "EGP",
		currencySymbol: "£",
		currencyName: "Egyptian Pound"
	},
	"El Salvador": {
		flag: "🇸🇻",
		isoCode: "SV",
		langCode: "es",
		langName: "Español",
		hreflang: "es-SV",
		currencyCode: "USD",
		currencySymbol: "$",
		currencyName: "US Dollar"
	},
	"Equatorial Guinea": {
		flag: "🇬🇶",
		isoCode: "GQ",
		langCode: "es",
		langName: "Español",
		hreflang: "es-GQ",
		currencyCode: "XAF",
		currencySymbol: "CFA",
		currencyName: "Central African CFA Franc"
	},
	"Eritrea": {
		flag: "🇪🇷",
		isoCode: "ER",
		langCode: "ti",
		langName: "ትግርኛ",
		hreflang: "ti-ER",
		currencyCode: "ERN",
		currencySymbol: "Nfk",
		currencyName: "Eritrean Nakfa"
	},
	"Estonia": {
		flag: "🇪🇪",
		isoCode: "EE",
		langCode: "et",
		langName: "Eesti",
		hreflang: "et-EE",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Eswatini": {
		flag: "🇸🇿",
		isoCode: "SZ",
		langCode: "en",
		langName: "English",
		hreflang: "en-SZ",
		currencyCode: "SZL",
		currencySymbol: "L",
		currencyName: "Swazi Lilangeni"
	},
	"Ethiopia": {
		flag: "🇪🇹",
		isoCode: "ET",
		langCode: "am",
		langName: "አማርኛ",
		hreflang: "am-ET",
		currencyCode: "ETB",
		currencySymbol: "Br",
		currencyName: "Ethiopian Birr"
	},
	"Fiji": {
		flag: "🇫🇯",
		isoCode: "FJ",
		langCode: "en",
		langName: "English",
		hreflang: "en-FJ",
		currencyCode: "FJD",
		currencySymbol: "$",
		currencyName: "Fijian Dollar"
	},
	"Finland": {
		flag: "🇫🇮",
		isoCode: "FI",
		langCode: "fi",
		langName: "Suomi",
		hreflang: "fi-FI",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"France": {
		flag: "🇫🇷",
		isoCode: "FR",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-FR",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"French Polynesia": {
		flag: "🇵🇫",
		isoCode: "PF",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-PF",
		currencyCode: "XPF",
		currencySymbol: "Fr",
		currencyName: "CFP Franc"
	},
	"Gabon": {
		flag: "🇬🇦",
		isoCode: "GA",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-GA",
		currencyCode: "XAF",
		currencySymbol: "CFA",
		currencyName: "Central African CFA Franc"
	},
	"Gambia": {
		flag: "🇬🇲",
		isoCode: "GM",
		langCode: "en",
		langName: "English",
		hreflang: "en-GM",
		currencyCode: "GMD",
		currencySymbol: "D",
		currencyName: "Gambian Dalasi"
	},
	"Georgia": {
		flag: "🇬🇪",
		isoCode: "GE",
		langCode: "ka",
		langName: "ქართული",
		hreflang: "ka-GE",
		currencyCode: "GEL",
		currencySymbol: "₾",
		currencyName: "Georgian Lari"
	},
	"Germany": {
		flag: "🇩🇪",
		isoCode: "DE",
		langCode: "de",
		langName: "Deutsch",
		hreflang: "de-DE",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Ghana": {
		flag: "🇬🇭",
		isoCode: "GH",
		langCode: "en",
		langName: "English",
		hreflang: "en-GH",
		currencyCode: "GHS",
		currencySymbol: "₵",
		currencyName: "Ghanaian Cedi"
	},
	"Greece": {
		flag: "🇬🇷",
		isoCode: "GR",
		langCode: "el",
		langName: "Ελληνικά",
		hreflang: "el-GR",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Greenland": {
		flag: "🇬🇱",
		isoCode: "GL",
		langCode: "da",
		langName: "Dansk",
		hreflang: "da-GL",
		currencyCode: "DKK",
		currencySymbol: "kr",
		currencyName: "Danish Krone"
	},
	"Grenada": {
		flag: "🇬🇩",
		isoCode: "GD",
		langCode: "en",
		langName: "English",
		hreflang: "en-GD",
		currencyCode: "XCD",
		currencySymbol: "$",
		currencyName: "East Caribbean Dollar"
	},
	"Guam": {
		flag: "🇬🇺",
		isoCode: "GU",
		langCode: "en",
		langName: "English",
		hreflang: "en-GU",
		currencyCode: "USD",
		currencySymbol: "$",
		currencyName: "US Dollar"
	},
	"Guatemala": {
		flag: "🇬🇹",
		isoCode: "GT",
		langCode: "es",
		langName: "Español",
		hreflang: "es-GT",
		currencyCode: "GTQ",
		currencySymbol: "Q",
		currencyName: "Guatemalan Quetzal"
	},
	"Guinea": {
		flag: "🇬🇳",
		isoCode: "GN",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-GN",
		currencyCode: "GNF",
		currencySymbol: "Fr",
		currencyName: "Guinean Franc"
	},
	"Guinea-Bissau": {
		flag: "🇬🇼",
		isoCode: "GW",
		langCode: "pt",
		langName: "Português",
		hreflang: "pt-GW",
		currencyCode: "XOF",
		currencySymbol: "CFA",
		currencyName: "West African CFA Franc"
	},
	"Guyana": {
		flag: "🇬🇾",
		isoCode: "GY",
		langCode: "en",
		langName: "English",
		hreflang: "en-GY",
		currencyCode: "GYD",
		currencySymbol: "$",
		currencyName: "Guyanese Dollar"
	},
	"Honduras": {
		flag: "🇭🇳",
		isoCode: "HN",
		langCode: "es",
		langName: "Español",
		hreflang: "es-HN",
		currencyCode: "HNL",
		currencySymbol: "L",
		currencyName: "Honduran Lempira"
	},
	"Hong Kong": {
		flag: "🇭🇰",
		isoCode: "HK",
		langCode: "zh",
		langName: "繁體中文",
		hreflang: "zh-HK",
		currencyCode: "HKD",
		currencySymbol: "$",
		currencyName: "Hong Kong Dollar"
	},
	"Hungary": {
		flag: "🇭🇺",
		isoCode: "HU",
		langCode: "hu",
		langName: "Magyar",
		hreflang: "hu-HU",
		currencyCode: "HUF",
		currencySymbol: "Ft",
		currencyName: "Hungarian Forint"
	},
	"Iceland": {
		flag: "🇮🇸",
		isoCode: "IS",
		langCode: "is",
		langName: "Íslenska",
		hreflang: "is-IS",
		currencyCode: "ISK",
		currencySymbol: "kr",
		currencyName: "Icelandic Króna"
	},
	"India": {
		flag: "🇮🇳",
		isoCode: "IN",
		langCode: "hi",
		langName: "हिन्दी",
		hreflang: "hi-IN",
		currencyCode: "INR",
		currencySymbol: "₹",
		currencyName: "Indian Rupee"
	},
	"Indonesia": {
		flag: "🇮🇩",
		isoCode: "ID",
		langCode: "id",
		langName: "Bahasa Indonesia",
		hreflang: "id-ID",
		currencyCode: "IDR",
		currencySymbol: "Rp",
		currencyName: "Indonesian Rupiah"
	},
	"Iran": {
		flag: "🇮🇷",
		isoCode: "IR",
		langCode: "fa",
		langName: "فارسی",
		hreflang: "fa-IR",
		currencyCode: "IRR",
		currencySymbol: "﷼",
		currencyName: "Iranian Rial"
	},
	"Iraq": {
		flag: "🇮🇶",
		isoCode: "IQ",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-IQ",
		currencyCode: "IQD",
		currencySymbol: "ع.د",
		currencyName: "Iraqi Dinar"
	},
	"Ireland": {
		flag: "🇮🇪",
		isoCode: "IE",
		langCode: "en",
		langName: "English",
		hreflang: "en-IE",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Israel": {
		flag: "🇮🇱",
		isoCode: "IL",
		langCode: "he",
		langName: "עברית",
		hreflang: "he-IL",
		currencyCode: "ILS",
		currencySymbol: "₪",
		currencyName: "Israeli New Shekel"
	},
	"Italy": {
		flag: "🇮🇹",
		isoCode: "IT",
		langCode: "it",
		langName: "Italiano",
		hreflang: "it-IT",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Ivory Coast": {
		flag: "🇨🇮",
		isoCode: "CI",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-CI",
		currencyCode: "XOF",
		currencySymbol: "CFA",
		currencyName: "West African CFA Franc"
	},
	"Jamaica": {
		flag: "🇯🇲",
		isoCode: "JM",
		langCode: "en",
		langName: "English",
		hreflang: "en-JM",
		currencyCode: "JMD",
		currencySymbol: "$",
		currencyName: "Jamaican Dollar"
	},
	"Japan": {
		flag: "🇯🇵",
		isoCode: "JP",
		langCode: "ja",
		langName: "日本語",
		hreflang: "ja-JP",
		currencyCode: "JPY",
		currencySymbol: "¥",
		currencyName: "Japanese Yen"
	},
	"Jordan": {
		flag: "🇯🇴",
		isoCode: "JO",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-JO",
		currencyCode: "JOD",
		currencySymbol: "JD",
		currencyName: "Jordanian Dinar"
	},
	"Kazakhstan": {
		flag: "🇰🇿",
		isoCode: "KZ",
		langCode: "kk",
		langName: "Қазақша",
		hreflang: "kk-KZ",
		currencyCode: "KZT",
		currencySymbol: "₸",
		currencyName: "Kazakhstani Tenge"
	},
	"Kenya": {
		flag: "🇰🇪",
		isoCode: "KE",
		langCode: "sw",
		langName: "Kiswahili",
		hreflang: "sw-KE",
		currencyCode: "KES",
		currencySymbol: "KSh",
		currencyName: "Kenyan Shilling"
	},
	"Kiribati": {
		flag: "🇰🇮",
		isoCode: "KI",
		langCode: "en",
		langName: "English",
		hreflang: "en-KI",
		currencyCode: "AUD",
		currencySymbol: "A$",
		currencyName: "Australian Dollar"
	},
	"Kuwait": {
		flag: "🇰🇼",
		isoCode: "KW",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-KW",
		currencyCode: "KWD",
		currencySymbol: "KD",
		currencyName: "Kuwaiti Dinar"
	},
	"Kyrgyz Republic": {
		flag: "🇰🇬",
		isoCode: "KG",
		langCode: "ky",
		langName: "Кыргызча",
		hreflang: "ky-KG",
		currencyCode: "KGS",
		currencySymbol: "с",
		currencyName: "Kyrgyzstani Som"
	},
	"Laos": {
		flag: "🇱🇦",
		isoCode: "LA",
		langCode: "lo",
		langName: "ລາວ",
		hreflang: "lo-LA",
		currencyCode: "LAK",
		currencySymbol: "₭",
		currencyName: "Lao Kip"
	},
	"Latvia": {
		flag: "🇱🇻",
		isoCode: "LV",
		langCode: "lv",
		langName: "Latviešu",
		hreflang: "lv-LV",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Lebanon": {
		flag: "🇱🇧",
		isoCode: "LB",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-LB",
		currencyCode: "LBP",
		currencySymbol: "£",
		currencyName: "Lebanese Pound"
	},
	"Lesotho": {
		flag: "🇱🇸",
		isoCode: "LS",
		langCode: "en",
		langName: "English",
		hreflang: "en-LS",
		currencyCode: "LSL",
		currencySymbol: "L",
		currencyName: "Lesotho Loti"
	},
	"Liberia": {
		flag: "🇱🇷",
		isoCode: "LR",
		langCode: "en",
		langName: "English",
		hreflang: "en-LR",
		currencyCode: "LRD",
		currencySymbol: "$",
		currencyName: "Liberian Dollar"
	},
	"Libya": {
		flag: "🇱🇾",
		isoCode: "LY",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-LY",
		currencyCode: "LYD",
		currencySymbol: "LD",
		currencyName: "Libyan Dinar"
	},
	"Liechtenstein": {
		flag: "🇱🇮",
		isoCode: "LI",
		langCode: "de",
		langName: "Deutsch",
		hreflang: "de-LI",
		currencyCode: "CHF",
		currencySymbol: "Fr",
		currencyName: "Swiss Franc"
	},
	"Lithuania": {
		flag: "🇱🇹",
		isoCode: "LT",
		langCode: "lt",
		langName: "Lietuvių",
		hreflang: "lt-LT",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Luxembourg": {
		flag: "🇱🇺",
		isoCode: "LU",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-LU",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Madagascar": {
		flag: "🇲🇬",
		isoCode: "MG",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-MG",
		currencyCode: "MGA",
		currencySymbol: "Ar",
		currencyName: "Malagasy Ariary"
	},
	"Malawi": {
		flag: "🇲🇼",
		isoCode: "MW",
		langCode: "en",
		langName: "English",
		hreflang: "en-MW",
		currencyCode: "MWK",
		currencySymbol: "MK",
		currencyName: "Malawian Kwacha"
	},
	"Malaysia": {
		flag: "🇲🇾",
		isoCode: "MY",
		langCode: "ms",
		langName: "Bahasa Melayu",
		hreflang: "ms-MY",
		currencyCode: "MYR",
		currencySymbol: "RM",
		currencyName: "Malaysian Ringgit"
	},
	"Maldives": {
		flag: "🇲🇻",
		isoCode: "MV",
		langCode: "dv",
		langName: "ދިވެހި",
		hreflang: "dv-MV",
		currencyCode: "MVR",
		currencySymbol: "Rf",
		currencyName: "Maldivian Rufiyaa"
	},
	"Mali": {
		flag: "🇲🇱",
		isoCode: "ML",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-ML",
		currencyCode: "XOF",
		currencySymbol: "CFA",
		currencyName: "West African CFA Franc"
	},
	"Malta": {
		flag: "🇲🇹",
		isoCode: "MT",
		langCode: "mt",
		langName: "Malti",
		hreflang: "mt-MT",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Marshall Islands": {
		flag: "🇲🇭",
		isoCode: "MH",
		langCode: "en",
		langName: "English",
		hreflang: "en-MH",
		currencyCode: "USD",
		currencySymbol: "$",
		currencyName: "US Dollar"
	},
	"Mauritania": {
		flag: "🇲🇷",
		isoCode: "MR",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-MR",
		currencyCode: "MRU",
		currencySymbol: "UM",
		currencyName: "Mauritanian Ouguiya"
	},
	"Mauritius": {
		flag: "🇲🇺",
		isoCode: "MU",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-MU",
		currencyCode: "MUR",
		currencySymbol: "₨",
		currencyName: "Mauritian Rupee"
	},
	"Mexico": {
		flag: "🇲🇽",
		isoCode: "MX",
		langCode: "es",
		langName: "Español",
		hreflang: "es-MX",
		currencyCode: "MXN",
		currencySymbol: "$",
		currencyName: "Mexican Peso"
	},
	"Micronesia": {
		flag: "🇫🇲",
		isoCode: "FM",
		langCode: "en",
		langName: "English",
		hreflang: "en-FM",
		currencyCode: "USD",
		currencySymbol: "$",
		currencyName: "US Dollar"
	},
	"Moldova": {
		flag: "🇲🇩",
		isoCode: "MD",
		langCode: "ro",
		langName: "Română",
		hreflang: "ro-MD",
		currencyCode: "MDL",
		currencySymbol: "L",
		currencyName: "Moldovan Leu"
	},
	"Monaco": {
		flag: "🇲🇨",
		isoCode: "MC",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-MC",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Mongolia": {
		flag: "🇲🇳",
		isoCode: "MN",
		langCode: "mn",
		langName: "Монгол",
		hreflang: "mn-MN",
		currencyCode: "MNT",
		currencySymbol: "₮",
		currencyName: "Mongolian Tögrög"
	},
	"Montenegro": {
		flag: "🇲🇪",
		isoCode: "ME",
		langCode: "sr",
		langName: "Crnogorski",
		hreflang: "sr-ME",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Montserrat": {
		flag: "🇲🇸",
		isoCode: "MS",
		langCode: "en",
		langName: "English",
		hreflang: "en-MS",
		currencyCode: "XCD",
		currencySymbol: "$",
		currencyName: "East Caribbean Dollar"
	},
	"Morocco": {
		flag: "🇲🇦",
		isoCode: "MA",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-MA",
		currencyCode: "MAD",
		currencySymbol: "د.م.",
		currencyName: "Moroccan Dirham"
	},
	"Mozambique": {
		flag: "🇲🇿",
		isoCode: "MZ",
		langCode: "pt",
		langName: "Português",
		hreflang: "pt-MZ",
		currencyCode: "MZN",
		currencySymbol: "MT",
		currencyName: "Mozambican Metical"
	},
	"Myanmar": {
		flag: "🇲🇲",
		isoCode: "MM",
		langCode: "my",
		langName: "မြန်မာ",
		hreflang: "my-MM",
		currencyCode: "MMK",
		currencySymbol: "K",
		currencyName: "Burmese Kyat"
	},
	"Namibia": {
		flag: "🇳🇦",
		isoCode: "NA",
		langCode: "en",
		langName: "English",
		hreflang: "en-NA",
		currencyCode: "NAD",
		currencySymbol: "$",
		currencyName: "Namibian Dollar"
	},
	"Nauru": {
		flag: "🇳🇷",
		isoCode: "NR",
		langCode: "en",
		langName: "English",
		hreflang: "en-NR",
		currencyCode: "AUD",
		currencySymbol: "A$",
		currencyName: "Australian Dollar"
	},
	"Nepal": {
		flag: "🇳🇵",
		isoCode: "NP",
		langCode: "ne",
		langName: "नेपाली",
		hreflang: "ne-NP",
		currencyCode: "NPR",
		currencySymbol: "₨",
		currencyName: "Nepalese Rupee"
	},
	"Netherlands": {
		flag: "🇳🇱",
		isoCode: "NL",
		langCode: "nl",
		langName: "Nederlands",
		hreflang: "nl-NL",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"New Caledonia": {
		flag: "🇳🇨",
		isoCode: "NC",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-NC",
		currencyCode: "XPF",
		currencySymbol: "Fr",
		currencyName: "CFP Franc"
	},
	"New Zealand": {
		flag: "🇳🇿",
		isoCode: "NZ",
		langCode: "en",
		langName: "English",
		hreflang: "en-NZ",
		currencyCode: "NZD",
		currencySymbol: "$",
		currencyName: "New Zealand Dollar"
	},
	"Nicaragua": {
		flag: "🇳🇮",
		isoCode: "NI",
		langCode: "es",
		langName: "Español",
		hreflang: "es-NI",
		currencyCode: "NIO",
		currencySymbol: "C$",
		currencyName: "Nicaraguan Córdoba"
	},
	"Niger": {
		flag: "🇳🇪",
		isoCode: "NE",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-NE",
		currencyCode: "XOF",
		currencySymbol: "CFA",
		currencyName: "West African CFA Franc"
	},
	"Nigeria": {
		flag: "🇳🇬",
		isoCode: "NG",
		langCode: "en",
		langName: "English",
		hreflang: "en-NG",
		currencyCode: "NGN",
		currencySymbol: "₦",
		currencyName: "Nigerian Naira"
	},
	"Niue": {
		flag: "🇳🇺",
		isoCode: "NU",
		langCode: "en",
		langName: "English",
		hreflang: "en-NU",
		currencyCode: "NZD",
		currencySymbol: "$",
		currencyName: "New Zealand Dollar"
	},
	"North Macedonia": {
		flag: "🇲🇰",
		isoCode: "MK",
		langCode: "mk",
		langName: "Македонски",
		hreflang: "mk-MK",
		currencyCode: "MKD",
		currencySymbol: "ден",
		currencyName: "Macedonian Denar"
	},
	"Norway": {
		flag: "🇳🇴",
		isoCode: "NO",
		langCode: "no",
		langName: "Norsk",
		hreflang: "no-NO",
		currencyCode: "NOK",
		currencySymbol: "kr",
		currencyName: "Norwegian Krone"
	},
	"Oman": {
		flag: "🇴🇲",
		isoCode: "OM",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-OM",
		currencyCode: "OMR",
		currencySymbol: "﷼",
		currencyName: "Omani Rial"
	},
	"Pakistan": {
		flag: "🇵🇰",
		isoCode: "PK",
		langCode: "ur",
		langName: "اردو",
		hreflang: "ur-PK",
		currencyCode: "PKR",
		currencySymbol: "₨",
		currencyName: "Pakistani Rupee"
	},
	"Palestine": {
		flag: "🇵🇸",
		isoCode: "PS",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-PS",
		currencyCode: "ILS",
		currencySymbol: "₪",
		currencyName: "Israeli New Shekel"
	},
	"Panama": {
		flag: "🇵🇦",
		isoCode: "PA",
		langCode: "es",
		langName: "Español",
		hreflang: "es-PA",
		currencyCode: "PAB",
		currencySymbol: "B/.",
		currencyName: "Panamanian Balboa"
	},
	"Paraguay": {
		flag: "🇵🇾",
		isoCode: "PY",
		langCode: "es",
		langName: "Español",
		hreflang: "es-PY",
		currencyCode: "PYG",
		currencySymbol: "₲",
		currencyName: "Paraguayan Guaraní"
	},
	"Peru": {
		flag: "🇵🇪",
		isoCode: "PE",
		langCode: "es",
		langName: "Español",
		hreflang: "es-PE",
		currencyCode: "PEN",
		currencySymbol: "S/.",
		currencyName: "Peruvian Sol"
	},
	"Philippines": {
		flag: "🇵🇭",
		isoCode: "PH",
		langCode: "fil",
		langName: "Filipino",
		hreflang: "fil-PH",
		currencyCode: "PHP",
		currencySymbol: "₱",
		currencyName: "Philippine Peso"
	},
	"Poland": {
		flag: "🇵🇱",
		isoCode: "PL",
		langCode: "pl",
		langName: "Polski",
		hreflang: "pl-PL",
		currencyCode: "PLN",
		currencySymbol: "zł",
		currencyName: "Polish Złoty"
	},
	"Portugal": {
		flag: "🇵🇹",
		isoCode: "PT",
		langCode: "pt",
		langName: "Português",
		hreflang: "pt-PT",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Puerto Rico": {
		flag: "🇵🇷",
		isoCode: "PR",
		langCode: "es",
		langName: "Español",
		hreflang: "es-PR",
		currencyCode: "USD",
		currencySymbol: "$",
		currencyName: "US Dollar"
	},
	"Qatar": {
		flag: "🇶🇦",
		isoCode: "QA",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-QA",
		currencyCode: "QAR",
		currencySymbol: "﷼",
		currencyName: "Qatari Rial"
	},
	"Romania": {
		flag: "🇷🇴",
		isoCode: "RO",
		langCode: "ro",
		langName: "Română",
		hreflang: "ro-RO",
		currencyCode: "RON",
		currencySymbol: "lei",
		currencyName: "Romanian Leu"
	},
	"Russia": {
		flag: "🇷🇺",
		isoCode: "RU",
		langCode: "ru",
		langName: "Русский",
		hreflang: "ru-RU",
		currencyCode: "RUB",
		currencySymbol: "₽",
		currencyName: "Russian Ruble"
	},
	"Rwanda": {
		flag: "🇷🇼",
		isoCode: "RW",
		langCode: "rw",
		langName: "Kinyarwanda",
		hreflang: "rw-RW",
		currencyCode: "RWF",
		currencySymbol: "Fr",
		currencyName: "Rwandan Franc"
	},
	"Saint Barthelemy": {
		flag: "🇧🇱",
		isoCode: "BL",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-BL",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Saint Kitts and Nevis": {
		flag: "🇰🇳",
		isoCode: "KN",
		langCode: "en",
		langName: "English",
		hreflang: "en-KN",
		currencyCode: "XCD",
		currencySymbol: "$",
		currencyName: "East Caribbean Dollar"
	},
	"Saint Lucia": {
		flag: "🇱🇨",
		isoCode: "LC",
		langCode: "en",
		langName: "English",
		hreflang: "en-LC",
		currencyCode: "XCD",
		currencySymbol: "$",
		currencyName: "East Caribbean Dollar"
	},
	"Saint Vincent and the Grenadines": {
		flag: "🇻🇨",
		isoCode: "VC",
		langCode: "en",
		langName: "English",
		hreflang: "en-VC",
		currencyCode: "XCD",
		currencySymbol: "$",
		currencyName: "East Caribbean Dollar"
	},
	"Samoa": {
		flag: "🇼🇸",
		isoCode: "WS",
		langCode: "sm",
		langName: "Gagana Samoa",
		hreflang: "sm-WS",
		currencyCode: "WST",
		currencySymbol: "T",
		currencyName: "Samoan Tālā"
	},
	"San Marino": {
		flag: "🇸🇲",
		isoCode: "SM",
		langCode: "it",
		langName: "Italiano",
		hreflang: "it-SM",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Sao Tome and Principe": {
		flag: "🇸🇹",
		isoCode: "ST",
		langCode: "pt",
		langName: "Português",
		hreflang: "pt-ST",
		currencyCode: "STN",
		currencySymbol: "Db",
		currencyName: "São Tomé & Príncipe Dobra"
	},
	"Saudi Arabia": {
		flag: "🇸🇦",
		isoCode: "SA",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-SA",
		currencyCode: "SAR",
		currencySymbol: "﷼",
		currencyName: "Saudi Riyal"
	},
	"Senegal": {
		flag: "🇸🇳",
		isoCode: "SN",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-SN",
		currencyCode: "XOF",
		currencySymbol: "CFA",
		currencyName: "West African CFA Franc"
	},
	"Serbia": {
		flag: "🇷🇸",
		isoCode: "RS",
		langCode: "sr",
		langName: "Српски",
		hreflang: "sr-RS",
		currencyCode: "RSD",
		currencySymbol: "din",
		currencyName: "Serbian Dinar"
	},
	"Seychelles": {
		flag: "🇸🇨",
		isoCode: "SC",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-SC",
		currencyCode: "SCR",
		currencySymbol: "₨",
		currencyName: "Seychellois Rupee"
	},
	"Sierra Leone": {
		flag: "🇸🇱",
		isoCode: "SL",
		langCode: "en",
		langName: "English",
		hreflang: "en-SL",
		currencyCode: "SLE",
		currencySymbol: "Le",
		currencyName: "Sierra Leonean Leone"
	},
	"Singapore": {
		flag: "🇸🇬",
		isoCode: "SG",
		langCode: "en",
		langName: "English",
		hreflang: "en-SG",
		currencyCode: "SGD",
		currencySymbol: "S$",
		currencyName: "Singapore Dollar"
	},
	"Slovakia": {
		flag: "🇸🇰",
		isoCode: "SK",
		langCode: "sk",
		langName: "Slovenčina",
		hreflang: "sk-SK",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Slovenia": {
		flag: "🇸🇮",
		isoCode: "SI",
		langCode: "sl",
		langName: "Slovenščina",
		hreflang: "sl-SI",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Solomon Islands": {
		flag: "🇸🇧",
		isoCode: "SB",
		langCode: "en",
		langName: "English",
		hreflang: "en-SB",
		currencyCode: "SBD",
		currencySymbol: "$",
		currencyName: "Solomon Islands Dollar"
	},
	"Somalia": {
		flag: "🇸🇴",
		isoCode: "SO",
		langCode: "so",
		langName: "Soomaali",
		hreflang: "so-SO",
		currencyCode: "SOS",
		currencySymbol: "Sh",
		currencyName: "Somali Shilling"
	},
	"South Africa": {
		flag: "🇿🇦",
		isoCode: "ZA",
		langCode: "en",
		langName: "English",
		hreflang: "en-ZA",
		currencyCode: "ZAR",
		currencySymbol: "R",
		currencyName: "South African Rand"
	},
	"South Korea": {
		flag: "🇰🇷",
		isoCode: "KR",
		langCode: "ko",
		langName: "한국어",
		hreflang: "ko-KR",
		currencyCode: "KRW",
		currencySymbol: "₩",
		currencyName: "South Korean Won"
	},
	"South Sudan": {
		flag: "🇸🇸",
		isoCode: "SS",
		langCode: "en",
		langName: "English",
		hreflang: "en-SS",
		currencyCode: "SSP",
		currencySymbol: "£",
		currencyName: "South Sudanese Pound"
	},
	"Spain": {
		flag: "🇪🇸",
		isoCode: "ES",
		langCode: "es",
		langName: "Español",
		hreflang: "es-ES",
		currencyCode: "EUR",
		currencySymbol: "€",
		currencyName: "Euro"
	},
	"Sri Lanka": {
		flag: "🇱🇰",
		isoCode: "LK",
		langCode: "si",
		langName: "සිංහල",
		hreflang: "si-LK",
		currencyCode: "LKR",
		currencySymbol: "₨",
		currencyName: "Sri Lankan Rupee"
	},
	"Sudan": {
		flag: "🇸🇩",
		isoCode: "SD",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-SD",
		currencyCode: "SDG",
		currencySymbol: "£",
		currencyName: "Sudanese Pound"
	},
	"Suriname": {
		flag: "🇸🇷",
		isoCode: "SR",
		langCode: "nl",
		langName: "Nederlands",
		hreflang: "nl-SR",
		currencyCode: "SRD",
		currencySymbol: "$",
		currencyName: "Surinamese Dollar"
	},
	"Sweden": {
		flag: "🇸🇪",
		isoCode: "SE",
		langCode: "sv",
		langName: "Svenska",
		hreflang: "sv-SE",
		currencyCode: "SEK",
		currencySymbol: "kr",
		currencyName: "Swedish Krona"
	},
	"Switzerland": {
		flag: "🇨🇭",
		isoCode: "CH",
		langCode: "de",
		langName: "Deutsch",
		hreflang: "de-CH",
		currencyCode: "CHF",
		currencySymbol: "Fr",
		currencyName: "Swiss Franc"
	},
	"Taiwan": {
		flag: "🇹🇼",
		isoCode: "TW",
		langCode: "zh",
		langName: "繁體中文",
		hreflang: "zh-TW",
		currencyCode: "TWD",
		currencySymbol: "$",
		currencyName: "New Taiwan Dollar"
	},
	"Tajikistan": {
		flag: "🇹🇯",
		isoCode: "TJ",
		langCode: "tg",
		langName: "Тоҷикӣ",
		hreflang: "tg-TJ",
		currencyCode: "TJS",
		currencySymbol: "SM",
		currencyName: "Tajikistani Somoni"
	},
	"Tanzania": {
		flag: "🇹🇿",
		isoCode: "TZ",
		langCode: "sw",
		langName: "Kiswahili",
		hreflang: "sw-TZ",
		currencyCode: "TZS",
		currencySymbol: "Sh",
		currencyName: "Tanzanian Shilling"
	},
	"Thailand": {
		flag: "🇹🇭",
		isoCode: "TH",
		langCode: "th",
		langName: "ภาษาไทย",
		hreflang: "th-TH",
		currencyCode: "THB",
		currencySymbol: "฿",
		currencyName: "Thai Baht"
	},
	"Timor-Leste": {
		flag: "🇹🇱",
		isoCode: "TL",
		langCode: "pt",
		langName: "Português",
		hreflang: "pt-TL",
		currencyCode: "USD",
		currencySymbol: "$",
		currencyName: "US Dollar"
	},
	"Togo": {
		flag: "🇹🇬",
		isoCode: "TG",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-TG",
		currencyCode: "XOF",
		currencySymbol: "CFA",
		currencyName: "West African CFA Franc"
	},
	"Tunisia": {
		flag: "🇹🇳",
		isoCode: "TN",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-TN",
		currencyCode: "TND",
		currencySymbol: "د.ت",
		currencyName: "Tunisian Dinar"
	},
	"Tuvalu": {
		flag: "🇹🇻",
		isoCode: "TV",
		langCode: "en",
		langName: "English",
		hreflang: "en-TV",
		currencyCode: "AUD",
		currencySymbol: "A$",
		currencyName: "Australian Dollar"
	},
	"Türkiye": {
		flag: "🇹🇷",
		isoCode: "TR",
		langCode: "tr",
		langName: "Türkçe",
		hreflang: "tr-TR",
		currencyCode: "TRY",
		currencySymbol: "₺",
		currencyName: "Turkish Lira"
	},
	"U.S. Virgin Islands": {
		flag: "🇻🇮",
		isoCode: "VI",
		langCode: "en",
		langName: "English",
		hreflang: "en-VI",
		currencyCode: "USD",
		currencySymbol: "$",
		currencyName: "US Dollar"
	},
	"Uganda": {
		flag: "🇺🇬",
		isoCode: "UG",
		langCode: "en",
		langName: "English",
		hreflang: "en-UG",
		currencyCode: "UGX",
		currencySymbol: "Sh",
		currencyName: "Ugandan Shilling"
	},
	"Ukraine": {
		flag: "🇺🇦",
		isoCode: "UA",
		langCode: "uk",
		langName: "Українська",
		hreflang: "uk-UA",
		currencyCode: "UAH",
		currencySymbol: "₴",
		currencyName: "Ukrainian Hryvnia"
	},
	"United Arab Emirates": {
		flag: "🇦🇪",
		isoCode: "AE",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-AE",
		currencyCode: "AED",
		currencySymbol: "د.إ",
		currencyName: "UAE Dirham"
	},
	"United Kingdom": {
		flag: "🇬🇧",
		isoCode: "GB",
		langCode: "en",
		langName: "English",
		hreflang: "en-GB",
		currencyCode: "GBP",
		currencySymbol: "£",
		currencyName: "British Pound"
	},
	"United States": {
		flag: "🇺🇸",
		isoCode: "US",
		langCode: "en",
		langName: "English",
		hreflang: "en-US",
		currencyCode: "USD",
		currencySymbol: "$",
		currencyName: "US Dollar"
	},
	"Uruguay": {
		flag: "🇺🇾",
		isoCode: "UY",
		langCode: "es",
		langName: "Español",
		hreflang: "es-UY",
		currencyCode: "UYU",
		currencySymbol: "$",
		currencyName: "Uruguayan Peso"
	},
	"Uzbekistan": {
		flag: "🇺🇿",
		isoCode: "UZ",
		langCode: "uz",
		langName: "O'zbek",
		hreflang: "uz-UZ",
		currencyCode: "UZS",
		currencySymbol: "so'm",
		currencyName: "Uzbekistani So'm"
	},
	"Vanuatu": {
		flag: "🇻🇺",
		isoCode: "VU",
		langCode: "fr",
		langName: "Français",
		hreflang: "fr-VU",
		currencyCode: "VUV",
		currencySymbol: "Vt",
		currencyName: "Vanuatu Vatu"
	},
	"Venezuela": {
		flag: "🇻🇪",
		isoCode: "VE",
		langCode: "es",
		langName: "Español",
		hreflang: "es-VE",
		currencyCode: "VES",
		currencySymbol: "Bs.S",
		currencyName: "Venezuelan Bolívar Soberano"
	},
	"Vietnam": {
		flag: "🇻🇳",
		isoCode: "VN",
		langCode: "vi",
		langName: "Tiếng Việt",
		hreflang: "vi-VN",
		currencyCode: "VND",
		currencySymbol: "₫",
		currencyName: "Vietnamese Dong"
	},
	"Yemen": {
		flag: "🇾🇪",
		isoCode: "YE",
		langCode: "ar",
		langName: "العربية",
		hreflang: "ar-YE",
		currencyCode: "YER",
		currencySymbol: "﷼",
		currencyName: "Yemeni Rial"
	},
	"Zambia": {
		flag: "🇿🇲",
		isoCode: "ZM",
		langCode: "en",
		langName: "English",
		hreflang: "en-ZM",
		currencyCode: "ZMW",
		currencySymbol: "ZK",
		currencyName: "Zambian Kwacha"
	},
	"Zimbabwe": {
		flag: "🇿🇼",
		isoCode: "ZW",
		langCode: "en",
		langName: "English",
		hreflang: "en-ZW",
		currencyCode: "ZWL",
		currencySymbol: "$",
		currencyName: "Zimbabwean Dollar"
	}
};
function getCountryMeta(country) {
	return COUNTRY_META[country] ?? {
		flag: "🌍",
		isoCode: "US",
		langCode: "en",
		langName: "English",
		hreflang: "en",
		currencyCode: "USD",
		currencySymbol: "$",
		currencyName: "US Dollar"
	};
}
function detectCountryFromBrowserLocale() {
	if (typeof window === "undefined") return null;
	const lang = (navigator.language || navigator.languages?.[0] || "").toLowerCase();
	const localeCountryMap = {
		"hi": "India",
		"hi-in": "India",
		"en-in": "India",
		"en-gb": "United Kingdom",
		"en-us": "United States",
		"en-au": "Australia",
		"en-ca": "Canada",
		"en-nz": "New Zealand",
		"en-sg": "Singapore",
		"en-za": "South Africa",
		"en-ng": "Nigeria",
		"de": "Germany",
		"de-de": "Germany",
		"de-at": "Austria",
		"de-ch": "Switzerland",
		"fr": "France",
		"fr-fr": "France",
		"fr-be": "Belgium",
		"fr-ch": "Switzerland",
		"es": "Spain",
		"es-es": "Spain",
		"es-mx": "Mexico",
		"es-ar": "Argentina",
		"es-co": "Colombia",
		"es-cl": "Chile",
		"es-pe": "Peru",
		"pt": "Portugal",
		"pt-br": "Brazil",
		"pt-pt": "Portugal",
		"it": "Italy",
		"it-it": "Italy",
		"ja": "Japan",
		"ja-jp": "Japan",
		"zh": "China",
		"zh-cn": "China",
		"zh-tw": "Taiwan",
		"zh-hk": "Hong Kong",
		"ko": "South Korea",
		"ko-kr": "South Korea",
		"ar": "Saudi Arabia",
		"ar-sa": "Saudi Arabia",
		"ar-ae": "United Arab Emirates",
		"ar-eg": "Egypt",
		"ar-iq": "Iraq",
		"ru": "Russia",
		"ru-ru": "Russia",
		"nl": "Netherlands",
		"nl-nl": "Netherlands",
		"nl-be": "Belgium",
		"tr": "Türkiye",
		"tr-tr": "Türkiye",
		"pl": "Poland",
		"pl-pl": "Poland",
		"uk": "Ukraine",
		"uk-ua": "Ukraine",
		"vi": "Vietnam",
		"vi-vn": "Vietnam",
		"th": "Thailand",
		"th-th": "Thailand",
		"id": "Indonesia",
		"id-id": "Indonesia",
		"ms": "Malaysia",
		"ms-my": "Malaysia",
		"fil": "Philippines",
		"tl": "Philippines",
		"bn": "Bangladesh",
		"bn-bd": "Bangladesh",
		"ur": "Pakistan",
		"ur-pk": "Pakistan",
		"fa": "Iran",
		"fa-ir": "Iran",
		"sw": "Kenya",
		"sw-ke": "Kenya",
		"am": "Ethiopia",
		"am-et": "Ethiopia",
		"sv": "Sweden",
		"sv-se": "Sweden",
		"no": "Norway",
		"nb": "Norway",
		"nn": "Norway",
		"da": "Denmark",
		"da-dk": "Denmark",
		"fi": "Finland",
		"fi-fi": "Finland",
		"el": "Greece",
		"el-gr": "Greece",
		"cs": "Czechia",
		"cs-cz": "Czechia",
		"sk": "Slovakia",
		"sk-sk": "Slovakia",
		"ro": "Romania",
		"ro-ro": "Romania",
		"hu": "Hungary",
		"hu-hu": "Hungary",
		"he": "Israel",
		"he-il": "Israel",
		"bg": "Bulgaria",
		"bg-bg": "Bulgaria",
		"hr": "Croatia",
		"hr-hr": "Croatia",
		"sr": "Serbia",
		"sr-rs": "Serbia",
		"lt": "Lithuania",
		"lt-lt": "Lithuania",
		"lv": "Latvia",
		"lv-lv": "Latvia",
		"et": "Estonia",
		"et-ee": "Estonia",
		"ka": "Georgia",
		"ka-ge": "Georgia",
		"hy": "Armenia",
		"hy-am": "Armenia",
		"mn": "Mongolia",
		"mn-mn": "Mongolia",
		"ne": "Nepal",
		"ne-np": "Nepal",
		"si": "Sri Lanka",
		"si-lk": "Sri Lanka",
		"my": "Myanmar",
		"my-mm": "Myanmar",
		"km": "Cambodia",
		"km-kh": "Cambodia",
		"lo": "Laos",
		"lo-la": "Laos"
	};
	return localeCountryMap[lang] || localeCountryMap[lang.split("-")[0]] || null;
}
//#endregion
//#region src/components/GlobalLocaleSelector.tsx
var LS_COUNTRY = "wwm_country";
var LS_LANG = "wwm_lang";
var LS_CURRENCY = "wwm_currency";
var LS_DISMISSED = "wwm_lang_dismissed";
var LS_LOCATION = "wwm_location_slug";
var VIRTUAL_WINDOW = 20;
var DEFAULT_LOCALE$1 = {
	country: "United States",
	langCode: "en",
	langName: "English",
	currencyCode: "USD",
	currencySymbol: "$",
	locationSlug: null,
	flag: "🇺🇸",
	hreflang: "en-US"
};
function readPersistedLocale() {
	if (typeof window === "undefined") return DEFAULT_LOCALE$1;
	const country = localStorage.getItem(LS_COUNTRY) || (() => {
		return detectCountryFromBrowserLocale() || "India";
	})();
	const meta = getCountryMeta(country);
	const langCode = localStorage.getItem(LS_LANG) || meta.langCode;
	const currencyCode = localStorage.getItem(LS_CURRENCY) || meta.currencyCode;
	const locationSlug = localStorage.getItem(LS_LOCATION) || null;
	return {
		country,
		langCode,
		langName: meta.langName,
		currencyCode,
		currencySymbol: meta.currencySymbol,
		locationSlug,
		flag: meta.flag,
		hreflang: meta.hreflang
	};
}
function applyLocaleGlobally(locale) {
	localStorage.setItem(LS_COUNTRY, locale.country);
	localStorage.setItem(LS_LANG, locale.langCode);
	localStorage.setItem(LS_CURRENCY, locale.currencyCode);
	localStorage.setItem(LS_DISMISSED, "true");
	if (locale.locationSlug) localStorage.setItem(LS_LOCATION, locale.locationSlug);
	document.documentElement.lang = locale.hreflang;
	const geoMeta = document.querySelector("meta[name=\"geo.region\"]");
	const meta = getCountryMeta(locale.country);
	if (geoMeta) geoMeta.content = meta.isoCode;
	else {
		const m = document.createElement("meta");
		m.name = "geo.region";
		m.content = meta.isoCode;
		document.head.appendChild(m);
	}
	window.__wwm_locale__ = locale;
	const params = new URLSearchParams(window.location.search);
	if (locale.langCode !== "en") params.set("lang", locale.langCode);
	else params.delete("lang");
	if (locale.currencyCode !== "USD") params.set("currency", locale.currencyCode);
	else params.delete("currency");
	const qs = params.toString();
	window.history.replaceState(null, "", window.location.pathname + (qs ? `?${qs}` : "") + window.location.hash);
	window.dispatchEvent(new CustomEvent("localeChange", { detail: locale }));
	window.dispatchEvent(new CustomEvent("currencyChange", { detail: locale.currencyCode }));
	window.dispatchEvent(new CustomEvent("langChange", { detail: locale.langCode }));
}
var FEATURED_COUNTRIES = [
	"United States",
	"India",
	"United Kingdom",
	"Germany",
	"France",
	"Spain",
	"Japan",
	"Brazil",
	"Australia",
	"Canada",
	"Singapore",
	"United Arab Emirates"
];
var OTHER_COUNTRIES = Object.keys(COUNTRY_META).sort().filter((c) => !FEATURED_COUNTRIES.includes(c));
var CountryList = ({ selected, onSelect }) => {
	const [search, setSearch] = useState("");
	const filteredFeatured = useMemo(() => {
		if (search.trim() === "") return FEATURED_COUNTRIES;
		return FEATURED_COUNTRIES.filter((c) => c.toLowerCase().includes(search.toLowerCase()));
	}, [search]);
	const filteredOther = useMemo(() => {
		if (search.trim() === "") return OTHER_COUNTRIES;
		return OTHER_COUNTRIES.filter((c) => c.toLowerCase().includes(search.toLowerCase()));
	}, [search]);
	const renderCountryButton = (country) => {
		const m = COUNTRY_META[country];
		const isActive = country === selected;
		return /* @__PURE__ */ jsxs("button", {
			role: "option",
			"aria-selected": isActive,
			onClick: () => onSelect(country),
			className: `w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left text-[11px] font-medium transition-all duration-100 ${isActive ? "bg-brand-600/25 text-white border border-brand-500/30" : "text-white/65 hover:bg-white/5 hover:text-white"}`,
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-sm leading-none shrink-0",
					children: m?.flag ?? "🌍"
				}),
				/* @__PURE__ */ jsx("span", {
					className: "flex-1 truncate",
					children: country
				}),
				isActive && /* @__PURE__ */ jsx("svg", {
					className: "w-3 h-3 text-brand-400 shrink-0",
					fill: "currentColor",
					viewBox: "0 0 20 20",
					children: /* @__PURE__ */ jsx("path", {
						fillRule: "evenodd",
						d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
						clipRule: "evenodd"
					})
				})
			]
		}, country);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col h-full",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative mb-2",
			children: [/* @__PURE__ */ jsx("input", {
				type: "text",
				value: search,
				onChange: (e) => setSearch(e.target.value),
				placeholder: "Search country…",
				"aria-label": "Search country",
				className: "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[11px] text-white placeholder-white/30 focus:outline-none focus:border-brand-500/60 transition-colors"
			}), /* @__PURE__ */ jsx("svg", {
				className: "absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-white/30",
				fill: "none",
				stroke: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", {
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: 2.5,
					d: "M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "overflow-y-auto flex-1 space-y-0.5 pr-1 scrollbar-thin",
			role: "listbox",
			"aria-label": "Country list",
			children: [
				filteredFeatured.length > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [search.trim() === "" && /* @__PURE__ */ jsx("p", {
					className: "text-[9px] font-bold text-white/30 px-2 py-1 uppercase tracking-wider",
					children: "Main Countries"
				}), filteredFeatured.map(renderCountryButton)] }),
				filteredOther.length > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [search.trim() === "" && /* @__PURE__ */ jsx("p", {
					className: "text-[9px] font-bold text-white/30 px-2 py-1 mt-2 uppercase tracking-wider",
					children: "Other Countries"
				}), filteredOther.slice(0, 50).map(renderCountryButton)] }),
				filteredOther.length > 50 && /* @__PURE__ */ jsx("p", {
					className: "text-[10px] text-white/30 text-center py-2",
					children: "Refine search to see more countries…"
				})
			]
		})]
	});
};
var LocationList = ({ locations, country, selectedSlug, onSelect }) => {
	const [search, setSearch] = useState("");
	const [visibleCount, setVisibleCount] = useState(VIRTUAL_WINDOW);
	const countryLocs = useMemo(() => locations.filter((l) => l.country === country), [locations, country]);
	const filtered = useMemo(() => {
		const q = search.toLowerCase().trim();
		return q === "" ? countryLocs : countryLocs.filter((l) => l.city.toLowerCase().includes(q) || l.state.toLowerCase().includes(q));
	}, [countryLocs, search]);
	useEffect(() => {
		setVisibleCount(VIRTUAL_WINDOW);
	}, [country, search]);
	const visible = filtered.slice(0, visibleCount);
	if (locations.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center h-32 text-white/40 text-[11px] animate-pulse",
		children: [/* @__PURE__ */ jsxs("svg", {
			className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white/50 mb-2",
			fill: "none",
			viewBox: "0 0 24 24",
			children: [/* @__PURE__ */ jsx("circle", {
				className: "opacity-25",
				cx: "12",
				cy: "12",
				r: "10",
				stroke: "currentColor",
				strokeWidth: "4"
			}), /* @__PURE__ */ jsx("path", {
				className: "opacity-75",
				fill: "currentColor",
				d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			})]
		}), "Loading location directory…"]
	});
	if (countryLocs.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center h-32 text-white/25 text-[11px]",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-2xl mb-2",
				children: "📍"
			}),
			"No locations found for ",
			country
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col h-full",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "relative mb-2",
				children: [/* @__PURE__ */ jsx("input", {
					type: "text",
					value: search,
					onChange: (e) => setSearch(e.target.value),
					placeholder: `Search in ${country}…`,
					"aria-label": "Search location",
					className: "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[11px] text-white placeholder-white/30 focus:outline-none focus:border-brand-500/60 transition-colors"
				}), /* @__PURE__ */ jsx("svg", {
					className: "absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-white/30",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2.5,
						d: "M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
					})
				})]
			}),
			/* @__PURE__ */ jsxs("button", {
				onClick: () => onSelect(null),
				className: `w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] mb-1 transition-colors ${!selectedSlug ? "bg-brand-600/20 text-brand-300 border border-brand-500/20" : "text-white/40 hover:text-white/70 hover:bg-white/5"}`,
				children: [
					"🌐 ",
					!selectedSlug ? "✓ " : "",
					"All ",
					country,
					" locations"
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "overflow-y-auto flex-1 space-y-0.5 pr-1 scrollbar-thin",
				role: "listbox",
				"aria-label": "Location list",
				children: [visible.map((loc) => {
					const isActive = loc.id === selectedSlug;
					return /* @__PURE__ */ jsxs("a", {
						href: `/locations/${loc.stateSlug}/${loc.citySlug}`,
						onClick: () => onSelect(loc),
						role: "option",
						"aria-selected": isActive,
						className: `w-full flex items-start gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all duration-100 group ${isActive ? "bg-brand-600/25 border border-brand-500/30" : "hover:bg-white/5"}`,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-brand-400 mt-0.5 shrink-0",
								children: "📍"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ jsx("p", {
									className: `text-[11px] font-semibold truncate ${isActive ? "text-white" : "text-white/75 group-hover:text-white"}`,
									children: loc.city
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-white/35 truncate",
									children: loc.state
								})]
							}),
							isActive && /* @__PURE__ */ jsx("svg", {
								className: "w-3 h-3 text-brand-400 shrink-0 mt-0.5",
								fill: "currentColor",
								viewBox: "0 0 20 20",
								children: /* @__PURE__ */ jsx("path", {
									fillRule: "evenodd",
									d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
									clipRule: "evenodd"
								})
							})
						]
					}, loc.id);
				}), visibleCount < filtered.length && /* @__PURE__ */ jsxs("button", {
					onClick: () => setVisibleCount((c) => c + VIRTUAL_WINDOW),
					className: "w-full text-center text-[10px] text-white/40 hover:text-white/70 py-2 transition-colors",
					children: [
						"Load more (",
						filtered.length - visibleCount,
						" remaining)…"
					]
				})]
			})
		]
	});
};
var POPULAR_CURRENCIES = [
	{
		code: "USD",
		symbol: "$",
		name: "US Dollar"
	},
	{
		code: "EUR",
		symbol: "€",
		name: "Euro"
	},
	{
		code: "GBP",
		symbol: "£",
		name: "British Pound"
	},
	{
		code: "INR",
		symbol: "₹",
		name: "Indian Rupee"
	},
	{
		code: "JPY",
		symbol: "¥",
		name: "Japanese Yen"
	},
	{
		code: "CNY",
		symbol: "¥",
		name: "Chinese Yuan"
	},
	{
		code: "AUD",
		symbol: "A$",
		name: "Australian Dollar"
	},
	{
		code: "CAD",
		symbol: "C$",
		name: "Canadian Dollar"
	},
	{
		code: "CHF",
		symbol: "Fr",
		name: "Swiss Franc"
	},
	{
		code: "SGD",
		symbol: "S$",
		name: "Singapore Dollar"
	},
	{
		code: "AED",
		symbol: "د.إ",
		name: "UAE Dirham"
	},
	{
		code: "SAR",
		symbol: "﷼",
		name: "Saudi Riyal"
	},
	{
		code: "BRL",
		symbol: "R$",
		name: "Brazilian Real"
	},
	{
		code: "MXN",
		symbol: "$",
		name: "Mexican Peso"
	},
	{
		code: "KRW",
		symbol: "₩",
		name: "South Korean Won"
	},
	{
		code: "ZAR",
		symbol: "R",
		name: "South African Rand"
	}
];
var GlobalLocaleSelector = ({ instanceId = "desktop" }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [locale, setLocale] = useState(DEFAULT_LOCALE$1);
	const [draft, setDraft] = useState(DEFAULT_LOCALE$1);
	const [showSuggestion, setShowSuggestion] = useState(false);
	const [suggestedCountry, setSuggestedCountry] = useState(null);
	const [locations, setLocations] = useState([]);
	const panelRef = useRef(null);
	const triggerRef = useRef(null);
	useEffect(() => {
		const real = readPersistedLocale();
		setLocale(real);
		setDraft(real);
	}, []);
	useEffect(() => {
		const loadLocs = () => {
			fetch("/locations-index.json").then((res) => res.json()).then((data) => setLocations(data)).catch((err) => {});
		};
		if (typeof window !== "undefined") if ("requestIdleCallback" in window) window.requestIdleCallback(loadLocs);
		else setTimeout(loadLocs, 1500);
	}, []);
	useEffect(() => {
		if (locations.length > 0 && !locale.locationSlug) {
			const userTz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "";
			const countryLocs = locations.filter((l) => l.country === locale.country);
			if (countryLocs.length > 0) {
				let matchedLoc = countryLocs.find((l) => l.timezone && l.timezone.toLowerCase() === userTz.toLowerCase());
				if (!matchedLoc && userTz) {
					const tzCity = userTz.split("/").pop()?.replace(/_/g, " ").toLowerCase();
					if (tzCity) matchedLoc = countryLocs.find((l) => l.city.toLowerCase().includes(tzCity) || tzCity.includes(l.city.toLowerCase()));
				}
				if (!matchedLoc) matchedLoc = countryLocs[0];
				if (matchedLoc) {
					const updated = {
						...locale,
						locationSlug: matchedLoc.id,
						currencyCode: matchedLoc.currency || locale.currencyCode,
						currencySymbol: matchedLoc.symbol || locale.currencySymbol
					};
					setLocale(updated);
					setDraft(updated);
					applyLocaleGlobally(updated);
				}
			}
		}
	}, [
		locations,
		locale,
		locale.locationSlug
	]);
	const runPreciseGeo = useCallback(() => {
		if (localStorage.getItem("wwm_cookie_consent") === "accepted" && locations.length > 0 && typeof navigator !== "undefined" && navigator.geolocation) navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			let nearest = null;
			let minDistance = Infinity;
			locations.forEach((loc) => {
				const dLat = (loc.latitude - latitude) * Math.PI / 180;
				const dLon = (loc.longitude - longitude) * Math.PI / 180;
				const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(latitude * Math.PI / 180) * Math.cos(loc.latitude * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
				const distance = 6371 * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
				if (distance < minDistance) {
					minDistance = distance;
					nearest = loc;
				}
			});
			if (nearest) {
				const meta = getCountryMeta(nearest.country);
				const updated = {
					country: nearest.country,
					langCode: meta.langCode,
					langName: meta.langName,
					currencyCode: nearest.currency || meta.currencyCode,
					currencySymbol: nearest.symbol || meta.currencySymbol,
					locationSlug: nearest.id,
					flag: meta.flag,
					hreflang: meta.hreflang
				};
				localStorage.setItem("wwm_precise_distance", minDistance.toFixed(1));
				localStorage.setItem("wwm_precise_lat", latitude.toString());
				localStorage.setItem("wwm_precise_lng", longitude.toString());
				setLocale(updated);
				setDraft(updated);
				applyLocaleGlobally(updated);
				window.dispatchEvent(new CustomEvent("preciseLocationFound", { detail: {
					location: nearest,
					distance: minDistance
				} }));
			}
		}, (err) => {
			console.log("Precise GPS access declined or unavailable:", err);
		}, {
			enableHighAccuracy: false,
			timeout: 6e3,
			maximumAge: 864e5
		});
	}, [locations, locale]);
	useEffect(() => {
		window.addEventListener("cookieConsentAccepted", runPreciseGeo);
		return () => window.removeEventListener("cookieConsentAccepted", runPreciseGeo);
	}, [runPreciseGeo]);
	const open = useCallback(() => {
		setDraft(locale);
		setIsOpen(true);
	}, [locale]);
	const close = useCallback(() => setIsOpen(false), []);
	useEffect(() => {
		const handler = (e) => {
			if (panelRef.current && !panelRef.current.contains(e.target) && triggerRef.current && !triggerRef.current.contains(e.target)) close();
		};
		if (isOpen) document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, [isOpen, close]);
	useEffect(() => {
		const handler = (e) => {
			if (e.key === "Escape") close();
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [close]);
	const handleCountrySelect = useCallback((country) => {
		const meta = getCountryMeta(country);
		setDraft((prev) => ({
			...prev,
			country,
			langCode: meta.langCode,
			langName: meta.langName,
			currencyCode: meta.currencyCode,
			currencySymbol: meta.currencySymbol,
			flag: meta.flag,
			hreflang: meta.hreflang,
			locationSlug: null
		}));
	}, []);
	const handleCurrencySelect = useCallback((code) => {
		const cur = POPULAR_CURRENCIES.find((c) => c.code === code);
		setDraft((prev) => ({
			...prev,
			currencyCode: code,
			currencySymbol: cur?.symbol ?? code
		}));
	}, []);
	const handleLocationSelect = useCallback((loc) => {
		setDraft((prev) => ({
			...prev,
			locationSlug: loc ? loc.id : null
		}));
	}, []);
	const applyPreferences = useCallback(() => {
		setLocale(draft);
		applyLocaleGlobally(draft);
		close();
	}, [draft, close]);
	const acceptSuggestion = useCallback(() => {
		if (!suggestedCountry) return;
		const meta = getCountryMeta(suggestedCountry);
		const newLocale = {
			country: suggestedCountry,
			langCode: meta.langCode,
			langName: meta.langName,
			currencyCode: meta.currencyCode,
			currencySymbol: meta.currencySymbol,
			locationSlug: null,
			flag: meta.flag,
			hreflang: meta.hreflang
		};
		setLocale(newLocale);
		setDraft(newLocale);
		applyLocaleGlobally(newLocale);
		setShowSuggestion(false);
	}, [suggestedCountry]);
	const dismissSuggestion = useCallback(() => {
		localStorage.setItem(LS_DISMISSED, "true");
		setShowSuggestion(false);
	}, []);
	const triggerMeta = getCountryMeta(locale.country);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsxs("button", {
			id: `locale-selector-trigger-${instanceId}`,
			ref: triggerRef,
			onClick: () => isOpen ? close() : open(),
			"aria-haspopup": "dialog",
			"aria-expanded": isOpen,
			"aria-label": `Global preferences: ${locale.country}, ${locale.langName}, ${locale.currencyCode}`,
			className: "flex items-center gap-1.5 border-l border-white/10 pl-6 ml-2 text-white/60 hover:text-white transition-colors cursor-pointer text-[10px] font-black uppercase tracking-[0.15em] touch-target-expand group",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-sm",
					children: locale.flag
				}),
				/* @__PURE__ */ jsx("span", {
					className: "hidden xl:inline",
					children: triggerMeta.isoCode
				}),
				/* @__PURE__ */ jsx("span", {
					className: "text-white/30",
					children: "·"
				}),
				/* @__PURE__ */ jsx("span", { children: locale.currencySymbol }),
				/* @__PURE__ */ jsx("span", {
					className: "text-white/30",
					children: "·"
				}),
				/* @__PURE__ */ jsx("span", { children: locale.langCode.toUpperCase() }),
				/* @__PURE__ */ jsx("svg", {
					className: `w-2.5 h-2.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 3,
						d: "M19 9l-7 7-7-7"
					})
				})
			]
		}),
		isOpen && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
			className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[490] sm:hidden",
			onClick: close
		}), /* @__PURE__ */ jsx("div", {
			ref: panelRef,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Global locale preferences",
			className: "fixed bottom-0 left-0 right-0 z-[500] rounded-t-3xl border-t border-white/10 overflow-hidden \n                       sm:absolute sm:bottom-auto sm:left-auto sm:right-0 sm:top-full sm:mt-2 sm:rounded-2xl sm:border sm:w-[680px]",
			style: { animation: typeof window !== "undefined" && window.innerWidth < 640 ? "localeSlideUpMobile 0.3s cubic-bezier(0.16,1,0.3,1)" : "localeSlideIn 0.25s cubic-bezier(0.16,1,0.3,1)" },
			children: /* @__PURE__ */ jsxs("div", {
				className: "bg-slate-900/98 backdrop-blur-2xl shadow-2xl shadow-black/60 overflow-hidden w-full max-w-full",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between px-5 py-3.5 border-b border-white/5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-xl",
								children: draft.flag
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "text-white font-bold text-sm leading-tight",
								children: "Global Preferences"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-white/40 text-[10px]",
								children: "Select country, language, currency & local location"
							})] })]
						}), /* @__PURE__ */ jsx("button", {
							onClick: close,
							"aria-label": "Close preferences panel",
							className: "text-white/30 hover:text-white/70 transition-colors p-1",
							children: /* @__PURE__ */ jsx("svg", {
								className: "w-4 h-4",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ jsx("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2.5,
									d: "M6 18L18 6M6 6l12 12"
								})
							})
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 sm:grid-cols-[200px_1fr] divide-y sm:divide-y-0 sm:divide-x divide-white/5 h-auto sm:h-[380px]",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "p-3 flex flex-col max-h-[160px] sm:max-h-none min-h-[120px] sm:min-h-0",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[10px] font-black uppercase tracking-widest text-white/30 mb-2",
								children: "Country"
							}), /* @__PURE__ */ jsx(CountryList, {
								selected: draft.country,
								onSelect: handleCountrySelect
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-3 flex flex-col gap-3 min-h-0",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-[10px] font-black uppercase tracking-widest text-white/30 mb-1.5",
											children: "Language"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-base",
												children: getCountryMeta(draft.country).flag
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[11px] font-bold text-white",
													children: getCountryMeta(draft.country).langName
												}), /* @__PURE__ */ jsxs("p", {
													className: "text-[10px] text-white/35",
													children: [
														draft.langCode.toUpperCase(),
														" · ",
														draft.hreflang
													]
												})]
											})]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[9px] text-white/25 mt-1 px-1",
											children: "Auto-matched"
										})
									] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] font-black uppercase tracking-widest text-white/30 mb-1.5",
										children: "Currency"
									}), /* @__PURE__ */ jsxs("select", {
										value: draft.currencyCode,
										onChange: (e) => handleCurrencySelect(e.target.value),
										"aria-label": "Select currency",
										className: "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-[11px] text-white focus:outline-none focus:border-brand-500/60 transition-colors cursor-pointer appearance-none",
										style: {
											backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
											backgroundRepeat: "no-repeat",
											backgroundPosition: "right 8px center",
											backgroundSize: "16px"
										},
										children: [
											(() => {
												const meta = getCountryMeta(draft.country);
												return /* @__PURE__ */ jsxs("option", {
													value: meta.currencyCode,
													children: [
														meta.currencySymbol,
														" ",
														meta.currencyCode,
														" — ",
														meta.currencyName,
														" (Default)"
													]
												});
											})(),
											/* @__PURE__ */ jsx("option", {
												disabled: true,
												children: "──── Popular ────"
											}),
											POPULAR_CURRENCIES.filter((c) => c.code !== getCountryMeta(draft.country).currencyCode).map((c) => /* @__PURE__ */ jsxs("option", {
												value: c.code,
												children: [
													c.symbol,
													" ",
													c.code,
													" — ",
													c.name
												]
											}, c.code))
										]
									})] })]
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-white/5 hidden sm:block" }),
								/* @__PURE__ */ jsxs("div", {
									className: "flex-grow flex flex-col min-h-0 max-h-[180px] sm:max-h-none",
									children: [/* @__PURE__ */ jsxs("p", {
										className: "text-[10px] font-black uppercase tracking-widest text-white/30 mb-1.5",
										children: ["Local Location ", /* @__PURE__ */ jsx("span", {
											className: "normal-case text-white/20 font-normal",
											children: "(optional)"
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: "flex-1 overflow-hidden min-h-0",
										children: /* @__PURE__ */ jsx(LocationList, {
											locations,
											country: draft.country,
											selectedSlug: draft.locationSlug,
											onSelect: handleLocationSelect
										})
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between px-5 py-3.5 border-t border-white/5 bg-white/[0.02]",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "hidden sm:flex items-center gap-2 text-[10px] text-white/30",
							children: [/* @__PURE__ */ jsx("svg", {
								className: "w-3 h-3 text-emerald-500",
								fill: "currentColor",
								viewBox: "0 0 20 20",
								children: /* @__PURE__ */ jsx("path", {
									fillRule: "evenodd",
									d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
									clipRule: "evenodd"
								})
							}), /* @__PURE__ */ jsx("span", { children: "Stored locally" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-end w-full sm:w-auto gap-2",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: close,
								className: "text-[11px] text-white/40 hover:text-white/70 px-3 py-2 rounded-lg transition-colors",
								children: "Cancel"
							}), /* @__PURE__ */ jsxs("button", {
								id: `locale-apply-btn-${instanceId}`,
								onClick: applyPreferences,
								className: "bg-brand-600 hover:bg-brand-700 text-white text-[11px] font-bold px-5 py-2 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/30 flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx("svg", {
									className: "w-3.5 h-3.5",
									fill: "none",
									stroke: "currentColor",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ jsx("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: 2.5,
										d: "M5 13l4 4L19 7"
									})
								}), "Apply Preferences"]
							})]
						})]
					})
				]
			})
		})] }),
		showSuggestion && suggestedCountry && (() => {
			const meta = getCountryMeta(suggestedCountry);
			return /* @__PURE__ */ jsx("div", {
				role: "dialog",
				"aria-live": "polite",
				"aria-label": "Language suggestion",
				className: "fixed bottom-6 right-6 z-[600] max-w-sm w-full",
				style: { animation: "localeSlideUp 0.4s cubic-bezier(0.16,1,0.3,1)" },
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-slate-900/96 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-3 mb-4",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-3xl leading-none mt-0.5",
								children: meta.flag
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ jsxs("p", {
									className: "text-white font-bold text-sm",
									children: [
										"Viewing from ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-brand-400",
											children: suggestedCountry
										}),
										"?"
									]
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-white/70 text-xs mt-1",
									children: [
										"Switch to ",
										meta.langName,
										" · ",
										meta.currencyCode,
										" (",
										meta.currencySymbol,
										") for a better experience."
									]
								})]
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: dismissSuggestion,
								"aria-label": "Dismiss suggestion",
								className: "text-white/25 hover:text-white/60 transition-colors shrink-0",
								children: /* @__PURE__ */ jsx("svg", {
									className: "w-4 h-4",
									fill: "none",
									stroke: "currentColor",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ jsx("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: 2.5,
										d: "M6 18L18 6M6 6l12 12"
									})
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsxs("button", {
							id: `locale-suggestion-accept-${instanceId}`,
							onClick: acceptSuggestion,
							className: "flex-1 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/30",
							children: [
								"Yes, switch to ",
								suggestedCountry,
								" ",
								meta.flag
							]
						}), /* @__PURE__ */ jsx("button", {
							id: `locale-suggestion-dismiss-${instanceId}`,
							onClick: dismissSuggestion,
							className: "flex-1 text-white/50 hover:text-white/80 text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200",
							children: "Stay in English"
						})]
					})]
				})
			});
		})(),
		/* @__PURE__ */ jsx("style", { children: `
        @keyframes localeSlideIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        @keyframes localeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes localeSlideUpMobile {
          from { transform: translateY(100%); }
          to   { transform: translateY(0);    }
        }
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      ` })
	] });
};
//#endregion
//#region src/hooks/use3DTilt.ts
/**
* Handles 3D tilt effects on elements with .card-3d and .holographic-foil classes.
* Consolidated rAF controller to prevent layout thrashing and maintain 60FPS.
*/
var use3DTilt = () => {
	useEffect(() => {
		if (isSearchBotOrAuditor()) return;
		let latestMouseX = 0;
		let latestMouseY = 0;
		let ticking = false;
		let hoveredCard = null;
		let hoveredFoil = null;
		let lastCard = null;
		let cachedCardRect = null;
		let lastFoil = null;
		let cachedFoilRect = null;
		const updatePositions = () => {
			ticking = false;
			const docEl = document.documentElement;
			docEl.style.setProperty("--mouse-x", `${latestMouseX}px`);
			docEl.style.setProperty("--mouse-y", `${latestMouseY}px`);
			if (hoveredCard) {
				if (hoveredCard !== lastCard || !cachedCardRect) {
					lastCard = hoveredCard;
					cachedCardRect = hoveredCard.getBoundingClientRect();
				}
				const rect = cachedCardRect;
				const x = latestMouseX - rect.left;
				const y = latestMouseY - rect.top;
				const centerX = rect.width / 2;
				const centerY = rect.height / 2;
				const rotateX = parseFloat(((centerY - y) / centerY * 8).toFixed(2));
				const rotateY = parseFloat(((x - centerX) / centerX * 8).toFixed(2));
				hoveredCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
			}
			if (hoveredFoil) {
				if (hoveredFoil !== lastFoil || !cachedFoilRect) {
					lastFoil = hoveredFoil;
					cachedFoilRect = hoveredFoil.getBoundingClientRect();
				}
				const rect = cachedFoilRect;
				const x = latestMouseX - rect.left;
				const y = latestMouseY - rect.top;
				const px = x / rect.width * 100;
				const py = y / rect.height * 100;
				hoveredFoil.style.setProperty("--foil-x", `${px}%`);
				hoveredFoil.style.setProperty("--foil-y", `${py}%`);
				hoveredFoil.style.setProperty("--foil-angle", `${(px + py) * 1.8}deg`);
			}
		};
		const handleMouseMove = (e) => {
			latestMouseX = e.clientX;
			latestMouseY = e.clientY;
			const target = e.target;
			hoveredCard = target.closest(".card-3d");
			hoveredFoil = target.closest(".holographic-foil");
			if (!ticking) {
				requestAnimationFrame(updatePositions);
				ticking = true;
			}
		};
		const handleMouseOut = (e) => {
			const currentTarget = e.target;
			const relatedTarget = e.relatedTarget;
			const card = currentTarget.closest(".card-3d");
			const foil = currentTarget.closest(".holographic-foil");
			if (card && (!relatedTarget || !card.contains(relatedTarget))) {
				card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
				if (hoveredCard === card) hoveredCard = null;
				lastCard = null;
				cachedCardRect = null;
			}
			if (foil && (!relatedTarget || !foil.contains(relatedTarget))) {
				foil.style.removeProperty("--foil-x");
				foil.style.removeProperty("--foil-y");
				foil.style.removeProperty("--foil-angle");
				if (hoveredFoil === foil) hoveredFoil = null;
				lastFoil = null;
				cachedFoilRect = null;
			}
		};
		const handlePointerDown = (e) => {
			const card = e.target.closest(".card-3d");
			if (card) card.style.willChange = "transform";
		};
		const handleTransitionEnd = (e) => {
			const card = e.target;
			if (card && card.classList.contains("card-3d")) card.style.removeProperty("will-change");
		};
		document.addEventListener("mousemove", handleMouseMove, { passive: true });
		document.addEventListener("mouseout", handleMouseOut, { passive: true });
		document.addEventListener("pointerdown", handlePointerDown, { passive: true });
		document.addEventListener("transitionend", handleTransitionEnd, { passive: true });
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseout", handleMouseOut);
			document.removeEventListener("pointerdown", handlePointerDown);
			document.removeEventListener("transitionend", handleTransitionEnd);
		};
	}, []);
};
//#endregion
//#region src/hooks/useScrollProgress.ts
/**
* Updates the CSS variable --scroll-percent-ratio based on window scroll.
* Used for the GPU-accelerated scroll progress bar fallback when animation-timeline isn't supported.
*/
var useScrollProgress = () => {
	useEffect(() => {
		if (typeof CSS !== "undefined" && CSS.supports && CSS.supports("animation-timeline", "scroll()")) return;
		let scrollTicking = false;
		const docEl = document.documentElement;
		const updateScrollProgress = () => {
			scrollTicking = false;
			const scrollHeight = docEl.scrollHeight - docEl.clientHeight;
			if (scrollHeight > 0) {
				const scrolled = window.scrollY / scrollHeight;
				docEl.style.setProperty("--scroll-percent-ratio", scrolled.toString());
			}
		};
		const handleScroll = () => {
			if (!scrollTicking) {
				requestAnimationFrame(updateScrollProgress);
				scrollTicking = true;
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		updateScrollProgress();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
};
//#endregion
//#region src/hooks/useGlossaryTooltip.ts
var useGlossaryTooltip = () => {
	const [tooltip, setTooltip] = useState({
		visible: false,
		term: "",
		definition: "",
		wikidata: "",
		x: 0,
		y: 0
	});
	const tooltipTimeoutRef = useRef(null);
	useEffect(() => {
		if (isSearchBotOrAuditor()) return;
		const handleGlossaryMouseOver = (e) => {
			const target = e.target.closest(".glossary-term");
			if (target) {
				if (tooltipTimeoutRef.current) {
					clearTimeout(tooltipTimeoutRef.current);
					tooltipTimeoutRef.current = null;
				}
				const term = target.getAttribute("data-term");
				const item = GLOSSARY.find((g) => g.term.toLowerCase() === (term || "").toLowerCase());
				if (item) {
					const rect = target.getBoundingClientRect();
					setTooltip({
						visible: true,
						term: item.term,
						definition: item.definition,
						wikidata: item.sameAs,
						x: rect.left + window.scrollX + rect.width / 2,
						y: rect.top + window.scrollY
					});
				}
			}
		};
		const handleGlossaryMouseOut = (e) => {
			if (e.target.closest(".glossary-term")) tooltipTimeoutRef.current = setTimeout(() => {
				setTooltip((prev) => ({
					...prev,
					visible: false
				}));
			}, 200);
		};
		document.addEventListener("mouseover", handleGlossaryMouseOver);
		document.addEventListener("mouseout", handleGlossaryMouseOut);
		return () => {
			document.removeEventListener("mouseover", handleGlossaryMouseOver);
			document.removeEventListener("mouseout", handleGlossaryMouseOut);
		};
	}, []);
	const handleTooltipMouseEnter = () => {
		if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
	};
	const handleTooltipMouseLeave = () => {
		tooltipTimeoutRef.current = setTimeout(() => {
			setTooltip((prev) => ({
				...prev,
				visible: false
			}));
		}, 200);
	};
	return {
		tooltip,
		handleTooltipMouseEnter,
		handleTooltipMouseLeave
	};
};
//#endregion
//#region src/components/NavigationDesktopMenu.tsx
var NavigationDesktopMenu = ({ setIsSearchOpen }) => {
	const [activeDropdown, setActiveDropdown] = useState(null);
	return /* @__PURE__ */ jsxs("nav", {
		className: "hidden lg:flex items-center space-x-2 mr-2",
		"aria-label": "Main Navigation",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "relative group",
				onMouseEnter: () => setActiveDropdown("services"),
				onMouseLeave: () => setActiveDropdown(null),
				children: [/* @__PURE__ */ jsxs("div", {
					className: `relative py-2 px-1 flex items-center text-[17px] font-bold transition-all duration-300 ${activeDropdown === "services" ? "text-brand-500" : "text-slate-300 group-hover:text-brand-500"}`,
					role: "button",
					onClick: () => setActiveDropdown(activeDropdown === "services" ? null : "services"),
					children: [
						"Services",
						/* @__PURE__ */ jsx("svg", {
							className: `w-4 h-4 ml-1.5 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`,
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M19 9l-7 7-7-7"
							})
						}),
						/* @__PURE__ */ jsx("span", { className: `absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === "services" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}` })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: `absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-[800px] transition-all duration-300 ease-out ${activeDropdown === "services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"} z-50`,
					children: /* @__PURE__ */ jsxs("div", {
						className: "bg-[#0B0F19] rounded-2xl shadow-2xl border border-white/10 p-8 grid grid-cols-12 gap-8 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-[#0B0F19]",
						children: [/* @__PURE__ */ jsx("div", {
							className: "col-span-8",
							children: /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-x-8 gap-y-8",
								children: SERVICE_CATEGORIES.map((cat) => /* @__PURE__ */ jsxs("div", {
									className: "group/cat",
									children: [/* @__PURE__ */ jsxs("h4", {
										className: "font-bold text-white mb-3 uppercase text-[10px] tracking-widest flex items-center",
										children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-slate-700 group-hover/cat:bg-brand-500 mr-2 transition-colors" }), cat.title]
									}), /* @__PURE__ */ jsx("div", {
										className: "space-y-1",
										children: cat.items.map((item) => /* @__PURE__ */ jsx("a", {
											href: `/${cat.id}/${item.id}/`,
											className: "block text-sm text-slate-400 hover:text-brand-500 py-1.5 transition-colors font-medium",
											children: item.navLabel || item.title
										}, item.id))
									})]
								}, cat.id))
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "col-span-4 bg-slate-900/50 rounded-xl p-6 text-white border border-white/5",
							children: [
								/* @__PURE__ */ jsx("h4", {
									className: "font-bold text-brand-400 mb-4 uppercase text-[10px] tracking-widest border-b border-white/10 pb-2",
									children: "Global Connectivity"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm font-medium mb-4 text-slate-300",
									children: "Omnichannel messaging infrastructure with direct carrier binds."
								}),
								/* @__PURE__ */ jsx("a", {
									href: "/services/",
									className: "inline-block bg-brand-500 hover:bg-brand-400 text-slate-950 px-4 py-2 rounded-lg font-bold transition-all shadow-brand-500/30 text-xs",
									children: "View Portfolios"
								})
							]
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative group",
				onMouseEnter: () => setActiveDropdown("solutions"),
				onMouseLeave: () => setActiveDropdown(null),
				children: [/* @__PURE__ */ jsxs("div", {
					className: `relative py-2 px-1 flex items-center text-[17px] font-bold transition-all duration-300 ${activeDropdown === "solutions" ? "text-brand-500" : "text-slate-300 group-hover:text-brand-500"}`,
					role: "button",
					onClick: () => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions"),
					children: [
						"Solutions",
						/* @__PURE__ */ jsx("svg", {
							className: `w-4 h-4 ml-1.5 transition-transform duration-300 ${activeDropdown === "solutions" ? "rotate-180" : ""}`,
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M19 9l-7 7-7-7"
							})
						}),
						/* @__PURE__ */ jsx("span", { className: `absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === "solutions" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}` })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: `absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-[750px] transition-all duration-300 ease-out ${activeDropdown === "solutions" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"} z-50`,
					children: /* @__PURE__ */ jsxs("div", {
						className: "bg-[#0B0F19] rounded-2xl shadow-2xl border border-white/10 p-8 grid grid-cols-12 gap-8 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-[#0B0F19]",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "col-span-5",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "font-bold text-white mb-4 uppercase text-[10px] tracking-widest border-b border-white/10 pb-2",
									children: "Strategic Solutions"
								}), /* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 gap-3 mb-4",
									children: [SOLUTIONS.slice(0, 5).map((sol) => /* @__PURE__ */ jsxs("a", {
										href: `/solution/${sol.id}/`,
										className: "group/sol flex items-center",
										children: [/* @__PURE__ */ jsx("span", {
											className: "w-6 h-6 rounded-md bg-slate-900 group-hover/sol:bg-brand-500/20 text-brand-400 flex items-center justify-center mr-3 transition-colors",
											children: /* @__PURE__ */ jsx(Rocket, { className: "w-3.5 h-3.5" })
										}), /* @__PURE__ */ jsx("span", {
											className: "text-sm font-bold text-slate-300 group-hover/sol:text-brand-400 transition-colors",
											children: sol.navLabel || sol.title
										})]
									}, sol.id)), /* @__PURE__ */ jsx("a", {
										href: "/solutions/",
										className: "text-xs font-bold text-brand-500 hover:underline pl-2",
										children: "View All Solutions →"
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "col-span-4 border-l border-white/10 pl-8",
								children: [
									/* @__PURE__ */ jsx("h4", {
										className: "font-bold text-white mb-4 uppercase text-[10px] tracking-widest border-b border-white/10 pb-2",
										children: "Software Products"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-3 mb-6",
										children: [/* @__PURE__ */ jsx("a", {
											href: "/products/",
											className: "block text-sm font-bold text-slate-300 hover:text-brand-500",
											children: "Enterprise Platforms"
										}), /* @__PURE__ */ jsx("a", {
											href: "/problems/",
											className: "block text-sm font-bold text-slate-300 hover:text-brand-500",
											children: "Challenges We Solve"
										})]
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "font-bold text-white mb-4 uppercase text-[10px] tracking-widest border-b border-white/10 pb-2",
										children: "Industry Focus"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-1 gap-2",
										children: [INDUSTRIES.slice(0, 4).map((ind) => /* @__PURE__ */ jsxs("a", {
											href: `/industry-solutions/${ind.id}/`,
											className: "text-xs text-slate-400 hover:text-brand-500 flex items-center",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "mr-2 opacity-70 group-hover:opacity-100",
													children: ind.icon
												}),
												" ",
												ind.title
											]
										}, ind.id)), /* @__PURE__ */ jsx("a", {
											href: "/industry-solutions/",
											className: "text-xs font-bold text-brand-500 hover:underline mt-1",
											children: "Explore All Industries →"
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "col-span-3 bg-slate-900 rounded-xl p-6 text-white overflow-hidden relative group/hero border border-brand-500/10",
								children: [
									/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-brand-500/20 rounded-full -mr-12 -mt-12 group-hover/hero:scale-125 transition-transform duration-700" }),
									/* @__PURE__ */ jsx("h5", {
										className: "text-brand-400 font-bold text-[10px] uppercase tracking-widest mb-2",
										children: "Featured Strategy"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm font-bold mb-3 leading-tight text-white group-hover/hero:text-brand-200 transition-colors",
										children: "E-commerce Acceleration Suite"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[10px] text-slate-400 mb-6",
										children: "Master global markets with our unified commerce gateway."
									}),
									/* @__PURE__ */ jsx("a", {
										href: "/solution/ecommerce-acceleration/",
										className: "inline-block text-[10px] bg-brand-500 text-slate-950 px-4 py-2 rounded-lg font-black hover:bg-brand-400 transition-all uppercase tracking-tighter",
										children: "Explore E-commerce Suite"
									})
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative group",
				onMouseEnter: () => setActiveDropdown("knowledge"),
				onMouseLeave: () => setActiveDropdown(null),
				children: [/* @__PURE__ */ jsxs("div", {
					className: `relative py-2 px-1 flex items-center text-[17px] font-bold transition-all duration-300 ${activeDropdown === "knowledge" ? "text-brand-500" : "text-slate-300 group-hover:text-brand-500"}`,
					role: "button",
					onClick: () => setActiveDropdown(activeDropdown === "knowledge" ? null : "knowledge"),
					children: [
						"Knowledge",
						/* @__PURE__ */ jsx("svg", {
							className: `w-4 h-4 ml-1.5 transition-transform duration-300 ${activeDropdown === "knowledge" ? "rotate-180" : ""}`,
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M19 9l-7 7-7-7"
							})
						}),
						/* @__PURE__ */ jsx("span", { className: `absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === "knowledge" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}` })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: `absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-64 transition-all duration-300 ease-out ${activeDropdown === "knowledge" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"} z-50`,
					children: /* @__PURE__ */ jsx("div", {
						className: "bg-[#0B0F19] rounded-xl shadow-2xl border border-white/10 p-3 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-[#0B0F19]",
						children: /* @__PURE__ */ jsxs("ul", {
							className: "space-y-0.5",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: "/resources/blog/",
									className: "flex items-center px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-brand-500 rounded-lg transition-colors",
									children: [/* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 text-slate-400 mr-3" }), " Latest Insights"]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: "/sandbox/",
									className: "flex items-center px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-brand-500 rounded-lg transition-colors",
									children: [/* @__PURE__ */ jsx(Terminal, { className: "w-4 h-4 text-slate-400 mr-3" }), " API Sandbox"]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: "/glossary/",
									className: "nav-card flex items-center px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-brand-500 rounded-lg transition-colors",
									children: [/* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-slate-400 mr-3" }), " Tech Glossary"]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: "/locations/",
									className: "nav-card flex items-center px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-brand-500 rounded-lg transition-colors",
									children: [/* @__PURE__ */ jsx(Globe, { className: "w-4 h-4 text-slate-400 mr-3" }), " Global Nodes"]
								}) })
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative group",
				onMouseEnter: () => setActiveDropdown("company"),
				onMouseLeave: () => setActiveDropdown(null),
				children: [/* @__PURE__ */ jsxs("div", {
					className: `relative py-2 px-1 flex items-center text-[17px] font-bold transition-all duration-300 ${activeDropdown === "company" ? "text-brand-500" : "text-slate-300 group-hover:text-brand-500"}`,
					role: "button",
					onClick: () => setActiveDropdown(activeDropdown === "company" ? null : "company"),
					children: [
						"Company",
						/* @__PURE__ */ jsx("svg", {
							className: `w-4 h-4 ml-1.5 transition-transform duration-300 ${activeDropdown === "company" ? "rotate-180" : ""}`,
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M19 9l-7 7-7-7"
							})
						}),
						/* @__PURE__ */ jsx("span", { className: `absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === "company" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}` })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: `absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-48 transition-all duration-300 ease-out ${activeDropdown === "company" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"} z-50`,
					children: /* @__PURE__ */ jsx("div", {
						className: "bg-[#0B0F19] rounded-xl shadow-2xl border border-white/10 p-3 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-[#0B0F19]",
						children: /* @__PURE__ */ jsxs("ul", {
							className: "space-y-0.5",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "/company/about/",
									className: "nav-card block px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-brand-500 rounded-lg transition-colors",
									children: "About Us"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "/partners/partner-program/",
									className: "nav-card block px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-brand-500 rounded-lg transition-colors",
									children: "Partners"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "/case-studies/",
									className: "nav-card block px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-brand-500 rounded-lg transition-colors",
									children: "Case Studies"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "/company/careers/",
									className: "nav-card block px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-brand-500 rounded-lg transition-colors",
									children: "Careers"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "/social-media/",
									className: "nav-card block px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-brand-500 rounded-lg transition-colors",
									children: "Social Hub"
								}) }),
								/* @__PURE__ */ jsx("li", {
									className: "border-t border-white/10 pt-1 mt-1",
									children: /* @__PURE__ */ jsx("a", {
										href: "https://bit.ly/wwm2u",
										rel: "noopener noreferrer",
										className: "block px-3 py-1.5 text-sm font-bold text-brand-500 hover:bg-slate-800 rounded-lg transition-colors",
										children: "Contact Us"
									})
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				onClick: () => setIsSearchOpen(true),
				className: "w-11 h-11 flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-brand-500 transition-colors ml-4 cursor-pointer border border-white/10",
				"aria-label": "Search",
				role: "button",
				children: /* @__PURE__ */ jsx("svg", {
					className: "w-5 h-5",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					})
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: "https://bit.ly/wwm2u",
				rel: "noopener noreferrer",
				className: "bg-brand-500 hover:bg-brand-400 text-slate-950 text-base font-bold py-2.5 px-6 rounded-full transition-all hover:shadow-[0_0_25px_rgba(0,229,143,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none ml-2",
				children: "Contact"
			})
		]
	});
};
//#endregion
//#region src/components/NavigationMobileMenu.tsx
var NavigationMobileMenu = ({ setIsMenuOpen }) => {
	const [mobileSubmenu, setMobileSubmenu] = useState(null);
	const toggleMobileSubmenu = (menu) => {
		setMobileSubmenu(mobileSubmenu === menu ? null : menu);
	};
	return /* @__PURE__ */ jsx("div", {
		className: "lg:hidden bg-[#0B0F19] border-t border-white/10 py-4 h-[calc(100vh-80px)] overflow-y-auto pb-20 animate-fade-in shadow-xl",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-4 flex flex-col space-y-2",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "/",
					className: "text-lg font-bold py-3 border-b border-white/5 text-white hover:text-brand-500 transition-colors",
					onClick: () => setIsMenuOpen(false),
					children: "Home"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "border-b border-white/5",
					children: [/* @__PURE__ */ jsxs("div", {
						role: "button",
						tabIndex: 0,
						onKeyDown: (e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								toggleMobileSubmenu("services");
							}
						},
						onClick: () => toggleMobileSubmenu("services"),
						className: "w-full flex justify-between items-center py-3 text-lg font-bold text-white focus:outline-none no-3d nav-toggle hover:text-brand-500 transition-colors",
						children: ["Services", /* @__PURE__ */ jsx("svg", {
							className: `w-4 h-4 transition-transform duration-300 ${mobileSubmenu === "services" ? "rotate-180 text-brand-500" : "text-slate-400"}`,
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M19 9l-7 7-7-7"
							})
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: `overflow-hidden transition-all duration-300 ${mobileSubmenu === "services" ? "max-h-[1000px] opacity-100 pb-3" : "max-h-0 opacity-0"}`,
						children: /* @__PURE__ */ jsxs("div", {
							className: "pl-4 space-y-3 border-l-2 border-brand-500/30 ml-2",
							children: [/* @__PURE__ */ jsx("a", {
								href: "/services/",
								className: "block text-sm font-black text-brand-500",
								onClick: () => setIsMenuOpen(false),
								children: "All Service Portfolios"
							}), SERVICE_CATEGORIES.map((cat) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-[10px] font-black text-slate-500 uppercase mb-1 mt-2 tracking-widest",
								children: cat.title
							}), cat.items.map((item) => /* @__PURE__ */ jsx("a", {
								href: `/${cat.id}/${item.id}/`,
								className: "nav-card block text-sm text-slate-400 hover:text-brand-500 py-1 font-medium transition-colors",
								onClick: () => setIsMenuOpen(false),
								children: item.navLabel || item.title
							}, item.id))] }, cat.id))]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "border-b border-white/5",
					children: [/* @__PURE__ */ jsxs("div", {
						role: "button",
						tabIndex: 0,
						onKeyDown: (e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								toggleMobileSubmenu("solutions");
							}
						},
						onClick: () => toggleMobileSubmenu("solutions"),
						className: "w-full flex justify-between items-center py-3 text-lg font-bold text-white focus:outline-none no-3d nav-toggle hover:text-brand-500 transition-colors",
						children: ["Solutions", /* @__PURE__ */ jsx("svg", {
							className: `w-4 h-4 transition-transform duration-300 ${mobileSubmenu === "solutions" ? "rotate-180 text-brand-500" : "text-slate-400"}`,
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M19 9l-7 7-7-7"
							})
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: `overflow-hidden transition-all duration-300 ${mobileSubmenu === "solutions" ? "max-h-[1000px] opacity-100 pb-3" : "max-h-0 opacity-0"}`,
						children: /* @__PURE__ */ jsxs("div", {
							className: "pl-4 space-y-3 border-l-2 border-brand-500/30 ml-2",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "/solutions/",
									className: "block text-sm font-black text-brand-500",
									onClick: () => setIsMenuOpen(false),
									children: "Strategic Solutions"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-1",
									children: SOLUTIONS.map((sol) => /* @__PURE__ */ jsx("a", {
										href: `/solution/${sol.id}/`,
										className: "block text-sm text-slate-400 hover:text-brand-500 py-1 transition-colors",
										onClick: () => setIsMenuOpen(false),
										children: sol.navLabel || sol.title
									}, sol.id))
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-[10px] font-black text-slate-500 uppercase mb-1 mt-4 tracking-widest",
									children: "Platforms & Challenges"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "/products/",
									className: "block text-sm text-slate-400 hover:text-brand-500 py-1 transition-colors",
									onClick: () => setIsMenuOpen(false),
									children: "Software Products"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "/problems/",
									className: "block text-sm text-slate-400 hover:text-brand-500 py-1 transition-colors",
									onClick: () => setIsMenuOpen(false),
									children: "Success Scenarios"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-[10px] font-black text-slate-500 uppercase mb-1 mt-4 tracking-widest",
									children: "Industries"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-1 gap-1",
									children: INDUSTRIES.map((ind) => /* @__PURE__ */ jsxs("a", {
										href: `/industry-solutions/${ind.id}/`,
										className: "text-xs text-slate-400 hover:text-brand-500 py-1 transition-colors",
										onClick: () => setIsMenuOpen(false),
										children: [
											ind.icon,
											" ",
											ind.title
										]
									}, ind.id))
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "border-b border-white/5",
					children: [/* @__PURE__ */ jsxs("div", {
						role: "button",
						tabIndex: 0,
						onKeyDown: (e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								toggleMobileSubmenu("knowledge");
							}
						},
						onClick: () => toggleMobileSubmenu("knowledge"),
						className: "w-full flex justify-between items-center py-3 text-lg font-bold text-white focus:outline-none no-3d nav-toggle hover:text-brand-500 transition-colors",
						children: ["Knowledge", /* @__PURE__ */ jsx("svg", {
							className: `w-4 h-4 transition-transform duration-300 ${mobileSubmenu === "knowledge" ? "rotate-180 text-brand-500" : "text-slate-400"}`,
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M19 9l-7 7-7-7"
							})
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: `overflow-hidden transition-all duration-300 ${mobileSubmenu === "knowledge" ? "max-h-[500px] opacity-100 pb-3" : "max-h-0 opacity-0"}`,
						children: /* @__PURE__ */ jsxs("div", {
							className: "pl-4 space-y-2 border-l-2 border-brand-500/30 ml-2",
							children: [
								/* @__PURE__ */ jsxs("a", {
									href: "/resources/blog/",
									className: "flex items-center text-sm text-slate-400 hover:text-brand-500 py-2 transition-colors",
									onClick: () => setIsMenuOpen(false),
									children: [/* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 text-slate-400 mr-3 inline-block" }), " Latest Insights"]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "/sandbox/",
									className: "flex items-center text-sm text-slate-400 hover:text-brand-500 py-2 transition-colors",
									onClick: () => setIsMenuOpen(false),
									children: [/* @__PURE__ */ jsx(Terminal, { className: "w-4 h-4 text-slate-400 mr-3 inline-block" }), " API Sandbox"]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "/glossary/",
									className: "flex items-center text-sm text-slate-400 hover:text-brand-500 py-2 transition-colors",
									onClick: () => setIsMenuOpen(false),
									children: [/* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-slate-400 mr-3 inline-block" }), " Tech Glossary"]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "/locations",
									className: "flex items-center text-sm text-slate-400 hover:text-brand-500 py-2 transition-colors",
									onClick: () => setIsMenuOpen(false),
									children: [/* @__PURE__ */ jsx(Globe, { className: "w-4 h-4 text-slate-400 mr-3 inline-block" }), " Global Nodes"]
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "border-b border-white/5",
					children: [/* @__PURE__ */ jsxs("div", {
						role: "button",
						tabIndex: 0,
						onKeyDown: (e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								toggleMobileSubmenu("company");
							}
						},
						onClick: () => toggleMobileSubmenu("company"),
						className: "w-full flex justify-between items-center py-3 text-lg font-bold text-white focus:outline-none no-3d nav-toggle hover:text-brand-500 transition-colors",
						children: ["Company", /* @__PURE__ */ jsx("svg", {
							className: `w-4 h-4 transition-transform duration-300 ${mobileSubmenu === "company" ? "rotate-180 text-brand-500" : "text-slate-400"}`,
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M19 9l-7 7-7-7"
							})
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: `overflow-hidden transition-all duration-300 ${mobileSubmenu === "company" ? "max-h-[500px] opacity-100 pb-3" : "max-h-0 opacity-0"}`,
						children: /* @__PURE__ */ jsxs("div", {
							className: "pl-4 space-y-2 border-l-2 border-brand-500/30 ml-2",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "/company/about/",
									className: "block text-sm text-slate-400 hover:text-brand-500 py-2 font-medium transition-colors",
									onClick: () => setIsMenuOpen(false),
									children: "About Our Mission"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "/partners/partner-program/",
									className: "block text-sm text-slate-400 hover:text-brand-500 py-2 font-medium transition-colors",
									onClick: () => setIsMenuOpen(false),
									children: "Partnership Program"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "/case-studies/",
									className: "block text-sm text-slate-400 hover:text-brand-500 py-2 font-medium transition-colors",
									onClick: () => setIsMenuOpen(false),
									children: "Success Stories"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "/company/careers/",
									className: "block text-sm text-slate-400 hover:text-brand-500 py-2 font-medium transition-colors",
									onClick: () => setIsMenuOpen(false),
									children: "Careers & Growth"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "/social-media/",
									className: "block text-sm text-slate-400 hover:text-brand-500 py-2 font-medium transition-colors",
									onClick: () => setIsMenuOpen(false),
									children: "Social Connectivity"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://bit.ly/wwm2u",
									rel: "noopener noreferrer",
									className: "block text-sm font-bold text-brand-500 hover:text-brand-400 py-2 transition-colors",
									onClick: () => setIsMenuOpen(false),
									children: "Contact Us"
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pt-6",
					children: /* @__PURE__ */ jsx("a", {
						href: "https://bit.ly/wwm2u",
						rel: "noopener noreferrer",
						className: "block w-full bg-brand-500 hover:bg-brand-400 text-slate-950 text-center py-4 rounded-xl font-bold active:scale-95 transition-all",
						onClick: () => setIsMenuOpen(false),
						children: "Contact"
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "border-t border-white/10 pt-6 mt-6",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2 px-1",
						children: "Regional Settings"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-white/5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-xs font-bold text-white",
								children: "Preferences"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400",
								children: "Change region, language, or currency"
							})]
						}), /* @__PURE__ */ jsx(GlobalLocaleSelector, { instanceId: "mobile" })]
					})]
				})
			]
		})
	});
};
//#endregion
//#region src/components/Navigation.tsx
var Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [currentPath, setCurrentPath] = useState("");
	const [scrolled, setScrolled] = useState(false);
	const [isBotUser, setIsBotUser] = useState(true);
	use3DTilt();
	useScrollProgress();
	const { tooltip, handleTooltipMouseEnter, handleTooltipMouseLeave } = useGlossaryTooltip();
	useEffect(() => {
		setCurrentPath(window.location.pathname);
		setIsBotUser(isSearchBotOrAuditor());
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		const handleEsc = (e) => {
			if (e.key === "Escape") setIsSearchOpen(false);
			if ((e.metaKey || e.ctrlKey) && e.key === "k") {
				e.preventDefault();
				setIsSearchOpen((prev) => !prev);
			}
		};
		window.addEventListener("keydown", handleEsc);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("keydown", handleEsc);
		};
	}, []);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx("div", { className: "scroll-progress-indicator" }),
		!isBotUser && currentPath !== "/" && /* @__PURE__ */ jsx("div", {
			className: "hidden sm:block",
			children: /* @__PURE__ */ jsx(ParticleConstellation, {})
		}),
		/* @__PURE__ */ jsx(GlobalSearch, {
			isOpen: isSearchOpen,
			onClose: () => setIsSearchOpen(false)
		}),
		/* @__PURE__ */ jsx(ToastContainer, {}),
		/* @__PURE__ */ jsx("a", {
			href: "#main-content",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-6 py-3 rounded-lg z-50 font-bold shadow-xl transition-all",
			children: "Skip to content"
		}),
		/* @__PURE__ */ jsxs("header", {
			className: "fixed top-0 left-0 right-0 z-50 pt-3 px-4 sm:px-6 transition-all duration-300",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: `bg-[#0c0c0c]/90 backdrop-blur-md border-b border-[#292929] hidden md:block transition-all duration-300 ${scrolled ? "h-0 py-0 opacity-0 overflow-hidden border-0" : "py-1.5 opacity-100 mb-2 rounded-full container max-w-[1200px] mx-auto px-6"}`,
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#cbcbcb]",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-8",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "tel:+918600280002",
								className: "flex items-center gap-2 hover:text-[#2ddb81] transition-colors touch-target-expand whitespace-nowrap flex-nowrap",
								children: [/* @__PURE__ */ jsx("svg", {
									className: "w-3 h-3 text-[#2ddb81]",
									fill: "none",
									stroke: "currentColor",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ jsx("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: 2.5,
										d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									})
								}), "+91-86002-80002"]
							}), /* @__PURE__ */ jsxs("a", {
								href: "mailto:sales@webworldmaker.com",
								className: "flex items-center gap-2 hover:text-[#2ddb81] transition-colors touch-target-expand whitespace-nowrap flex-nowrap",
								children: [/* @__PURE__ */ jsx("svg", {
									className: "w-3 h-3 text-[#2ddb81]",
									fill: "none",
									stroke: "currentColor",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ jsx("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: 2.5,
										d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									})
								}), "sales@webworldmaker.com"]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-6",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "/partners/partner-program",
									className: "hover:text-[#2ddb81] transition-colors",
									children: "Partnership"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "/case-studies",
									className: "hover:text-[#2ddb81] transition-colors",
									children: "Success Hub"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 border-l border-[#292929] pl-6 ml-2",
									children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#2ddb81] animate-pulse" }), /* @__PURE__ */ jsx("span", {
										className: "text-white/80",
										children: "Global Active"
									})]
								}),
								/* @__PURE__ */ jsx(GlobalLocaleSelector, { instanceId: "desktop" })
							]
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "container max-w-[1200px] mx-auto rounded-full bg-[#141414]/90 backdrop-blur-xl border border-[#292929] shadow-[0_4px_30px_rgba(0,0,0,0.5)] px-6 transition-all duration-300",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex justify-between items-center h-20",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex items-center flex-shrink-0",
								children: /* @__PURE__ */ jsxs("a", {
									href: "/",
									className: "flex items-center gap-3 tracking-tighter text-slate-950 hover:opacity-90 transition-opacity whitespace-nowrap flex-nowrap",
									"aria-label": "WebWorldMaker",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-11 h-11 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3",
										children: /* @__PURE__ */ jsx("img", {
											src: "/logo.svg",
											alt: "WWM Logo",
											width: 32,
											height: 32,
											fetchPriority: "high",
											className: "w-8 h-8"
										})
									}), /* @__PURE__ */ jsx("span", {
										className: "text-3xl font-extrabold tracking-tight",
										children: "WebWorldMaker"
									})]
								})
							}),
							/* @__PURE__ */ jsx(NavigationDesktopMenu, { setIsSearchOpen }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4 lg:hidden",
								children: [/* @__PURE__ */ jsx("div", {
									onClick: () => setIsSearchOpen(true),
									className: "p-3 text-slate-400 hover:text-brand-500 cursor-pointer",
									"aria-label": "Search",
									role: "button",
									children: /* @__PURE__ */ jsx("svg", {
										className: "w-6 h-6",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ jsx("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										})
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "p-3 text-slate-400 hover:text-brand-500 transition-colors focus:outline-none cursor-pointer",
									onClick: () => setIsMenuOpen(!isMenuOpen),
									"aria-label": "Toggle Mobile Menu",
									role: "button",
									children: /* @__PURE__ */ jsx("svg", {
										className: "w-6 h-6",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: isMenuOpen ? /* @__PURE__ */ jsx("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M6 18L18 6M6 6l12 12"
										}) : /* @__PURE__ */ jsx("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M4 6h16M4 12h16M4 18h16"
										})
									})
								})]
							})
						]
					})
				}),
				isMenuOpen && /* @__PURE__ */ jsx(NavigationMobileMenu, { setIsMenuOpen })
			]
		}),
		tooltip.visible && /* @__PURE__ */ jsxs("div", {
			className: "absolute z-[9999] p-4 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-white max-w-[280px] text-xs transition-opacity duration-200 pointer-events-auto",
			style: {
				top: `${tooltip.y - 12}px`,
				left: `${tooltip.x}px`,
				transform: "translate(-50%, -100%)"
			},
			onMouseEnter: handleTooltipMouseEnter,
			onMouseLeave: handleTooltipMouseLeave,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "font-bold text-sm mb-1.5 text-indigo-300 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsx("span", { children: tooltip.term }), tooltip.wikidata && /* @__PURE__ */ jsx("a", {
						href: tooltip.wikidata,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-[10px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold uppercase tracking-wider hover:underline",
						children: "Wikidata ↗"
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-slate-200 leading-relaxed font-medium",
					children: tooltip.definition
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-950/90" })
			]
		})
	] });
};
//#endregion
//#region src/components/Footer.tsx
var Footer = () => {
	const categories = SERVICE_CATEGORIES;
	const industriesList = INDUSTRIES;
	const topServices = categories.flatMap((cat) => (cat.items || []).map((item) => ({
		...item,
		categoryId: cat.id
	}))).slice(0, 6);
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative bg-[#0B0F19] text-slate-400 pt-20 pb-4 border-t border-white/5 overflow-hidden z-0",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 -z-10 mix-blend-screen pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 -z-10 mix-blend-screen pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10 mix-blend-screen pointer-events-none" }),
			/* @__PURE__ */ jsxs("div", {
				className: "container mx-auto px-4 relative z-10",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "bg-[#0B0F19]/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-transparent to-indigo-500/20 blur-md opacity-50 z-0" }),
							/* @__PURE__ */ jsxs("div", {
								className: "relative z-10 md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-8",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "text-3xl md:text-4xl font-black text-white mb-3 tracking-tight",
									children: "Subscribe Our Newsletter"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-slate-400",
									children: "Join our community to get the latest insights and tech updates delivered straight to your inbox."
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "relative z-10 md:w-1/2 w-full",
								children: /* @__PURE__ */ jsxs("form", {
									className: "flex w-full relative group",
									children: [/* @__PURE__ */ jsx("input", {
										type: "email",
										placeholder: "Enter your email",
										className: "w-full bg-[#0B0F19] border border-white/10 text-white px-6 py-4 rounded-full focus:outline-none focus:border-brand-500/50 pr-36 placeholder:text-slate-500 transition-colors",
										required: true
									}), /* @__PURE__ */ jsx("button", {
										type: "submit",
										className: "absolute right-2 top-2 bottom-2 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,229,143,0.3)] hover:shadow-[0_0_25px_rgba(0,229,143,0.5)]",
										children: "Subscribe"
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-16",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-8 lg:col-span-1",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 text-white text-2xl font-black tracking-tighter",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20",
											children: /* @__PURE__ */ jsx("img", {
												src: "/logo.svg",
												alt: "Logo",
												width: 28,
												height: 28,
												loading: "lazy",
												className: "w-7 h-7"
											})
										}), "WebWorldMaker"]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-400 text-sm leading-relaxed font-medium",
										children: "Empowering businesses with cutting-edge digital ecosystems. From high-performance AI agents to global messaging gateway infrastructure."
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-4 pt-2",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center text-sm group cursor-pointer",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors",
													children: /* @__PURE__ */ jsxs("svg", {
														className: "w-4 h-4",
														fill: "none",
														stroke: "currentColor",
														viewBox: "0 0 24 24",
														children: [/* @__PURE__ */ jsx("path", {
															strokeLinecap: "round",
															strokeLinejoin: "round",
															strokeWidth: 2,
															d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
														}), /* @__PURE__ */ jsx("path", {
															strokeLinecap: "round",
															strokeLinejoin: "round",
															strokeWidth: 2,
															d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
														})]
													})
												}), "Chandigarh, PB, India"]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center text-sm group cursor-pointer text-brand-400 font-bold",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors text-slate-400",
													children: /* @__PURE__ */ jsx("svg", {
														className: "w-4 h-4",
														fill: "none",
														stroke: "currentColor",
														viewBox: "0 0 24 24",
														children: /* @__PURE__ */ jsx("path", {
															strokeLinecap: "round",
															strokeLinejoin: "round",
															strokeWidth: 2,
															d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
														})
													})
												}), "sales@webworldmaker.com"]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center text-sm group cursor-pointer",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors",
													children: /* @__PURE__ */ jsx("svg", {
														className: "w-4 h-4",
														fill: "none",
														stroke: "currentColor",
														viewBox: "0 0 24 24",
														children: /* @__PURE__ */ jsx("path", {
															strokeLinecap: "round",
															strokeLinejoin: "round",
															strokeWidth: 2,
															d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
														})
													})
												}), "+91-86002-80002"]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-white font-black text-xs uppercase tracking-widest mb-8 border-l-2 border-brand-600 pl-4",
								children: "Core Portfolios"
							}), /* @__PURE__ */ jsx("ul", {
								className: "space-y-4 text-sm",
								children: topServices.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: `/${service.categoryId}/${service.id}`,
									className: "text-slate-400 hover:text-white transition-colors flex items-center font-medium",
									children: service.navLabel || service.title
								}) }, service.id))
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-white font-black text-xs uppercase tracking-widest mb-8 border-l-2 border-brand-600 pl-4",
								children: "Industry Focus"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "space-y-4 text-sm",
								children: [industriesList?.slice(0, 6).map((ind) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: `/industry-solutions/${ind.id}`,
									className: "text-slate-400 hover:text-white transition-colors flex items-center font-medium",
									children: ind.title
								}) }, ind.id)), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "/industry-solutions",
									className: "text-brand-400 hover:text-brand-300 font-black mt-4 block uppercase text-[10px] tracking-widest hover:underline",
									children: "View All Clusters ↗"
								}) })]
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-white font-black text-xs uppercase tracking-widest mb-8 border-l-2 border-brand-600 pl-4",
								children: "Company"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "space-y-4 text-sm",
								children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/company/about",
										className: "text-slate-400 hover:text-white transition-colors font-medium",
										children: "About Mission"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/partners/partner-program",
										className: "text-slate-400 hover:text-white transition-colors font-medium",
										children: "Partnership Tier"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/company/careers",
										className: "text-slate-400 hover:text-white transition-colors font-medium",
										children: "Careers & Talent"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/case-studies",
										className: "text-slate-400 hover:text-white transition-colors font-medium",
										children: "Success Benchmarks"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "https://bit.ly/wwm2u",
										rel: "noopener noreferrer",
										className: "text-brand-400 font-bold hover:text-brand-300",
										children: "24/7 Support Desk"
									}) })
								]
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-white font-black text-xs uppercase tracking-widest mb-8 border-l-2 border-brand-600 pl-4",
								children: "Ecosystem"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "space-y-4 text-sm",
								children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/products",
										className: "text-slate-400 hover:text-white transition-colors font-medium",
										children: "Product Matrix"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/glossary",
										className: "text-slate-400 hover:text-white transition-colors font-medium",
										children: "Tech Lexicon"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/sandbox",
										className: "text-slate-400 hover:text-white transition-colors font-medium",
										children: "📟 API Sandbox"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/sitemap",
										className: "text-slate-400 hover:text-white transition-colors font-medium",
										children: "System Index"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/locations",
										className: "text-slate-400 hover:text-white transition-colors font-medium flex items-center",
										children: "🌍 Global Node Grid"
									}) })
								]
							})] })
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "border-t border-slate-900 pt-6 pb-4 mb-4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-900/50 p-6 rounded-[2rem] border border-white/5",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "max-w-md",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-white font-black text-lg uppercase tracking-tight mb-2",
									children: "Stay Synchronized"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-300 leading-relaxed font-medium",
									children: "Join our intelligence stream for bi-weekly deep-dives into AI agents, SEO hacks, and enterprise scale. No spam, just pure digital signal."
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "w-full md:w-auto",
								children: [/* @__PURE__ */ jsxs("form", {
									className: "flex w-full md:w-auto gap-3",
									onSubmit: async (e) => {
										e.preventDefault();
										const form = e.currentTarget;
										const emailInput = form.elements.namedItem("email").value;
										const honeypotInput = form.elements.namedItem("company_verification_token")?.value || "";
										const statusEl = document.getElementById("newsletter-status");
										if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/.test(emailInput)) {
											if (statusEl) {
												statusEl.innerText = "Please provide a valid email structure.";
												statusEl.className = "text-[10px] text-red-500 mt-2 font-bold uppercase";
											}
											return;
										}
										if (statusEl) {
											statusEl.innerText = "Syncing...";
											statusEl.className = "text-[10px] text-brand-400 mt-2 font-bold uppercase";
										}
										try {
											if ((await fetch("/api/newsletter", {
												method: "POST",
												headers: { "Content-Type": "application/json" },
												body: JSON.stringify({
													email: emailInput,
													buttonName: "Stay Connected",
													pageContext: window.location.pathname,
													company_verification_token: honeypotInput
												})
											})).ok) {
												if (statusEl) {
													statusEl.innerText = "Sync Initialized. Welcome to the stream.";
													statusEl.className = "text-[10px] text-emerald-500 mt-2 font-bold uppercase";
												}
												form.reset();
											} else if (statusEl) {
												statusEl.innerText = "Subscription failed. Please try again.";
												statusEl.className = "text-[10px] text-red-500 mt-2 font-bold uppercase";
											}
										} catch {
											if (statusEl) {
												statusEl.innerText = "Connectivity error. Try again later.";
												statusEl.className = "text-[10px] text-red-500 mt-2 font-bold uppercase";
											}
										}
									},
									children: [
										/* @__PURE__ */ jsx("input", {
											type: "text",
											name: "company_verification_token",
											className: "hidden",
											tabIndex: -1,
											autoComplete: "off"
										}),
										/* @__PURE__ */ jsx("input", {
											name: "email",
											type: "email",
											placeholder: "Intelligence Inbox",
											required: true,
											"aria-label": "Email address for newsletter",
											className: "flex-grow md:w-64 bg-slate-950 border border-slate-800 rounded-xl px-5 py-3 text-xs focus:ring-1 focus:ring-brand-500 outline-none text-white transition-all shadow-inner"
										}),
										/* @__PURE__ */ jsx("button", {
											className: "no-3d text-brand-600 text-[10px] uppercase font-bold",
											children: "Stay Connected"
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									id: "newsletter-status",
									className: "h-4"
								})]
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "border-t border-slate-900 pt-4 pb-2 text-xs text-slate-500",
						children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("details", {
							className: "group cursor-pointer select-none",
							children: [/* @__PURE__ */ jsxs("summary", {
								className: "text-[10px] font-black uppercase tracking-wider text-slate-400 list-none flex items-center justify-between hover:text-white transition-colors",
								children: [/* @__PURE__ */ jsx("span", { children: "🌐 Semantic Entity Index (GEO/AEO)" }), /* @__PURE__ */ jsx("span", {
									className: "transition-transform group-open:rotate-180",
									children: "▼"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-3 pt-3 border-t border-white/5 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[9px] text-slate-400 font-medium",
								children: GLOSSARY.map((g) => {
									return /* @__PURE__ */ jsxs("a", {
										href: `/glossary/${glossarySlug(g.term)}`,
										className: "hover:text-indigo-400 hover:underline transition-colors flex items-center gap-1",
										children: [g.term, g.sameAs && /* @__PURE__ */ jsx("span", {
											className: "opacity-40 text-[7px]",
											title: "Wikidata Verified Entity",
											children: "🏷️"
										})]
									}, g.term);
								})
							})]
						}) })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "border-t border-slate-900 pt-4 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-black text-slate-400",
						children: [/* @__PURE__ */ jsxs("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" WebWorldMaker. Optimized for global throughput."
						] }), /* @__PURE__ */ jsxs("div", {
							className: "flex space-x-8 mt-6 md:mt-0",
							children: [/* @__PURE__ */ jsx("a", {
								href: "/privacy",
								className: "text-slate-400 hover:text-white transition-colors",
								children: "Data Privacy"
							}), /* @__PURE__ */ jsx("a", {
								href: "/terms",
								className: "text-slate-400 hover:text-white transition-colors",
								children: "Legal Terms"
							})]
						})]
					})
				]
			})
		]
	});
};
//#endregion
//#region src/components/FloatingShareSidebar.tsx
var FloatingShareSidebar = () => {
	const [url, setUrl] = useState("");
	const [title, setTitle] = useState("");
	useEffect(() => {
		setUrl(window.location.href);
		setTitle(document.title);
	}, []);
	const encodedUrl = encodeURIComponent(url);
	const encodedTitle = encodeURIComponent(title);
	const shareLinks = [
		{
			name: "LinkedIn",
			href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
			color: "hover:shadow-[0_0_15px_rgba(0,119,181,0.6)] hover:border-[#0077b5]",
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5.5 h-5.5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" })
			})
		},
		{
			name: "X (Twitter)",
			href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
			color: "hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:border-white",
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5 h-5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
			})
		},
		{
			name: "Facebook",
			href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
			color: "hover:shadow-[0_0_15px_rgba(24,119,242,0.6)] hover:border-[#1877F2]",
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5.5 h-5.5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
			})
		},
		{
			name: "WhatsApp",
			href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
			color: "hover:shadow-[0_0_15px_rgba(37,211,102,0.6)] hover:border-[#25D366]",
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5.5 h-5.5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" })
			})
		},
		{
			name: "Telegram",
			href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
			color: "hover:shadow-[0_0_15px_rgba(0,136,204,0.6)] hover:border-[#0088cc]",
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5.5 h-5.5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.05 5.56-5.022c.242-.213-.054-.333-.373-.12l-6.87 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.46c.538-.204.997.12.825.842z" })
			})
		},
		{
			name: "Reddit",
			href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
			color: "hover:shadow-[0_0_15px_rgba(255,69,0,0.6)] hover:border-[#ff4500]",
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5.5 h-5.5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.27-1.72l1.32-4.19 3.61.77c.01.95.8 1.71 1.76 1.71 1.05 0 1.9-0.85 1.9-1.9s-0.85-1.9-1.9-1.9c-0.88 0-1.6 0.61-1.8 1.43l-3.93-.83c-0.25-.05-0.5 0.1-.57.34l-1.5 4.75c-2.5.05-4.77.69-6.44 1.71-.56-.73-1.44-1.19-2.44-1.19-1.65 0-3 1.35-3 3 0 1.12.61 2.1 1.53 2.61-.06.29-.09.59-.09.9 0 3.86 5.02 7 11.22 7s11.22-3.14 11.22-7c0-.31-.03-.6-.09-.89.9-.5 1.51-1.47 1.51-2.58zm-17 1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-0.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm10.75 4.88c-1.17 1.17-3.4 1.25-3.75 1.25s-2.58-.08-3.75-1.25c-.2-.2-.2-.51 0-.71.2-.2.51-.2.71 0 .86.86 2.37.95 3.04.95s2.18-.09 3.04-.95c.2-.2.51-.2.71 0 .2.2.2.51 0 .71zm-2.25-3.38c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-0.67 1.5-1.5 1.5z" })
			})
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed right-6 bottom-24 z-40 hidden lg:flex flex-col gap-4 p-3.5 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/10 shadow-2xl",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex items-center justify-center pb-2.5 border-b border-white/10",
				children: /* @__PURE__ */ jsxs("span", {
					className: "relative flex h-2.5 w-2.5",
					children: [/* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" })]
				})
			}),
			[{
				name: "Email Us",
				href: "mailto:sales@webworldmaker.com?subject=Inquiry%20via%20Website",
				color: "hover:shadow-[0_0_15px_rgba(99,102,241,0.6)] hover:border-indigo-500",
				icon: /* @__PURE__ */ jsx("svg", {
					className: "w-5.5 h-5.5",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					})
				})
			}, {
				name: "Call Us",
				href: "tel:+918600280002",
				color: "hover:shadow-[0_0_15px_rgba(16,185,129,0.6)] hover:border-emerald-500",
				icon: /* @__PURE__ */ jsx("svg", {
					className: "w-5.5 h-5.5",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					})
				})
			}].map((link) => /* @__PURE__ */ jsxs("a", {
				href: link.href,
				className: `w-11 h-11 rounded-xl bg-white/5 text-slate-400 border border-white/10 flex items-center justify-center transition-all duration-300 transform hover:scale-115 hover:-translate-y-0.5 hover:text-white ${link.color} group relative`,
				"aria-label": link.name,
				children: [link.icon, /* @__PURE__ */ jsx("span", {
					className: "absolute right-14 bg-slate-950/95 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0",
					children: link.name
				})]
			}, link.name)),
			shareLinks.map((link) => /* @__PURE__ */ jsxs("a", {
				href: link.href,
				rel: "noopener noreferrer",
				className: `w-11 h-11 rounded-xl bg-white/5 text-slate-400 border border-white/10 flex items-center justify-center transition-all duration-300 transform hover:scale-115 hover:-translate-y-0.5 hover:text-white ${link.color} group relative`,
				"aria-label": `Share on ${link.name}`,
				children: [link.icon, /* @__PURE__ */ jsxs("span", {
					className: "absolute right-14 bg-slate-950/95 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0",
					children: ["Share on ", link.name]
				})]
			}, link.name))
		]
	});
};
//#endregion
//#region src/utils/telemetry.ts
/**
* Pushes an event safely to window.dataLayer for Google Tag Assistant & GA4
*/
function trackEvent(eventName, payload = {}) {
	if (typeof window === "undefined") return;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: eventName,
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		page_location: window.location.href,
		page_path: window.location.pathname,
		...payload
	});
}
/**
* Updates Google Consent Mode v2 state dynamically
*/
function updateConsentState(granted) {
	if (typeof window === "undefined") return;
	const state = granted ? "granted" : "denied";
	if (typeof window.gtag === "function") window.gtag("consent", "update", {
		ad_storage: state,
		analytics_storage: state,
		ad_user_data: state,
		ad_personalization: state
	});
	trackEvent("consent_update", {
		consent_state: state,
		ad_storage: state,
		analytics_storage: state
	});
}
/**
* Tracks FAQ expansion for AEO/AIO answer relevance scoring
*/
function trackFaqExpand(question) {
	trackEvent("faq_engagement", { question_text: question });
}
//#endregion
//#region src/components/CookieConsent.tsx
var CookieConsent = () => {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const consent = localStorage.getItem("wwm_cookie_consent");
		if (!consent) {
			const timer = setTimeout(() => setVisible(true), 1500);
			return () => clearTimeout(timer);
		} else if (consent === "accepted") updateConsentState(true);
		else updateConsentState(false);
	}, []);
	const handleAccept = () => {
		localStorage.setItem("wwm_cookie_consent", "accepted");
		setVisible(false);
		updateConsentState(true);
		window.dispatchEvent(new Event("cookieConsentAccepted"));
	};
	const handleDecline = () => {
		localStorage.setItem("wwm_cookie_consent", "declined");
		setVisible(false);
		updateConsentState(false);
	};
	if (!visible) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-[99999] p-6 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl animate-fade-in",
		role: "alert",
		"aria-live": "polite",
		id: "cookie-consent-ui",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 text-xl",
					children: "🍪"
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-sm font-bold text-white font-display",
					children: "Cookie Choice"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-xs text-slate-300 leading-relaxed mt-1 font-sans",
					children: "We use analytics and preference cookies to elevate your ecosystem experience. Let us know if you approve."
				})] })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex gap-3 mt-2 font-display",
				children: [/* @__PURE__ */ jsx("button", {
					onClick: handleAccept,
					className: "flex-1 py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md hover:shadow-indigo-600/30 active:scale-95 cursor-pointer touch-target",
					children: "Accept All"
				}), /* @__PURE__ */ jsx("button", {
					onClick: handleDecline,
					className: "flex-1 py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-bold transition-all active:scale-95 cursor-pointer touch-target",
					children: "Decline"
				})]
			})]
		})
	});
};
//#endregion
//#region src/i18n/config.ts
var SUPPORTED_LOCALES = [
	"en",
	"es",
	"hi"
];
function generateHreflangLinks(currentUrl, locales = SUPPORTED_LOCALES) {
	const urlObj = new URL(currentUrl);
	const cleanPath = urlObj.pathname.replace(/^\/(es|hi)(\/|$)/, "/");
	const links = [{
		rel: "alternate",
		hreflang: "x-default",
		href: `${urlObj.origin}${cleanPath}`
	}];
	for (const loc of locales) {
		const localizedPath = loc === "en" ? cleanPath : `/${loc}${cleanPath.startsWith("/") ? "" : "/"}${cleanPath}`;
		links.push({
			rel: "alternate",
			hreflang: loc,
			href: `${urlObj.origin}${localizedPath}`
		});
	}
	return links;
}
//#endregion
//#region src/components/Seo.astro
createAstro("https://webworldmaker.com");
var $$Seo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Seo;
	const props = Astro.props;
	const currentLocale = props.locale || "en";
	const ogImage = props.image || new URL("/og-image.png", Astro.url).href;
	const hreflangLinks = props.canonicalUrl ? generateHreflangLinks(props.canonicalUrl) : [];
	const currentOgLocale = {
		en: "en_US",
		es: "es_ES",
		hi: "hi_IN"
	}[currentLocale] || "en_US";
	return renderTemplate`<!--
 * Seo.astro – injects a comprehensive set of SEO/AEO/GEO meta tags.
 * All pages should import this component inside <head>.
 * It also sets data‑ai‑answer="true" on the document element.
--><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${props.title && renderTemplate`<title>${props.title}</title>`}${props.description && renderTemplate`<meta name="description"${addAttribute(props.description, "content")}>`}${props.keywords && renderTemplate`<meta name="keywords"${addAttribute(props.keywords, "content")}>`}${props.canonicalUrl && renderTemplate`<link rel="canonical"${addAttribute(props.canonicalUrl, "href")}>`}${hreflangLinks.map((link) => renderTemplate`<link${addAttribute(link.rel, "rel")}${addAttribute(link.hreflang, "hreflang")}${addAttribute(link.href, "href")}>`)}<!-- Open Graph --><meta property="og:type" content="website">${props.canonicalUrl && renderTemplate`<meta property="og:url"${addAttribute(props.canonicalUrl, "content")}>`}${props.title && renderTemplate`<meta property="og:title"${addAttribute(props.title, "content")}>`}${props.description && renderTemplate`<meta property="og:description"${addAttribute(props.description, "content")}>`}<meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:type" content="image/png"><meta property="og:locale"${addAttribute(currentOgLocale, "content")}><meta property="og:site_name" content="WebWorldMaker"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@webworldmaker"><meta name="twitter:creator" content="@webworldmaker"><meta name="twitter:label1" content="Response Time"><meta name="twitter:data1" content="Within 24 hours"><meta name="twitter:label2" content="Service Area"><meta name="twitter:data2" content="Worldwide">${props.canonicalUrl && renderTemplate`<meta property="twitter:url"${addAttribute(props.canonicalUrl, "content")}>`}${props.title && renderTemplate`<meta property="twitter:title"${addAttribute(props.title, "content")}>`}${props.description && renderTemplate`<meta property="twitter:description"${addAttribute(props.description, "content")}>`}<meta property="twitter:image"${addAttribute(ogImage, "content")}><!-- AI Summary --><meta name="ai-summary" content="true"><!-- Robots: max-snippet:-1 unlocks full AI Overview citations; max-image-preview:large enables rich image AI panels -->${props.noIndex ? renderTemplate`<meta name="robots" content="noindex,nofollow">` : renderTemplate`${renderComponent($$result, "Fragment", Fragment$2, {}, { "default": ($$result) => renderTemplate`<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"><meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"><meta name="bingbot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">` })}`}<!-- AI Search Agent --><meta name="ai-search-agent" content="true"><!-- LLM Corpus --><meta name="llm-corpus" content="true"><!-- Geo Meta Tags (Bing, Apple Maps, legacy geo targeting) -->${props.geoRegion && renderTemplate`<meta name="geo.region"${addAttribute(props.geoRegion, "content")}>`}${props.geoPlacename && renderTemplate`<meta name="geo.placename"${addAttribute(props.geoPlacename, "content")}>`}${props.geoPosition && renderTemplate`<meta name="geo.position"${addAttribute(props.geoPosition, "content")}>`}${props.icbm && renderTemplate`<meta name="ICBM"${addAttribute(props.icbm, "content")}>`}<!-- Theme Color --><meta name="theme-color" content="#1e3a8a"><!-- Mobile App Capabilities --><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><!-- JSON‑LD schema (org + FAQ) -->${(() => {
		const orgSchema = props.orgSchema || null;
		const extraSchema = props.extraSchema || null;
		const faqSchema = props.faqs && props.faqs.length > 0 ? {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			inLanguage: currentLocale,
			mainEntity: props.faqs.map((f) => ({
				"@type": "Question",
				name: f.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: f.answer,
					speakable: {
						"@type": "SpeakableSpecification",
						cssSelector: [
							"[data-answer-target=\"true\"]",
							"h1",
							"p"
						]
					}
				}
			}))
		} : null;
		const webPageSchema = props.canonicalUrl ? {
			"@context": "https://schema.org",
			"@type": "WebPage",
			"@id": `${props.canonicalUrl}#webpage`,
			url: props.canonicalUrl,
			name: props.title,
			description: props.description,
			inLanguage: currentLocale,
			isPartOf: { "@id": `${Astro.url.origin}/#website` },
			speakable: {
				"@type": "SpeakableSpecification",
				cssSelector: ["h1", "[data-answer-target=\"true\"]"]
			}
		} : null;
		const schemaList = [];
		if (webPageSchema) schemaList.push(webPageSchema);
		if (orgSchema) schemaList.push(orgSchema);
		if (faqSchema) schemaList.push(faqSchema);
		if (extraSchema) if (Array.isArray(extraSchema)) schemaList.push(...extraSchema);
		else if (extraSchema["@graph"]) schemaList.push(...extraSchema["@graph"]);
		else schemaList.push(extraSchema);
		if (schemaList.length === 0) return null;
		return renderTemplate`<script type="application/ld+json">${unescapeHTML(JSON.stringify({
			"@context": "https://schema.org",
			"@graph": schemaList
		}))}<\/script>`;
	})()}<!-- Set data‑ai‑answer attribute --><script>
  document.documentElement.setAttribute('data-ai-answer', 'true');
<\/script>`;
}, "/Users/apple/Downloads/webworldmaker/src/components/Seo.astro", void 0);
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://webworldmaker.com");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { metaTitle = "WebWorldMaker - Enterprise Digital Ecosystems", metaDescription = "Empowering businesses with cutting-edge digital ecosystems. From high-performance AI agents to global messaging gateway infrastructure.", faqs = [], orgSchema = null, canonicalUrl = new URL(Astro.url.pathname === "/" ? "/" : Astro.url.pathname.endsWith("/") ? Astro.url.pathname.slice(0, -1) : Astro.url.pathname, Astro.site).href, extraSchema = null, noIndex = false, geoRegion, geoPlacename, geoPosition, icbm, isSearchable = true, locale = "en" } = Astro.props;
	const defaultOrgSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${Astro.url.origin}/#organization`,
		"name": "WebWorldMaker",
		"url": Astro.url.origin,
		"logo": {
			"@type": "ImageObject",
			"@id": `${Astro.url.origin}/#logo`,
			"url": `${Astro.url.origin}/logo.svg`,
			"width": 200,
			"height": 60
		},
		"description": "Provider of enterprise digital solutions, bulk messaging, AI automation, and custom software development.",
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+91-86002-80002",
			"contactType": "sales",
			"areaServed": "Global",
			"availableLanguage": [
				"English",
				"Hindi",
				"Spanish"
			]
		},
		"sameAs": [
			"https://twitter.com/webworldmaker",
			"https://www.linkedin.com/company/webworldmaker",
			"https://github.com/webworldmaker",
			"https://www.wikidata.org/wiki/Q114872221"
		]
	};
	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${Astro.url.origin}/#website`,
		"url": Astro.url.origin,
		"name": "WebWorldMaker",
		"description": "Enterprise digital solutions — bulk messaging, AI automation, CRM, and SEO for businesses worldwide.",
		"publisher": { "@id": `${Astro.url.origin}/#organization` },
		"potentialAction": {
			"@type": "SearchAction",
			"target": {
				"@type": "EntryPoint",
				"urlTemplate": `${Astro.url.origin}/search?q={search_term_string}`
			},
			"query-input": "required name=search_term_string"
		}
	};
	const finalOrgSchema = orgSchema || defaultOrgSchema;
	const finalExtraSchema = extraSchema ? Array.isArray(extraSchema) ? [websiteSchema, ...extraSchema] : extraSchema["@graph"] ? { "@graph": [websiteSchema, ...extraSchema["@graph"]] } : [websiteSchema, extraSchema] : websiteSchema;
	return renderTemplate`<html${addAttribute(locale, "lang")} data-astro-cid-z4jru4n3><head><!-- Google Consent Mode v2 Default Setup --><script>
      window.dataLayer = window.dataLayer || [];
      function gtag(...args){window.dataLayer.push(args);}
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'granted',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'wait_for_update': 500
      });
      gtag('set', 'ads_data_redaction', true);
    <\/script><!-- Google Tag Manager — official unmodified loader snippet from Google Tag
         Manager's own install instructions; kept byte-for-byte so it stays
         diffable against Google's docs, so the \`var\` here is intentionally
         not modernized to let/const. --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], // eslint-disable-line no-var
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N4JNX4ZT');<\/script><!-- End Google Tag Manager --><script>
      (function() {
        try {
          const map = {
            'obsidian': 'theme-obsidian-gold',
            'cyberpunk': 'theme-neon-cyberpunk',
            'emerald': 'theme-emerald-matrix',
            'amethyst': 'theme-royal-amethyst',
            'light-minimal': 'theme-light-minimal'
          };
          const theme = localStorage.getItem('wwm-theme-preset') || 'obsidian';
          const cls = map[theme] || 'theme-obsidian-gold';
          document.documentElement.classList.add(cls);
          if (localStorage.getItem('wwm-warm-filter') === 'true') {
            document.documentElement.classList.add('circadian-warm-filter');
          }
          if (localStorage.getItem('wwm-power-saving') === 'true') {
            document.documentElement.classList.add('power-saving-mode');
          }
        } catch (err) {
          // Swallow — localStorage can throw in private-browsing/blocked-storage
          // contexts; a missing theme class just means the default theme shows.
          void err;
        }
      })();
    <\/script>${renderComponent($$result, "Seo", $$Seo, {
		"title": metaTitle,
		"description": metaDescription,
		"canonicalUrl": canonicalUrl,
		"image": new URL("/og-image.png", Astro.url).href,
		"orgSchema": finalOrgSchema,
		"faqs": faqs,
		"extraSchema": finalExtraSchema,
		"noIndex": noIndex,
		"geoRegion": geoRegion,
		"geoPlacename": geoPlacename,
		"geoPosition": geoPosition,
		"icbm": icbm,
		"locale": locale,
		"data-astro-cid-z4jru4n3": true
	})}<link rel="icon" type="image/svg+xml" href="/logo.svg"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro.generator, "content")}><link rel="alternate" hreflang="en"${addAttribute(Astro.url.href, "href")}><!-- Font Loading --><link rel="stylesheet" href="/local-fonts.css"><link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" as="style" onload="this.rel='stylesheet'"><!-- Resource Hints: shave 200-400ms off FCP for external assets --><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="dns-prefetch" href="https://fonts.googleapis.com"><link rel="dns-prefetch" href="https://www.google-analytics.com"><!-- Critical CSS inline injection --><!-- Real-Time Core Web Vitals Telemetry for Tag Assistant & GA4 --><script>
      (function() {
        if (!('PerformanceObserver' in window)) return;
        try {
          const inpObserver = new PerformanceObserver(function(list) {
            const entries = list.getEntries();
            for (let i = 0; i < entries.length; i++) {
              const entry = entries[i];
              if (entry.duration > 40) {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'core_web_vitals_inp',
                  event_category: 'Web Vitals',
                  event_label: entry.name || 'user_interaction',
                  value: Math.round(entry.duration)
                });
              }
            }
          });
          inpObserver.observe({ type: 'first-input', buffered: true });
        } catch (err) {
          // Swallow — PerformanceObserver support/behavior varies across
          // browsers; a failure here should never block page rendering.
          void err;
        }
      })();
    <\/script><!-- Speculation Rules API for instant pointer-hover pre-rendering of key pages,
         paired with the @view-transition CSS in global.css.
         NOTE: this block's content is JSON, not JavaScript — the astro-eslint
         parser still tries to parse <script> bodies as JS and reports a false
         "Parsing error" here. Harmless; browsers parse type="speculationrules"
         as JSON correctly. Nothing to fix in the code itself. --><script type="speculationrules">
    {
      "prerender": [
        {
          "source": "document",
          "where": {
            "and": [
              { "href_matches": "/*" },
              { "not": { "href_matches": ["/admin/*", "*/api/*", "/logout", "/*\\\\?*", "/*#*"] } }
            ]
          },
          "eagerness": "moderate"
        }
      ]
    }
    <\/script><!-- Service Worker Cleanup: Unregisters legacy SWs and prevents stale /api/content/ fetch errors --><script>
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
          for (const r of registrations) {
            r.unregister();
          }
        });
      }
    <\/script>${renderHead($$result)}</head><body data-astro-cid-z4jru4n3><a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:shadow-lg transition-all" data-astro-cid-z4jru4n3>Skip to main content</a><!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4JNX4ZT" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-z4jru4n3></iframe></noscript><!-- End Google Tag Manager (noscript) -->${renderComponent($$result, "Navigation", Navigation, {
		"client:load": true,
		"data-astro-cid-z4jru4n3": true,
		"client:component-hydration": "load",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/Navigation.tsx",
		"client:component-export": "default"
	})}<main id="main-content" class="flex-grow focus:outline-none"${addAttribute(-1, "tabIndex")}${addAttribute(isSearchable ? "" : void 0, "data-pagefind-body")} data-astro-cid-z4jru4n3>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", Footer, {
		"client:visible": true,
		"data-astro-cid-z4jru4n3": true,
		"client:component-hydration": "visible",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/Footer.tsx",
		"client:component-export": "default"
	})}<aside aria-label="Social Share" data-astro-cid-z4jru4n3>${renderComponent($$result, "FloatingShareSidebar", FloatingShareSidebar, {
		"client:visible": true,
		"data-astro-cid-z4jru4n3": true,
		"client:component-hydration": "visible",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/FloatingShareSidebar.tsx",
		"client:component-export": "FloatingShareSidebar"
	})}</aside>${renderComponent($$result, "CookieConsent", CookieConsent, {
		"client:idle": true,
		"data-astro-cid-z4jru4n3": true,
		"client:component-hydration": "idle",
		"client:component-path": "/Users/apple/Downloads/webworldmaker/src/components/CookieConsent.tsx",
		"client:component-export": "CookieConsent"
	})}<!-- Core Scroll and Animation Orchestration (GSAP + Lenis) -->${renderScript($$result, "/Users/apple/Downloads/webworldmaker/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/apple/Downloads/webworldmaker/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { createComponent as a, renderScript as i, trackFaqExpand as n, glossarySlug as r, $$BaseLayout as t };

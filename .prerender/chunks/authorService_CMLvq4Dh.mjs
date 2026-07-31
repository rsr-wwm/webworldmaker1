//#region src/services/authorService.ts
var AUTHOR_PROFILES = {
	"anita-desai": {
		name: "Anita Desai",
		role: "Messaging Specialist",
		bio: "Expert in omnichannel communication strategies and Meta Business Partner ecosystem. Anita has spent over a decade advising B2B and B2C brands on conversational commerce, WhatsApp Business deployments, and SMS marketing ROI.",
		avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
		skills: [
			"Omnichannel Strategy",
			"Meta Business Suite",
			"WhatsApp API",
			"Customer Engagement"
		],
		education: "MBA in Marketing, Indian Institute of Management (IIM)",
		linkedin: ""
	},
	"james-sterling": {
		name: "James Sterling",
		role: "Telecom Infrastructure Lead",
		bio: "Focused on high-throughput messaging gateways and global carrier relationship management. James designs robust telecom architectures that deliver millions of secure messages and OTPs daily with sub-1.2 second latency.",
		avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
		skills: [
			"Telecom Protocols",
			"SMPP Gateway Design",
			"Load Balancing",
			"High Throughput Routing"
		],
		education: "M.S. in Telecommunications, Stanford University",
		linkedin: ""
	},
	"david-chen": {
		name: "David Chen",
		role: "Lead Full-Stack Developer",
		bio: "Specialist in custom enterprise CRM, ERP, and LMS development. David bridges the gap between complex business workflows and clean, scalable code structures, leading our full-stack engineering team.",
		avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
		skills: [
			"React & Next.js",
			"Node.js & Python",
			"Database Scaling",
			"Enterprise Architecture"
		],
		education: "B.S. in Computer Science, University of California, Berkeley",
		linkedin: ""
	},
	"sanjay-patel": {
		name: "Sanjay Patel",
		role: "Data Strategist & Architect",
		bio: "Specializing in business intelligence, data pipelines (ETL), and predictive modeling for multi-national retail and fintech brands. Sanjay designs data lakehouses that convert raw communication logs into actionable business insights.",
		avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
		skills: [
			"Snowflake & BigQuery",
			"ETL Pipelines",
			"PowerBI & Tableau",
			"Predictive Modeling"
		],
		education: "Ph.D. in Data Science, Massachusetts Institute of Technology (MIT)",
		linkedin: ""
	},
	"akash-verma": {
		name: "Akash Verma",
		role: "CPaaS & Integration Architecture Lead",
		bio: "Former API platform engineer at a Tier-1 global CPaaS provider, specializing in omnichannel API gateways, Model Context Protocol (MCP) server design, and developer experiences for large-scale enterprise integrations.",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
		skills: [
			"API Gateway Design",
			"Model Context Protocol (MCP)",
			"OAuth & Security",
			"Developer Experience"
		],
		education: "B.Tech in Information Technology, IIT Delhi",
		linkedin: ""
	},
	"sandro-vicci": {
		name: "Sandro Vicci",
		role: "Mobile Solutions Lead",
		bio: "With over 12 years of mobile app development experience, Sandro directs native iOS (SwiftUI) and cross-platform (Flutter) lifecycles for high-security applications in retail and fintech.",
		avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
		skills: [
			"iOS SwiftUI",
			"Flutter Cross-Platform",
			"Mobile UX Design",
			"App Security"
		],
		education: "M.S. in Software Engineering, Politecnico di Milano",
		linkedin: ""
	},
	"elena-vance": {
		name: "Elena Vance",
		role: "Chief Privacy Officer & Cybersecurity Lead",
		bio: "Cybersecurity specialist with 15+ years of experience in penetration testing, threat modeling, and regulatory compliance. Elena leads audits for SOC2, HIPAA, and GDPR readiness.",
		avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
		skills: [
			"Penetration Testing",
			"SOC2 / HIPAA Audit",
			"Threat Modeling",
			"Data Privacy Policy"
		],
		education: "Ph.D. in Cybersecurity, Royal Holloway, University of London",
		linkedin: ""
	},
	"vikram-aditya": {
		name: "Vikram Aditya",
		role: "Search Architecture & AI Engine Specialist",
		bio: "Specialist in technical SEO, JSON-LD schema graphs, Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO). Vikram designs structured data pipelines that establish brand authority across Google, Bing, Perplexity, ChatGPT, and AI Search Overviews.",
		avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
		skills: [
			"Technical SEO",
			"JSON-LD Schema Graphs",
			"GEO & AEO Strategy",
			"LLM Corpus Structuring"
		],
		education: "M.S. in Computer Science & Knowledge Graphs, Carnegie Mellon University",
		linkedin: ""
	}
};
//#endregion
export { AUTHOR_PROFILES as t };

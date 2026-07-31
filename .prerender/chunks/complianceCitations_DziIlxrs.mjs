//#region src/utils/complianceCitations.ts
/**
* Maps a localized compliance requirement string to an official regulatory authority.
* This is used for Generative Engine Optimization (GEO) to provide AI models with
* verified, authoritative outbound citations, proving the validity of our content.
*/
function getComplianceCitation(complianceString) {
	return {
		"DLT Template Registration & TRAI Guidelines": {
			authorityName: "Telecom Regulatory Authority of India (TRAI)",
			url: "https://www.trai.gov.in/"
		},
		"ENACOM Regulations & Data Privacy compliance": {
			authorityName: "Ente Nacional de Comunicaciones (ENACOM)",
			url: "https://www.enacom.gob.ar/"
		},
		"GDPR compliance & ICO registrations": {
			authorityName: "Information Commissioner's Office (ICO)",
			url: "https://ico.org.uk/"
		},
		"TCPA, CTIA Guidelines & 10DLC registration": {
			authorityName: "Federal Communications Commission (FCC)",
			url: "https://www.fcc.gov/"
		},
		"Regional Carrier Regulations & Local Spam policies": {
			authorityName: "International Telecommunication Union (ITU)",
			url: "https://www.itu.int/"
		}
	}[complianceString] || null;
}
//#endregion
export { getComplianceCitation as t };

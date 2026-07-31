import { t as COUNTRY_CODES } from "./constants_DUCmtVsI.mjs";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ServiceSidebarForm.tsx
var ServiceSidebarForm = ({ serviceTitle }) => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [countryCode, setCountryCode] = useState("+91");
	const [phone, setPhone] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [honeypot, setHoneypot] = useState("");
	const validateEmail = (emailStr) => {
		return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/.test(String(emailStr).toLowerCase());
	};
	const handleDirectSubmit = async (e, buttonName) => {
		e.preventDefault();
		if (!fullName.trim() || !email.trim() || !phone.trim()) {
			if (typeof window !== "undefined" && window.showToast) window.showToast("Please fill in all fields.", "warning");
			else alert("Please fill in all fields.");
			return;
		}
		if (!validateEmail(email)) {
			if (typeof window !== "undefined" && window.showToast) window.showToast("Please enter a valid business email address.", "warning");
			else alert("Please enter a valid business email address.");
			return;
		}
		setIsSubmitting(true);
		const names = fullName.trim().split(" ");
		const firstName = names[0] || "";
		const lastName = names.length > 1 ? names.slice(1).join(" ") : "";
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					countryCode,
					phone,
					serviceInterest: serviceTitle,
					message: buttonName === "Request Demo" ? `I am interested in requesting a demo for the ${serviceTitle} solution.` : `I am ready to get started with ${serviceTitle}.`,
					buttonName,
					pageContext: typeof window !== "undefined" ? window.location.pathname + (window.location.search || "") : "",
					company_verification_token: honeypot
				})
			});
			if (response.ok) {
				setIsSuccess(true);
				if (typeof window !== "undefined" && window.showToast) window.showToast("Request submitted successfully!", "success");
			} else {
				const result = await response.json();
				if (typeof window !== "undefined" && window.showToast) window.showToast(result.message || "Something went wrong. Please try again later.", "error");
			}
		} catch (err) {
			if (typeof window !== "undefined" && window.showToast) window.showToast("Could not submit request. Please try again later.", "error");
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-white rounded-2xl shadow-lg border border-indigo-100 p-6 sticky top-24",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
				className: "text-xl font-bold text-slate-900 mb-4",
				children: "Ready to Get Started?"
			}), /* @__PURE__ */ jsxs("p", {
				className: "text-slate-600 text-sm mb-6",
				children: [
					"Transform your business with our professional ",
					serviceTitle,
					" solutions today."
				]
			})] }),
			isSuccess ? /* @__PURE__ */ jsxs("div", {
				className: "text-center py-6",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm shadow-emerald-100",
						children: "✓"
					}),
					/* @__PURE__ */ jsx("h4", {
						className: "font-bold text-slate-900 text-lg mb-2",
						children: "Request Received!"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-slate-600 text-xs leading-relaxed mb-6",
						children: [
							"Our team will contact you within 24 hours to schedule your ",
							serviceTitle,
							" consultation."
						]
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => {
							setIsSuccess(false);
							setFullName("");
							setEmail("");
							setPhone("");
						},
						className: "text-xs text-indigo-600 font-bold hover:underline cursor-pointer",
						children: "Send another request"
					})
				]
			}) : /* @__PURE__ */ jsxs("form", {
				className: "space-y-4",
				onSubmit: (e) => handleDirectSubmit(e, "Ready to get started"),
				children: [
					/* @__PURE__ */ jsx("input", {
						type: "text",
						name: "company_verification_token",
						value: honeypot,
						onChange: (e) => setHoneypot(e.target.value),
						className: "hidden",
						tabIndex: -1,
						autoComplete: "off"
					}),
					/* @__PURE__ */ jsx("input", {
						type: "text",
						placeholder: "Full Name",
						value: fullName,
						onChange: (e) => setFullName(e.target.value),
						required: true,
						className: "w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-shadow"
					}),
					/* @__PURE__ */ jsx("input", {
						type: "email",
						placeholder: "Work Email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						required: true,
						className: "w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-shadow"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ jsx("select", {
							value: countryCode,
							onChange: (e) => setCountryCode(e.target.value),
							className: "w-24 px-2 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white text-xs transition-shadow",
							children: COUNTRY_CODES.map((c) => /* @__PURE__ */ jsx("option", {
								value: c.code,
								children: c.code
							}, c.code))
						}), /* @__PURE__ */ jsx("input", {
							type: "tel",
							placeholder: "Mobile Number",
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							required: true,
							className: "flex-grow px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-shadow"
						})]
					}),
					/* @__PURE__ */ jsx("button", {
						disabled: isSubmitting,
						className: "w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 active:scale-95 transform transition-all duration-150 shadow-md disabled:opacity-50",
						children: isSubmitting ? "Submitting..." : "Ready to get started"
					}),
					/* @__PURE__ */ jsxs("button", {
						type: "button",
						disabled: isSubmitting,
						onClick: (e) => handleDirectSubmit(e, "Request Demo"),
						className: "w-full bg-white text-indigo-600 border border-indigo-200 font-bold py-3 rounded-lg hover:bg-indigo-50 active:scale-95 transform transition-all duration-150 flex items-center justify-center disabled:opacity-50",
						children: [/* @__PURE__ */ jsxs("svg", {
							className: "w-5 h-5 mr-2",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: [/* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
							}), /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							})]
						}), "Request Demo"]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "tel:+918600280002",
						className: "flex items-center justify-center w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 active:scale-95 transform transition-all duration-150 shadow-md",
						children: [/* @__PURE__ */ jsx("svg", {
							className: "w-4 h-4 mr-2",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							})
						}), "Call Agent"]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "text-center mt-6 pt-6 border-t border-slate-100",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs text-slate-500 mb-2",
					children: "Or call us directly:"
				}), /* @__PURE__ */ jsx("a", {
					href: "tel:+918600280002",
					className: "text-lg font-bold text-indigo-900 hover:text-indigo-700",
					children: "+91-86002-80002"
				})]
			})
		]
	});
};
//#endregion
export { ServiceSidebarForm as t };

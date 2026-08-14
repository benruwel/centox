/**
 * Per-section copy. All wording is verbatim from the client content guide except
 * the section eyebrow labels, which are navigational labels rather than copy.
 */
import { SECTION_IDS } from "./site";

export const hero = {
	tagline: "Accurate. Reliable. Timely.",
	headline: "Your Trusted Partner in Toxicology Testing",
	intro:
		"We provide high quality toxicology testing services to support healthcare providers, employers, legal professionals, and individuals with accurate and confidential results.",
	cta: { label: "Get in touch", href: `#${SECTION_IDS.contact}` },
} as const;

export const whyUs = [
	{
		id: "turnaround",
		title: "Fast turnaround times",
		description:
			"Efficient laboratory workflows help deliver the results you need without unnecessary delays.",
	},
	{
		id: "technology",
		title: "Advanced laboratory technology",
		description:
			"Modern analytical tools support careful testing across a wide range of toxicology applications.",
	},
	{
		id: "accuracy",
		title: "Accurate and reliable results",
		description:
			"Evidence-based analysis produces dependable findings for informed clinical, legal, and workplace decisions.",
	},
	{
		id: "confidentiality",
		title: "Strict confidentiality",
		description:
			"Sensitive information and test results are handled with care, discretion, and professionalism.",
	},
	{
		id: "professionals",
		title: "Experienced toxicology professionals",
		description:
			"Specialist knowledge guides every stage, from laboratory analysis to the interpretation of findings.",
	},
	{
		id: "quality",
		title: "Quality-assured testing procedures",
		description:
			"Consistent processes and careful oversight help maintain high standards throughout every analysis.",
	},
] as const;

export const whoWeServe = [
	"Hospitals and Clinics",
	"Employers",
	"Industries",
	"Law Enforcement Agencies",
	"Legal Professionals",
	"Insurance Companies",
	"Educational Institutions",
	"Individuals",
] as const;

export const commitment =
	"We are committed to delivering dependable toxicology testing that supports informed medical, legal, and workplace decisions while maintaining the highest standards of quality and professionalism.";

/**
 * Per-section copy. All wording is verbatim from the client content guide except
 * the section eyebrow labels, which are navigational labels rather than copy.
 */

import { SECTION_IDS } from "./site";

export const hero = {
	tagline: "Accurate. Reliable. Timely.",
	headline: "Your Trusted Partner in Toxicology Testing",
	intro:
		"We provide high-quality toxicology testing services to support healthcare providers, employers, legal professionals, and individuals with accurate and confidential results.",
	cta: { label: "Get in touch", href: `#${SECTION_IDS.contact}` },
} as const;

export const whyUs = [
	"Fast turnaround times",
	"Advanced laboratory technology",
	"Accurate and reliable results",
	"Strict confidentiality",
	"Experienced toxicology professionals",
	"Quality-assured testing procedures",
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

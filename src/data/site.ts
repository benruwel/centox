/**
 * Site identity, navigation and contact details.
 *
 * Section ids are defined once here and consumed both by the nav links and by the
 * section components, so a dead anchor is a type error rather than a silent bug.
 */

export const SECTION_IDS = {
	hero: "top",
	services: "services",
	whyUs: "why-us",
	whoWeServe: "who-we-serve",
	commitment: "commitment",
	contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const siteConfig = {
	name: "CENTOX Kenya",
	longName: "Centre of Toxicology and Applied Research",
	tagline: "Accurate. Reliable. Timely.",
	defaultTitle: "CENTOX Kenya — Toxicology Testing Services",
	description:
		"CENTOX Kenya provides high-quality toxicology testing for healthcare providers, employers, legal professionals, and individuals — accurate, confidential, timely.",
} as const;

export const navLinks = [
	{ label: "Services", href: "/services" },
	{ label: "Why Us", href: `/#${SECTION_IDS.whyUs}` },
	{ label: "Who We Serve", href: `/#${SECTION_IDS.whoWeServe}` },
	{ label: "Contact", href: `/#${SECTION_IDS.contact}` },
] as const satisfies readonly { label: string; href: string }[];

export type ContactKind = "phone" | "email" | "website" | "address";

export interface ContactChannel {
	kind: ContactKind;
	label: string;
	/** null = not yet supplied by the client. Renders as a marked placeholder. */
	value: string | null;
	/** Shape hint shown inside the placeholder so the client knows what to send. */
	placeholder: string;
}

/* ───────────────────────────────────────────────────────────────────────────
 * TODO(client): the four `value: null` fields below are the ONLY place contact
 * details live. Fill them in and the footer plus every tel:/mailto: link
 * updates. Leave a field as null and it renders as a visible TODO chip
 * instead of a broken link.
 * ─────────────────────────────────────────────────────────────────────────── */
export const contact = [
	{
		kind: "phone",
		label: "Phone",
		value: null,
		placeholder: "+254 7XX XXX XXX",
	},
	{
		kind: "email",
		label: "Email",
		value: null,
		placeholder: "info@example.co.ke",
	},
] as const satisfies readonly ContactChannel[];

/** Returns a usable href, or null when the value is missing or not linkable. */
export function contactHref(channel: ContactChannel): string | null {
	if (!channel.value) return null;
	if (channel.kind === "phone")
		return `tel:${channel.value.replace(/[^+\d]/g, "")}`;
	if (channel.kind === "email") return `mailto:${channel.value}`;
	if (channel.kind === "website") {
		return channel.value.startsWith("http")
			? channel.value
			: `https://${channel.value}`;
	}
	return null; // an address is not linkable
}

export const closingLine =
	"Accurate Results. Trusted Expertise. Professional Service.";

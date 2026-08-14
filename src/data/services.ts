import type { ImageMetadata } from "astro";
import consultingImage from "../assets/consulting-and-compliance.jpg";
import environmentalImage from "../assets/environmental-toxicology.jpg";
import foodImage from "../assets/food-toxicology.jpg";
import humanImage from "../assets/human-toxicology.jpg";
import industrialImage from "../assets/industrial-toxicology.jpg";

export type ServiceId =
	| "human"
	| "industrial"
	| "food"
	| "environmental"
	| "consulting";

export interface ServiceCategory {
	id: ServiceId;
	sectionId: `${ServiceId}-toxicology` | "consulting-and-compliance";
	title: string;
	summary: string;
	longerDescription: string;
	/** Imported so Astro can optimise it and infer its intrinsic dimensions. */
	image: ImageMetadata;
	/** Describes the photo itself; the card heading already names the service. */
	imageAlt: string;
	items: readonly string[];
}

export const serviceCategories = [
	{
		id: "human",
		sectionId: "human-toxicology",
		title: "Human Toxicology",
		summary:
			"Screening, monitoring and forensic analysis for clinical, workplace, sporting and legal contexts.",
		longerDescription:
			"Understanding how drugs, alcohol, poisons, and other substances affect the human body is essential in clinical, occupational, sporting, forensic, and legal settings. CENTOX combines evidence-based laboratory analysis with careful interpretation of findings to provide accurate, confidential results suited to the circumstances in which they will be used.",
		image: humanImage,
		imageAlt:
			"Two clinicians in white coats discussing diagnostic scans and result charts on a monitor.",
		items: [
			"Institutional drug screening",
			"Sports drug screening",
			"Pre-employment testing",
			"Alcohol testing",
			"Poisoning assessment",
			"Emergency toxicology support",
			"Therapeutic drug monitoring",
			"Legal case support",
			"Postmortem toxicology",
			"Evidence-based laboratory analysis",
		],
	},
	{
		id: "industrial",
		sectionId: "industrial-toxicology",
		title: "Industrial Toxicology",
		summary:
			"Exposure limits, cleaning validation and risk assessment for manufacturing and pharmaceutical operations.",
		longerDescription:
			"Safer workplaces begin with a clear understanding of the chemicals and hazardous substances employees may encounter. By applying toxicological evidence to real industrial environments, we help manufacturers, pharmaceutical companies, and other organisations make informed decisions about occupational exposure, contamination control, chemical handling, and regulatory responsibilities.",
		image: industrialImage,
		imageAlt:
			"An industrial processing plant of towers and stacks releasing vapour under an overcast sky.",
		items: [
			"Occupational Exposure Limits (OELs)",
			"Health-Based Exposure Limits (HBELs)",
			"Cleaning Validation",
			"Safety Data Sheet (SDS) Development",
			"Toxicological Risk Assessment (TRA)",
		],
	},
	{
		id: "food",
		sectionId: "food-toxicology",
		title: "Food Toxicology",
		summary:
			"Contaminant, residue and mycotoxin analysis across the food production chain.",
		longerDescription:
			"Potentially harmful substances can enter the food chain during production, processing, storage, or distribution. Scientific analysis helps producers, processors, regulators, and other stakeholders identify these risks, protect consumers, and strengthen quality-control programmes. The resulting evidence supports responsible decisions about food safety and the management of contaminants throughout the supply chain.",
		image: foodImage,
		imageAlt:
			"An overhead view of a laid table with flatbread, fresh vegetables, packaged cake and snacks.",
		items: [
			"Contaminant Screening",
			"Residue Analysis",
			"Mycotoxin Testing",
			"Process Contaminants",
		],
	},
	{
		id: "environmental",
		sectionId: "environmental-toxicology",
		title: "Environmental Toxicology",
		summary:
			"Aquatic, soil and wastewater assays supporting environmental impact and compliance work.",
		longerDescription:
			"Chemicals, waste, and industrial activity can have far-reaching effects on water, soil, wildlife, and surrounding ecosystems. We investigate these potential impacts and provide evidence that organisations can use to assess environmental risk, manage pollution, support compliance initiatives, and make more responsible decisions about development and environmental protection.",
		image: environmentalImage,
		imageAlt:
			"Plastic bags and packaging waste drifting underwater among small tropical fish.",
		items: [
			"Aquatic Testing",
			"Soil and Sediment Assays",
			"Endocrine Disruption",
			"Wastewater Analysis",
			"Environmental Impact Assessment",
		],
	},
	{
		id: "consulting",
		sectionId: "consulting-and-compliance",
		title: "Consulting and Compliance",
		summary:
			"Our consultancy services provide comprehensive support for industries dealing with chemicals and hazardous materials, ensuring compliance with national and international regulations.",
		longerDescription:
			"Complex toxicological information is most valuable when it can be translated into clear, practical action. CENTOX supports organisations navigating regulatory obligations, risk assessments, legal matters, and operational safety challenges. This expertise is complemented by access to essential toxicology-related supplies and capacity-building initiatives that help institutions strengthen their internal health and safety practices.",
		image: consultingImage,
		imageAlt: "Two people shaking hands across a meeting room table.",
		items: [
			"Risk Assessment",
			"Regulatory Support",
			"Litigation Support",
			"Antidotes Supplies",
			"Test kits Supplies",
			"Personal Protective Equipment Supplies",
			"Capacity Building",
			"Advocacy",
		],
	},
] as const satisfies readonly ServiceCategory[];

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
  title: string;
  summary: string;
  /** Imported so Astro can optimise it and infer its intrinsic dimensions. */
  image: ImageMetadata;
  /** Describes the photo itself; the card heading already names the service. */
  imageAlt: string;
  items: readonly string[];
}

export const serviceCategories = [
  {
    id: "human",
    title: "Human Toxicology",
    summary:
      "Screening, monitoring and forensic analysis for clinical, workplace, sporting and legal contexts.",
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
    title: "Industrial Toxicology",
    summary:
      "Exposure limits, cleaning validation and risk assessment for manufacturing and pharmaceutical operations.",
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
    title: "Food Toxicology",
    summary:
      "Contaminant, residue and mycotoxin analysis across the food production chain.",
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
    title: "Environmental Toxicology",
    summary:
      "Aquatic, soil and wastewater assays supporting environmental impact and compliance work.",
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
    title: "Consulting and Compliance",
    summary:
      "Regulatory and litigation support, essential supplies, and capacity building for institutions.",
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

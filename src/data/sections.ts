/**
 * Per-section copy. All wording is verbatim from the client content guide except
 * the section eyebrow labels, which are navigational labels rather than copy.
 */
import { SECTION_IDS } from "./site";

export const hero = {
  tagline: "Accurate. Reliable. Timely.",
  headline: "Your Trusted Partner in Toxicology Solutions",
  intro:
    " We are a multidisciplinary scientific consulting firm in toxicology that strives to develop innovative solutions to address the scientific, technical, and regulatory challenges confronting our clients. We have a reputation for applying sound science and novel approaches tailored to meet the specific needs of our clients, whether a rapid response or a comprehensive analysis is required.",
  cta: { label: "Get in touch", href: `#${SECTION_IDS.contact}` },
} as const;

export const about = {
  introduction:
    "CENTOX Kenya is a multidisciplinary toxicology and applied research centre. We combine laboratory science, specialist interpretation, and regulatory insight to help organisations and individuals understand chemical exposures, assess risk, and act on reliable evidence. Our work spans human, industrial, environmental, and food toxicology, as well as scientific consulting and compliance support. Every engagement is shaped around the question at hand—from an urgent test requiring a rapid response to a complex investigation that calls for comprehensive analysis.",
  pillars: [
    {
      number: "01",
      title: "Test",
      description:
        "We analyse biological, environmental, workplace, and food-related samples using careful, quality-focused laboratory processes.",
    },
    {
      number: "02",
      title: "Interpret",
      description:
        "We turn analytical findings into clear, meaningful insights, giving each result the scientific context needed for confident decisions.",
    },
    {
      number: "03",
      title: "Advise",
      description:
        "We help clients respond to technical and regulatory challenges with practical guidance tailored to their risks, responsibilities, and goals.",
    },
  ],
  closing:
    "The result is more than a laboratory report: it is dependable scientific evidence that supports medical care, workplace safety, legal matters, regulatory compliance, and the protection of people and the environment.",
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

export const purpose = {
  vision:
    "To become a leading and trusted provider of toxicology, chemical safety, and risk assessment solutions in Africa, contributing to a healthier, safer, and more sustainable future.",
  mission:
    "To be a trusted partner in toxicology and chemical safety by delivering scientifically sound, innovative, and cost-effective assessment services that protect human health, ensure product safety, support regulatory compliance, and promote environmental sustainability across Africa.",
} as const;

export const coreValues = [
  {
    id: "excellence",
    title: "Scientific Excellence",
    description:
      "Delivering evidence-based, scientifically rigorous toxicological assessments.",
  },
  {
    id: "integrity",
    title: "Integrity",
    description:
      "Maintaining honesty, transparency, and professional ethics in every engagement.",
  },
  {
    id: "health",
    title: "Human Health Protection",
    description:
      "Prioritising the safety and well-being of people and communities.",
  },
  {
    id: "environment",
    title: "Environmental Responsibility",
    description:
      "Promoting responsible chemical management and environmental sustainability.",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "Applying modern scientific approaches to solve complex toxicological challenges.",
  },
  {
    id: "client",
    title: "Client-Centred Service",
    description:
      "Providing practical, reliable, and cost-effective solutions tailored to clients' needs.",
  },
  {
    id: "compliance",
    title: "Regulatory Compliance",
    description:
      "Supporting clients in meeting applicable national and international safety requirements.",
  },
] as const;

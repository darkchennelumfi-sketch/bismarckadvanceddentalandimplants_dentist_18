export type FinancingPartner = {
  name: string;
  description: string;
  href: string;
  image: string;
  width: number;
  height: number;
};

export const financingPartners: FinancingPartner[] = [
  {
    name: "Proceed Finance",
    description:
      "Apply online for dental financing through Proceed Finance.",
    href: "https://www.proceedfinance.com/application/create?referrer=12200-3721-38D2",
    image: "/images/finance-proceed.jpg",
    width: 1024,
    height: 490,
  },
  {
    name: "CareCredit",
    description:
      "A health and wellness credit card accepted for dental care.",
    href: "https://www.carecredit.com/providers/healthcare-wellness/?industry=dental",
    image: "/images/finance-carecredit.png",
    width: 1024,
    height: 536,
  },
  {
    name: "LendingClub",
    description:
      "Patient solutions for financing larger dental treatment plans.",
    href: "https://www.lendingclub.com/patientsolutions/patients?redirect=patients",
    image: "/images/finance-lendingclub.jpg",
    width: 1024,
    height: 536,
  },
  {
    name: "Cherry",
    description:
      "Payment plans with Cherry, one of our dental financing partners.",
    href: "https://withcherry.com/",
    image: "/images/finance-cherry.png",
    width: 1024,
    height: 285,
  },
];

export type DentalPlan = {
  name: string;
  price: string;
  joiningFee: string;
  audience: string;
  cleanings: string;
  featured?: boolean;
};

export const dentalPlans: DentalPlan[] = [
  {
    name: "Individual Plan",
    price: "$485",
    joiningFee: "plus $99 one-time fee to join",
    audience: "Single adult plan for ages 18+",
    cleanings: "Includes (2) preventative cleanings (prophy)",
    featured: true,
  },
  {
    name: "Family Plan",
    price: "$875",
    joiningFee: "plus $99 one-time fee to join",
    audience:
      "Parent/child or significant others only. For 2+ people, additional $325 each.",
    cleanings: "Includes (2) preventative cleanings per person (prophy)",
  },
  {
    name: "Periodontal Maintenance",
    price: "$785",
    joiningFee: "plus $99 one-time fee to join",
    audience: "Single adult patient plan for ages 18+",
    cleanings: "Includes (4) preventative cleanings (periodontal maintenance)",
  },
  {
    name: "Implant Maintenance",
    price: "$675",
    joiningFee: "plus $99 one-time fee to join",
    audience: "Single adult patient plan for ages 18+",
    cleanings:
      "Includes (1) preventative cleaning (prophy) and (1) implant maintenance cleaning",
  },
];

export const planBenefits = [
  "No annual maximums and unlimited coverage",
  "No deductibles",
  "No claim forms to file",
  "No membership cards required",
  "No need for pre-authorizations",
  "No exclusions for pre-existing conditions",
  "No denials — everyone is eligible",
  "No waiting periods — coverage starts immediately",
];

export const planIncludedServices = [
  "(2) annual dental exams",
  "(2) fluoride treatments",
  "(1) emergency visit",
  "(1) full mouth x-ray / panorex",
  "(4) bitewing x-rays",
  "Any individual periapical x-rays",
  "(2) oral cancer screenings",
  "10–15% discount on other treatment (implants excluded)",
];

export const planLimitations = [
  "Demonstrated non-compliance with recommended course of dental treatment.",
  "Active periodontal disease, scaling/root planning will need to be performed. No substitution for “simple” cleanings allowed.",
  "Loss or theft of dentures and/or any prosthetics.",
  "Services for injuries or conditions which are covered under Worker’s Compensation or Employer’s Liability Laws.",
  "Services which are provided without cost to the member by any municipality, county, or other political subdivision.",
  "Services that cannot be performed because of the general health, physical or psychological limitations of the patient.",
  "Periodontics, Endodontics, Oral Surgery, Orthodontics, or Pedodontics requiring the services of a non-participating dentist (specialist referrals).",
  "Participants cannot use other dental coverage or insurance in conjunction with the DSP coverage.",
  "Yearly benefits are not carried over to the next year once the membership anniversary date is reached.",
  "Once benefits and the plan are expired, a new plan will need to be renewed; no discounts given if not used within the plan year.",
  "Cannot be combined with any other discounts, promotions, or financing being offered in the office.",
  "Services under implants, All-On-Four procedures, and/or sedation are not covered.",
  "Can be purchased with Medica or Medicare Debit Cards issued to patient(s).",
];

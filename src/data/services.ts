export type ServiceCategory = "implants" | "dentistry";

export type ServiceIcon =
  | "anchor"
  | "circle-dot"
  | "grid"
  | "layers"
  | "smile"
  | "lock"
  | "refresh"
  | "wind"
  | "bone"
  | "flask"
  | "users"
  | "shield"
  | "sparkles"
  | "moon"
  | "siren"
  | "scissors"
  | "crown"
  | "branch"
  | "align"
  | "heart-pulse";

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  category: ServiceCategory;
  icon: ServiceIcon;
  tagline: string;
  paragraphs: string[];
  featured?: boolean;
};

export const implantServices: Service[] = [
  {
    slug: "dental-implants",
    title: "Dental Implants in North Dakota",
    navTitle: "Dental Implants",
    category: "implants",
    icon: "anchor",
    tagline:
      "A long-lasting, 98%-successful replacement for missing teeth — placed and restored by one team.",
    paragraphs: [
      "We specialize in dental implants in North Dakota. Dental implants are considered an effective, long-lasting treatment for patients with missing teeth. Dental implants have a 98% success rate, making them one of our most sought-after treatments. We place both the dental implant and the post, which is something that most dental offices do not provide. Our goal is to make the dental implant convenient and successful for our patients.",
    ],
  },
  {
    slug: "single-tooth-implants",
    title: "Single Tooth Implants",
    navTitle: "Single Tooth",
    category: "implants",
    icon: "circle-dot",
    tagline:
      "One missing tooth, restored with a natural-looking implant made in our own lab.",
    paragraphs: [
      "Bismarck Advanced Dental and Implants offers single tooth implants for patients missing one or more teeth and creates the illusion of natural teeth. The implants are molded and made in our in-house lab and are customized to fit the patient’s teeth color, shape, and size.",
    ],
    featured: true,
  },
  {
    slug: "multi-tooth-implants",
    title: "Multi-Tooth Implants",
    navTitle: "Multi-Tooth",
    category: "implants",
    icon: "grid",
    tagline:
      "Replace several missing teeth with restorations designed to look and function like your own.",
    paragraphs: [
      "In addition to our many implants services, we offer multi-tooth dental implants capable of looking and functioning like natural teeth. These implants are ideal for patients missing more than one tooth and are seeking a solution with a natural appearance. These implants integrate the jawbone and help promote healthy gums and overall dental health.",
    ],
    featured: true,
  },
  {
    slug: "all-on-4-implants",
    title: "All-On-4 Implants",
    navTitle: "All-on-4",
    category: "implants",
    icon: "layers",
    tagline:
      "A full-arch restoration supported by four implants for patients experiencing significant tooth loss.",
    paragraphs: [
      "Our All-On-4 implant procedure consists of a total of four implants placed in the gums and jaw bone for dentures. These implants are ideal for patients experiencing significant tooth loss. This method creates a natural, full arch smile restoration that is durable and permanent. Contact our Bismarck Advanced Dental and Implants office today to get started on your journey to a beautiful new smile.",
    ],
    featured: true,
  },
  {
    slug: "dentures-partial-dentures",
    title: "Dentures and Partial Dentures",
    navTitle: "Dentures & Partials",
    category: "implants",
    icon: "smile",
    tagline:
      "Restorative options that help you eat, talk, smile, and laugh with confidence again.",
    paragraphs: [
      "Bismarck Advanced Dental and Implants offers several restorative dental treatment options, such as dentures and partial dentures. Our goal is to help you once again have the ability to perform simple functions we often take for granted, such as eating, talking, smiling, and even laughing. We will work with you to determine the best option for your individual dental situation.",
    ],
    featured: true,
  },
  {
    slug: "fixed-dentures",
    title: "Fixed Dentures",
    navTitle: "Fixed Dentures",
    category: "implants",
    icon: "lock",
    tagline:
      "A permanent, natural-looking solution that also helps maintain healthy gums.",
    paragraphs: [
      "Bismarck Advanced Dental and Implants offers fixed dentures in full and partial dentures. This option allows you to have a natural-looking, permanent solution to your tooth loss while also maintaining healthy gums and preventing bone loss.",
    ],
  },
  {
    slug: "overdentures",
    title: "Overdentures",
    navTitle: "Overdentures",
    category: "implants",
    icon: "refresh",
    tagline:
      "Stable, cost-effective dentures supported by remaining teeth or implanted posts.",
    paragraphs: [
      "Overdentures provide the perfect temporary solution for patients suffering from tooth loss. These dentures are held together by the gums as well as either the remaining natural teeth or implanted metal posts. Overdentures are ideal for patients looking for a cost-effective way to avoid the challenges of wearing a denture.",
    ],
  },
  {
    slug: "sinus-augmentations",
    title: "Sinus Augmentations",
    navTitle: "Sinus Augmentation",
    category: "implants",
    icon: "wind",
    tagline:
      "Added support for patients without enough bone strength for dental implants.",
    paragraphs: [
      "Our Bismarck dental office specializes in dental care and implants using the latest technology and methods to ensure the highest level of safety and quality for our patients. For patients who lack the bone strength needed for dental implants, we offer sinus augmentations to add more support and make for a successful implant experience for every patient.",
    ],
  },
  {
    slug: "bone-grafting",
    title: "Bone Grafting",
    navTitle: "Bone Grafting",
    category: "implants",
    icon: "bone",
    tagline:
      "Encouraging new bone growth to create the stability needed for implants and other care.",
    paragraphs: [
      "Jaw bone loss is a very common problem that affects many of the patients we see in our office. Bone grafting encourages new bone growth and the stability needed for additional dental work. This procedure replaces the missing bone tissue so other procedures are made possible, such as dental implants and sinus augmentation.",
    ],
    featured: true,
  },
  {
    slug: "in-house-lab",
    title: "In-House Lab",
    navTitle: "In-House Lab",
    category: "implants",
    icon: "flask",
    tagline:
      "Custom restorations, made under our own roof by our own technicians and ceramists.",
    paragraphs: [
      "At Bismarck Advanced Dental and Implants, we even have our own in-house lab where our experienced team of dental technicians and ceramists are able to make your dental work experience customized for every patient’s needs. In our lab we are able to custom make dentures, implants, crowns, bridges and much more. We aim to provide properly fitted implants that are comfortable and effective. Our in-house lab reduces wait times for patients and cuts out the middle-man for adjustments and production.",
    ],
    featured: true,
  },
];

export const dentalServices: Service[] = [
  {
    slug: "family-dentistry",
    title: "Family Dentistry",
    navTitle: "Family Dentistry",
    category: "dentistry",
    icon: "users",
    tagline:
      "Comprehensive care for every age, from routine visits to preventive treatment.",
    paragraphs: [
      "At Bismarck Advanced Dental and Implants, we provide comprehensive dental care for our patients. We offer family dental care services designed to treat patients of all ages. We provide a large variety of dental services including the diagnosis, treatment, and maintenance of conditions affecting the teeth, gums, and jaw. We offer preventative care services including fluoride treatments and dental sealants to aid in protecting younger patient’s teeth. We work with our patients to ensure they are practicing healthy oral habits to keep their teeth and gums healthy. Regular visits to our North Dakota dental office can aid in reducing invasive and expensive dental treatments later in life.",
    ],
    featured: true,
  },
  {
    slug: "preventative-dentistry",
    title: "Preventative Dentistry",
    navTitle: "Preventative",
    category: "dentistry",
    icon: "shield",
    tagline:
      "Routine cleanings, examinations, and at-home guidance that protect your smile.",
    paragraphs: [
      "Failure to care for your teeth and gums properly can lead to expensive and painful dental treatments down the road. Bismarck Advanced Dental and Implants is focused on preventative dentistry services to help you avoid these treatments. Our preventative dentistry services are focused on teaching patients at-home dental hygiene habits they can implement to reduce dental diseases. We also provide in-office dental treatments to reduce the risk of dental cavities and gum disease. Routine dental cleanings and examinations will go a long way in reducing plaque and bacteria and protecting your smile.",
    ],
  },
  {
    slug: "cosmetic-dentistry-restoration",
    title: "Cosmetic Dentistry / Restoration",
    navTitle: "Cosmetic & Restorative",
    category: "dentistry",
    icon: "sparkles",
    tagline:
      "From dentures and implants to crowns, bridges, and veneers — care shaped around you.",
    paragraphs: [
      "When you have healthy teeth, it’s easy to take things like eating, talking, smiling, and even laughing for granted. However, if you’ve lost healthy teeth, you know how embarrassing and uncomfortable these simple tasks can become. With restorative treatments at Bismarck Advanced Dental and Implants, these tasks can become easier again. We will work with you to determine the best of several restorative dental treatment options, from dentures and dental implants to crowns, bridges and veneers; we can help!",
    ],
    featured: true,
  },
  {
    slug: "sedation-dentistry",
    title: "Sedation Dentistry",
    navTitle: "Sedation Dentistry",
    category: "dentistry",
    icon: "moon",
    tagline:
      "Nitrous oxide and oral conscious sedation for a calmer, more comfortable visit.",
    paragraphs: [
      "Kids aren’t the only ones who get nervous about dental treatment. Many adults experience dental anxiety as well. This is completely normal! We recognize that many patients appreciate having sedation options so that they can more easily relax during treatment. We encourage you to share your concerns with us so that we can accommodate you. We provide Nitrous Oxide and oral conscious sedation services to ensure your treatment will be as stress-free and pain-free as possible.",
    ],
    featured: true,
  },
  {
    slug: "emergency-dentist",
    title: "Emergency Dentist",
    navTitle: "Emergency Care",
    category: "dentistry",
    icon: "siren",
    tagline:
      "Same-day appointments for severe tooth pain, injuries, abscesses, and broken restorations.",
    paragraphs: [
      "At Bismarck Advanced Dental and Implants, we understand the unpredictability of tooth injuries and emergencies and are here to help. We offer same day emergency appointments for patients suffering from severe acute tooth and jaw pain, tooth and jaw injuries, abscessed teeth, broken fillings, painful crowns and much more. If you have suffered a dental emergency and need medical attention, we encourage you to book your appointment now and we will get you in to see one of our dentists as soon as possible.",
    ],
    featured: true,
  },
  {
    slug: "tooth-extractions-wisdom-teeth",
    title: "Tooth Extractions / Wisdom Teeth Removal",
    navTitle: "Extractions",
    category: "dentistry",
    icon: "scissors",
    tagline:
      "Careful removal when infection, injury, or advanced decay makes extraction the best option.",
    paragraphs: [
      "Sometimes conditions in your mouth, ranging from infection and pain, to traumatic injury, to advanced tooth decay, make tooth extraction (tooth removal) the best option. If you need help with a tooth extraction or wisdom teeth removal, we can help. Please contact us to discuss your particular situation.",
    ],
  },
  {
    slug: "dental-crowns",
    title: "Dental Crowns",
    navTitle: "Dental Crowns",
    category: "dentistry",
    icon: "crown",
    tagline:
      "Crowns that restore shape, strength, and function — crafted in our in-house lab.",
    paragraphs: [
      "Dental crowns, sometimes called caps, cover teeth to restore them to their appropriate shape and size after large fillings, fractures, or weakening forces, such as intense grinding. In all these cases, crowns not only cover teeth but provide added support. They can also be used to attach bridges, cover dental implants, restore seriously discolored or misshapen teeth, and even as a preventive measure to protect a tooth in danger of breaking.",
      "Crowns can be made of all-porcelain (ceramic) material, porcelain fused to metal, gold alloys, or base metal alloys. Since they mimic the appearance of natural teeth, our patients tend to prefer porcelain crowns. We create our crowns in-house to make it convenient and easy for our patients.",
    ],
    featured: true,
  },
  {
    slug: "root-canals",
    title: "Root Canals",
    navTitle: "Root Canals",
    category: "dentistry",
    icon: "branch",
    tagline:
      "Endodontic treatment that removes diseased tissue and protects your natural tooth.",
    paragraphs: [
      "The inside of your tooth contains soft tissue with nerves and blood vessels running from the root to the crown. A crack, deep cavity, or other injuries to the tooth can cause the nerve to become damaged or diseased, allowing bacteria to enter the tooth and kill the living tissue. Without treatment, the resulting infection can cause pain, swelling and abscesses, loss of the diseased tooth, and eventually damage to the surrounding bone. With endodontic treatment, also called root canal therapy, we carefully remove the diseased tissue and nerve from the tooth and gently clean and seal the root canal to protect it from bacteria. If necessary, medication or an antibiotic can also be used to control the spread of bacteria and stop infection. Finally, a crown is placed over the reshaped tooth to restore and strengthen it.",
      "Relief from the pain of an infected tooth is an immediate advantage to root canal therapy. Long-term benefits include saving your natural tooth and avoiding damage to the surrounding bone. Additionally, with continued dental care and good oral hygiene after root canal therapy, the restored tooth should last you many years.",
    ],
  },
  {
    slug: "invisalign-treatment",
    title: "Invisalign Treatment",
    navTitle: "Invisalign",
    category: "dentistry",
    icon: "align",
    tagline:
      "Clear, removable aligners for patients with mild to moderate orthodontic needs.",
    paragraphs: [
      "At Bismarck Advanced Dental and Implants, we make teeth alignment as easy and comfortable as possible. With Invisalign treatment, we assist patients in reaching their goal of a perfect smile. We know how painful and unattractive braces can be. Invisalign uses clear, temporary mouth pieces to effectively straighten teeth with no restrictions. The aligner is removable and is easy for patients to maintain and clean. Invisalign treatment is not right for everyone but has shown more success in patients with mild to moderate orthodontic problems. Make an appointment with us today to see if Invisalign is right for you and get started towards straighter teeth.",
    ],
    featured: true,
  },
  {
    slug: "periodontal-care",
    title: "Periodontal Care",
    navTitle: "Periodontal Care",
    category: "dentistry",
    icon: "heart-pulse",
    tagline:
      "Gum disease care for tender, swollen, or bleeding gums before tooth loss occurs.",
    paragraphs: [
      "According to the American Academy of Periodontology, half of American adults have gum disease. Gum disease ranges from gingivitis to the various forms and stages of periodontitis. The prevalence of gum disease increases with age because teeth wear down and become more sensitive as time passes, gums naturally recede, and medications can affect oral health. If your gums feel tender or sore, or if they look red and swollen, you may have gum disease. Other warning signs include bleeding and/or receding gums, pain or sensitivity in your teeth (and even loose teeth caused by weakening gum fibers or bone loss), and persistent bad breath. If left untreated, gum disease can lead to tooth loss as well as various serious health problems.",
    ],
  },
];

export const allServices = [...implantServices, ...dentalServices];

export const serviceGroups = {
  implants: {
    label: "Dental Implants",
    href: "/implants",
    description:
      "Implant placement, restoration, and the supporting treatments that make both possible.",
    services: implantServices,
  },
  dentistry: {
    label: "Dental Services",
    href: "/dental-services",
    description:
      "Everyday, preventive, cosmetic, restorative, and emergency care for the whole family.",
    services: dentalServices,
  },
} as const;

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return category === "implants" ? implantServices : dentalServices;
}

export function getServiceBySlug(
  category: ServiceCategory,
  slug: string,
): Service | undefined {
  return getServicesByCategory(category).find((service) => service.slug === slug);
}

export function getServiceHref(service: Service): string {
  return service.category === "implants"
    ? `/implants/${service.slug}`
    : `/dental-services/${service.slug}`;
}

export function getRelatedServices(service: Service, limit = 3): Service[] {
  const pool = getServicesByCategory(service.category).filter(
    (item) => item.slug !== service.slug,
  );
  const start = pool.findIndex((item) => item.featured);
  const offset = start === -1 ? 0 : start;
  return [...pool.slice(offset), ...pool.slice(0, offset)].slice(0, limit);
}

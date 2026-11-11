export type Doctor = {
  slug: string;
  name: string;
  firstName: string;
  bio: string;
  image: string;
  imageAlt: string;
  pullQuote: string;
  focus: string[];
};

export const doctors: Doctor[] = [
  {
    slug: "dr-derik-hoerner",
    name: "Dr. Derik Hoerner",
    firstName: "Dr. Derik",
    bio: "Dr. Derik’s overwhelming commitment to passion and excellence has led him to create Bismarck Advanced Dental and Implants. As a one-of-a-kind dental office in Bismarck that utilizes 3D dental implants and an onsite dental lab, we are able to create personalized dental restorations from dentures to crowns and veneers to implant restorations.",
    image: "/images/dr-derik-hoerner.jpg",
    imageAlt: "Dr. Derik Hoerner",
    pullQuote:
      "A one-of-a-kind dental office in Bismarck that utilizes 3D dental implants and an onsite dental lab.",
    focus: [
      "3D dental implants",
      "On-site dental lab",
      "Dentures, crowns & veneers",
      "Implant restorations",
    ],
  },
  {
    slug: "dr-christopher-klym",
    name: "Dr. Christopher Klym",
    firstName: "Dr. Klym",
    bio: "Dr. Klym focuses on each and every clients’ best interests and genuinely cares about their overall health. He tries to ensure that clients are comfortable and brings his unique passion to the job every day. He is particularly passionate about several facets of dentistry, including the use of technology, dental sleep medicine, and esthetic dentistry.",
    image: "/images/dr-christopher-klym.jpg",
    imageAlt: "Dr. Christopher Klym",
    pullQuote: "He brings his unique passion to the job every day.",
    focus: [
      "Technology",
      "Dental sleep medicine",
      "Esthetic dentistry",
      "Patient comfort",
    ],
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((doctor) => doctor.slug === slug);
}

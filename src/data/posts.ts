export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category: string;
};

export const posts: Post[] = [
  {
    slug: "all-on-4-full-arch-replacement",
    title:
      "The “All-on-4” Transformation: Is a Full-Arch Replacement Right for You?",
    excerpt:
      "Finding the right dental prosthetic for your smile can be an incredibly difficult task. With so many options available, it can be difficult to determine which is best for your long-term oral health goals. If you’re missing most, or all, of the teeth along your upper or lower arch, you may be considering turning to dentures for a long-term solution. But is this best?",
    image: "/images/blog-all-on-4.webp",
    href: "https://www.dentalimplantsnorthdakota.com/is-full-arch-replacement-for-you/",
    category: "Dental Implants",
  },
  {
    slug: "sedation-dentistry-implant-comfort",
    title:
      "How Sedation Dentistry Can Boost Comfort During Your Dental Implant Procedure",
    excerpt:
      "Dental anxiety is an incredibly common experience. It is estimated that 3 out of 4 adults in the United States experience some anxiety about visiting the dentist. Whether you need to schedule a cleaning or are preparing for dental implants, this anxiety can lead to you delaying care. Over time, this increases your risk of developing more severe oral health complications.",
    image: "/images/blog-sedation.webp",
    href: "https://www.dentalimplantsnorthdakota.com/sedation-dentistry-boost-comfort/",
    category: "Sedation Dentistry",
  },
  {
    slug: "missing-teeth-face-shape",
    title:
      "How Missing Teeth Change Your Face Shape: The Role of Implants in Preventing Bone Loss",
    excerpt:
      "When you are missing teeth, you may worry about the impact this has on your smile and bite. However, the problem goes beyond this. Over time, even just a few missing teeth can take a major toll on the appearance of your face. You may find yourself dealing with sunken cheeks and a more hollow appearance.",
    image: "/images/blog-missing-teeth.webp",
    href: "https://www.dentalimplantsnorthdakota.com/missing-teeth-change-face-shape/",
    category: "Missing Teeth",
  },
];

export const site = {
  name: "Bismarck Advanced Dental & Implants",
  shortName: "Bismarck Advanced Dental",
  tagline:
    "Dental implants, cosmetic, restorative, and sedation dentistry in Bismarck, North Dakota.",
  description:
    "At Bismarck Advanced Dental & Implants in North Dakota, we provide dental implants, cosmetic, restorative, and sedation dentistry services. Give us a call!",
  url: "https://bismarckadvanceddentalandimplants-dentist-18.vercel.app",
  phone: {
    display: "(701) 390-1920",
    href: "tel:+17013901920",
  },
  fax: {
    display: "(701) 751-2640",
    href: "tel:+17017512640",
  },
  email: "bismarckadvanceddental@gmail.com",
  newPatientForms:
    "https://www.dentalimplantsnorthdakota.com/new-patients/",
  address: {
    street: "1004 S 7th St",
    city: "Bismarck",
    state: "ND",
    zip: "58504",
  },
  addressLine: "1004 S 7th St, Bismarck, ND 58504",
  mapEmbed:
    "https://www.google.com/maps?q=1004+S+7th+St+Bismarck+ND+58504&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=1004+S+7th+St+Bismarck+ND+58504",
  payBill: "https://weavebillpay.com/1076ad5c",
  referralForm:
    "https://www.dentalimplantsnorthdakota.com/wp-content/uploads/2025/05/BADI-Referral-Form.pdf",
  hours: [
    { day: "Monday", time: "8 AM – 5 PM" },
    { day: "Tuesday", time: "8 AM – 5 PM" },
    { day: "Wednesday", time: "8 AM – 5 PM" },
    { day: "Thursday", time: "8 AM – 2 PM" },
    { day: "Friday", time: "Closed" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/bismarckadvanceddental/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/bismarckadvanceddental/",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCKKKRwp-75IMjzEa42JnQPg",
    },
    {
      label: "Google",
      href: "https://g.page/bismarckadvanceddentalimplants",
    },
    {
      label: "X",
      href: "https://twitter.com/BismarckDental",
    },
    {
      label: "Pinterest",
      href: "https://www.pinterest.com/bismarckadvanceddental/",
    },
  ],
  reviewLinks: [
    {
      label: "Google Reviews",
      href: "https://www.google.com/search?q=bismarck+advanced+dental+and+implants&oq=Bismarck+adv&aqs=chrome.0.0i355j46i175i199j69i57j0i457j0j69i60l3.6223j0j7&sourceid=chrome&ie=UTF-8#lrd=0x52d783f5beb50e29:0xd7e85ddd71fb1098,1,,,",
      image: "/images/google-reviews.png",
      width: 245,
      height: 96,
    },
    {
      label: "Yelp Reviews",
      href: "https://www.yelp.com/biz/bismarck-advanced-dental-and-implants-bismarck",
      image: "/images/yelp-reviews.png",
      width: 179,
      height: 130,
    },
    {
      label: "Facebook Reviews",
      href: "https://www.facebook.com/pg/bismarckadvanceddental/reviews/",
      image: "/images/facebook-reviews.png",
      width: 240,
      height: 98,
    },
  ],
} as const;

export const navigation = [
  { label: "Treatments", href: "/implants" },
  { label: "Our Practice", href: "/about" },
  { label: "In-House Lab", href: "/implants/in-house-lab" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Financial", href: "/financial" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const products = [
  {
    number: "001",
    name: "LUXECUTS SALON",
    monogram: "LC",
    category: "SALON EXPERIENCE",
    type: "WEB PLATFORM",
    status: "DEMO IN DEVELOPMENT",
    description: "A premium salon website concept with online booking and management functionality.",
    href: "https://luxecuts-ow.vercel.app/",
    featured: true
  },
  ...Array.from({ length: 9 }, (_, index) => ({
    number: String(index + 2).padStart(3, "0"),
    name: "Future product",
    monogram: String(index + 2).padStart(2, "0"),
    category: "PRODUCT SLOT",
    type: "PLANNED",
    status: "RESERVED",
    description: "A reserved position for a future LINKOCONCEPT product. Details will be published when the product is ready.",
    href: "/contact",
    featured: false
  }))
];

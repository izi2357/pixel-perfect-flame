import img1 from "@/assets/dragon-1.jpg";
import img2 from "@/assets/dragon-2.jpg";
import img3 from "@/assets/dragon-3.jpg";
import img4 from "@/assets/dragon-4.jpg";

export type ProductImage = { src: string; alt: string };

export type Product = {
  name: string;
  handle: string;
  description: string;
  price: number;
  compareAtPrice: number;
  currency: string;
  currencySymbol: string;
  rating: number;
  reviewCount: number;
  images: ProductImage[];
  colors: string[];
  sizes: string[];
  features: { title: string; body: string }[];
  specifications: { label: string; value: string }[];
};

export const product: Product = {
  name: "Dragon Breath Flame Night Light Decor",
  handle: "dragon-breath-flame-night-light-decor",
  description:
    "Transform any room into an atmospheric sanctuary with the Dragon Breath Flame Night Light — a mesmerising décor piece that mimics the hypnotic dance of real fire without the heat or hazard.",
  price: 22,
  compareAtPrice: 30,
  currency: "GBP",
  currencySymbol: "£",
  rating: 5,
  reviewCount: 12,
  images: [
    { src: img1, alt: "Dragon Breath Flame Night Light glowing on a wooden desk at night" },
    {
      src: img2,
      alt: "Dragon Breath Flame Night Light on a child's bookshelf casting a warm golden glow",
    },
    { src: img3, alt: "Close-up of the Dragon Breath Flame Night Light against a dark background" },
    {
      src: img4,
      alt: "Blue variant of the Dragon Breath Flame Night Light on a bedside table",
    },
  ],
  colors: ["Golden", "Blue"],
  sizes: ["Small", "Large"],
  features: [
    {
      title: "Realistic Flame Effect",
      body: "Advanced LED simulation creates a warm, flickering glow that breathes life into any corner of your home.",
    },
    {
      title: "Ambient Mood Lighting",
      body: "Casts a soft, golden radiance perfect for bedrooms, living rooms, or home offices.",
    },
    {
      title: "Safe & Energy Efficient",
      body: "No open flame, no heat, no worry — just pure ambience at a fraction of the energy cost.",
    },
    {
      title: "Compact & Versatile",
      body: "Sleek silhouette fits effortlessly on shelves, bedside tables, or as a centrepiece.",
    },
    {
      title: "Conversation Starter",
      body: "A striking statement piece that guests will notice and admire instantly.",
    },
  ],
  specifications: [
    { label: "Material", value: "Hand-finished resin with acrylic flame diffuser" },
    { label: "Light source", value: "Warm-white flicker LED, 3000K" },
    { label: "Power", value: "USB-C, 5V — under 3W" },
    { label: "Dimensions", value: "Small 14 × 9 cm · Large 22 × 14 cm" },
    { label: "In the box", value: "Night light, USB-C cable, wall mount kit" },
  ],
};

export function formatPrice(amount: number, symbol = product.currencySymbol) {
  return `${symbol}${amount.toFixed(2)}`;
}

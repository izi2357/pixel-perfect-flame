import img1 from "@/assets/product-1.jpg";
import img2 from "@/assets/product-2.png";
import img3 from "@/assets/product-3.png";
import img4 from "@/assets/product-4.png";
import img5 from "@/assets/product-5.png";
import img6 from "@/assets/product-6.png";

export type ProductImage = { src: string; alt: string };

export type Product = {
  name: string;
  handle: string;
  description: string;
  price: number;
  compareAtPrice: number;
  currency: string;
  currencySymbol: string;
  images: ProductImage[];
  colors: string[];
  sizes: string[];
  features: { title: string; body: string }[];
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
  images: [
    { src: img1, alt: "Dragon Breath Flame Night Light Decor" },
    { src: img2, alt: "Dragon Breath Flame Night Light Decor" },
    { src: img3, alt: "Dragon Breath Flame Night Light Decor" },
    { src: img4, alt: "Dragon Breath Flame Night Light Decor" },
    { src: img5, alt: "Dragon Breath Flame Night Light Decor" },
    { src: img6, alt: "Dragon Breath Flame Night Light Decor" },
  ],
  colors: string[];
  sizes: string[];
  features: { title: string; body: string }[];
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

};

export function formatPrice(amount: number, symbol = product.currencySymbol) {
  return `${symbol}${amount.toFixed(2)}`;
}

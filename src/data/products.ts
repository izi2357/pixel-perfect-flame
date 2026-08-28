// Product database. Each product carries its own theme + layout variant so the
// three storefronts keep their individual personality while sharing components.

import plLogo from "@/assets/pl/logo.png";
import plG1 from "@/assets/pl/gallery-1.jpg";
import plG2 from "@/assets/pl/gallery-2.jpg";
import plG3 from "@/assets/pl/gallery-3.jpg";
import plUpExpress from "@/assets/pl/upsell-express.jpg";
import plUpGift from "@/assets/pl/upsell-gift.jpg";
import plA1 from "@/assets/pl/avatar-1.jpg";
import plA2 from "@/assets/pl/avatar-2.jpg";
import plA3 from "@/assets/pl/avatar-3.jpg";
import plT1 from "@/assets/pl/t-1.jpg";
import plT2 from "@/assets/pl/t-2.jpg";
import plT3 from "@/assets/pl/t-3.jpg";
import plT4 from "@/assets/pl/t-4.jpg";

import wfLogo from "@/assets/wf/logo.jpg";
import wfLogoFooter from "@/assets/wf/logo-footer.jpg";
import wfG1 from "@/assets/wf/gallery-1.jpg";
import wfG2 from "@/assets/wf/gallery-2.jpg";
import wfG3 from "@/assets/wf/gallery-3.jpg";
import wfUpShip from "@/assets/wf/upsell-ship.jpg";
import wfUpWarranty from "@/assets/wf/upsell-warranty.jpg";
import wfAvatarJason from "@/assets/wf/avatar-jason.jpg";
import wfLoved1 from "@/assets/wf/loved-1.jpg";
import wfLoved2 from "@/assets/wf/loved-2.jpg";
import wfMoreThanLamp from "@/assets/wf/more-than-lamp.jpg";
import wfGuarantee from "@/assets/wf/guarantee.jpg";
import wfT1 from "@/assets/wf/t-1.jpg";
import wfT2 from "@/assets/wf/t-2.jpg";
import wfT3 from "@/assets/wf/t-3.jpg";
import wfTa1 from "@/assets/wf/ta-1.jpg";
import wfTa2 from "@/assets/wf/ta-2.jpg";
import wfTa3 from "@/assets/wf/ta-3.jpg";

import fvLogo from "@/assets/fv/logo.png";
import fvG1 from "@/assets/fv/gallery-1.jpg";
import fvG2 from "@/assets/fv/gallery-2.jpg";
import fvG3 from "@/assets/fv/gallery-3.jpg";
import fvG4 from "@/assets/fv/gallery-4.jpg";
import fvA1 from "@/assets/fv/avatar-1.jpg";
import fvA2 from "@/assets/fv/avatar-2.jpg";
import fvA3 from "@/assets/fv/avatar-3.jpg";
import fvUpWarranty from "@/assets/fv/upsell-warranty.png";
import fvUpShipping from "@/assets/fv/upsell-shipping.png";
import fvUpGift from "@/assets/fv/upsell-gift.png";

export type Media = { src: string; alt: string; kind?: "image" | "video"; poster?: string };

export type Bundle = {
  id: string;
  label: string;
  sublabel?: string;
  badge?: string;
  badgeTone?: "primary" | "dark";
  quantity: number;
  price: number;
  compareAtPrice?: number;
  savingsLabel?: string;
  freeShipping?: boolean;
  styleSelectors?: number;
};

export type Upsell = {
  id: string;
  title: string;
  image: string;
  price: number;
  compareAtPrice?: number;
  note?: string;
  defaultOn?: boolean;
};

export type Faq = { q: string; a: string };

export type Testimonial = {
  name: string;
  quote: string;
  title?: string;
  image?: string;
  avatar?: string;
  timeAgo?: string;
};

export type Theme = {
  accent: string;
  accentText: string;
  deep: string;
  marqueeBg: string;
  marqueeText: string;
  surface: string;
  ring: string;
};

export type Product = {
  id: "potterLevitate" | "wizardFloat" | "floatVerse";
  slug: string;
  brand: string;
  logo: string;
  logoFooter?: string;
  logoWidthClass: string;
  title: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  currency: string;
  currencySymbol: string;
  price: number;
  compareAtPrice: number;
  discountLabel?: string;
  rating: number;
  reviewCountLabel: string;
  verifiedReviewCount?: number;
  gallery: Media[];
  benefits: { icon?: string; text: string; bold?: string[] }[];
  bundleHeading: string;
  bundles: Bundle[];
  upsells: Upsell[];
  ctaLabel: string;
  announcements: string[];
  secondaryAnnouncement?: string;
  nav: { label: string; to: string }[];
  faqsInline: Faq[];
  faqs: Faq[];
  faqHeading: string;
  faqEyebrow?: string;
  testimonials: Testimonial[];
  theme: Theme;
  layoutVariant: "potter" | "wizard" | "floatverse";
  footerLinks: string[];
};

/* ------------------------------------------------------------------ */
/* PRODUCT 1 — PotterLevitate                                         */
/* ------------------------------------------------------------------ */

export const potterLevitate: Product = {
  id: "potterLevitate",
  slug: "potterlevitate",
  brand: "PotterLevitate",
  logo: plLogo,
  logoWidthClass: "h-9 sm:h-11",
  title: "PotterLevitate™ - Floating Light Lamp",
  tagline: "Defy Gravity. Elevate Your Setup.",
  seoTitle: "PotterLevitate™ Floating Light Lamp — Magnetic Levitating Wizard Lamp",
  seoDescription:
    "The PotterLevitate™ Floating Light Lamp uses magnetic levitation and a premium LED glow to make the wizard figure hover and spin above the castle base. Bundle & save with free worldwide shipping.",
  description:
    "Whether you're a collector, gamer, or lifelong Potter fan, this levitating lamp transforms any room into an unforgettable space with its mesmerizing floating effect and premium LED glow.",
  currency: "USD",
  currencySymbol: "$",
  price: 64.99,
  compareAtPrice: 129.98,
  rating: 5,
  reviewCountLabel: "(2,659 Reviews)",
  gallery: [
    { src: plG1, alt: "PotterLevitate™ floating light lamp glowing on a wooden desk" },
    { src: plG2, alt: "PotterLevitate™ wizard figure levitating above the castle base" },
    { src: plG3, alt: "Close-up of the PotterLevitate™ castle base and LED ring" },
  ],
  benefits: [
    { icon: "🪄", text: "A Must-Have for Potter Fans" },
    { icon: "🚚", text: "Free Shipping" },
    { icon: "✅", text: "Premium-Quality Materials" },
  ],
  bundleHeading: "BUNDLE & SAVE",
  bundles: [
    { id: "single", label: "1 PotterLevitate™ Lamp", quantity: 1, price: 64.99 },
    {
      id: "b1g1",
      label: "Buy 1 Get 1 50% OFF",
      sublabel: "You save $31.99",
      badge: "MOST POPULAR",
      quantity: 2,
      price: 97.99,
      compareAtPrice: 129.98,
    },
    {
      id: "b2g1",
      label: "Buy 2 Get 1 FREE",
      sublabel: "You save $64.98",
      badge: "BEST OFFER",
      quantity: 3,
      price: 129.99,
      compareAtPrice: 194.97,
    },
  ],
  upsells: [
    { id: "express", title: "Express Shipping", image: plUpExpress, price: 2.99, defaultOn: true },
    { id: "gift", title: "Spidey Mystery Gift", image: plUpGift, price: 14.99, defaultOn: true },
  ],
  ctaLabel: "ADD TO CART",
  announcements: [
    "50% OFF SUMMER SALE ☀️",
    "FREE WORLDWIDE SHIPPING 🎁",
    "LOVED BY 2,000+ POTTER FANS ❤️",
  ],
  nav: [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products/potterlevitate" },
    { label: "Track Your Order", to: "/products/potterlevitate" },
    { label: "Contact", to: "/products/potterlevitate" },
  ],
  faqsInline: [
    {
      q: "How does the levitating feature work?",
      a: "The lamp uses advanced magnetic levitation technology to make the Potter figure float smoothly above the base while continuously rotating for an eye-catching display.",
    },
    {
      q: "Is it difficult to set up?",
      a: "Not at all! Setup only takes a few minutes. Simply connect the base, carefully position the figure, and the magnetic system will do the rest.",
    },
    {
      q: "Is it a good gift for Potter fans?",
      a: "Absolutely! It's the perfect gift for collectors, gamers, comic fans, and anyone who wants a unique desk or room decoration that stands out.",
    },
  ],
  faqEyebrow: "QUESTIONS ?",
  faqHeading: "We've Got Answers 🪄",
  faqs: [
    {
      q: "Do you deliver to my country?",
      a: "Yes! We offer worldwide shipping. Simply choose your country at checkout and complete your order.",
    },
    {
      q: "How does the floating effect work?",
      a: "The lamp uses advanced magnetic levitation technology, allowing the base and potter figure to hover in the air. It creates a smooth floating effect inspired by the game.",
    },
    {
      q: "Do I need any special installation?",
      a: "No setup is needed. Just plug it in and the levitation system starts automatically. Quick and easy to use.",
    },
    {
      q: "Is the product quality guaranteed?",
      a: "Absolutely. Every unit is carefully checked before shipping to ensure top quality. We use durable, long-lasting materials.",
    },
    {
      q: "Can it be used for something else besides lighting?",
      a: "Yes! Besides being a lamp, it also works as a premium decorative piece. Perfect for gamers, collectors, and anyone who loves unique home decor.",
    },
    {
      q: "Does it use a lot of electricity?",
      a: "Not at all. The lamp is designed to be energy-efficient, using very little power while maintaining the floating display.",
    },
  ],
  testimonials: [
    {
      name: "John T.",
      quote:
        "I honestly didn't expect it to look this good. The levitating effect is mesmerizing, and everyone who visits my room asks where I got it!",
      image: plT1,
    },
    {
      name: "David P.",
      quote:
        "The quality exceeded my expectations. It feels premium, the lights are bright, and the levitation is smooth. Worth every penny.",
      image: plT2,
    },
    {
      name: "Ryan M.",
      quote:
        "I bought this as a gift for my son, and he hasn't stopped showing it off to his friends. Super easy to set up too.",
      image: plT3,
    },
    {
      name: "Ethan L.",
      quote: "If you're looking for something unique for your desk, this is it. Couldn't be happier.",
      image: plT4,
    },
    {
      name: "Sarah M.",
      quote:
        "I wasn't sure what to expect, but this is one of the coolest desk accessories I've ever seen.",
    },
    {
      name: "Tyler G.",
      quote:
        "Every single person who walks into my room notices it immediately. Such an awesome conversation piece.",
    },
    {
      name: "Nathan D.",
      quote:
        "The LED lighting makes it look incredible at night. Pictures don't capture how good it actually looks.",
    },
    {
      name: "Kevin A.",
      quote: "The quality feels premium, and the floating effect is smooth and surprisingly quiet.",
    },
    {
      name: "Rachel C.",
      quote: "I've never owned anything like this before. Everyone asks where I bought it.",
    },
  ],
  theme: {
    accent: "#4a1a63",
    accentText: "#ffffff",
    deep: "#4a1a63",
    marqueeBg: "#4a1a63",
    marqueeText: "#ffffff",
    surface: "#f6f1f8",
    ring: "#4a1a63",
  },
  layoutVariant: "potter",
  footerLinks: [
    "Shipping Policy",
    "Contact Information",
    "Refund Policy",
    "Privacy Policy",
    "Terms of Service",
  ],
};

export const potterInlineReviews: Testimonial[] = [
  {
    name: "Alex J.",
    quote: "This lamp completely transformed my gaming setup. The floating effect is absolutely unreal.",
    avatar: plA1,
  },
  {
    name: "Brian K.",
    quote:
      "Super easy to set up, and the levitation works flawlessly. Definitely exceeded my expectations.",
    avatar: plA2,
  },
  {
    name: "Emily R.",
    quote: "I bought this for my boyfriend, and now I want one for myself. It's even cooler in person!",
    avatar: plA3,
  },
];

/* ------------------------------------------------------------------ */
/* PRODUCT 2 — WizardFloat                                            */
/* ------------------------------------------------------------------ */

export const wizardFloat: Product = {
  id: "wizardFloat",
  slug: "wizard-float-lamp",
  brand: "WizardFloat",
  logo: wfLogo,
  logoFooter: wfLogoFooter,
  logoWidthClass: "h-8 sm:h-10",
  title: "Wizard Float Lamp™",
  tagline: "More Than Just a Lamp",
  seoTitle: "Wizard Float Lamp™ — Levitating Wizarding World Lantern Lamp",
  seoDescription:
    "The Wizard Float Lamp™ pairs a levitating flying car with a glowing lantern base. 12 × 8 inches, includes a free mystery wizarding gift and a 90-Day Guarantee.",
  description:
    "Every time you look at it, it brings back that feeling you had watching the movies for the first time the excitement, the wonder, the magic. A little reminder of something you never really grew out of. ⚡",
  currency: "USD",
  currencySymbol: "$",
  price: 39.95,
  compareAtPrice: 56.95,
  rating: 5,
  reviewCountLabel: "(187+ Reviews)",
  gallery: [
    { src: wfG1, alt: "Wizard Float Lamp™ with levitating flying car and glowing lantern" },
    { src: wfG2, alt: "Wizard Float Lamp™ feature overview and specifications" },
    { src: wfG3, alt: "Wizard Float Lamp™ shown on a decorative hexagonal base" },
  ],
  benefits: [
    { icon: "⚡", text: "Made for Wizarding World Fans", bold: ["Wizarding World Fans"] },
    { icon: "🎁", text: "A Magical Gift for Any Wizard Lover", bold: ["Magical Gift", "Wizard Lover"] },
    { icon: "✨", text: "Levitates & Glows Bring Magic to Life", bold: ["Levitates & Glows", "Magic to Life"] },
  ],
  bundleHeading: "MORE FOR LESS",
  bundles: [
    { id: "one", label: "One for Me", quantity: 1, price: 39.95, compareAtPrice: 56.95 },
    {
      id: "share",
      label: "Share the Magic",
      badge: "Most Popular",
      badgeTone: "dark",
      savingsLabel: "SAVE $44.38",
      quantity: 2,
      price: 69.52,
      compareAtPrice: 113.9,
      styleSelectors: 2,
    },
  ],
  upsells: [
    { id: "ship", title: "+ Add Shipping Protection", image: wfUpShip, price: 4.95, defaultOn: true },
    {
      id: "warranty",
      title: "+ Add Lifetime Warranty",
      image: wfUpWarranty,
      price: 4.95,
      defaultOn: true,
    },
  ],
  ctaLabel: "ADD TO CART",
  announcements: ["FREE SHIPPING TODAY!", "30% OFF!", "LIMITED-TIME OFFER!"],
  secondaryAnnouncement: "A Little Magic, Right at Home ⚡",
  nav: [
    { label: "Home", to: "/" },
    { label: "Catalog", to: "/products/wizard-float-lamp" },
    { label: "Contact", to: "/products/wizard-float-lamp" },
  ],
  faqsInline: [
    {
      q: "What size is it?",
      a: "It measures approximately **12 × 8 inches (30 × 20 cm)** — the perfect size for your **desk, shelf or nightstand** without taking up too much space.",
    },
    {
      q: "What's included?",
      a: "Your order includes your **magical lamp**, plus a **FREE mystery wizarding gift 🎁** as a little extra surprise for your collection.",
    },
  ],
  faqHeading: "FAQ's",
  faqs: [
    {
      q: "Does it light up?",
      a: "Yes! It has built in lighting that gives your room or setup a warm magical glow especially beautiful at night.",
    },
    {
      q: "How does the floating effect work?",
      a: "The illuminated acrylic design creates a magical floating-style effect when switched on. ✨ The built-in LED lighting brings the artwork to life, making it a striking display for your desk, shelf, or nightstand.",
    },
    {
      q: "When will my order arrive?",
      a: "Orders are processed within **2–4 business days**. Once your order is ready, delivery typically takes **7–10 business days**, depending on your location. You'll receive tracking as soon as your order is on its way.",
    },
  ],
  testimonials: [
    {
      name: "Melissa P.",
      title: "My husband is obsessed 😂",
      quote:
        "Bought this for my husband because he's been a fan of the movies forever. He literally set it up the same night it arrived lol. It looks really nice in his gaming room.",
      image: wfT1,
      avatar: wfTa1,
    },
    {
      name: "David M.",
      title: "Way cooler in person!",
      quote:
        "I got this for my desk and honestly didn't expect to like it this much. The floating effect is so cool, especially at night with the lights on. Definitely gets people asking about it.",
      image: wfT2,
      avatar: wfTa2,
    },
    {
      name: "Jayden L.",
      title: "Brings back so many memories",
      quote:
        "I grew up watching the movies with my sister, so I had to get one when I saw it. Seeing it floating on my shelf genuinely makes me smile. Such a fun little piece to have.",
      image: wfT3,
      avatar: wfTa3,
    },
  ],
  theme: {
    accent: "#000000",
    accentText: "#ffffff",
    deep: "#4a1024",
    marqueeBg: "#000000",
    marqueeText: "#ffffff",
    surface: "#f2f2f2",
    ring: "#000000",
  },
  layoutVariant: "wizard",
  footerLinks: ["Refund Policy", "Shipping Policy", "Privacy Policy", "Terms of Service"],
};

export const wizardFloatExtras = {
  inlineReview: {
    name: "Jason T.",
    avatar: wfAvatarJason,
    quote:
      "I've been a fan of the movies since I was a kid and I just had to get this when I saw it. It looks so good in my room, I love it!",
  },
  lovedBy: [
    { src: wfLoved1, alt: "Wizard Float Lamp™ glowing on a gaming desk setup" },
    { src: wfLoved2, alt: "Wizard Float Lamp™ on a bedside table at night" },
  ],
  moreThanLamp: { src: wfMoreThanLamp, alt: "Wizard Float Lamp™ styled on a shelf" },
  guaranteeImage: { src: wfGuarantee, alt: "90-Day money back guarantee seal" },
  guaranteeTitle: "90-Day Guarantee",
  guaranteeBody: [
    "We want you to feel confident when ordering from us. That's why every order is covered by our 90-Day Guarantee. If something isn't right, simply reach out to our support team and we'll be happy to help.",
    "Our 90-Day Guarantee is subject to our Refund Policy and Terms of Service. Please review our store policies for full terms, conditions, exclusions, and product information.",
    "Please note: Some product images and videos may be AI-generated or digitally enhanced for illustrative purposes and may differ from the actual product received. Please review our store policies for complete product and purchase information",
  ],
  styleOptions: ["WizardFloat™ Car Lamp", "WizardFloat™ Flying Lamp"],
  lovedByHeading: "Loved by Wizarding Fans ⚡",
};

/* ------------------------------------------------------------------ */
/* PRODUCT 3 — FloatVerse                                             */
/* ------------------------------------------------------------------ */

export const floatVerse: Product = {
  id: "floatVerse",
  slug: "floatverse",
  brand: "FloatVerse",
  logo: fvLogo,
  logoWidthClass: "h-20 sm:h-[7.5rem]",
  title: "FloatVerse™ - SpiderMan Levitation Lamp",
  tagline: "More Than Just a Lamp",
  seoTitle: "FloatVerse™ SpiderMan Levitation Lamp — Floating Ambient City Lamp",
  seoDescription:
    "FloatVerse™ SpiderMan Levitation Lamp: a levitating hero figure over a glowing city skyline base. Rated 5.0 from 1,743 verified reviews. Save 45% with free worldwide shipping.",
  description:
    "FloatVerse transforms ordinary spaces into something unforgettable. With its levitating design, glowing light, and iconic Spider-Man look, it's the perfect way to upgrade your setup and bring your favorite hero to life.",
  currency: "USD",
  currencySymbol: "$",
  price: 44.01,
  compareAtPrice: 80.02,
  discountLabel: "SAVE 45%",
  rating: 5,
  reviewCountLabel: "5.0 (1,743 Verified Reviews)",
  verifiedReviewCount: 1743,
  gallery: [
    { src: fvG1, alt: "FloatVerse™ SpiderMan levitation lamp glowing on a desk" },
    { src: fvG2, alt: "FloatVerse™ hero figure levitating above the city base" },
    { src: fvG3, alt: "FloatVerse™ lamp lighting up a room at night" },
    { src: fvG4, alt: "FloatVerse™ city skyline base with ambient glow" },
  ],
  benefits: [
    { icon: "verified", text: "Eye-Catching Floating Design" },
    { icon: "verified", text: "Ambient Glow for Any Setup" },
    { icon: "verified", text: "Perfect Gift for Spider-Man Fans" },
  ],
  bundleHeading: "LIMITED TIME OFFER",
  bundles: [
    {
      id: "buy1",
      label: "BUY 1",
      sublabel: "YOU SAVE 45% OFF",
      badge: "FREE SHIPPING",
      quantity: 1,
      price: 44.01,
      compareAtPrice: 80.02,
      freeShipping: true,
    },
    {
      id: "buy2",
      label: "BUY 2",
      sublabel: "YOU SAVE 55% OFF",
      savingsLabel: "SAVE $85.22",
      badge: "Most Popular",
      badgeTone: "dark",
      quantity: 2,
      price: 74.82,
      compareAtPrice: 160.04,
    },
  ],
  upsells: [
    {
      id: "warranty",
      title: "30-Day Warranty",
      note: "+ Add at 80% discount",
      image: fvUpWarranty,
      price: 4.41,
      compareAtPrice: 22.01,
      defaultOn: true,
    },
    {
      id: "shipping",
      title: "Shipping Protection",
      note: "+ Add at 80% discount",
      image: fvUpShipping,
      price: 4.41,
      compareAtPrice: 22.01,
      defaultOn: true,
    },
    {
      id: "gift",
      title: "Spider-Man Mystery Gift",
      note: "+ Add at 20% discount",
      image: fvUpGift,
      price: 14.68,
      compareAtPrice: 18.34,
      defaultOn: true,
    },
  ],
  ctaLabel: "ADD TO CART",
  announcements: ["45% OFF ENTIRE STORE", "SALE ENDS MIDNIGHT!", "FREE WORLDWIDE SHIPPING!"],
  nav: [
    { label: "Home", to: "/" },
    { label: "Contact", to: "/products/floatverse" },
  ],
  faqsInline: [
    {
      q: "30-Day Warranty",
      a: "If your order arrives damaged or has a manufacturing defect, simply contact us within 30 days of delivery and we'll make it right with a replacement or refund.\n\nIf you have any questions or concerns, our support team is always here to help. Your satisfaction is our top priority.",
    },
    {
      q: "Why choose FloatVerse",
      a: "At FloatVerse, lighting is more than functional—it's an experience. Our levitating Spider-Man lamp combines ambient light, a futuristic floating effect, and standout design to transform any setup.",
    },
  ],
  faqHeading: "FAQ'S",
  faqs: [
    {
      q: "What makes FloatVerse different from a regular lamp?",
      a: "FloatVerse combines ambient lighting with an eye-catching levitating Spider-Man design, turning an everyday lamp into a standout display piece.",
    },
    {
      q: "Is the FloatVerse lamp easy to set up?",
      a: "Yes! It's designed for a simple setup so you can have it floating and glowing in minutes.",
    },
    {
      q: "Where can I display my FloatVerse lamp?",
      a: "It looks great on desks, nightstands, shelves, gaming setups, or anywhere you want to upgrade your space.",
    },
    {
      q: "What if my order arrives damaged?",
      a: "We stand behind the quality of every order. If your order arrives damaged or has a manufacturing defect, simply contact us within **30 days of delivery**, and we'll gladly provide a replacement or a refund.",
    },
  ],
  testimonials: [
    {
      name: "Jason M.",
      title: "Looks Unreal in Person",
      quote:
        "The levitating effect is so cool and the light makes my whole setup look way better. Definitely gets attention.",
    },
    {
      name: "Alex R.",
      title: "Perfect for My Setup",
      quote:
        "I put it beside my gaming monitor and it completely changed the vibe of my desk. Super unique piece.",
    },
    {
      name: "Maya T.",
      title: "Best Gift Ever",
      quote:
        "Bought this for my brother because he loves Spider-Man and he was obsessed with it. Way cooler than a normal lamp.",
    },
  ],
  theme: {
    accent: "#e62129",
    accentText: "#ffffff",
    deep: "#e62129",
    marqueeBg: "#e62129",
    marqueeText: "#ffffff",
    surface: "#fdecec",
    ring: "#e62129",
  },
  layoutVariant: "floatverse",
  footerLinks: ["Privacy Policy", "Refund Policy", "Shipping Policy", "Terms of Service"],
};

export const floatVerseExtras = {
  orderCounter: {
    avatars: [fvA1, fvA2, fvA3],
    headline: "100+ orders",
    sub: "in the last 24h",
  },
  ticker: [
    { quote: "Looks even better in person!", name: "Emily R.", timeAgo: "4 hours ago" },
    { quote: "Best addition to my setup.", name: "Michael T.", timeAgo: "9 hours ago" },
    { quote: "Such a cool Spider-Man piece.", name: "Sarah L.", timeAgo: "15 hours ago" },
  ],
  verifiedCustomers: [
    { src: "/media/fv-vc-1.mp4", quote: "Bought it as a gift and he absolutely loved it!", name: "Emily S.", timeAgo: "2 hours ago" },
    { src: "/media/fv-vc-2.mp4", quote: "The floating effect looks insane in person!", name: "Ryan T.", timeAgo: "4 hours ago" },
    { src: "/media/fv-vc-3.mp4", quote: "Completely upgraded my gaming setup.", name: "Marcus J.", timeAgo: "4 hours ago" },
    { src: "/media/fv-vc-4.mp4", quote: "Way cooler than a normal lamp.", name: "Chloe B.", timeAgo: "7 hours ago" },
  ],
  moreThanLampVideo: "/media/fv-vc-4.mp4",
  trust: [
    { icon: "heart", label: "Quality Promise" },
    { icon: "undo", label: "Easy Returns" },
    { icon: "truck", label: "Fast & Free Shipping" },
  ],
};

export const products = { potterLevitate, wizardFloat, floatVerse };
export const productList: Product[] = [potterLevitate, wizardFloat, floatVerse];

export function formatMoney(amount: number, symbol = "$") {
  return `${symbol}${amount.toFixed(2)}`;
}

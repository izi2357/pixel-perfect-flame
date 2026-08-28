import p1 from "@/assets/reviews/213801661-1787455991.1855.jpg";
import p2 from "@/assets/reviews/213801701-1787456854.7529.jpg";
import p3 from "@/assets/reviews/213802609-1787464016.9476.jpg";
import p4 from "@/assets/reviews/213802612-1787464044.6368.jpg";
import p5 from "@/assets/reviews/213802610-1787464082.447.jpg";
import p6 from "@/assets/reviews/213802610-1787464105.381.jpg";
import p7 from "@/assets/reviews/213802610-1787464146.8018.jpg";

export type Review = {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  photos: string[];
};

/**
 * Review data as publicly displayed on the reference product page.
 * Centralised here so it can be swapped for real/API data later.
 */
export const reviews: Review[] = [
  {
    id: "r1",
    author: "Alek Hill",
    date: "2026-08-14",
    rating: 5,
    text: "Super cool decor piece. It looks like the dragon is actually breathing fire.",
    photos: [p1],
  },
  {
    id: "r2",
    author: "Althea Auer",
    date: "2026-06-03",
    rating: 5,
    text: "Really happy with this purchase. It’s unique, stylish, and fun to look at.",
    photos: [p2],
  },
  {
    id: "r3",
    author: "Eugenia Ebert",
    date: "2026-04-18",
    rating: 5,
    text: "Absolutely beautiful flame effect! 🔥 My kids love watching it glow. Such a fun and magical night light!",
    photos: [p3],
  },
  {
    id: "r4",
    author: "Tomas Schuppe",
    date: "2026-01-07",
    rating: 5,
    text: "This lamp looks so cool at night! The flame effect is mesmerizing. Perfect gift for kids and fantasy lovers! 🐉",
    photos: [p4],
  },
  {
    id: "r5",
    author: "Jack Greenfelder",
    date: "2026-01-06",
    rating: 5,
    text: "I’m really impressed with this lamp. The glowing effect looks amazing. It makes the room feel so cozy! ✨",
    photos: [p5, p6, p7],
  },
  {
    id: "r6",
    author: "Imani Johns",
    date: "2025-12-08",
    rating: 5,
    text: "Bought this as a gift and loved it! The dragon design is so unique. The flame glow makes it extra special. 🔥",
    photos: [],
  },
  {
    id: "r7",
    author: "Bart Batz",
    date: "2025-09-28",
    rating: 5,
    text: "The little one loves his lamp, very beautiful and of good quality.",
    photos: [],
  },
  {
    id: "r8",
    author: "Emmett Yundt",
    date: "2025-09-26",
    rating: 5,
    text: "Looks absolutely amazing at night! The flame effect makes my room feel so cozy.",
    photos: [],
  },
  {
    id: "r9",
    author: "Casandra Nikolaus",
    date: "2025-09-23",
    rating: 5,
    text: "My kids absolutely love it.",
    photos: [],
  },
  {
    id: "r10",
    author: "Dejuan Marquardt",
    date: "2025-09-13",
    rating: 5,
    text: "The design is absolutely adorable! The glowing flame looks fantastic at night. My kids keep staring at it happily. 🔥",
    photos: [],
  },
  {
    id: "r11",
    author: "Gracie Weimann",
    date: "2025-09-07",
    rating: 5,
    text: "This is honestly such a cool night light. The flame effect looks realistic and fun. A great little gift for kids!",
    photos: [],
  },
  {
    id: "r12",
    author: "Gussie Ledner",
    date: "2025-08-30",
    rating: 5,
    text: "Bought this as a gift and they loved it. Definitely something different and fun.",
    photos: [],
  },
];

export const reviewSummary = {
  score: 5.0,
  total: reviews.length,
  distribution: [
    { stars: 5, count: 12 },
    { stars: 4, count: 0 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ],
};

export const reviewPhotos = reviews.flatMap((r) => r.photos);

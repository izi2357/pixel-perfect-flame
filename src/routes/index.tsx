import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/store/AnnouncementBar";
import { Header } from "@/components/store/Header";
import { ProductGallery } from "@/components/store/ProductGallery";
import { ProductInfo } from "@/components/store/ProductInfo";
import { ProductDescription } from "@/components/store/ProductDescription";
import { ReviewsSection } from "@/components/store/ReviewsSection";
import { CartDrawer } from "@/components/store/CartDrawer";
import { Footer } from "@/components/store/Footer";
import { CartProvider } from "@/lib/cart";
import { product } from "@/data/product";

const TITLE = "Dragon Breath Flame Night Light Decor | Atmospheric LED Flame Lamp";
const DESCRIPTION =
  "Dragon Breath Flame Night Light Decor — a realistic LED flame lamp that fills any room with warm, flickering ambience. Golden or blue, small or large. £22.00, shipping included.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          brand: { "@type": "Brand", name: "Prime Utopia" },
          image: product.images.map((i) => i.src),

          offers: {
            "@type": "Offer",
            price: product.price.toFixed(2),
            priceCurrency: product.currency,
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <CartProvider>
      <AnnouncementBar message="All items include shipping costs ✨" />
      <Header />
      <main>
        <section className="mx-auto max-w-[1280px] px-5 py-8 lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <ProductGallery images={product.images} />
            <ProductInfo product={product} />
          </div>
        </section>
        <div className="border-t border-hairline">
          <ProductDescription product={product} />
        </div>
        <ReviewsSection />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}

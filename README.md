# Flame Light Replica

Build a pixel-accurate, fully responsive recreation of this product landing page:

REFERENCE URL:
https://www.primeutopia.com/products/dragon-breath-flame-night-light-decor

IMPORTANT:

First inspect and analyze the reference URL carefully.

Recreate the page structure, layout, spacing, typography hierarchy, product presentation, responsive behavior, buttons, selectors, gallery behavior, and overall visual hierarchy as closely as possible.

This is an authorized recreation/reference implementation. Do not invent a different design.

Do not simplify the page into a generic Shopify template.

The result should feel extremely close to the reference when comparing screenshots side-by-side.

Use original/authorized product images and copy for the final production version rather than copying third-party copyrighted assets without permission.

1. TECH STACK

Use:

React

TypeScript

Vite

Tailwind CSS

Modern component architecture

Fully responsive desktop/tablet/mobile

Clean reusable components

No unnecessary dependencies

Create a production-quality frontend, not a prototype.

2. FIRST: ANALYZE THE REFERENCE

Before coding, inspect the reference page and identify:

Exact page width/container behavior

Header height

Announcement bar

Navigation

Logo placement

Search/cart/account controls

Currency selector

Product gallery dimensions

Product information column

Typography hierarchy

Price styling

Sale/compare-at price styling

Variant selectors

Quantity selector

Add-to-cart CTA

Payment/checkout messaging

Description sections

Feature lists

Product specifications

Image gallery behavior

Mobile layout

Spacing between every major section

Footer structure

Do not merely approximate the structure. Reproduce the visual system as closely as possible.

3. HEADER

Recreate the reference header.

Include:

Top announcement bar:
"All items include shipping costs ✨"

Main navigation

Logo/brand area

Home

Shop

Contact Us

Order Tracker

Login/account

Search

Cart

Country/currency selector

Make the header responsive.

On mobile, reproduce the reference's mobile navigation behavior and spacing rather than simply shrinking the desktop header.

4. PRODUCT HERO SECTION

Create a two-column desktop product section.

LEFT:
Large product image/gallery.

RIGHT:
Product information.

Product title:

"Dragon Breath Flame Night Light Decor"

Price:

£22.00

Compare-at price:

£30.00

Display the £30.00 price crossed out and £22.00 as the current price.

Include the sale state.

Include:

"Taxes included."

Then create the product options.

COLOR:

Golden

Blue

SIZE:

Small

Large

Use interactive variant selectors.

The selected option must have a clear visual state matching the reference.

5. QUANTITY + ADD TO CART

Create a quantity selector with:

minus

quantity

plus

Then a prominent:

"Add to cart"

button.

The button must actually work.

When clicked:

Add the selected product/variant to cart

Update cart quantity

Show appropriate feedback

Preserve selected variant and quantity

Do not create fake buttons.

6. PRODUCT IMAGE GALLERY

Create a high-quality product gallery.

Requirements:

Main large image

Thumbnail images

Thumbnail selection changes the main image

Smooth transitions

Mobile swipe-friendly behavior

Correct aspect ratios

No distorted images

Zoom/lightbox if appropriate

Use high-quality authorized images of the Dragon Breath Flame Night Light.

If suitable images are not available, generate/use appropriate original product imagery rather than using random unrelated images.

The product must visually resemble the reference product:
a decorative dragon-themed flame-effect night light with a warm glowing flame effect.

7. PRODUCT DESCRIPTION

Recreate the content hierarchy from the reference.

Main section heading:

"🔥 Ignite Your Space with Living Flame"

Description:

"Transform any room into an atmospheric sanctuary with the Dragon Breath Flame Night Light — a mesmerising décor piece that mimics the hypnotic dance of real fire without the heat or hazard."

Then create the feature section:

Why You'll Love It

Feature cards/list:

Realistic Flame Effect
Advanced LED simulation creates a warm, flickering glow that breathes life into any corner of your home.

Ambient Mood Lighting
Casts a soft, golden radiance perfect for bedrooms, living rooms, or home offices.

Safe & Energy Efficient
No open flame, no heat, no worry — just pure ambience at a fraction of the energy cost.

Compact & Versatile
Sleek silhouette fits effortlessly on shelves, bedside tables, or as a centrepiece.

Conversation Starter
A striking statement piece that guests will notice and admire instantly.

Follow with the atmospheric paragraph:

"Imagine settling in for the evening, the room bathed in the warm, dancing glow of dragon fire — calming, captivating, and entirely yours. Whether you're curating a cosy reading nook or elevating your bedroom aesthetic, this night light delivers drama and warmth in equal measure."

End with:

"Elevate your space. Own the night."

8. VISUAL DESIGN

The design must feel:

Premium

Minimal

Modern ecommerce

Product-focused

Spacious

High-converting

Clean

Elegant

Pay extremely close attention to:

Font sizes

Font weights

Letter spacing

Line heights

Margins

Padding

Border radius

Borders

Button dimensions

Image proportions

Alignment

White space

Do NOT add unnecessary gradients, animations, glassmorphism, cards, shadows, or decorative elements that aren't present in the reference.

9. RESPONSIVE DESIGN

Desktop:

Reproduce the reference desktop composition.

Tablet:

Maintain comfortable proportions.

Prevent content from becoming cramped.

Mobile:

Stack the product gallery and product information correctly.

Make the product image large and easy to interact with.

Make variant buttons easy to tap.

Make quantity controls touch-friendly.

Make Add to Cart prominent.

Preserve the same visual hierarchy as the reference.

Test at:

1440px

1280px

1024px

768px

390px

375px

10. CART

Implement a functional cart.

Cart should support:

Add product

Selected color

Selected size

Quantity

Increase/decrease quantity

Remove item

Subtotal

Continue shopping

Checkout CTA

Persist cart state locally so refreshing the page does not immediately erase it.

11. PRODUCT DATA

Structure the product data so it can easily be changed later.

Example:

product:

name

description

price

compareAtPrice

currency

images

colors

sizes

features

specifications

Do NOT hardcode the entire interface around one product.

12. SEO

Implement:

SEO-friendly title

Meta description

Open Graph metadata

Product structured data / JSON-LD

Correct H1/H2 hierarchy

Descriptive image alt text

Canonical URL

Clean URL structure

Suggested title:

"Dragon Breath Flame Night Light Decor | Atmospheric LED Flame Lamp"

Create descriptive product-focused copy while preserving the same conversion structure.

13. PERFORMANCE

Optimize for:

Fast initial load

Lazy-loaded product images

Responsive image sizing

Minimal JavaScript

No unnecessary libraries

Good Lighthouse performance

Mobile-first rendering

14. CODE QUALITY

Use reusable components such as:

AnnouncementBar

Header

CurrencySelector

ProductGallery

ProductInfo

VariantSelector

QuantitySelector

AddToCartButton

ProductDescription

FeatureList

CartDrawer

Footer

Keep the code clean and maintainable.

15. FINAL QUALITY CONTROL

After implementation:

Open the reference URL.

Compare it against the implementation.

Check desktop.

Check mobile.

Fix spacing differences.

Fix typography differences.

Fix image sizing.

Fix button dimensions.

Fix product-gallery proportions.

Fix header alignment.

Fix responsive behavior.

Make another visual comparison.

Do not stop after creating a rough approximation.

The final result should be a very close visual recreation of the reference product page, while using authorized/original assets and avoiding unnecessary design changes.

Do not ask me unnecessary questions. Make sensible implementation decisions and complete the page end-to-end.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://pixel-perfect-flame.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/44e07f41-957c-45fe-8b5a-43fba6e43207).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

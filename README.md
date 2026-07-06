# Premier Chemical Solution LLC — Website

Single-page React + Tailwind landing page built from the PCS brochure.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL. Build for production with `npm run build` (output in `dist/`), deployable as-is to Vercel/Netlify/any static host.

## Project structure

```
src/
  App.jsx              page assembly
  index.css            Tailwind entry + small global styles
  components/
    Nav.jsx             sticky nav, mobile menu
    Hero.jsx            cinematic hero (uses public/images/hero-tanker.png)
    Positioning.jsx     "who PCS is" statement
    Products.jsx        Frothers / Collectors / Custom Blending cards
    CustomBlending.jsx  "built to spec" deep-dive + 4-step process
    WhyPCS.jsx           5-point differentiator list
    Markets.jsx          Coal / Copper-Zinc / Iron Ore / Phosphate
    CTA.jsx              final CTA + contact form (id="contact")
    Footer.jsx
    Reveal.jsx           shared scroll-reveal animation wrapper
    ImagePlaceholder.jsx designed stand-in for missing photography
    Button.jsx, Tag.jsx, SectionLabel.jsx, Logo.jsx   small primitives
public/images/
  hero-tanker.png        your real tanker photo (used in Hero + CTA bg)
  logo-mark.jpg          your cube mark (used in nav/footer)
  logo-lockup.jpg        full logo lockup (spare, currently unused)
```

## Swapping in real photography

Every `<ImagePlaceholder />` (product cards, custom blending section) is a clearly
labeled stand-in with corner brackets and a "replace with photography" tag.
Swap it for a real `<img src="/images/your-photo.jpg" className="..." />` using
the same `className` for sizing — drop new files into `public/images/`.

## Contact form

The form in `CTA.jsx` is UI-only (`onSubmit` calls `preventDefault`). Wire it to
a form backend (Formspree, Netlify Forms, a serverless function, etc.) before
launch — no email address was provided in the brochure so none was hardcoded.

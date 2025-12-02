# AKSE Frontend Experience

AKSE is a travel-tech concept that showcases immersive heritage tourism products for Pakistan. This repository contains the marketing site, interactive demos, and booking flows built with the Next.js pages router and Material UI.

## Highlights

- Multi-page marketing site with dedicated views for services, products, booking, and company story.
- Interactive 360° experience demo powered by the Pannellum viewer on the `/demo` route.
- Guided booking wizard and quick booking form components for collecting trip interest.
- Reusable UI primitives (Aurora backgrounds, spotlight cards, tilt animations) authored with MUI, Framer Motion, and GSAP.
- Centralized design system in `theme.js` to manage colors, typography, and component overrides.
- Fully responsive layout using the MUI grid system and custom CSS modules.

## Tech Stack

- Next.js 13.x (pages directory)
- React 18
- Material UI 5 with Emotion
- Framer Motion & GSAP for motion effects
- Pannellum (loaded via CDN) for the interactive panorama demo

## Getting Started

1. **Prerequisites**: Node.js 18+ and npm 8+ recommended.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` in your browser.
4. **Create a production build**:
   ```bash
   npm run build
   npm run start
   ```

No environment variables are required for the current mock experience. All data is local and static.

## Project Structure

```
components/       Reusable UI pieces (cards, hero, forms, animated surfaces)
pages/            Next.js routes for home, about, services, products, booking, and demos
styles/           Global CSS and shared utility classes
theme.js          Material UI theme configuration and brand tokens
public/           Static assets referenced across pages
```

## Notable Pages & Flows

- `/` – Landing page with featured tours, capability highlights, testimonials, and newsletter sign-up.
- `/services` – Service catalogue with deep links into 3D tours and digital twin offerings.
- `/demo` – Embeds a 360° virtual tour example with hotspots and usage tips.
- `/book` – Step-by-step booking wizard that captures intent and confirms the simulated reservation.
- `/products`, `/about`, `/services/3d-tours`, `/services/digital-twins` – Additional marketing content for specific verticals.

## Styling & Customisation

- Edit `theme.js` to adjust brand colors, typography scale, or component defaults.
- Many components use CSS modules (e.g., `Aurora.module.css`, `MagicBento.module.css`) and Framer Motion props for nuanced motion; tweak these files to evolve the visual language.
- Imagery uses public Unsplash URLs and placeholder assets in `public/tours/`. Replace them with branded photography as needed.

## Available Scripts

- `npm run dev` – Start the local development server with hot reloading.
- `npm run build` – Generate an optimized production build in `.next/`.
- `npm run start` – Serve the pre-built production bundle.

## Deployment

The site can be deployed to any Next.js-friendly host. Vercel is the recommended target:

```bash
npm run build
# then push to a branch connected to Vercel or run `vercel --prod`
```

## Roadmap Ideas

- Replace mock alerts with a backend integration for bookings and newsletter sign-ups.
- Localise content and dates for an international audience.
- Add analytics and tracking to measure engagement with the interactive demos.

Feel free to fork, extend, or adapt this mockup to align with AKSE's evolving product vision.

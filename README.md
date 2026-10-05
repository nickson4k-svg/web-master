# Persona.AI — Next-Generation AI Blogger Showcase

A production-grade, mobile-first showcase landing page for commercial AI virtual influencers, built for a forward-thinking AI media startup.

---

## Live Demo & Launch

### Prerequisites
- Node.js 18+ (tested on Node 20+)
- npm 9+

### Telegram Integration
- Channel / Bot URL: `https://t.me/persona_ai_bot` (консистентно по всему проекту).
- Очередность секций: **Hero -> Каталог AI-блогеров -> Свежий контент из блогов -> Интерактивный диалог в Telegram -> Вопросы и ответы (FAQ) -> Финальный Telegram-CTA -> Футер** (mobile-first приоритет показа продукта).
- Контент: **24 уникальные фотографии** (по 6 разноплановых сцен на каждого персонажа без дублей).

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Open in browser
http://localhost:5173
```

### Production Build & Preview
```bash
# Typecheck and build production bundle
npm run build

# Preview production build locally
npm run preview
```

### Linting
```bash
# Run oxlint check
npm run lint
```

---

## Design Philosophy & Concept

Adhering to the principles from modern UI/UX design intelligence:
1. **Dark Cinematic Aesthetic:** Deep obsidian base (`#040508`), subtle glassmorphism borders (`rgba(255, 255, 255, 0.08)`), micro-texture grain overlay, and soft volumetric glows.
2. **Distinct Typography:**
   - **Headings & Display:** `Space Grotesk Variable` (geometric, punchy, high-tech character, full Latin & Cyrillic support).
   - **Body & UI:** `DM Sans Variable` (clean, contemporary readability, optimal letter spacing).
   - Strictly avoids generic browser defaults.
3. **Per-Blogger Personas:**
   - **Kai Morrow** (`#FF6B4A` Warm Coral) — Спорт и альпинизм (Sport & Adventure)
   - **Adrian Voss** (`#38BDF8` Ice Blue) — Технологии и AI (Future Tech & AI)
   - **Elena Rostova** (`#F59E0B` Amber Gold) — Мода и стиль (High Fashion & Editorial)
   - **Mia Chang** (`#84CC16` Lime Green) — Цифровой арт и концепт-дизайн (Digital Art & Concept)
4. **Touch & Mobile-First Ergonomics:**
   - All interactive targets meet or exceed 44x44px.
   - Smooth gesture navigation: vertical swipe-to-dismiss on modals, tap left/right for stories, carousel navigation on desktop.
   - Respects `prefers-reduced-motion` and `env(safe-area-inset-bottom)`.

---

## Core Interactive Features

- **Virtual Catalog & Filtering:**
  - Responsive grid showcasing all 4 AI-influencers.
  - Cards feature live online indicators, niche badges, follower counts, and quick profile open triggers.
- **Instagram-Style Profile Sheet:**
  - Full bio, personality tone, follower stats, toggleable subscription state, and direct Telegram CTA.
  - 3-column grid of 6 posts with full-screen `PostViewerModal`, heart like counter, and post caption.
  - `StoriesModal` with multi-segment progress bars, stories gallery, and touch navigation.
- **Interactive Live Dialog Smartphone Demo:**
  - Realistic smartphone frame featuring live chat simulation.
  - Scripted quick-reply chips triggering persona-specific responses leading to a Telegram invite.
  - Synchronized character selector tabs directly above the smartphone frame.
- **Fresh Content Reel:**
  - Horizontal carousel with all 24 posts.
  - Touch-swipe support on mobile and dedicated smooth-scroll navigation arrows on desktop.
- **Zero-Dependency Modal & Trap Engine:**
  - Keyboard navigation and accessible focus management.
  - Scroll locking prevents layout shift on mobile devices.

---

## Performance & Bundle Size

Built with Vite + React 19 + TypeScript + Tailwind CSS.

### Key Targets:
- **Performance:** Instant loading due to strict aspect-ratios, lazy images, and self-hosted preloaded fonts.
- **Accessibility:** Semantic HTML5 landmarks, ARIA modal dialogs, accessible roles, 44px touch targets.
- **Best Practices:** Safe external link attributes `rel="noopener noreferrer"`.
- **SEO:** Open Graph tags, descriptive meta tags, Russian `lang="ru"`.

---

## AI Art & Image Assets

Image paths are standardized across the app in `src/data/bloggers.ts`:
- `/bloggers/{slug}/portrait.jpg` (high-res portrait)
- `/bloggers/{slug}/post-1.jpg` through `post-6.jpg` (scene-specific posts)

All 24 photos and 4 main portraits are pre-generated, optimized, and bundled into `public/bloggers/`.

---

## Deployment Guide

### Deploying to Vercel
```bash
# Using Vercel CLI
npx vercel
```
Or import the repository into the Vercel dashboard. The framework preset is automatically detected as **Vite**.

### Deploying to Netlify
Create `netlify.toml` or configure in Netlify UI:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Deploying to GitHub Pages
1. In `vite.config.ts`, change `base` from `'/'` to your repository name:
   ```ts
   export default defineConfig({
     plugins: [react(), tailwindcss()],
     base: '/your-repo-name/',
   });
   ```
2. Build and push `dist` branch or set up GitHub Actions with the official Vite workflow.

---

## Project Architecture

```
testverstka/
├── public/
│   └── bloggers/                # Image folders for each persona (kai, adrian, elena, mia)
├── src/
│   ├── assets/                  # Static assets & icons
│   ├── components/
│   │   ├── BloggersCatalog.tsx  # Catalog grid of 4 AI-influencers
│   │   ├── CtaSection.tsx       # Conversion section with animated star background
│   │   ├── DemoChat.tsx         # Interactive live dialog phone demo
│   │   ├── FaqSection.tsx       # Accordion FAQ
│   │   ├── Footer.tsx           # Footer and disclaimer
│   │   ├── FreshContentReel.tsx # Carousel of latest posts with desktop controls
│   │   ├── Header.tsx           # Sticky blurred header with brand wordmark
│   │   ├── Hero.tsx             # Hero section with 3D card fan collage
│   │   ├── PostViewerModal.tsx  # Lightbox viewer for posts
│   │   ├── ProfileModal.tsx     # Full profile sheet with gallery and stats
│   │   └── StoriesModal.tsx     # Instagram-style stories viewer
│   ├── data/
│   │   └── bloggers.ts          # Complete personas data, bio, stats, posts, chat scripts
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── config.ts                # Global constants & Telegram URL
│   ├── index.css                # Base reset & Tailwind CSS tokens
│   ├── stars.css                # Animated canvas-like stars background
│   ├── style.css                # Component styles & responsive layouts
│   ├── main.tsx                 # App mount & self-hosted variable font imports
│   └── App.tsx                  # Root landing page composition
├── index.html                   # HTML entry point, SEO & font preloads
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Scripts and dependencies
```

---

## Design & Technical Decisions

- **Direct State Synchronization:** Modal sheets and lightbox states are managed declaratively at the top level, avoiding router overhead.
- **Clean Responsive Layout:** Grid and flex layouts adapt from single-column mobile view to 12-column desktop view smoothly.
- **No Third-Party Bloat:** Stories viewers, chat simulators, and modals are built in-house with clean React and TypeScript.

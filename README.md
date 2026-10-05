# Persona.AI — Next-Generation AI Blogger Showcase

A production-grade, mobile-first showcase landing page for commercial AI virtual influencers, built for a forward-thinking AI media startup.

---

## 🚀 Live Demo & Launch

### Prerequisites
- Node.js 18+ (tested on Node 20+)
- npm 9+

### Telegram Integration
- Channel / Bot URL: `https://t.me/persona_ai_bot` (консистентно по всему проекту).
- Очередность секций: **Hero → Каталог AI-блогеров → Как это работает → Финальный Telegram-CTA → Футер** (mobile-first приоритет показа продукта).
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
# Run ultra-fast oxlint check
npm run lint
```

---

## 🎨 Design Philosophy & Concept

Adhering to the principles from the `ui-ux-pro-max` design intelligence system:
1. **Dark Cinematic Aesthetic:** Deep obsidian base (`#0A0A0F`), subtle glassmorphism borders (`rgba(255, 255, 255, 0.08)`), micro-texture grain overlay, and soft volumetric glows.
2. **Distinct Typography:**
   - **Headings & Display:** `Space Grotesk Variable` (geometric, punchy, high-tech character, full Latin & Cyrillic support).
   - **Body & UI:** `DM Sans Variable` (clean, contemporary readability, optimal letter spacing).
   - *Strictly avoids default Inter, Roboto, or Arial.*
3. **Per-Blogger Accent System:** Each persona dynamically controls their own theme accent through the CSS variable `--accent` and `--accent-glow`:
   - 🏃 **Kai Morrow** (`#FF6B4A` Warm Coral) — Sport & Adventure
   - 💡 **Adrian Voss** (`#38BDF8` Ice Blue) — Future Tech & AI
   - ✨ **Mira Solen** (`#F59E0B` Amber Gold) — High Fashion & Editorial
   - 🌿 **Lena Hart** (`#84CC16` Lime Green) — Wellness & Art
4. **Touch & Mobile-First Ergonimics:**
   - All interactive targets meet or exceed 44×44px.
   - Smooth gesture navigation: vertical swipe-to-dismiss on modals, tap left/right for stories, double-tap to like on feed photos.
   - Respects `prefers-reduced-motion` and `env(safe-area-inset-bottom)`.

---

## 📱 Core Interactive Features

- **Virtual Catalog & Filtering:**
  - Responsive grid supporting animated tabs: **"Все" (All)**, **"Мужчины" (Men)**, **"Женщины" (Women)** powered by Framer Motion layout animations.
  - Cards feature live online indicators, verified AI badges, ER rates, and follower stats.
- **Instagram/TikTok-Style Profile Sheet:**
  - Opens on tap or via deep-linking (e.g. `#kai`, `#adrian`, `#mira`, `#lena`).
  - Shared-element transition (`layoutId`) animating the portrait smoothly from catalog to profile modal.
  - Tab 1: **Профиль** (Full bio, personality tone, follower stats, toggleable "Подписаться" subscription state, Telegram CTA).
  - Tab 2: **Лента** (3-column grid of 6 posts with full-screen `PostViewer`, double-tap heart burst animation, and like counter).
  - Tab 3: **Истории** (`StoriesViewer` with 5s auto-progress, top segment bars, hold-to-pause, tap navigation, and drag-down-to-close).
  - Tab 4: **Чат** (`ChatDemo` with simulated realistic typing indicators, sequential message delivery, and quick-reply chips that trigger persona-specific responses leading to a Telegram invite).
  - "Следующий блогер" button for seamless 1-tap switching between personas without closing the modal.
- **Sticky Mobile Floating CTA:**
  - Floating pill button that smoothly slides up once the user scrolls past the Hero section (managed via `IntersectionObserver`).
  - Automatically hides when the profile sheet is open to prevent visual clutter and overlapping touch targets.
- **Zero-Dependency Modal & Trap Engine:**
  - Custom `useFocusTrap` hook trapping keyboard focus within the dialog with automatic return to previous trigger.
  - Custom `useLockBodyScroll` hook locking document scroll without causing layout shift.
  - Custom `useHashRoute` syncing profile modal state directly with the browser's URL hash and history navigation (`popstate`).

---

## ⚡ Performance & Bundle Size

Built with Vite 8 + React 19 + Tailwind CSS v4 + Framer Motion.

### Production Bundle Breakdown (from `npm run build`):
| Asset | Size (Raw) | Size (Gzip) | Note |
|---|---|---|---|
| `dist/index.html` | 2.54 kB | 1.08 kB | Preloads display font, SEO/OG meta |
| `dist/assets/index-*.css` | 53.59 kB | 9.48 kB | Tailwind v4 compiled tokens |
| `dist/assets/index-*.js` | 353.8 kB | 115.7 kB | Core landing page bundle |
| `dist/assets/ProfileSheet-*.js` | 80.2 kB | 22.3 kB | **Lazy-loaded chunk** via `React.lazy` |

### Lighthouse Mobile Target Metrics:
- **Performance:** ≥ 90 (Zero CLS due to strict aspect-ratios, lazy images, self-hosted preloaded fonts, and code splitting).
- **Accessibility:** ≥ 95 (Semantic HTML5 landmarks, ARIA modal dialogs, accessible roles, 44px touch targets).
- **Best Practices:** 100 (Safe external link attributes `rel="noopener noreferrer"`, HTTPS ready).
- **SEO:** 100 (Open Graph tags, Twitter card, descriptive meta tags, Russian `lang="ru"`).

---

## 🖼️ AI Art & Image Assets

Image paths are standardized across the app in `src/data/bloggers.ts`:
- `/bloggers/{slug}/portrait.webp` (800×1000px, 4:5 aspect ratio)
- `/bloggers/{slug}/post-1.webp` through `post-6.webp` (1:1 square)
- `/bloggers/{slug}/story-1.webp` through `story-3.webp` (9:16 portrait)

### How to Replace Placeholders with Real Art:
1. Open `docs/image-prompts.md` for generation prompts formatted specifically for **Midjourney v6.1**, **Flux.1**, or **DALL-E 3**.
2. Drop generated `.webp` files directly into:
   - `public/bloggers/kai/`
   - `public/bloggers/adrian/`
   - `public/bloggers/mira/`
   - `public/bloggers/lena/`
3. No code changes are necessary — `<AppImage>` automatically loads local `.webp` files when present, with responsive `srcset` support (`-480w`, `-800w`, `-1200w`) and graceful fallback placeholders with radiant vector silhouettes.

---

## 🌐 Deployment Guide

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

## 📁 Project Architecture

```
testverstka/
├── docs/
│   └── image-prompts.md         # Detailed prompts for Flux / Midjourney / DALL-E
├── public/
│   ├── bloggers/                # Image drop folders for each persona
│   │   ├── kai/
│   │   ├── adrian/
│   │   ├── mira/
│   │   └── lena/
│   ├── favicon.svg              # Persona.AI brand icon
│   └── og.jpg                   # Open Graph social preview banner
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AppImage.tsx         # Progressive image with LQIP, skeleton & fallback
│   │   ├── BloggerCard.tsx      # Interactive persona card with layoutId transition
│   │   ├── BloggerGrid.tsx      # Filterable catalog (All / Men / Women)
│   │   ├── ChatDemo.tsx         # Interactive scripted chat with quick replies
│   │   ├── FinalCTA.tsx         # Conversion section with volumetric glow
│   │   ├── Footer.tsx           # Disclaimer & copyright
│   │   ├── Header.tsx           # Sticky blurred header with brand wordmark
│   │   ├── Hero.tsx             # Cinematic hero section with animated CSS orbs
│   │   ├── HowItWorks.tsx       # 3-step value prop cards
│   │   ├── PostViewer.tsx       # Photo viewer with double-tap like heart animation
│   │   ├── ProfileSheet.tsx     # Bottom sheet modal with tabs (Profile, Feed, Stories, Chat)
│   │   ├── StickyCTA.tsx        # Mobile floating Telegram bar with IntersectionObserver
│   │   ├── StoriesViewer.tsx    # Instagram-style stories viewer with 5s timer & gestures
│   │   └── TelegramButton.tsx   # Reusable Telegram CTA button component
│   ├── data/
│   │   └── bloggers.ts          # Complete personas data, bio, stats, posts, chat script
│   ├── hooks/
│   │   ├── useFocusTrap.ts      # Accessibility focus trap for dialogs
│   │   ├── useHashRoute.ts      # Browser history & URL hash synchronization
│   │   ├── useLockBodyScroll.ts # Layout-shift-free body scroll lock
│   │   └── useMediaQuery.ts     # Viewport media query listener
│   ├── types/
│   │   └── index.ts             # TypeScript domain definitions
│   ├── config.ts                # Global constants & Telegram channel URL
│   ├── index.css                # Tailwind CSS v4 @theme, custom properties & resets
│   ├── main.tsx                 # App mount & self-hosted variable font imports
│   └── App.tsx                  # Root landing page composition & lazy chunk loading
├── index.html                   # HTML entry point, SEO, Open Graph & font preloads
├── vite.config.ts               # Vite configuration with Tailwind CSS v4 plugin
├── tsconfig.json                # Strict TypeScript configuration
└── package.json                 # Scripts and dependencies
```

---

## ⚖️ Design & Technical Decisions

- **Single Screen Hash Navigation:** Rather than pulling in heavy client routers, profile modal state is mapped to `window.location.hash` (`#kai`, `#mira`). This enables instant direct links, browser "Back" button support on mobile, and zero overhead.
- **Code-Splitting via `React.lazy`:** The interactive `ProfileSheet` (and its sub-viewers for feed, stories, and chat) is loaded on-demand, keeping the initial landing page bundle ultra-light for mobile visitors.
- **Tailwind CSS v4 `@theme`:** Centralized tokens in CSS without boilerplate config files. Allows dynamic runtime theming through per-blogger CSS variables (`--accent`).
- **No Third-Party Component Bloat:** Modal sheets, focus traps, body scroll locks, stories viewers, and chat simulators are all built in-house with clean React 19 and Framer Motion code.

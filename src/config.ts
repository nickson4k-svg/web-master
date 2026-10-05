/** Application configuration */

export const TELEGRAM_URL = 'https://t.me/your_channel';

export const SITE = {
  name: 'Persona.AI',
  title: 'Persona.AI — Цифровые блогеры нового поколения',
  description:
    'Откройте мир AI-блогеров: уникальные персонажи, живой контент и общение 24/7. Созданы нейросетями, вдохновлены реальностью.',
  url: 'https://persona-ai.app',
  ogImage: '/og.jpg',
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const ANIMATION = {
  /** Duration for page-level transitions */
  slow: 0.6,
  /** Duration for component transitions */
  medium: 0.35,
  /** Duration for micro-interactions */
  fast: 0.15,
  /** Spring config for sheet/modal */
  sheetSpring: { type: 'spring' as const, stiffness: 300, damping: 30 },
  /** Spring config for card interactions */
  cardSpring: { type: 'spring' as const, stiffness: 400, damping: 25 },
} as const;

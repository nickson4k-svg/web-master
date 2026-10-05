import { TELEGRAM_URL } from '../data/bloggers';

export default function CtaSection() {
  return (
    <section className="final-cta-section">
      <div className="cta-card relative overflow-hidden rounded-3xl border border-white/10 max-w-4xl mx-auto w-full min-h-[500px] md:min-h-[580px] py-24 md:py-32 px-8 flex flex-col items-center justify-center text-center">
        {/* Фоновий контейнер із зірками */}
        <div className="stars-bg-container absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>

        {/* Контент картки поверх фону */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Аватари 4 блогерів */}
          <div className="avatar-stack mb-8">
            <img src="/bloggers/kai/portrait.jpg" alt="Kai Morrow" className="stack-avatar" />
            <img src="/bloggers/elena/portrait.jpg" alt="Elena Rostova" className="stack-avatar" />
            <img src="/bloggers/adrian/portrait.jpg" alt="Adrian Vance" className="stack-avatar" />
            <img src="/bloggers/mia/portrait.jpg" alt="Mia Chang" className="stack-avatar" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Начните живое общение с AI-блогерами
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-lg mx-auto mb-10 md:mb-12">
            Все 4 блогера доступны в Telegram. Мгновенные ответы, персональный контекст и эксклюзивные материалы.
          </p>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-telegram btn-cta-large mt-10 md:mt-14"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            <span>Перейти в Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
}

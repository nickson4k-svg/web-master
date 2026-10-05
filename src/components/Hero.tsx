interface HeroProps {
  onOpenBlogger: (id: 'kai' | 'adrian' | 'elena' | 'mia') => void;
}

export default function Hero({ onOpenBlogger }: HeroProps) {
  return (
    <section className="hero-section">
      <div className="hero-bg-media" aria-hidden="true">
        <img src="/hero.webp" alt="Persona.AI Hero" className="hero-bg-img" fetchPriority="high" />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Column: Headline, CTAs, Social Proof */}
          <div className="hero-content-col">
            <h1 className="hero-title">
              AI-блогеры нового поколения.
            </h1>

            <p className="hero-desc">
              Интерактивная платформа цифровых авторов: фотосессии, живой контекстный диалог 24/7 и эксклюзивные истории в Telegram.
            </p>

            <div className="hero-actions">
              <a href="#catalog" className="btn-hero btn-primary">
                <span>Смотреть блогеров</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
              </a>
              <a href="#live-dialog" className="btn-hero-ghost">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                <span>Тест диалога</span>
              </a>
            </div>

            {/* "Online сейчас" с аватарками */}
            <div className="hero-online-bar">
              <div className="avatar-stack">
                <img src="/bloggers/kai/portrait.jpg" alt="Kai Morrow" className="stack-avatar" />
                <img src="/bloggers/elena/portrait.jpg" alt="Elena Rostova" className="stack-avatar" />
                <img src="/bloggers/adrian/portrait.jpg" alt="Adrian Vance" className="stack-avatar" />
                <img src="/bloggers/mia/portrait.jpg" alt="Mia Chang" className="stack-avatar" />
              </div>
              <div className="online-status-wrap">
                <span className="pulse-dot"></span>
                <span className="online-label"><strong>4 автора online</strong> прямо сейчас • готовы к диалогу</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Visual Collage / Fan Deck */}
          <div className="hero-visual-col">
            <div className="hero-card-fan">
              <div
                className="fan-card fan-card-1"
                onClick={() => onOpenBlogger('kai')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenBlogger('kai')}
              >
                <img src="/bloggers/kai/portrait.jpg" alt="Kai Morrow" />
                <div className="fan-card-overlay">
                  <div className="fan-badge">Спорт</div>
                  <div className="fan-name">Kai Morrow</div>
                  <div className="fan-sub">184K подписчиков</div>
                </div>
              </div>

              <div
                className="fan-card fan-card-2"
                onClick={() => onOpenBlogger('elena')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenBlogger('elena')}
              >
                <img src="/bloggers/elena/portrait.jpg" alt="Elena Rostova" />
                <div className="fan-card-overlay">
                  <div className="fan-badge">Мода</div>
                  <div className="fan-name">Elena Rostova</div>
                  <div className="fan-sub">195K подписчиков</div>
                </div>
              </div>

              <div
                className="fan-card fan-card-3"
                onClick={() => onOpenBlogger('adrian')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenBlogger('adrian')}
              >
                <img src="/bloggers/adrian/portrait.jpg" alt="Adrian Voss" />
                <div className="fan-card-overlay">
                  <div className="fan-badge">Технологии</div>
                  <div className="fan-name">Adrian Voss</div>
                  <div className="fan-sub">240K подписчиков</div>
                </div>
              </div>

              <div
                className="fan-card fan-card-4"
                onClick={() => onOpenBlogger('mia')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenBlogger('mia')}
              >
                <img src="/bloggers/mia/portrait.jpg" alt="Mia Chang" />
                <div className="fan-card-overlay">
                  <div className="fan-badge">Арт</div>
                  <div className="fan-name">Mia Chang</div>
                  <div className="fan-sub">310K подписчиков</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thinner & Compact Social Proof Stats Row */}
        <div className="hero-stats">
          <div className="stat-box">
            <span className="stat-number">4</span>
            <span className="stat-label">AI-блогера</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number">929K+</span>
            <span className="stat-label">Аудитория</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number">9.1%</span>
            <span className="stat-label">Средний ER</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Онлайн</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Blogger } from '../types';
import { bloggersData } from '../data/bloggers';

interface BloggersCatalogProps {
  onOpenBlogger: (id: 'kai' | 'adrian' | 'elena' | 'mia') => void;
}

export default function BloggersCatalog({ onOpenBlogger }: BloggersCatalogProps) {
  return (
    <section className="catalog-section" id="catalog">
      <div className="section-heading">
        <h2 className="section-title">Каталог AI-блогеров</h2>
        <p className="section-desc">
          Выберите блогера, чтобы открыть профиль, 6 уникальных сетов, недавние истории и начать живой диалог
        </p>
      </div>

      {/* Cards Grid */}
      <div className="bloggers-grid no-scrollbar" id="bloggers-grid">
        {bloggersData.map((blogger: Blogger) => (
          <article
            key={blogger.id}
            className="blogger-card"
            data-id={blogger.id}
            onClick={() => onOpenBlogger(blogger.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenBlogger(blogger.id)}
          >
            <img
              src={blogger.portraitLocal}
              alt={blogger.name}
              className="card-img"
              loading="lazy"
            />
            <div className="card-gradient-overlay"></div>

            <div className="card-top-row">
              <span className="card-category-badge">{blogger.niche}</span>
              <div className="card-badges-left">
                <span className="card-status-dot" title="Онлайн 24/7"></span>
              </div>
            </div>

            <div className="card-info">
              <div className="card-highlight-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{blogger.highlight}</span>
              </div>

              <h3 className="card-name">{blogger.name}</h3>
              <span className="card-handle">{blogger.handle}</span>

              <div className="card-stats-row">
                <span className="stat-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {blogger.followers}
                </span>
                <span className="stat-divider">•</span>
                <span className="stat-item metric-er">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  ER {blogger.er}
                </span>
              </div>

              <button className="card-btn" type="button" aria-label={`Открыть профиль ${blogger.name}`}>
                <span>Открыть профиль</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

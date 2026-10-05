import { useEffect } from 'react';
import type { Blogger, Post } from '../types';
import { TELEGRAM_URL } from '../data/bloggers';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';

interface ProfileModalProps {
  blogger: Blogger | null;
  onClose: () => void;
  onOpenStory: (blogger: Blogger) => void;
  onOpenPost: (blogger: Blogger, post: Post) => void;
}

export default function ProfileModal({
  blogger,
  onClose,
  onOpenStory,
  onOpenPost,
}: ProfileModalProps) {
  // Lock body scroll when modal is open
  useLockBodyScroll(Boolean(blogger));

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!blogger) return null;

  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="modal-backdrop open"
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="Закрыть профиль"
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
      />

      {/* Bottom Sheet Window */}
      <div
        className="bottom-sheet open no-scrollbar max-w-3xl w-full max-h-[92vh] flex flex-col justify-between p-6 md:p-7 rounded-3xl overflow-hidden"
        data-id={blogger.id}
        role="dialog"
        aria-modal="true"
      >
        <div className="sheet-handle-bar"></div>

        {/* Sheet Header with Integrated Clickable Story Avatar */}
        <div className="sheet-header flex items-center justify-between gap-4 mb-4 p-0 border-b-0">
          <div className="sheet-author flex items-center gap-3.5">
            <button
              className="sheet-avatar-btn p-0 border-0 bg-transparent cursor-pointer"
              type="button"
              title="Нажмите, чтобы смотреть истории"
              aria-label="Смотреть истории"
              onClick={() => onOpenStory(blogger)}
            >
              <div className="sheet-story-ring w-14 h-14 p-0.5">
                <img
                  src={blogger.portraitLocal}
                  alt={blogger.name}
                  className="sheet-avatar w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="sheet-story-badge text-[9px]">История</span>
            </button>
            <div className="sheet-author-text flex flex-col gap-1">
              <div className="sheet-name-row flex items-center gap-2">
                <h2 className="sheet-name text-lg md:text-xl font-bold text-white leading-none">{blogger.name}</h2>
                <span className="sheet-niche-pill text-xs px-2.5 py-0.5">{blogger.niche}</span>
              </div>
              <span className="sheet-handle text-xs text-zinc-400">{blogger.handle}</span>
            </div>
          </div>

          <div className="sheet-header-actions ml-auto">
            <button
              onClick={onClose}
              aria-label="Закрыть"
              type="button"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer group"
            >
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sheet Profile Bio & Tags */}
        <div className="sheet-bio-section p-0 mb-4 bg-transparent border-b-0">
          <p className="sheet-bio-text text-sm text-zinc-300 mb-3 leading-relaxed">{blogger.bio}</p>
          <div className="sheet-tags-cloud flex flex-wrap gap-2">
            {blogger.tags.map((tag, idx) => (
              <span key={idx} className="sheet-tag-chip text-xs py-1 px-3">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Posts Grid (3x2) */}
        <div className="flex-1 overflow-hidden p-0">
          <div className="grid grid-cols-3 gap-3 my-1">
            {blogger.posts.map((post) => (
              <div
                key={post.id}
                className="post-thumb h-36 md:h-40 w-full object-cover rounded-xl shadow-md overflow-hidden cursor-pointer relative group"
                onClick={() => onOpenPost(blogger, post)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenPost(blogger, post)}
              >
                <img src={post.img} alt={post.caption} className="w-full h-full object-cover rounded-xl" loading="lazy" />
                <div className="post-thumb-overlay opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 absolute inset-0 flex items-center justify-center gap-3 text-xs text-white font-semibold">
                  <span className="thumb-stat flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    {post.likes > 1000 ? `${(post.likes / 1000).toFixed(1)}K` : post.likes}
                  </span>
                  <span className="thumb-stat flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                    </svg>
                    {post.comments}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sheet Footer CTA */}
        <div className="sheet-footer border-t-0 p-0 mt-4 shrink-0">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-telegram w-full h-12 shrink-0 text-sm font-semibold flex items-center justify-center gap-2.5 rounded-full bg-white hover:bg-zinc-200 text-black transition-all duration-200 active:scale-[0.98] shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 text-black fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            <span>Перейти в Telegram-канал {blogger.name.split(' ')[0]}</span>
          </a>
        </div>
      </div>
    </>
  );
}

import { useState, useEffect } from 'react';
import type { Blogger, Post } from '../types';
import { TELEGRAM_URL } from '../data/bloggers';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';

interface PostViewerModalProps {
  blogger: Blogger | null;
  post: Post | null;
  onClose: () => void;
}

export default function PostViewerModal({ blogger, post, onClose }: PostViewerModalProps) {
  // Lock body scroll when post modal is open
  useLockBodyScroll(Boolean(post));

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(post?.likes ?? 0);
  const [showHeartBurst, setShowHeartBurst] = useState<boolean>(false);

  useEffect(() => {
    if (post) {
      setLikesCount(post.likes);
      setIsLiked(false);
    }
  }, [post]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!blogger || !post) return null;

  const toggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikesCount((prev) => prev + 1);
      setShowHeartBurst(true);
      setTimeout(() => setShowHeartBurst(false), 700);
    }
  };

  const handleDoubleTap = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikesCount((prev) => prev + 1);
    }
    setShowHeartBurst(true);
    setTimeout(() => setShowHeartBurst(false), 700);
  };

  return (
    <div className="post-viewer-modal" role="dialog" aria-modal="true">
      <div
        className="post-viewer-backdrop"
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="Закрыть просмотр"
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
      />

      <div className="post-viewer-card">
        <button
          className="btn-close-viewer"
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Media Side */}
        <div
          className="post-viewer-media"
          onDoubleClick={handleDoubleTap}
          title="Двойной клик для лайка"
        >
          <img src={post.img} alt={post.caption} className="post-viewer-img" />
          <div className="double-tap-hint">Двойной клик чтобы поставить лайк</div>
          {showHeartBurst && (
            <div className="heart-burst burst">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
          )}
        </div>

        {/* Details Side */}
        <div className="post-viewer-details">
          <div>
            <div className="post-viewer-author">
              <img
                src={blogger.portraitLocal}
                alt={blogger.name}
                className="post-author-avatar"
              />
              <div>
                <h3 className="post-author-name">{blogger.name}</h3>
                <span className="post-author-location">{post.location}</span>
              </div>
            </div>

            <p className="post-caption">{post.caption}</p>
          </div>

          <div>
            <div className="post-actions-bar">
              <button
                type="button"
                className={`post-like-btn ${isLiked ? 'liked' : ''}`}
                onClick={toggleLike}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={isLiked ? '#ef4444' : 'none'}
                  stroke={isLiked ? '#ef4444' : 'currentColor'}
                  strokeWidth="2"
                  className="heart-icon"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <span>{likesCount.toLocaleString('ru-RU')}</span>
              </button>

              <span className="post-comments-count">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                </svg>
                <span>{post.comments} комментариев</span>
              </span>
            </div>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-telegram btn-post-tg"
            >
              <span>Обсудить пост в Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useRef } from 'react';
import type { Blogger, Post } from '../types';
import { bloggersData } from '../data/bloggers';

interface FreshContentReelProps {
  onOpenPost: (blogger: Blogger, post: Post) => void;
}

export default function FreshContentReel({ onOpenPost }: FreshContentReelProps) {
  const reelRef = useRef<HTMLDivElement>(null);

  // Flatten posts with their corresponding blogger
  const allPosts = bloggersData.flatMap((blogger) =>
    blogger.posts.map((post) => ({ blogger, post }))
  );

  const scroll = (direction: 'left' | 'right') => {
    if (reelRef.current) {
      const scrollAmount = 320 * 2; // scroll roughly 2 cards
      reelRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="fresh-content-section relative" id="fresh-content">
      <div className="section-heading">
        <h2 className="section-title">Свежий контент из блогов</h2>
      </div>

      <div className="relative group/reel max-w-full">
        {/* Desktop Navigation Arrows (hidden on mobile, visible on md/lg) */}
        <button
          type="button"
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-white/15 backdrop-blur-md items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-0 group-hover/reel:opacity-100"
          aria-label="Прокрутить назад"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-white/15 backdrop-blur-md items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-0 group-hover/reel:opacity-100"
          aria-label="Прокрутить вперед"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="fresh-reel-wrap no-scrollbar" ref={reelRef}>
          <div className="fresh-reel" id="fresh-reel">
            {allPosts.map(({ blogger, post }) => (
              <article
                key={`${blogger.id}-${post.id}`}
                className="fresh-card"
                onClick={() => onOpenPost(blogger, post)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenPost(blogger, post)}
              >
                <div className="fresh-card-header">
                  <img
                    src={blogger.portraitLocal}
                    alt={blogger.name}
                    className="fresh-card-avatar"
                    loading="lazy"
                  />
                  <div className="fresh-card-meta">
                    <span className="fresh-card-author">{blogger.name}</span>
                    <span className="fresh-card-location">{post.location}</span>
                  </div>
                </div>

                <div className="fresh-card-media">
                  <img src={post.img} alt={post.caption} loading="lazy" />
                </div>

                <div className="fresh-card-body">
                  <p className="fresh-card-caption">{post.caption}</p>
                  <div className="fresh-card-footer text-xs text-zinc-400 font-medium flex items-center justify-between">
                    <span className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors group">
                      <svg 
                        className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>{post.likes.toLocaleString('ru-RU')}</span>
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">{post.comments} коммент.</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

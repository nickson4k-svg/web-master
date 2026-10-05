import type { Blogger, Post } from '../types';
import { bloggersData } from '../data/bloggers';

interface FreshContentReelProps {
  onOpenPost: (blogger: Blogger, post: Post) => void;
}

export default function FreshContentReel({ onOpenPost }: FreshContentReelProps) {
  // Flatten posts with their corresponding blogger
  const allPosts = bloggersData.flatMap((blogger) =>
    blogger.posts.map((post) => ({ blogger, post }))
  );

  return (
    <section className="fresh-content-section" id="fresh-content">
      <div className="section-heading">
        <h2 className="section-title">Свежий контент из блогов</h2>
        <p className="section-desc">
          Кадры из последних публикаций всех авторов. Нажмите на кадр, чтобы посмотреть публикацию или перейти в блог.
        </p>
      </div>

      <div className="fresh-reel-wrap no-scrollbar">
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
    </section>
  );
}

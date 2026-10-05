import { useState, useEffect } from 'react';
import type { Blogger, Post } from './types';
import { bloggersData } from './data/bloggers';

import Header from './components/Header';
import Hero from './components/Hero';
import BloggersCatalog from './components/BloggersCatalog';
import FreshContentReel from './components/FreshContentReel';
import DemoChat from './components/DemoChat';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ProfileModal from './components/ProfileModal';
import StoriesModal from './components/StoriesModal';
import PostViewerModal from './components/PostViewerModal';

export default function App() {
  const [selectedBlogger, setSelectedBlogger] = useState<Blogger | null>(null);
  const [activeStoryBlogger, setActiveStoryBlogger] = useState<Blogger | null>(null);
  const [activePost, setActivePost] = useState<{ blogger: Blogger; post: Post } | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handlers
  const handleOpenBloggerById = (id: 'kai' | 'adrian' | 'elena' | 'mia') => {
    const found = bloggersData.find((b) => b.id === id);
    if (found) setSelectedBlogger(found);
  };

  const handleOpenStory = (blogger: Blogger) => {
    setActiveStoryBlogger(blogger);
  };

  const handleOpenPost = (blogger: Blogger, post: Post) => {
    setActivePost({ blogger, post });
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)]">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Header */}
      <Header />

      {/* 1. Hero Section */}
      <Hero onOpenBlogger={handleOpenBloggerById} />

      {/* Main Content Sections */}
      <main className="main-content overflow-x-hidden w-full max-w-full">
        {/* 2. Catalog Section with Category Filter */}
        <BloggersCatalog onOpenBlogger={handleOpenBloggerById} />

        {/* 3. Fresh Content Reel (24 posts) */}
        <FreshContentReel onOpenPost={handleOpenPost} />

        {/* 4. Live Interactive Dialog Smartphone Demo */}
        <DemoChat />

        {/* 5. FAQ Accordion */}
        <FaqSection />

        {/* 6. Final Telegram CTA */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Profile Modal (Bottom Sheet / Desktop Dialog) */}
      <ProfileModal
        blogger={selectedBlogger}
        onClose={() => setSelectedBlogger(null)}
        onOpenStory={handleOpenStory}
        onOpenPost={handleOpenPost}
      />

      {/* Stories Viewer Modal */}
      <StoriesModal
        blogger={activeStoryBlogger}
        onClose={() => setActiveStoryBlogger(null)}
      />

      {/* Post Viewer Lightbox Modal */}
      <PostViewerModal
        blogger={activePost?.blogger ?? null}
        post={activePost?.post ?? null}
        onClose={() => setActivePost(null)}
      />
    </div>
  );
}

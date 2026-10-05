import { useState, useEffect, useCallback } from 'react';
import type { Blogger } from '../types';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';

interface StoriesModalProps {
  blogger: Blogger | null;
  onClose: () => void;
}

const STORY_DURATION = 5000; // 5 seconds per story

export default function StoriesModal({ blogger, onClose }: StoriesModalProps) {
  // Lock body scroll when stories modal is open
  useLockBodyScroll(Boolean(blogger));

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const stories = blogger?.stories || [];

  const handleNext = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  }, [currentIndex, stories.length, onClose]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    } else {
      setProgress(0);
    }
  }, [currentIndex]);

  // Reset index on blogger change
  useEffect(() => {
    setCurrentIndex(0);
    setProgress(0);
  }, [blogger]);

  // Escape key closes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  // Progress timer tick
  useEffect(() => {
    if (!blogger || isPaused) return;

    const interval = 50; // ms
    const step = (interval / STORY_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [blogger, isPaused, handleNext]);

  if (!blogger || stories.length === 0) return null;

  const currentStory = stories[currentIndex];

  return (
    <div className="stories-modal" role="dialog" aria-modal="true">
      <div
        className="stories-backdrop"
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="Закрыть истории"
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
      />

      <div
        className="stories-frame"
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Progress Bars */}
        <div className="stories-progress-bars">
          {stories.map((_, idx) => {
            let width = 0;
            if (idx < currentIndex) width = 100;
            else if (idx === currentIndex) width = progress;

            return (
              <div key={idx} className="story-bar-segment">
                <div className="story-bar-fill" style={{ width: `${width}%` }}></div>
              </div>
            );
          })}
        </div>

        {/* Stories Header */}
        <div className="stories-header">
          <div className="stories-author">
            <img
              src={blogger.portraitLocal}
              alt={blogger.name}
              className="stories-author-avatar"
            />
            <div>
              <span className="stories-author-name">{blogger.name}</span>
              <span className="stories-time">Только что</span>
            </div>
          </div>
          <button
            className="btn-stories-close"
            onClick={onClose}
            aria-label="Закрыть истории"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Media Container */}
        <div className="stories-media-container">
          <img
            src={currentStory.img}
            alt={currentStory.caption}
            className="stories-media-img"
          />
          <div className="stories-caption">{currentStory.caption}</div>
        </div>

        {/* Left & Right Tap Zones */}
        <div
          className="stories-nav-left"
          onClick={handlePrev}
          title="Предыдущая история"
          role="button"
          tabIndex={0}
          aria-label="Предыдущая история"
          onKeyDown={(e) => e.key === 'Enter' && handlePrev()}
        />
        <div
          className="stories-nav-right"
          onClick={handleNext}
          title="Следующая история"
          role="button"
          tabIndex={0}
          aria-label="Следующая история"
          onKeyDown={(e) => e.key === 'Enter' && handleNext()}
        />
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import type { ChatMessage } from '../types';
import { bloggersData, TELEGRAM_URL } from '../data/bloggers';

export default function DemoChat() {
  const [selectedBloggerId, setSelectedBloggerId] = useState<'kai' | 'adrian' | 'elena' | 'mia'>('kai');
  const activeBlogger = bloggersData.find((b) => b.id === selectedBloggerId) || bloggersData[0];

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const phoneMessagesRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Auto-scroll messages inside the phone mockup ONLY, never scrolling the window/page
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (phoneMessagesRef.current) {
      phoneMessagesRef.current.scrollTo({
        top: phoneMessagesRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isTyping]);

  const handleSendPrompt = (questionText: string, replyText: string) => {
    if (isTyping) return;

    // 1. Add user message
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: questionText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Simulate AI thinking & typing
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'blogger',
        text: replyText,
      };

      // Also append an invite CTA if not already present
      const ctaMsg: ChatMessage = {
        id: `cta-${Date.now()}`,
        sender: 'blogger',
        text: `Продолжить общение с ${activeBlogger.name} в Telegram с сохранением памяти:`,
        isCta: true,
      };

      setMessages((prev) => [...prev, botMsg, ctaMsg]);
    }, 750);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const query = inputText.trim();
    setInputText('');

    // Fallback answer
    const fallbackReply = `Интересный вопрос! В моем официальном Telegram-боте я разверну этот ответ подробнее с учетом всех деталей.`;
    handleSendPrompt(query, fallbackReply);
  };

  return (
    <section className="live-dialog-section px-4 w-full box-border" id="live-dialog">
      <div className="live-dialog-grid">
        {/* Left Column (Context & Features - 7 cols) */}
        <div className="dialog-info-col">
          <div className="dialog-header-group">
            <h2 className="dialog-title">Общайтесь вживую с каждым персонажем</h2>
          </div>

          {/* Features List (3 minimalist points with thin outline icons) */}
          <div className="dialog-features-list">
            <div className="dialog-feature-item">
              <div className="dialog-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 3.36 2.07 6.24 5 7.42V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.58c2.93-1.18 5-4.06 5-7.42a8 8 0 0 0-8-8z" />
                  <path d="M9 10h6" />
                  <path d="M12 7v6" />
                </svg>
              </div>
              <div className="dialog-feature-text">
                <h4 className="dialog-feature-title">Память контекста</h4>
                <p className="dialog-feature-desc">Помнит предыдущие сообщения, ваши привычки и темы бесед.</p>
              </div>
            </div>

            <div className="dialog-feature-item">
              <div className="dialog-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div className="dialog-feature-text">
                <h4 className="dialog-feature-title">Мгновенная генерация</h4>
                <p className="dialog-feature-desc">Формирует ответ в характере персонажа за 1 секунду.</p>
              </div>
            </div>

            <div className="dialog-feature-item">
              <div className="dialog-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
              <div className="dialog-feature-text">
                <h4 className="dialog-feature-title">Бесшовный переход</h4>
                <p className="dialog-feature-desc">Синхронизация диалога с официальным Telegram-ботом в 1 клик.</p>
              </div>
            </div>
          </div>

          {/* Big Telegram CTA button */}
          <div className="dialog-action-wrap">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-telegram btn-dialog-tg">
              <svg viewBox="0 0 24 24" aria-hidden="true" width="17" height="17">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
              <span>Открыть диалог в Telegram</span>
            </a>
          </div>
        </div>

        {/* Right Column (Smartphone Mockup - 5 cols) */}
        <div className="dialog-phone-col flex flex-col items-center">
          {/* Character Tabs Picker (Single line strictly within phone width) */}
          <div 
            className="w-full max-w-[360px] md:max-w-[380px] px-1" 
            style={{ marginBottom: '28px' }}
          >
            <div className="grid grid-cols-4 gap-1.5 w-full">
              {bloggersData.map((blogger) => (
                <button
                  key={blogger.id}
                  type="button"
                  className={`demo-tab-btn !px-1.5 !py-1.5 !gap-1.5 justify-center w-full min-w-0 ${selectedBloggerId === blogger.id ? 'active' : ''}`}
                  onClick={() => setSelectedBloggerId(blogger.id as 'kai' | 'adrian' | 'elena' | 'mia')}
                  title={`${blogger.name} (${blogger.niche})`}
                >
                  <img src={blogger.portraitLocal} alt={blogger.name} className="demo-tab-avatar !w-4 !h-4 shrink-0" />
                  <span className="truncate text-xs font-medium">
                    {blogger.name.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="phone-glow-ambient" aria-hidden="true"></div>
          <div className="demo-phone">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <div className="phone-chat-header">
                <div className="phone-author-info">
                  <div className="phone-avatar-wrap">
                    <img
                      src={activeBlogger.portraitLocal}
                      alt={activeBlogger.name}
                      className="phone-avatar"
                    />
                    <span className="phone-online-dot"></span>
                  </div>
                  <div>
                    <span className="phone-author-name">{activeBlogger.name}</span>
                  </div>
                </div>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="phone-tg-badge">
                  <span>Telegram</span>
                </a>
              </div>

              <div className="phone-messages-body no-scrollbar" id="phone-messages" ref={phoneMessagesRef}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`phone-bubble ${
                      msg.sender === 'user' ? 'phone-bubble-user' : 'phone-bubble-blogger'
                    } ${msg.isCta ? 'phone-bubble-cta' : ''}`}
                  >
                    <div>{msg.text}</div>
                    {msg.isCta && (
                      <a
                        href={TELEGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-phone-tg"
                      >
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                        </svg>
                        <span>Начать чат в Telegram</span>
                      </a>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="phone-typing">
                    <span className="phone-author-name" style={{ fontSize: '11px', color: '#94a3b8' }}>
                      {activeBlogger.name.split(' ')[0]} печатает...
                    </span>
                  </div>
                )}
              </div>

              <div className="phone-bottom-bar">
                {/* Interactive prompt chips */}
                <div className="phone-chips-row no-scrollbar">
                  {activeBlogger.chat.quickReplies.map((qr, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="phone-chip"
                      disabled={isTyping}
                      onClick={() => handleSendPrompt(qr.text, qr.reply)}
                    >
                      {qr.text}
                    </button>
                  ))}
                </div>

                <form className="phone-input-bar" onSubmit={handleCustomSubmit}>
                  <input
                    type="text"
                    className="phone-fake-input"
                    placeholder="Выберите вопрос выше или напишите свой..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="phone-send-btn"
                    title="Отправить вопрос"
                    aria-label="Отправить"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

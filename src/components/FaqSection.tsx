import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'Это реальные люди или нейросети?',
    a: 'Все 4 автора — полностью синтетические AI-блогеры нового поколения. Их визуальный контент, фотосессии и манера речи созданы нейромоделями, обученными на глубоких персонажах со своими привычками и целями.',
  },
  {
    q: 'Бесплатно ли общение с блогерами?',
    a: 'Да, чтение ленты, просмотр историй и общение в базовом режиме в Telegram полностью бесплатны. Вы можете задавать блогерам вопросы в любое время суток.',
  },
  {
    q: 'Как работает диалог в Telegram?',
    a: 'В Telegram подключен персональный бот каждого автора с долговременной памятью. Он помнит ваше имя, контекст предыдущих бесед, обсуждает свои свежие посты и отвечает в голосовом и текстовом формате.',
  },
  {
    q: 'Можно ли заказать своего персонажа под бренд?',
    a: 'Да, команда Persona.AI разрабатывает кастомных AI-инфлюенсеров под бренды, медиапроекты и рекламные кампании — от создания визуального ДНК до полной интеграции в Telegram и CRM.',
  },
  {
    q: 'Как часто выходят новые публикации и истории?',
    a: 'Каждый персонаж публикует от 3 до 5 постов в неделю, путешествует по новым локациям, делится закулисными мыслями в историях и моментально реагирует на комментарии подписчиков.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-heading">
        <h2 className="section-title">Часто задаваемые вопросы</h2>
        <p className="section-desc">Всё, что нужно знать о технологии AI-блогеров и формате общения</p>
      </div>

      <div className="faq-list">
        {faqs.map((item, idx) => (
          <details
            key={idx}
            className="faq-item"
            open={openIndex === idx}
            onClick={(e) => {
              e.preventDefault();
              toggleFaq(idx);
            }}
          >
            <summary className="faq-question">
              <span>{item.q}</span>
              <svg
                className="faq-chevron"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            {openIndex === idx && <div className="faq-answer">{item.a}</div>}
          </details>
        ))}
      </div>
    </section>
  );
}

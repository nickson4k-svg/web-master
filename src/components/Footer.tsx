import { TELEGRAM_URL } from '../data/bloggers';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="logo-name">Persona</span>
          <span className="logo-tag">.ai</span>
        </div>
        <div className="footer-tg-link">
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            Официальный Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}

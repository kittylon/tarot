import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { UI } from '../i18n/ui';

const FEATURE_LINKS = ['/spreads', '/gallery', '/journal'];
const FEATURE_ICONS = ['✦', '📖', '📓'];

export default function Home() {
  const { lang } = useLang();
  const ui = UI[lang].home;

  return (
    <>
      <div className="home-hero">
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Tarot de Marseille</h1>
          <p className="home-subtitle">{ui.subtitle}</p>
          <hr className="divider" style={{ width: '200px' }} />
          <div className="home-cards">
            {ui.features.map((f, i) => (
              <Link key={FEATURE_LINKS[i]} to={FEATURE_LINKS[i]} className="home-feature-card">
                <span className="home-feature-icon">{FEATURE_ICONS[i]}</span>
                <span className="home-feature-title">{f.title}</span>
                <span className="home-feature-desc">{f.desc}</span>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', maxWidth: '480px', textAlign: 'center', lineHeight: 1.7, fontStyle: 'italic' }}>
            {ui.attribution}
          </p>
        </div>
      </div>

      {/* ── History ── */}
      <section className="home-section home-section--history">
        <div className="container">
          <h2 className="home-section-title">{ui.historyTitle}</h2>
          <p className="home-history-text">{ui.historyText}</p>
        </div>
      </section>

      {/* ── Colors ── */}
      <section className="home-section home-section--colors">
        <div className="container">
          <h2 className="home-section-title">{ui.colorsTitle}</h2>
          <div className="home-colors-grid">
            {ui.colors.map(c => (
              <div key={c.name} className="home-color-item">
                <span className="home-color-swatch" style={{ background: c.swatch }} />
                <strong className="home-color-name">{c.name}</strong>
                <p className="home-color-meaning">{c.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tips ── */}
      <section className="home-section home-section--tips">
        <div className="container">
          <h2 className="home-section-title">{ui.tipsTitle}</h2>
          <div className="home-tips-grid">
            {ui.tips.map(t => (
              <div key={t.title} className="home-tip-card">
                <span className="home-tip-icon">{t.icon}</span>
                <strong className="home-tip-title">{t.title}</strong>
                <p className="home-tip-text">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

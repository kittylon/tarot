import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { UI } from '../i18n/ui';

const LANG_OPTIONS = ['es', 'en', 'fr'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const nav = UI[lang].nav;

  const LINKS = [
    { to: '/',        label: nav.home },
    { to: '/gallery', label: nav.gallery },
    { to: '/spreads', label: nav.spreads },
    { to: '/journal', label: nav.journal },
  ];

  return (
    <nav className="navbar">
      <span className="navbar-logo">✦ Tarot de Marseille</span>

      <ul className={`navbar-links${open ? ' open' : ''}`}>
        {LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <div className="lang-switcher">
          {LANG_OPTIONS.map(l => (
            <button
              key={l}
              className={`lang-btn${lang === l ? ' lang-btn--active' : ''}`}
              onClick={() => setLang(l)}
              aria-label={`Switch to ${l}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          className="navbar-burger"
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}

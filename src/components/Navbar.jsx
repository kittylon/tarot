import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/',        label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/draw',    label: 'Draw' },
  { to: '/spreads', label: 'Spreads' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

      <button
        className="navbar-burger"
        aria-label="Toggle menu"
        onClick={() => setOpen(o => !o)}
      >
        {open ? '✕' : '☰'}
      </button>
    </nav>
  );
}

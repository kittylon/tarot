import { useEffect, useRef } from 'react';
import { getPositionLabel, getPositionDescription } from '../data/spreads';
import { getCardName, getMeaning } from '../data/cards';
import { UI } from '../i18n/ui';

const SUIT_SYMBOLS = { wands: '🔥', cups: '🌊', swords: '⚔', pentacles: '✦' };

function cardSymbol(card) {
  if (card.arcana === 'major') return card.romanNumeral || '✦';
  return SUIT_SYMBOLS[card.suit] || '✦';
}

export default function CardRevealPanel({ entry, lang, onClose }) {
  const ui = UI[lang].spreads;
  const isOpen = Boolean(entry);

  // Keep last entry content visible during slide-out animation
  const lastEntryRef = useRef(null);
  if (entry) lastEntryRef.current = entry;
  const displayed = entry || lastEntryRef.current;

  return (
    <div
      className={`card-reveal-panel${isOpen ? ' open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button className="card-reveal-close" onClick={onClose} aria-label="Close">✕</button>
      {displayed && (
        <div className="card-reveal-inner">
          <div className="card-reveal-symbol">{cardSymbol(displayed.card)}</div>
          <div className="card-reveal-content">
            <div className="card-reveal-position">{getPositionLabel(displayed.pos, lang)}</div>
            <div className="card-reveal-name">{getCardName(displayed.card, lang)}</div>
            <span className={`orientation-badge ${displayed.isReversed ? 'reversed' : 'upright'}`}>
              {displayed.isReversed ? ui.reversed : ui.upright}
            </span>
            {getPositionDescription(displayed.pos, lang) && (
              <p className="card-reveal-pos-desc">{getPositionDescription(displayed.pos, lang)}</p>
            )}
            <p className="card-reveal-meaning">{getMeaning(displayed.card, lang, displayed.isReversed)}</p>
            {displayed.card.keywords?.length > 0 && (
              <div className="card-reveal-keywords">
                {displayed.card.keywords.map(k => (
                  <span key={k} className="card-reveal-keyword">{k}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

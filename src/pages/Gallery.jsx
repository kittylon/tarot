import { useState, useMemo } from 'react';
import ALL_CARDS, { getMeaning, getCardName } from '../data/cards';
import Card from '../components/Card';
import { useLang } from '../context/LangContext';
import { UI } from '../i18n/ui';

export default function Gallery() {
  const { lang } = useLang();
  const ui = UI[lang].gallery;

  const FILTERS = [
    { value: 'all',       label: ui.filterAll },
    { value: 'major',     label: ui.filterMajor },
    { value: 'wands',     label: ui.filterWands },
    { value: 'cups',      label: ui.filterCups },
    { value: 'swords',    label: ui.filterSwords },
    { value: 'pentacles', label: ui.filterPentacles },
  ];

  const [filter, setFilter]     = useState('all');
  const [flippedId, setFlippedId] = useState(null);

  const filtered = useMemo(() => {
    if (filter === 'all')   return ALL_CARDS;
    if (filter === 'major') return ALL_CARDS.filter(c => c.arcana === 'major');
    return ALL_CARDS.filter(c => c.suit === filter);
  }, [filter]);

  function handleCardClick(card) {
    if (card.arcana !== 'major') return;
    setFlippedId(prev => prev === card.id ? null : card.id);
  }

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="section-title">{ui.title}</h1>
        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`filter-pill${filter === f.value ? ' active' : ''}`}
              onClick={() => { setFilter(f.value); setFlippedId(null); }}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: 'var(--space-md)' }}>
          {ui.cardsCount(filtered.length)}
        </p>
        {filter === 'all' || filter === 'major' ? (
          <p className="gallery-hint">{ui.majorHint}</p>
        ) : null}
        <div className="gallery-grid">
          {filtered.map(card => {
            const isMajor   = card.arcana === 'major';
            const isFlipped = flippedId === card.id;
            return (
              <div
                key={card.id}
                className={`gallery-card-wrap${isMajor ? ' major' : ''}${isFlipped ? ' revealed' : ''}`}
                onClick={() => handleCardClick(card)}
                title={isMajor ? getCardName(card, lang) : undefined}
              >
                {isFlipped ? (
                  <div className="gallery-meaning-card">
                    <div className="gallery-meaning-numeral">{card.romanNumeral}</div>
                    <strong className="gallery-meaning-name">{getCardName(card, lang)}</strong>
                    <div className="gallery-meaning-keywords">
                      {card.keywords.map(k => <span key={k} className="keyword-tag">{k}</span>)}
                    </div>
                    <div className="gallery-meaning-section">
                      <span className="gallery-meaning-label orientation-badge upright">{ui.upright}</span>
                      <p>{getMeaning(card, lang, false)}</p>
                    </div>
                    <div className="gallery-meaning-section">
                      <span className="gallery-meaning-label orientation-badge reversed">{ui.reversed}</span>
                      <p>{getMeaning(card, lang, true)}</p>
                    </div>
                    <button
                      className="gallery-meaning-close"
                      onClick={e => { e.stopPropagation(); setFlippedId(null); }}
                      aria-label="Close"
                    >✕</button>
                  </div>
                ) : (
                  <Card card={card} isFlipped={true} isReversed={false} size="sm" lang={lang} showLabel={true} onClick={undefined} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

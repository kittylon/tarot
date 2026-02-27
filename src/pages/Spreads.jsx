import { useState } from 'react';
import { SPREADS, SPREAD_LIST } from '../data/spreads';
import { drawMultiple, MAJOR_ARCANA } from '../data/cards';
import SpreadLayout from '../components/SpreadLayout';

export default function Spreads() {
  const [selectedSpread, setSelectedSpread] = useState(null);
  const [drawnCards,     setDrawnCards]     = useState([]);
  const [lastRevealed,   setLastRevealed]   = useState(null); // { card, isReversed, posLabel }
  const [majorOnly,      setMajorOnly]      = useState(false);

  function startReading(spreadId) {
    const spread = SPREADS[spreadId];
    const deck   = majorOnly ? MAJOR_ARCANA : undefined; // undefined → drawMultiple uses ALL_CARDS default
    const drawn  = drawMultiple(spread.cardCount, deck);
    setDrawnCards(drawn.map(d => ({ ...d, isFlipped: false })));
    setSelectedSpread(spread);
    setLastRevealed(null);
  }

  function revealCard(index) {
    setDrawnCards(prev => {
      const next = prev.map((d, i) => i === index ? { ...d, isFlipped: true } : d);
      const d = next[index];
      setLastRevealed({
        card: d.card,
        isReversed: d.isReversed,
        posLabel: selectedSpread.positions[index].label,
      });
      return next;
    });
  }

  function resetReading() {
    setSelectedSpread(null);
    setDrawnCards([]);
    setLastRevealed(null);
    // majorOnly intentionally preserved so the user's preference persists
  }

  if (!selectedSpread) {
    return (
      <div className="page-content">
        <div className="container">
          <h1 className="section-title">Spreads</h1>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>
            Choose a spread to begin your reading.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-lg)' }}>
            <div style={{
              display: 'inline-flex',
              border: '1px solid var(--color-border)',
              borderRadius: 8,
              overflow: 'hidden',
            }}>
              <button
                className={`filter-pill${!majorOnly ? ' active' : ''}`}
                style={{ borderRadius: 0, border: 'none', padding: '0.4rem 1.1rem' }}
                onClick={() => setMajorOnly(false)}
              >
                Full Deck
              </button>
              <button
                className={`filter-pill${majorOnly ? ' active' : ''}`}
                style={{ borderRadius: 0, border: 'none', borderLeft: '1px solid var(--color-border)', padding: '0.4rem 1.1rem' }}
                onClick={() => setMajorOnly(true)}
              >
                Major Arcana only
              </button>
            </div>
          </div>

          <div className="spreads-selector">
            {SPREAD_LIST.map(spread => (
              <button
                key={spread.id}
                className="spread-option-card"
                onClick={() => startReading(spread.id)}
              >
                <span className="spread-option-count">{spread.cardCount}</span>
                <span className="spread-option-name">{spread.nameEn}</span>
                <span className="spread-option-desc">{spread.description}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const allFlipped = drawnCards.length > 0 && drawnCards.every(d => d.isFlipped);
  const revealedCount = drawnCards.filter(d => d.isFlipped).length;

  return (
    <div className="page-content">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-lg)', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <div>
            <h1 style={{ fontSize: '1.6rem' }}>{selectedSpread.nameEn}</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              {selectedSpread.description}
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
              {majorOnly ? '★ Major Arcana only' : 'Full deck (78 cards)'}
            </p>
          </div>
          <button className="btn btn-ghost" onClick={resetReading}>
            ← Choose Spread
          </button>
        </div>

        <div className="spread-reading-area">
          {!allFlipped && (
            <p className="spread-hint">
              {revealedCount === 0
                ? 'Click any card position to reveal it.'
                : `${revealedCount} of ${selectedSpread.cardCount} revealed — click the next card to continue.`}
            </p>
          )}

          <SpreadLayout
            spread={selectedSpread}
            drawnCards={drawnCards}
            onPositionClick={revealCard}
          />

          {lastRevealed && (
            <div className="spread-revealed-panel">
              <div className="spread-revealed-pos">{lastRevealed.posLabel}</div>
              <h3>{lastRevealed.card.nameEn}</h3>
              <p style={{ marginBottom: 'var(--space-sm)' }}>
                <span className={`orientation-badge ${lastRevealed.isReversed ? 'reversed' : 'upright'}`}>
                  {lastRevealed.isReversed ? 'Reversed' : 'Upright'}
                </span>
              </p>
              <p className="spread-revealed-meaning">
                {lastRevealed.isReversed
                  ? lastRevealed.card.reversedMeaning
                  : lastRevealed.card.uprightMeaning}
              </p>
            </div>
          )}

          {allFlipped && (
            <button
              className="btn btn-gold"
              onClick={() => startReading(selectedSpread.id)}
              style={{ marginTop: 'var(--space-lg)' }}
            >
              ↺ New Reading
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

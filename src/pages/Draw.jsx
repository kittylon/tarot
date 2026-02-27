import { useState, useRef } from 'react';
import { drawRandom } from '../data/cards';
import Card from '../components/Card';

// phase: 'idle' | 'revealed'
export default function Draw() {
  const [phase,   setPhase]   = useState('idle');
  const [drawn,   setDrawn]   = useState(null);   // { card, isReversed }
  const [flipped, setFlipped] = useState(false);
  const timerRef = useRef(null);

  function handleDraw() {
    // Reset first
    clearTimeout(timerRef.current);
    setFlipped(false);
    setPhase('idle');

    // Short tick to let React reset the card
    timerRef.current = setTimeout(() => {
      const result = drawRandom();
      setDrawn(result);

      // Flip after brief pause
      timerRef.current = setTimeout(() => {
        setFlipped(true);
        timerRef.current = setTimeout(() => setPhase('revealed'), 700);
      }, 150);
    }, 50);
  }

  function handleReset() {
    clearTimeout(timerRef.current);
    setPhase('idle');
    setDrawn(null);
    setFlipped(false);
  }

  const meaning = drawn && phase === 'revealed'
    ? (drawn.isReversed ? drawn.card.reversedMeaning : drawn.card.uprightMeaning)
    : null;

  return (
    <div className="page-content">
      <div className="draw-page container">
        <h1 className="section-title">Draw a Card</h1>
        <p className="draw-question">
          Still your mind, hold your question, and let the cards speak.
        </p>

        <div className="draw-stage">
          {drawn ? (
            <Card
              card={drawn.card}
              isFlipped={flipped}
              isReversed={drawn.isReversed}
              size="lg"
              showLabel={phase === 'revealed'}
            />
          ) : (
            <div
              style={{
                width: 'var(--card-w-lg)',
                height: 'var(--card-h-lg)',
                border: '1px dashed var(--color-border-gold)',
                borderRadius: 'var(--card-radius)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-muted)',
                fontSize: '2rem',
              }}
            >
              ✦
            </div>
          )}

          <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
            <button
              className="btn btn-gold"
              onClick={handleDraw}
              disabled={flipped && phase !== 'revealed'}
            >
              {phase === 'idle' ? '✦ Draw a Card' : '↺ Draw Again'}
            </button>

            {drawn && phase === 'revealed' && (
              <button className="btn btn-ghost" onClick={handleReset}>
                Clear
              </button>
            )}
          </div>
        </div>

        {meaning && (
          <div className="draw-meaning-panel">
            <h2>{drawn.card.nameEn}</h2>
            <p className="detail-subtitle" style={{ marginBottom: 'var(--space-sm)' }}>
              {drawn.card.romanNumeral ? `${drawn.card.romanNumeral} · ` : ''}{drawn.card.name}
            </p>

            <div className="draw-orientation">
              <span className={`orientation-badge ${drawn.isReversed ? 'reversed' : 'upright'}`}>
                {drawn.isReversed ? 'Reversed' : 'Upright'}
              </span>
            </div>

            <p className="draw-meaning-text">{meaning}</p>

            <div className="detail-keywords" style={{ marginTop: 'var(--space-md)' }}>
              {drawn.card.keywords.map(k => (
                <span key={k} className="keyword-tag">{k}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

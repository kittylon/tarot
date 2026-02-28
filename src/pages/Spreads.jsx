import { useState } from 'react';
import { SPREADS, SPREAD_LIST, getSpreadName, getSpreadDescription, getPositionLabel, getPositionDescription, getIdealFor } from '../data/spreads';
import { drawMultiple, MAJOR_ARCANA, getMeaning, getCardName } from '../data/cards';

import SpreadLayout from '../components/SpreadLayout';
import IntentionModal from '../components/IntentionModal';
import ReadingNotebook from '../components/ReadingNotebook';
import { useLang } from '../context/LangContext';
import { UI } from '../i18n/ui';

export default function Spreads() {
  const { lang } = useLang();
  const ui = UI[lang].spreads;

  const [phase,           setPhase]           = useState('select'); // 'select'|'intention'|'reading'
  const [pendingSpread,   setPendingSpread]   = useState(null);
  const [selectedSpread,  setSelectedSpread]  = useState(null);
  const [drawnCards,      setDrawnCards]      = useState([]);
  const [majorOnly,       setMajorOnly]       = useState(false);
  const [intention,       setIntention]       = useState('');
  const [notebookEntries, setNotebookEntries] = useState([]);
  const [showSummary,     setShowSummary]     = useState(false);

  function handleSpreadSelect(spreadId) {
    setPendingSpread(SPREADS[spreadId]);
    setPhase('intention');
  }

  function startReading(intentionText) {
    const spread = pendingSpread;
    const deck   = majorOnly ? MAJOR_ARCANA : undefined;
    const drawn  = drawMultiple(spread.cardCount, deck);
    setDrawnCards(drawn.map(d => ({ ...d, isFlipped: false })));
    setSelectedSpread(spread);
    setIntention(intentionText);
    setNotebookEntries([]);
    setShowSummary(false);
    setPhase('reading');
  }

  function revealCard(index) {
    const entry = drawnCards[index];
    if (entry.isFlipped) return;
    const pos = selectedSpread.positions[index];
    setDrawnCards(prev => prev.map((d, i) => i === index ? { ...d, isFlipped: true } : d));
    setNotebookEntries(nb => [...nb, { card: entry.card, isReversed: entry.isReversed, pos }]);
  }

  function resetReading() {
    setPhase('select');
    setSelectedSpread(null);
    setDrawnCards([]);
    setNotebookEntries([]);
    setIntention('');
    setPendingSpread(null);
    setShowSummary(false);
  }

  // ── Selector ─────────────────────────────────────────────────────────────────
  if (phase === 'select') {
    return (
      <div className="page-content">
        <div className="container">
          <h1 className="section-title">{ui.title}</h1>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>
            {ui.chooseDesc}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-lg)' }}>
            <div style={{ display: 'inline-flex', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
              <button className={`filter-pill${!majorOnly ? ' active' : ''}`}
                style={{ borderRadius: 0, border: 'none', padding: '0.4rem 1.1rem' }}
                onClick={() => setMajorOnly(false)}>{ui.fullDeck}</button>
              <button className={`filter-pill${majorOnly ? ' active' : ''}`}
                style={{ borderRadius: 0, border: 'none', borderLeft: '1px solid var(--color-border)', padding: '0.4rem 1.1rem' }}
                onClick={() => setMajorOnly(true)}>{ui.majorOnly}</button>
            </div>
          </div>
          <div className="spreads-selector">
            {SPREAD_LIST.map(spread => (
              <button key={spread.id} className="spread-option-card" onClick={() => handleSpreadSelect(spread.id)}>
                <span className="spread-option-count">{spread.cardCount}</span>
                <span className="spread-option-name">{getSpreadName(spread, lang)}</span>
                <span className="spread-option-desc">{getSpreadDescription(spread, lang)}</span>
                {getIdealFor(spread, lang) && (
                  <span className="spread-option-ideal">
                    <em>{ui.idealForLabel}:</em> {getIdealFor(spread, lang)}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Intención ────────────────────────────────────────────────────────────────
  if (phase === 'intention') {
    return (
      <IntentionModal
        lang={lang}
        onConfirm={text => startReading(text)}
      />
    );
  }

  // ── Lectura activa ───────────────────────────────────────────────────────────
  const allFlipped    = drawnCards.length > 0 && drawnCards.every(d => d.isFlipped);
  const revealedCount = drawnCards.filter(d => d.isFlipped).length;
  const lastEntry     = notebookEntries[notebookEntries.length - 1] || null;

  return (
    <div className="page-content">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-lg)', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <div>
            <h1 style={{ fontSize: '1.6rem' }}>{getSpreadName(selectedSpread, lang)}</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{getSpreadDescription(selectedSpread, lang)}</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
              {majorOnly ? ui.majorOnlyLabel : ui.fullDeckLabel}
            </p>
          </div>
          <button className="btn btn-ghost" onClick={resetReading}>{ui.chooseBtn}</button>
        </div>

        {intention && (
          <div className="intention-banner">
            <span className="intention-banner-label">✦ {ui.intentionBanner}</span>
            <p className="intention-banner-text">"{intention}"</p>
          </div>
        )}

        <div className="reading-layout">
          <div className="reading-main">

            {/* ── Summary view ── */}
            {showSummary ? (
              <div className="reading-summary">
                <div className="reading-summary-header">
                  <div className="reading-summary-symbol">✦</div>
                  <h2 className="reading-summary-title">{ui.summaryTitle}</h2>
                  <p className="reading-summary-spread-name">{getSpreadName(selectedSpread, lang)}</p>
                  {intention && (
                    <p className="reading-summary-intention">"{intention}"</p>
                  )}
                </div>

                <ol className="reading-summary-list">
                  {notebookEntries.map((entry, i) => (
                    <li key={i} className="reading-summary-item">
                      <div className="reading-summary-item-top">
                        <span className="reading-summary-num">{i + 1}</span>
                        <span className="reading-summary-pos">{getPositionLabel(entry.pos, lang)}</span>
                        <span className="reading-summary-card-name">{getCardName(entry.card, lang)}</span>
                        <span className={`orientation-badge ${entry.isReversed ? 'reversed' : 'upright'}`}>
                          {entry.isReversed ? ui.reversed : ui.upright}
                        </span>
                      </div>
                      {getPositionDescription(entry.pos, lang) && (
                        <p className="reading-summary-pos-desc">{getPositionDescription(entry.pos, lang)}</p>
                      )}
                      <p className="reading-summary-meaning">{getMeaning(entry.card, lang, entry.isReversed)}</p>
                    </li>
                  ))}
                </ol>

                <div className="reading-summary-actions">
                  <button className="btn btn-ghost" onClick={() => setShowSummary(false)}>{ui.summaryBack}</button>
                  <button className="btn btn-gold" onClick={() => startReading(intention)}>{ui.newReading}</button>
                </div>
              </div>
            ) : (
              /* ── Spread view ── */
              <div className="spread-reading-area">
                {!allFlipped && (
                  <p className="spread-hint">
                    {revealedCount === 0 ? ui.clickReveal : ui.revealProgress(revealedCount, selectedSpread.cardCount)}
                  </p>
                )}

                <SpreadLayout
                  spread={selectedSpread}
                  drawnCards={drawnCards}
                  onPositionClick={revealCard}
                  lang={lang}
                />

                {lastEntry && (
                  <div className="spread-revealed-panel">
                    <div className="spread-revealed-pos">{getPositionLabel(lastEntry.pos, lang)}</div>
                    {getPositionDescription(lastEntry.pos, lang) && (
                      <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: 'var(--space-md)', paddingBottom: 'var(--space-md)', borderBottom: '1px solid var(--color-border)' }}>
                        {getPositionDescription(lastEntry.pos, lang)}
                      </p>
                    )}
                    <h3>{getCardName(lastEntry.card, lang)}</h3>
                    <p style={{ marginBottom: 'var(--space-sm)', marginTop: 'var(--space-xs)' }}>
                      <span className={`orientation-badge ${lastEntry.isReversed ? 'reversed' : 'upright'}`}>
                        {lastEntry.isReversed ? ui.reversed : ui.upright}
                      </span>
                    </p>
                    <p className="spread-revealed-meaning">
                      {getMeaning(lastEntry.card, lang, lastEntry.isReversed)}
                    </p>
                  </div>
                )}

                {allFlipped && (
                  <div className="spread-complete-actions">
                    <button className="btn btn-gold btn-summary" onClick={() => setShowSummary(true)}>
                      {ui.summaryBtn}
                    </button>
                    <button className="btn btn-ghost" onClick={() => startReading(intention)} style={{ marginTop: 'var(--space-sm)' }}>
                      {ui.newReading}
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

          <ReadingNotebook
            lang={lang}
            spread={selectedSpread}
            revealedEntries={notebookEntries}
            intention={intention}
          />
        </div>
      </div>
    </div>
  );
}

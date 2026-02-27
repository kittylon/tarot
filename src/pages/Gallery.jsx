import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ALL_CARDS from '../data/cards';
import Card from '../components/Card';

const FILTERS = [
  { value: 'all',       label: 'All Cards' },
  { value: 'major',     label: 'Major Arcana' },
  { value: 'wands',     label: '🔥 Wands' },
  { value: 'cups',      label: '🌊 Cups' },
  { value: 'swords',    label: '⚔ Swords' },
  { value: 'pentacles', label: '✦ Pentacles' },
];

function DetailPanel({ card, onClose }) {
  return (
    <div className="detail-panel" style={{ marginTop: 'var(--space-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-sm)' }}>
        <div>
          <h2>{card.nameEn}</h2>
          <p className="detail-subtitle">
            {card.romanNumeral ? `${card.romanNumeral} · ` : ''}{card.name}
            {card.suit ? ` · ${card.suit.charAt(0).toUpperCase() + card.suit.slice(1)}` : ''}
          </p>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: '1px solid var(--color-border)',
            borderRadius: 6,
            color: 'var(--color-text-muted)',
            padding: '4px 10px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
          aria-label="Close detail"
        >
          ✕
        </button>
      </div>

      <div className="detail-keywords">
        {card.keywords.map(k => (
          <span key={k} className="keyword-tag">{k}</span>
        ))}
      </div>

      <div className="detail-meaning">
        <h4>Upright</h4>
        <p>{card.uprightMeaning}</p>
      </div>
      <div className="detail-meaning">
        <h4>Reversed</h4>
        <p>{card.reversedMeaning}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const [filter, setFilter]       = useState('all');
  const [selectedId, setSelectedId] = useState(cardId || null);

  const filtered = useMemo(() => {
    if (filter === 'all') return ALL_CARDS;
    if (filter === 'major') return ALL_CARDS.filter(c => c.arcana === 'major');
    return ALL_CARDS.filter(c => c.suit === filter);
  }, [filter]);

  const selectedCard = ALL_CARDS.find(c => c.id === selectedId) || null;

  function handleCardClick(card) {
    if (selectedId === card.id) {
      setSelectedId(null);
      navigate('/gallery', { replace: true });
    } else {
      setSelectedId(card.id);
      navigate(`/gallery/${card.id}`, { replace: true });
    }
  }

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="section-title">The Deck</h1>

        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`filter-pill${filter === f.value ? ' active' : ''}`}
              onClick={() => {
                setFilter(f.value);
                setSelectedId(null);
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: 'var(--space-md)' }}>
          {filtered.length} cards · Click a card to see its meaning
        </p>

        <div className="gallery-grid">
          {filtered.map(card => (
            <div
              key={card.id}
              className={`gallery-card-wrap${selectedId === card.id ? ' selected' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              <Card
                card={card}
                isFlipped={true}
                isReversed={false}
                size="sm"
                showLabel={true}
                onClick={undefined}
              />
            </div>
          ))}
        </div>

        {selectedCard && (
          <DetailPanel card={selectedCard} onClose={() => {
            setSelectedId(null);
            navigate('/gallery', { replace: true });
          }} />
        )}
      </div>
    </div>
  );
}

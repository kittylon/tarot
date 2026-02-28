import { useState } from 'react';
import { getImageUrl, getCardName } from '../data/cards';

const SUIT_ICONS = {
  wands:     '🔥',
  cups:      '🌊',
  swords:    '⚔',
  pentacles: '✦',
};

const REVERSED_LABEL = { es: 'Invertida', en: 'Reversed', fr: 'Renversée' };

function CardBack() {
  return (
    <div className="card-back">
      <div className="card-back-inner">
        <span className="card-back-star">✦</span>
      </div>
    </div>
  );
}

function CardPlaceholder({ card, lang = 'en' }) {
  const suitClass = card.suit ? `suit-${card.suit}` : '';
  const display = card.romanNumeral ?? (card.number != null ? String(card.number) : '');
  return (
    <div className={`card-placeholder ${suitClass}`}>
      <div className="placeholder-ornament" />
      <div className="placeholder-body">
        {display && <div className="placeholder-numeral">{display}</div>}
        <div className="placeholder-name">{getCardName(card, lang)}</div>
        {card.suit && (
          <div className="placeholder-suit-icon">{SUIT_ICONS[card.suit]}</div>
        )}
      </div>
      <div className="placeholder-ornament" />
    </div>
  );
}

function CardFace({ card, lang = 'en' }) {
  const [imgError, setImgError] = useState(false);
  const url = getImageUrl(card.wikimediaFile);

  return (
    <div className="card-front">
      {url && !imgError ? (
        <img
          src={url}
          alt={getCardName(card, lang)}
          className="card-image"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <CardPlaceholder card={card} lang={lang} />
      )}
    </div>
  );
}

export default function Card({
  card,
  isFlipped = false,
  isReversed = false,
  size = 'md',
  lang = 'en',
  onClick,
  showLabel = true,
  positionLabel,
}) {
  if (!card) return null;

  const innerCls = [
    'card-inner',
    isFlipped   ? 'is-flipped'  : '',
    isReversed  ? 'is-reversed' : '',
  ].filter(Boolean).join(' ');

  const reversedLabel = REVERSED_LABEL[lang] ?? 'Reversed';

  return (
    <div className="card-wrapper">
      {positionLabel && (
        <div className="card-position-label">{positionLabel}</div>
      )}
      <div
        className={`card-container size-${size}`}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
        aria-label={
          isFlipped
            ? `${getCardName(card, lang)}${isReversed ? ', ' + reversedLabel : ''}`
            : 'Tarot card, face down'
        }
      >
        <div className={innerCls}>
          <CardBack />
          <CardFace card={card} lang={lang} />
        </div>
      </div>
      {showLabel && isFlipped && (
        <div className="card-label">
          <span className="card-label-name">{getCardName(card, lang)}</span>
          {isReversed && <span className="card-label-reversed">{reversedLabel}</span>}
        </div>
      )}
    </div>
  );
}

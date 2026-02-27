import Card from './Card';

export default function SpreadLayout({ spread, drawnCards, onPositionClick }) {
  return (
    <div className="spread-layout">
      {spread.positions.map((pos, i) => {
        const drawn = drawnCards[i];
        const style = {
          left:      `${pos.x}%`,
          top:       `${pos.y}%`,
          transform: `translate(-50%, -50%)${pos.rotate ? ` rotate(${pos.rotate}deg)` : ''}`,
        };

        return (
          <div key={pos.id} className="spread-position" style={style}>
            {drawn ? (
              <Card
                card={drawn.card}
                isFlipped={drawn.isFlipped}
                isReversed={drawn.isReversed}
                size="sm"
                onClick={drawn.isFlipped ? undefined : () => onPositionClick(i)}
                positionLabel={pos.label}
                showLabel={false}
              />
            ) : (
              <div
                className="spread-empty-slot"
                onClick={() => onPositionClick(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onPositionClick(i)}
                aria-label={`Reveal ${pos.label}`}
              >
                <span className="spread-empty-slot-icon">✦</span>
                <span>{pos.label}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

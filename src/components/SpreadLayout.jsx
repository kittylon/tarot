import Card from './Card';
import { getPositionLabel } from '../data/spreads';

export default function SpreadLayout({ spread, drawnCards, onPositionClick, lang = 'en' }) {
  const height = spread.layoutHeight ?? 440;
  return (
    <div className="spread-layout" style={{ height }}>
      {spread.positions.map((pos, i) => {
        const drawn = drawnCards[i];
        const label = getPositionLabel(pos, lang);
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
                lang={lang}
                onClick={drawn.isFlipped ? undefined : () => onPositionClick(i)}
                positionLabel={label}
                showLabel={false}
              />
            ) : (
              <div
                className="spread-empty-slot"
                onClick={() => onPositionClick(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onPositionClick(i)}
                aria-label={`Reveal ${label}`}
              >
                <span className="spread-empty-slot-icon">✦</span>
                <span>{label}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

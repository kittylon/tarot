import { useRef, useLayoutEffect, useState } from 'react';
import Card from './Card';
import { getPositionLabel } from '../data/spreads';

// Spread positions were designed for this container width (matches .spread-layout max-width)
const DESIGN_WIDTH = 680;

export default function SpreadLayout({ spread, drawnCards, onPositionClick, focusedSlotIndex = null, lang = 'en' }) {
  const outerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const designHeight = spread.layoutHeight ?? 440;

  useLayoutEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(Math.min(1, w / DESIGN_WIDTH));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={outerRef}
      className="spread-layout"
      style={{ height: designHeight * scale, overflow: 'hidden' }}
    >
      <div style={{
        position: 'relative',
        width: DESIGN_WIDTH,
        height: designHeight,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
      }}>
        {spread.positions.map((pos, i) => {
          const drawn = drawnCards[i];
          const label = getPositionLabel(pos, lang);
          const style = {
            left:      `${pos.x}%`,
            top:       `${pos.y}%`,
            transform: `translate(-50%, -50%)${pos.rotate ? ` rotate(${pos.rotate}deg)` : ''}`,
          };

          const isFocused = focusedSlotIndex === i;
          return (
            <div key={pos.id} className={`spread-position${isFocused ? ' spread-position--focused' : ''}`} style={style}>
              {drawn ? (
                <Card
                  card={drawn.card}
                  isFlipped={drawn.isFlipped}
                  isReversed={drawn.isReversed}
                  size="sm"
                  lang={lang}
                  onClick={() => onPositionClick(i)}
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
    </div>
  );
}

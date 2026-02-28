import { useState } from 'react';
import { UI } from '../i18n/ui';
import { getCardName } from '../data/cards';
import { getPositionLabel } from '../data/spreads';

export default function ReadingNotebook({ lang, spread, revealedEntries, intention }) {
  const [open, setOpen] = useState(false);
  const ui = UI[lang].notebook;

  return (
    <aside className={`notebook ${open ? 'notebook--open' : 'notebook--closed'}`}>
      <button
        className="notebook-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Cerrar cuaderno' : 'Abrir cuaderno'}
      >
        <span className="notebook-toggle-icon">📖</span>
        <span className="notebook-toggle-label">{ui.toggle}</span>
        {revealedEntries.length > 0 && (
          <span className="notebook-badge">{revealedEntries.length}</span>
        )}
        <span className="notebook-chevron">{open ? '›' : '‹'}</span>
      </button>

      {open && (
        <div className="notebook-body">
          <div className="notebook-header">
            <h3 className="notebook-title">{ui.title}</h3>
            {spread && (
              <p className="notebook-spread-name" style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                {spread.names?.[lang] ?? spread.nameEn}
              </p>
            )}
          </div>

          {intention && (
            <div className="notebook-intention">
              <span className="notebook-intention-label">✦</span>
              <p className="notebook-intention-text">{intention}</p>
            </div>
          )}

          {revealedEntries.length === 0 ? (
            <p className="notebook-empty">{ui.empty}</p>
          ) : (
            <ol className="notebook-entries">
              {revealedEntries.map((entry, i) => {
                const posLabel = getPositionLabel(entry.pos, lang);
                const cardName = getCardName(entry.card, lang);
                const badge    = entry.isReversed ? ui.reversed : ui.upright;

                return (
                  <li key={i} className="notebook-entry">
                    <div className="notebook-entry-header">
                      <span className="notebook-entry-num">{i + 1}</span>
                      <span className="notebook-entry-pos">{posLabel}</span>
                    </div>
                    <div className="notebook-entry-card">
                      <strong className="notebook-card-name">{cardName}</strong>
                      <span className={`orientation-badge ${entry.isReversed ? 'reversed' : 'upright'}`} style={{ fontSize: '0.68rem', padding: '1px 6px' }}>
                        {badge}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      )}
    </aside>
  );
}

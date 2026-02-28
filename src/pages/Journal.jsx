import { useRef } from 'react';
import { useJournal } from '../hooks/useJournal';
import { drawRandom, getCardById, getMeaning, getCardName } from '../data/cards';
import Card from '../components/Card';
import { useLang } from '../context/LangContext';
import { UI } from '../i18n/ui';

function EntryCard({ entry, lang, onUpdateNotes, onDelete }) {
  const ui      = UI[lang].journal;
  const card    = getCardById(entry.cardId);
  const debounce = useRef(null);
  if (!card) return null;

  function handleNotes(e) {
    const val = e.target.value;
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => onUpdateNotes(entry.id, val), 500);
  }

  const [y, m, d] = entry.date.split('-');
  const dateLabel = new Date(+y, +m - 1, +d).toLocaleDateString(
    lang === 'es' ? 'es-ES' : lang === 'fr' ? 'fr-FR' : 'en-US',
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <div className="journal-entry">
      <div className="journal-entry-header">
        <span className="journal-date">{dateLabel}</span>
        <span className="journal-card-name">{getCardName(card, lang)}</span>
        <span className={`orientation-badge ${entry.isReversed ? 'reversed' : 'upright'}`}>
          {entry.isReversed ? ui.reversed : ui.upright}
        </span>
        <button className="journal-delete-btn" onClick={() => onDelete(entry.id)}
          aria-label={ui.deleteLabel} title={ui.deleteLabel}>🗑</button>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <Card card={card} isFlipped={true} isReversed={entry.isReversed} size="sm" lang={lang} showLabel={false} />
        <div style={{ flex: 1, minWidth: 200 }}>
          <p className="detail-meaning" style={{ marginBottom: 'var(--space-sm)' }}>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {entry.isReversed ? ui.reversedMeaning : ui.uprightMeaning}
            </span>
            <br />
            <span style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {getMeaning(card, lang, entry.isReversed)}
            </span>
          </p>
          <p className="journal-notes-label">{ui.notesLabel}</p>
          <textarea className="journal-notes-textarea"
            defaultValue={entry.notes}
            onChange={handleNotes}
            placeholder={ui.notesPlaceholder}
          />
        </div>
      </div>
    </div>
  );
}

export default function Journal() {
  const { lang } = useLang();
  const ui = UI[lang].journal;
  const { entries, todayEntry, addEntry, updateNotes, deleteEntry } = useJournal();

  function handleDrawToday() {
    const { card, isReversed } = drawRandom();
    addEntry(card.id, isReversed);
  }

  const pastEntries = entries.filter(e => todayEntry ? e.id !== todayEntry.id : true);

  return (
    <div className="page-content">
      <div className="container" style={{ maxWidth: 760 }}>
        <h1 className="section-title">{ui.title}</h1>

        <section style={{ marginBottom: 'var(--space-2xl)' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-lg)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-sm)' }}>
            {ui.today}
          </h2>
          {todayEntry ? (
            <EntryCard entry={todayEntry} lang={lang} onUpdateNotes={updateNotes} onDelete={deleteEntry} />
          ) : (
            <div style={{ textAlign: 'center', padding: 'var(--space-2xl)', border: '1px dashed var(--color-border-gold)', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-md)' }}>
              <span style={{ fontSize: '2rem' }}>✦</span>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>{ui.noCard}</p>
              <button className="btn btn-gold" onClick={handleDrawToday}>{ui.drawToday}</button>
            </div>
          )}
        </section>

        {pastEntries.length > 0 && (
          <section>
            <h2 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-lg)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-sm)' }}>
              {ui.pastReadings}
            </h2>
            {pastEntries.map(entry => (
              <EntryCard key={entry.id} entry={entry} lang={lang} onUpdateNotes={updateNotes} onDelete={deleteEntry} />
            ))}
          </section>
        )}

        {entries.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: 'var(--space-xl)' }}>
            {ui.empty}
          </p>
        )}
      </div>
    </div>
  );
}

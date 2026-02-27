import { useRef } from 'react';
import { useJournal } from '../hooks/useJournal';
import { drawRandom, getCardById } from '../data/cards';
import Card from '../components/Card';

function EntryCard({ entry, onUpdateNotes, onDelete }) {
  const card    = getCardById(entry.cardId);
  const debounce = useRef(null);

  if (!card) return null;

  function handleNotes(e) {
    const val = e.target.value;
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => onUpdateNotes(entry.id, val), 500);
  }

  const [y, m, d] = entry.date.split('-');
  const dateLabel = new Date(+y, +m - 1, +d).toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="journal-entry">
      <div className="journal-entry-header">
        <span className="journal-date">{dateLabel}</span>
        <span className="journal-card-name">{card.nameEn}</span>
        <span className={`orientation-badge ${entry.isReversed ? 'reversed' : 'upright'}`}>
          {entry.isReversed ? 'Reversed' : 'Upright'}
        </span>
        <button
          className="journal-delete-btn"
          onClick={() => onDelete(entry.id)}
          aria-label="Delete entry"
          title="Delete entry"
        >
          🗑
        </button>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <Card
          card={card}
          isFlipped={true}
          isReversed={entry.isReversed}
          size="sm"
          showLabel={false}
        />

        <div style={{ flex: 1, minWidth: 200 }}>
          <p className="detail-meaning" style={{ marginBottom: 'var(--space-sm)' }}>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {entry.isReversed ? 'Reversed meaning' : 'Upright meaning'}
            </span>
            <br />
            <span style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {entry.isReversed ? card.reversedMeaning : card.uprightMeaning}
            </span>
          </p>

          <p className="journal-notes-label">Your notes</p>
          <textarea
            className="journal-notes-textarea"
            defaultValue={entry.notes}
            onChange={handleNotes}
            placeholder="Write your reflections here…"
          />
        </div>
      </div>
    </div>
  );
}

export default function Journal() {
  const { entries, todayEntry, addEntry, updateNotes, deleteEntry } = useJournal();

  function handleDrawToday() {
    const { card, isReversed } = drawRandom();
    addEntry(card.id, isReversed);
  }

  const pastEntries = entries.filter(e => todayEntry ? e.id !== todayEntry.id : true);

  return (
    <div className="page-content">
      <div className="container" style={{ maxWidth: 760 }}>
        <h1 className="section-title">Daily Journal</h1>

        {/* Today section */}
        <section style={{ marginBottom: 'var(--space-2xl)' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-lg)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-sm)' }}>
            Today
          </h2>

          {todayEntry ? (
            <EntryCard
              entry={todayEntry}
              onUpdateNotes={updateNotes}
              onDelete={deleteEntry}
            />
          ) : (
            <div style={{
              textAlign: 'center',
              padding: 'var(--space-2xl)',
              border: '1px dashed var(--color-border-gold)',
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--space-md)',
            }}>
              <span style={{ fontSize: '2rem' }}>✦</span>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                You haven't drawn your card for today yet.
              </p>
              <button className="btn btn-gold" onClick={handleDrawToday}>
                Draw Today's Card
              </button>
            </div>
          )}
        </section>

        {/* Past entries */}
        {pastEntries.length > 0 && (
          <section>
            <h2 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-lg)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-sm)' }}>
              Past Readings
            </h2>

            {pastEntries.map(entry => (
              <EntryCard
                key={entry.id}
                entry={entry}
                onUpdateNotes={updateNotes}
                onDelete={deleteEntry}
              />
            ))}
          </section>
        )}

        {entries.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: 'var(--space-xl)' }}>
            Your journal is empty. Draw your first card above to begin.
          </p>
        )}
      </div>
    </div>
  );
}
